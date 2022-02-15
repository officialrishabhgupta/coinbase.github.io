import { FC } from "react";
import {Routes, Route } from "react-router-dom";
import Crypto from "./Pages/Crypto/Crypto"
import { HomePage } from "./Pages/Homepage/Homepage";
import { SignInAndSignUpPage } from "./Pages/Sign/Sign";


const AppRoutes: FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/crypto" element={<Crypto/>} />
        <Route path="/sign" element={<SignInAndSignUpPage />} />
      </Routes>
    </div>
  );
};
export default AppRoutes;