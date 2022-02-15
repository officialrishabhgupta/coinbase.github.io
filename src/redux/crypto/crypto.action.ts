import { cryptoTypes} from "./crypto.type"
import axios from "axios";

export const loadingAction = () => {
  return {
    type: cryptoTypes.REQUEST_CRYPTO_PENDING,
  };
};
export const successAction = (cryptoData: any) => {
  return {
    type: cryptoTypes.REQUEST_CRYPTO_SUCCESS,
    payload: cryptoData,
  };
};
export const failAction = (cryptoFail: any) => {
  return {
    type: cryptoTypes.REQUEST_CRYPTO_FAILED,
    payload: cryptoFail,
  };
};

export const fetchData = () => {
  return (dispatch: any) => {
    dispatch(loadingAction);
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
        )
      .then((res) => {
        const coin = res.data;
        console.log(res.data)
        dispatch(successAction(coin));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(failAction(errorMsg));
      });
  };
};

// axios
// .get(
//   'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
// )
// .then(res => {
//   setCoins(res.data);
//   console.log(res.data);
// })
// .catch(error => console.log(error));