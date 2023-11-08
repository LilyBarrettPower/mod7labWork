import { Route, Routes } from "react-router-dom"

import { HomePage } from "../pages/HomePage"
// import the homepage 
import Login from "../pages/Login"
// import the login page
import  BitcoinRates  from "../pages/BitcoinRates"
// import the bitcoin rates page 
import { PageNotFound } from "../pages/PageNotFound"
// import the page not found component

export function AppRoutes(props) {
    return (
        <Routes>
            <Route index element={<HomePage/>} />
            {/* Define the route for the home page */}
            <Route path="login" element={<Login/>} />
            {/* define the route for the login page */}
            <Route path="bitcoinrates" element={<BitcoinRates />} />
            {/* define the route for the bitcoin rates page */}
            <Route path="*" element={<PageNotFound/>} />
            {/* define the component if the route doesnt match any of the above */}
        </Routes>
    )
}

