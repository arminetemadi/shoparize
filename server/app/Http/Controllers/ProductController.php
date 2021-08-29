<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Services\CSVReaderService;

class ProductController extends BaseController
{
    protected $csvReaderService;

    public function __construct(CSVReaderService $csvReaderService)
    {
        $this->csvReaderService = $csvReaderService;
    }

    /**
     * Retrieve products
     *
     * @return Response
     */
    public function list(Request $request)
    {
        $this->validate($request, [
            'start' => 'required|numeric|min:0',
            'limit' => 'required|numeric|min:1|max:100',
            'search' => 'regex:/^[a-zA-Z0-9 ]*$/u'
        ]);

        $start = $request->input('start');
        $limit = $request->input('limit');
        $search = $request->input('search');
        $result = empty($search)
            ? $this->csvReaderService->read($start, $limit)
            : $this->csvReaderService->search($search, $start, $limit);
        
        return response()->json([
            'result' => $result
        ]);
    }
}
