import './Crypto.scss';
import {useState, useEffect} from 'react';
import Coin from '../../components/Coin/Coin';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector ,connect} from 'react-redux';
import { setSearchField } from '../../redux/search/search.action';
import { fetchData } from '../../redux/crypto/crypto.action';

const Main=({fetchData})=> {
  const cryptoData = useSelector(state => state.crypto.crypto);
  const searchState = useSelector(state =>state.search.searchField);
  const dispatch = useDispatch();
  const [coins] = useState([]);

    useEffect(() => {
      fetchData();
    }, [fetchData]);


    const handleChange = e => {
      dispatch(setSearchField(e.target.value));
    };
  
    const filteredCoins = cryptoData.filter(coin =>
      coin.name.toLowerCase().includes(searchState.toLowerCase())
    );
    console.log(filteredCoins,'filtercoins');
    console.log(cryptoData,'crypto');
    console.log(coins,'coin');
  
    return (
      <div className='coin-app'>
          <Link to="/"><h4>COINBASE</h4></Link>
        <div className='coin-search'>
          <h1 className='coin-text'>search a currency</h1>
          <form>
            <input
              className='coin-input'
              type='text'
              onChange={handleChange}
              placeholder='Search'
            />
          </form>
        </div>
        {filteredCoins.map(coin => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.total_volume}
              volume={coin.market_cap}
              const image={coin.image}
              priceChange={coin.price_change_percentage_24h}
              isLoading='false'
            />
          );
        })}
      </div>
    );
  }

  const mapDispatchfromProps = (dispatch) => {
    return {
      fetchData:() => dispatch(fetchData({})),
    };
  };

export default connect(null, mapDispatchfromProps)(Main);
  