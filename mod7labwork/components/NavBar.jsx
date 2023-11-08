import { NavLink } from "react-router-dom";
// import NavLink component
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



function NavBar() {
    return (
        <>
            <Box className="navBarBox" sx={{ flexGrow: 1, position: 'sticky', top: 0, margin: '50px'}}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            My Navigation Bar
                        </Typography>
                        <Button href="/" sx={{color: 'white'}}>Home</Button>
                        <Button href="/login" sx={{ color: 'white' }}>Login</Button>
                        <Button href="/bitcoinrates" sx={{ color: 'white' }}>Bitcoin rates</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        {/* <nav className="navBar">
            <ul className="menu"> */}
                {/* define the undordered list that will store the navbar */}
                {/* <li><NavLink to="/">Home</NavLink></li> */}
                {/* the first NavLink is defined with "/" path which is the root route*/}
                {/* <li><NavLink to="/login">Login</NavLink></li> */}
                {/* the login navlink goes to the login route */}
                {/* <li><NavLink to="/bitcoinrates">BitcoinRates</NavLink></li> */}
                {/* the bitcoinrates navlink goes to the bitcoinrates route */}
            {/* </ul>
            </nav> */}
        </>
    )
}

export default NavBar;