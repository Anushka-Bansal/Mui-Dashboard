import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import { AppBar,Toolbar,IconButton,Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';

export class Navii extends Component {
  logout = ()=> {
    console.log("logging out")
    this.setState({isAuth: false})
    localStorage.clear();
  }
    render() {  
       const email = localStorage.getItem("email");
        return (
           <>   
            <Box component="main" sx={{ display: 'flex' }}>
                <AppBar position="static" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                <IconButton  size="small" sx={{ ml:2}}>
                    <Avatar sx={{ width: 40, height: 40 }}><img src="./Images/Loginnn.jpg" alt="userimage" /></Avatar>
                </IconButton>
             {/* <IconButton size="large" edge="start"  color="inherit" aria-label="menu" sx={{ mr: 2 }}>
           
              </IconButton> */}
                <Typography variant='h6' sx={{marginLeft:"20px"}}>
                    {email}
                </Typography>
                <Typography variant='h4' sx={{marginLeft:"400px"}} href="/dashboard">
                    WELCOME
                </Typography>
   
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            Dashaboard
            <Button sx={{mr:5}}  color="inherit" style={{marginLeft:"50px"}}></Button>
            Welcome : {localStorage.getItem("email")}
          </Typography> */}
            <Box sx={{marginLeft:"280px"}}>
          <Link to="/changepass" style={{color:"#f9fbe7",marginRight:"15px", textDecoration:"none"}}>ChangePassword</Link>
        
           <Link to="/" style={{color:"#f9fbe7", textDecoration:"none"}} onClick={this.logout}>Logout</Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
   
              
           </>
        )
    }
}

export default Navii