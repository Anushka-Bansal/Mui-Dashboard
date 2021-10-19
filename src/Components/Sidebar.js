import  React, {Component} from 'react';
import {Toolbar,Box,Drawer,List,Divider,ListItem,ListItemText} from "@mui/material";
// import Dashboard from './Contents';
// import ChangePassword from './ChangePassword';
const drawerWidth = 200;

export class SideBar extends Component {
    render(){
        return(
            <>
                <Drawer
                    variant="permanent"
                    sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                    }}>
                    <Toolbar />
                    <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {['Category'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['Order'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['Products'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['Feedback'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                        ))}
                    </List>
                    </Box>
                </Drawer>
                {/* <Dashboard /> */}
                {/* <ChangePassword /> */}
                </>
        )
    }
}
export default SideBar;