import { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Layout from 'components/Layout';
import List from 'components/List';
import { Product } from 'types';
import { LIMIT } from '../../constants';
import { SearchStyled } from './styles';
const { REACT_APP_API_URL } = process.env;

function Products() {
  const [ start, setStart ] = useState<number>(0);
  const [ search, setSearch ] = useState<string>('');
  const [ loading, setLoading ] = useState<boolean>(false);
  const [ products, setProducts ] = useState<Product[]>([]);

  const getProducts = async() => {
    setLoading(true);
    const res = await axios(`${REACT_APP_API_URL}api/v1/products?start=${start}&limit=${LIMIT}&search=${search}`);
    setProducts(prevProducts => [...prevProducts, ...res.data.result]);
    setStart(start+12);
    setLoading(false);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const handleChange = (event: any) => {
    setSearch(event.target.value);
  }

  const handleSearch = () => {
    if (search.length > 2) {
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
        <List products={products} />
      </InfiniteScroll>
      <h4 className={`loading ${loading && 'visible'}`}>Loading...</h4>
      {/* <List products={products} /> */}
    </Layout>
  )
}

export default Products;