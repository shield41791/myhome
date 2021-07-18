import React from "react";
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <Grid container className="nav-grid-root">
                <Grid item className="nav-grid-title" xs="auto">
                   <Link to="/">
                       <div>
                            <p className="nav-text nav-text-title">Yohan Joo</p>
                       </div>
                   </Link>
                </Grid>
                <Grid item className="nav-grid-menu" xs="auto">
                    <Link to="/contact">
                        <div>
                            <p className="nav-text nav-text-menu">Contact</p>
                        </div>
                    </Link> 
                    <Link to="/projects">
                        <div>
                            <p className="nav-text nav-text-menu">Projects</p>
                        </div>
                    </Link>
                    <Link to="/skills">
                        <div>
                            <p className="nav-text nav-text-menu">Skills</p>
                        </div>
                    </Link>                    
                    <Link to="/about">
                        <div>
                            <p className="nav-text nav-text-menu">About</p>
                        </div>
                    </Link>
                    <Link to="/">
                        <div>
                            <p className="nav-text nav-text-menu">Home</p>
                        </div>
                    </Link>
                </Grid>
            </Grid>
        </nav>
    );
}

export default Navigation;