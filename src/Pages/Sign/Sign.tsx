import './Sign.scss';
import { Link } from 'react-router-dom';
import SignUp from '../../components/sign-up/sign-up';
import SignIn from '../../components/sign-in/Sign-in';
import CustomButton from '../../components/Custom-button/Custom';


export const SignInAndSignUpPage=()=>(
    <>
        <div className='sign-in-and-sign-up'>
            <SignIn/>
            <SignUp/>
        </div>
        <div className='btn'>
            <Link to="/">
                <CustomButton >GO TO HOME</CustomButton>
            </Link>
        </div>    
    </>
)