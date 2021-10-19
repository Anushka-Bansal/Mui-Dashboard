import React, { Component } from 'react'
// import Navs from './Navs'
import Sidebar from './Sidebar'
import { Grid } from '@mui/material'
import Contents from './Contents'
import Navii from './Navii'

export class Dashboard extends Component {
    render() {
        return (
            <>
                <Navii />
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                        <Sidebar/>
                    </Grid>
                    <Grid item xs={8}>
                        <Contents/>
                        {/* Hello */}
                    </Grid>
                </Grid>
            </>
        )
    }
}
export default Dashboard
