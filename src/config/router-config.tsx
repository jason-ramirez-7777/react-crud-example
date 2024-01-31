import { createBrowserRouter } from "react-router-dom";
import LoginConfig from "../app/Login/LoginConfig";
import LandingPageConfig from "../app/Home/LandingPageConfig";
import ProductConfig from "../app/Product/ProductConfig";
import TestConfig from "../app/Test/TestConfig";


const router = createBrowserRouter([
    LandingPageConfig,
    LoginConfig,
    ProductConfig,
    TestConfig
   
]);

export default router;
