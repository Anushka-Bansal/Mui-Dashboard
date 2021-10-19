import { Box } from '@mui/system';
import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export class Contents extends Component {
    constructor(){
        super();
        this.state={
            userinfo:[],
            id:'',
            name:'',
            email:'',
            contact:''
        };    
    }
    componentDidMount(){
        const URL="http://localhost:3001/UserData";
        fetch(URL)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            this.setState({userinfo:data})
        })
        fetch(URL,{
            method:"GET",
            headers:{
                "Content-type":"application/json"
            },
         }
            )
           .then(res=>res.json())
    
            .then(data=>{
                for(var i=0; i<data.length;i++){
                    if(data[i].email===localStorage.getItem("email")){
                        console.log(data[i])
                        this.setState({userinfo:data[i]})
                    }
                }
                console.log(data)     
            })
     }
    render() {
        console.log(this.state)
        return (
            <>
            <Box  sx={{ flexGrow: 1, p: 5 }}>
                {/* <h1>User Information of {this.state.match.params.profile_id}</h1> */}
                {/* {this.state.userinfo.map((item)=>( */}
                <Card sx={{ maxWidth: 600 }} key={this.state.userinfo.id}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="350" 
                        image={this.state.userinfo.image}
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {this.state.userinfo.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Welcome to Admin Pannel<br/>
                            Here are your details <b>{this.state.userinfo.name}:</b><br/>
                            Email Id: {this.state.userinfo.email}<br/>
                            Contact Number: {this.state.userinfo.contact}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                {/* )   )}  */}
            </Box>
          </>  
        )
    }
}

export default Contents
