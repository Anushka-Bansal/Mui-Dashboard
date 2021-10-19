import React, { Component } from 'react'
import {Button, InputAdornment} from '@mui/material'
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import {LockRounded} from '@mui/icons-material';
// import Navs from './Navs';
import Sidebar from './Sidebar';
import Navii from './Navii';
import {Redirect,Route } from 'react-router-dom'
export class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UserData:[],
            change:0,
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

    formSubmit = () => {
        let email = '';
        let id = '';
        let password = '';
        let contact='';
        let image='';
        let name='';
        let oldpass = document.getElementById("oldpass").value;
        let newpass = document.getElementById("password").value;
        let cpass = document.getElementById("cpass").value;
        for(var i = 0; i<this.state.UserData.length;i++) {
            if(this.state.UserData[i].email === localStorage.getItem("email")){
                email = this.state.UserData[i].email;
                id = this.state.UserData[i].id;
                password= this.state.UserData[i].password;
                contact = this.state.UserData[i].contact;
                image = this.state.UserData[i].image;
                name= this.state.UserData[i].name;
            }
        }
        console.log("dsfdsf",email,id,newpass,name,contact);
        document.getElementById("oldpass").value='';
        document.getElementById("password").value='';
        document.getElementById("cpass").value='';
        console.log(this.state);
        if(password ===oldpass){
            if(newpass===cpass) {
                this.setState({
                    UserData : [...this.state.UserData,
                        {
                            "password":newpass,
                            
                        }]
                })
                // password=this.state.UserData[0].password;
                fetch(`http://localhost:3001/UserData/${id}`,{
                    method:'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                body: JSON.stringify({ id, email,newpass,contact,image,name})
                })
                .then(data => {
                    console.log(data)
                })
                alert("Password Changed Successfully")
                this.setState({
                    change:1
                })
                // this.state.change=1;
            }
            else {
                alert("Password not matched ")
                document.getElementById("oldpass").value='';
                document.getElementById("password").value='';
                document.getElementById("cpass").value='';
            }
        }
        else {
            alert("old passowrd is incorrect")
            document.getElementById("oldpass").value='';
            document.getElementById("password").value='';
            document.getElementById("cpass").value='';
        }
    }

    render() {
        console.log(this.state.change);
        
        return (
            <div>
            <Route exact path="/changepass">
            {this.state.change === 1? <Redirect to="/" /> :
            <Box>
                <Navii />
            <Box component="form"  sx={{ flexGrow: 1, p: 8 }}>
                <Sidebar />
                <img src="./Images/chngpass.png" width={300} alt="avtar"/><br/>
                <h2 >CHANGE PASSWORD</h2>
                <FormControl className="mb-3" >
                    <Input type="password" placeholder="Enter Old Password" name="email" id="oldpass"
                    startAdornment={<InputAdornment position="start"><LockRounded /></InputAdornment>} onChange={this.handler} required/><br/>
                    {/* {errors.email.length>0 && 
                    <FormHelperText style={{color:'red',fontWeight:"bold"}}>{errors.email}</FormHelperText>} */}
                </FormControl><br/>

                <FormControl className="mb-3" >
                    <Input type="password" placeholder="Enter New Password" name="password" id="password" 
                    startAdornment={<InputAdornment position="start"><LockRounded /></InputAdornment>} onChange={this.handler} required /><br/>
                    {/* {errors.password.length>0 && 
                    <FormHelperText style={{color:'red',fontWeight:"bold"}}>{errors.password}</FormHelperText>} */}
                </FormControl><br/>

                <FormControl className="mb-3" >
                    <Input type="password" placeholder="Confirm Password" name="password" id="cpass" 
                    startAdornment={<InputAdornment position="start"><LockRounded /></InputAdornment>} onChange={this.handler} required /><br/>
                    {/* {errors.password.length>0 && 
                    <FormHelperText style={{color:'red',fontWeight:"bold"}}>{errors.password}</FormHelperText>} */}
                </FormControl><br/>

                <Button variant="contained" type="submit" sx={{bgcolor:'success.main'}} onClick={this.formSubmit}> Change</Button>
            </Box>
            </Box>}
            </Route>
            </div>
        )
    }
}

export default ChangePassword
