import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import Layout from 'components/Layout';
import List from 'components/List';
import { Product } from 'types';
import { LIMIT } from '../../constants';
import { SearchStyled } from './styles';
const { REACT_APP_API_URL } = process.env;

function Products() {
  const [ start, setStart ] = useState<number>(0);
  const [ search, setSearch ] = useState<string>('');
  const [ loading, setLoading ] = useState<boolean>(true);
  const [ products, setProducts ] = useState<Product[]>([]);
  const [ end, setEnd ] = useState<boolean>(false);

  const getProducts = async() => {
    if (end) return;
    setLoading(true);
    const { data: { result } } = await axios(`${REACT_APP_API_URL}api/v1/products?start=${start}&limit=${LIMIT}&search=${search}`);
    setProducts(prevItems => [ ...prevItems, ...result ]);
    setStart(start+12);
    setLoading(false);
    if (result.length < LIMIT) setEnd(true);
  }

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event: any) => {
    setSearch(event.target.value);
  }

  const handleSearch = () => {
    if (search.length > 2) {
      setEnd(false);
      setProducts([]);
      getProducts();
    }
  }

  return (
    <Layout>
      <SearchStyled>
        <input 
          className="search"
          value={search}
          onChange={handleChange}
        />
        <button onClick={handleSearch}>SEARCH</button>
      </SearchStyled>
      <InfiniteScroll
        dataLength={products.length}
        next={getProducts}
        hasMore={true}
        loader={''}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <List products={products} loading={loading} />
      </InfiniteScroll>
      <h4 className={`loading ${loading && 'visible'}`}>Loading...</h4>
    </Layout>
  )
}

export default Products;