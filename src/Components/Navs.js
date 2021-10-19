import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { Component } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Avatar } from '@mui/material';
import SideBar from './Sidebar';
import {BrowserRouter as Router ,Route,Redirect,Link} from 'react-router-dom'
import ChangePassword from './ChangePassword';
import Dashboard from './Contents';


export class Navs extends Component {
    state = {
        isAuth: false
      }
    
       logout = ()=> {
        console.log("logging out")
        this.setState({isAuth: false})
        localStorage.clear();
      }
    render() {
        const email = localStorage.getItem("email");
        if(email){
            this.state.isAuth = true;
          }
          const isAuth = this.state.isAuth;
        return (
            <Router>
            <Route exact path="/nav">
                {!isAuth?<Redirect to="/"/>:
            <Box component="main" sx={{ display: 'flex' }}>
            <AppBar position="static" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar >
                    <IconButton  size="small" sx={{ ml:2}}>
                        <Avatar sx={{ width: 40, height: 40 }} ><img src="./Images/Loginnn.jpg" alt="userimage" /></Avatar>
                    </IconButton>
                    <Typography variant='h6' sx={{marginLeft:"20px"}}>{email}</Typography>
                    <Typography variant='h4' sx={{marginLeft:"300px"}} href="/contents">
                        WELCOME
                    </Typography>

                    {/* <Link to="/changepass" style={{color:"#f9fbe7",marginRight:"15px"}}>ChangePassword</Link>
                    <Link to="/" style={{color:"#f9fbe7"}}>Logout</Link> */}
                    
                    <Box sx={{marginLeft:"180px"}}>
                        <Tabs justify="right" alignitems="right">
                            <Tab variant='h4' sx={{color:'#eeeeee', marginLeft: "50px" }} href="/contents" label="Home"  />
                            <Tab variant='h4' sx={{color:'#eeeeee'}} href="/changepass"label="Change-Password"  />
                            <Tab variant='h4' sx={{color:'#eeeeee'}} label="Logout" onClick={this.logout}/>   
                        </Tabs>
                    </Box>
                </Toolbar>
            </AppBar>
            <SideBar />
            {/* <Dashboard  /> */}
            {/* <ChangePassword /> */}
            </Box>}
            </Route>
            </Router>
        )
    }
}

export default Navs
