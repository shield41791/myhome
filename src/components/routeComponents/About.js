import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { SocialIcon } from 'react-social-icons';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    gridContainer : {
        marginInline : "auto",
        marginTop : 75,
        justifyContent : "center",
        maxWidth : 1024
    },
    gridItem : {
        maxWidth : 370,
        marginInline : 30,
        marginBlock : 15
    },
    imgProfile : {
        width : 240,
        height : 240,
        borderRadius : 120
    },
    socialIcon : {
        margin : 10
    }
}));

function About() {
    const classes = useStyles();
    
    return (
        <h1>Who am I?</h1>
    );
}

export default About;