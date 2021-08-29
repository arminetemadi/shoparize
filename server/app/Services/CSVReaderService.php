<?php

namespace App\Services;

use Illuminate\Support\Collection;
use Illuminate\Session\SessionManager;

class CSVReaderService {
  private $context;
  private $url;

  /**
   * Instantiate a new controller instance.
   *
   * @return void
   */
  public function __construct()
  {
    $this->url = 'https://feeds.shoparize.com/ingress-cache/google-shopping-feed-5305.csv';
    $this->context = stream_context_create([
      "ssl" => [
        "verify_peer" => FALSE,
        "verify_peer_name" => FALSE,
      ],
    ]);
  }

  /**
   * Read the data from CSV file,
   * by the given offset(start) and limit.
   * 
   * @param int $start
   * @param int $limit
   * @return array
   */
  public function read($start, $limit) {
    $file = new \SplFileObject($this->url, 'r', FALSE, $this->context);
    $norewind = new \NoRewindIterator($file);
    $caching = new \CachingIterator($norewind);
    $fileIterator = new \LimitIterator($caching, $start+1, $limit);
    $headerLine = new \LimitIterator($caching, 0, 1);
    $header = null;
    foreach ($headerLine as $line)
      $header = str_getcsv($line);
    $rows = [];
    foreach ($fileIterator as $line) {
      $row = str_getcsv($line);
      array_walk_recursive($row, function(&$row) {
        $row = strip_tags($row);
      });
      $rows[] = $row;
    }

    $result = $this->_combineWithHeader($rows, $header);

    return $result;
  }

  /**
   * Read the data from CSV file line by line,
   * and search for the keyword in `title`and `description` fileds,
   * considering offset(start), will find matched results by given limit.
   * 
   * @param string $search
   * @param int $start
   * @param int $limit
   * @return array
   */
  public function search($search, $start, $limit) {
    $file = fopen($this->url, 'r', FALSE, $this->context);
    $rows = [];
    $header = null;
    $matchFound = 0;
    while (($line = fgetcsv($file, 1000, ',')) !== FALSE) {
      if (!$header) {
        $header = $line;
        continue;
      }
      if (!empty($line)
        && !empty($line[0])
        && (strpos($line[1], $search) !== FALSE || strpos($line[2], $search) !== FALSE)
      ) {
        $matchFound++;
        // considering start(offset) when searching.
        if ($matchFound-$start > 0) {
          array_walk_recursive($line, function(&$line) {
            $line = strip_tags($line);
          });
          $rows[] = $line;
        }
        // if matched line numbers reach the limit, then we're done!
        if ($matchFound-$start >= $limit)
          break;
      }
    }
    fclose($file);
    $result = $this->_combineWithHeader($rows, $header);

    return $result;
  }

  /**
   * Combine header titles with each row, 
   * to have array with label indexes.
   * (i.e. [ 'id' => '...' ] instead of [ 0 => '...' ])
   * 
   * @param int $start
   * @param int $limit
   * @return array
   */
  private function _combineWithHeader($rows, $header) {
    $result = [];
    foreach ($rows as $i => $line)
      foreach ($line as $j => $item)
        $result[$i][$header[$j]] = $item;

    return $result;
  }
}