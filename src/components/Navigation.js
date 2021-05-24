import React from "react";
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <Grid container>
                <Grid item xs={2}>
                   <Link to="/">Yohan Joo</Link>
                </Grid>
                <Grid item xs={10}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </Grid>
            </Grid>

        </nav>
    );
}

export default Navigation;