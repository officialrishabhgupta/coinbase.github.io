import { cryptoTypes} from "./crypto.type";

const initialStateCrypto={
    loading:true,
    crypto:[],
    error:''
}

export const cryptoReducer = (state=initialStateCrypto,action:any) =>{
    switch(action.type) {
        case cryptoTypes.REQUEST_CRYPTO_PENDING:
            return {
                ...state,
                loading:true,
            };
        case cryptoTypes.REQUEST_CRYPTO_SUCCESS:
            return{
                ...state,
                loading:false,
                crypto:action.payload,
                error:"",
            };
        case cryptoTypes.REQUEST_CRYPTO_FAILED:
            return{
                crypto:[],
                error:action.payload,
                loading:false,
            }
        default:
            return state;    
    }
};