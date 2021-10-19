import React, { Component } from 'react'
import { Grid, Button, InputAdornment, FormHelperText } from '@mui/material'
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';
import { AccountCircle, LockRounded} from '@mui/icons-material'

import {Route,Redirect} from'react-router-dom';

const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForPass=RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/);
const isAuth =false;

export class Login extends Component {
    constructor(props){
        super(props);
        this.state={
           dataVal:{ 
               email:null,
               password:null,              
            },
           errors:{
                email:'',
                password:'',
            },
            formData:[],
            UserData:[]
        }
    }
    componentDidMount(){
        const URL="http://localhost:3001/UserData";
        fetch(URL)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            this.setState({UserData:data})
           
        })
    }

    handler=(event)=>{
        const{name,value}=event.target;
        let errors=this.state.errors;
        let fetchVal = this.state.dataVal;
        console.log(fetchVal)
        switch(name){        
            case 'email':
                errors.email=regForEmail.test(value)? '':'Email is not valid';
                fetchVal.email = value;
                break; 
            case 'password':
                errors.password=regForPass.test(value)? '':'password should be in aplhanumeric & special chars';
                fetchVal.password = value;
                // this.state.password=value;
                break;
            default:
                break;
            }
            this.setState({errors,[name]:value},()=>{
                console.log(errors)
            })
        }

        formSubmit=(event)=>{
            event.preventDefault();
            let items = this.state.dataVal;
            console.log(items.email)  
            if(this.validate(this.state.errors)){
                console.log(this.state.UserData)
                for(var i=0;i<this.state.UserData.length;i++) {
                    if(this.state.UserData[i].email === items.email && (this.state.UserData[i].password || this.state.UserData[i].newpass === items.password) ) {
                        alert("Registration Succesfull");
                        this.setState({
                            formData : [...this.state.formData,
                            {
                                "email":items.email,
                                "password":items.password,
                            }]
                        });  
                        this.isAuth=true; 
                        localStorage.setItem("email", items.email);
                        break;
                    }
                    else if(i===this.state.UserData.length-1){
                        alert("Users information are incorrect");
                    }
                }
                console.log(this.state)
                document.getElementById('email').value='';
                document.getElementById('password').value='';
                console.log(this.state)
            }            
            else {
                alert("Invalid Form");
                document.getElementById('email').value='';
                document.getElementById('password').value='';    
            }
        }
        
        validate=(errors)=>{
            let valid=true;
            Object.values(errors).forEach((val)=> val.length >0 && (valid=false));
            return valid;
        }

    render() {
        const {errors}=this.state;
        
        return (
            <div>
                <Route exact path="/">
                {this.isAuth? <Redirect to="/dashboard" /> :
                <Grid container style={{minHeight: "100vh"}}>
                    <Grid item xs={12} sm={6}>
                        <img src="./Images/Key2.jpg" 
                        style={{width:"100%", height:"100%", objectFit:"cover"}} alt="login" />
                    </Grid>
                    <Grid container item xs={12} sm={6} alignItems="center" direction="column" justify="space-between" style={{padding:20}}>
                        
                        <div style={{display:"flex" , flexDirection:"column", width:300}}>

                            <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' }}} >
                                <img src="./Images/loginnn.jpg" width={300} alt="avtar"/>

                                <FormControl className="mb-3" >
                                    <Input type="email" placeholder="Enter Email" name="email" id="email"
                                    startAdornment={<InputAdornment position="start"><AccountCircle /></InputAdornment>} onChange={this.handler} required/><br/>
                                    {errors.email.length>0 && 
                                    <FormHelperText style={{color:'red',fontWeight:"bold"}}>{errors.email}</FormHelperText>}
                                </FormControl><br/>

                                <FormControl className="mb-3" >
                                    <Input type="password" placeholder="Enter Password" name="password" id="password" 
                                    startAdornment={<InputAdornment position="start"><LockRounded /></InputAdornment>} onChange={this.handler} required /><br/>
                                    {errors.password.length>0 && 
                                    <FormHelperText style={{color:'red',fontWeight:"bold"}}>{errors.password}</FormHelperText>}
                                </FormControl><br/>

                                <FormControl>
                                    <FormControlLabel control={<Checkbox  />} label="Remember Me" />
                                </FormControl><br/>

                                <Button variant="contained" href="#" type="submit" background="primary.main" onClick={this.formSubmit}> Login</Button>
                            </Box>
                        </div>
                        
                    </Grid>
                </Grid>}
                </Route>
            </div>
        )
    }
}

export default Login
