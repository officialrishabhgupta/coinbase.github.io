import  "./Homepage.style.scss";
import { imgIcon } from "../../assets";
import { Link } from "react-router-dom";
import CustomButton from "../../components/Custom-button/Custom";


export const HomePage = () =>{
    return(
        <>
        <div className="homepage" style={{backgroundImage:`url(${imgIcon})`}}>
            <div className="home">
                <div className="btn">
                    <Link to="/sign"><CustomButton>Login/Signup</CustomButton></Link> 
                </div>  

                <div className="title">
                    <h1>WELCOME TO COINBASE </h1>
                    <div className="heading">
                        <h2>Coinbase is the easiest place to buy <br /> and sell cryptocurrency. <br />
                        Sign up and get started today.
                        </h2>
                    </div>
                </div>  
                <div className="stacks">
                    <Link to="/crypto"><CustomButton >GO TO STACKS</CustomButton></Link>
                </div>
            </div>
           
        </div>
        </>
    )
};
