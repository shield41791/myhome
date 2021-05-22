import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { SocialIcon } from 'react-social-icons';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    container : {
        //flexGrow : 1
        // marginLeft : 150,
        // marginRight : 150,
        marginTop : 75
    },
    gridContainer : {
        maxWidth : 1024
    },
    gridItem : {
    },
    imgProfile : {
        width : 240,
        height : 240
    },
    socialIcon : {
        margin : 10
    }
}));

function Home() {
    const classes = useStyles();
    
    return (
            <Box className={classes.container} m="auto" p={1} display="flex" justifyContent="center">
                <Grid container spacing={5} className={classes.gridContainer}>
                    <Grid item className={classes.gridItem} xs={12} md={3}>
                        <img className={classes.imgProfile} alt="yohan's profile image" src="https://lh3.googleusercontent.com/52D_Q-LC3zoYOCWlLujNHiZYZfXSqH18K9ao3pKq8j800vER8vYdboBmKI_DOflqj6z7jNXqkJq6rXRZdGtigz-C_HQ9HuykB9C8QIEmZ_BoCUPdlmeUyNE0zWHSyXdv6cZedtxWhVVdRDdlJugXeoYxHEzoQlJMM5OSTH3Y6cKNBIHGGrTxta2VwRaFkPeD7CjTuuuMcQC5n9QkpikuoRvCZ-O0GIFSmu3KFGjjuqhBz5IIRprrj0DlKrhjMupejir57xyUG5XopOiJJxYArwA6l8U320knOBTQ7_W1xoqVj0xtFNRflGWppy3LltLpCNYkZemtDZD3V6VHLQYLv_EPKMGr_Bu1Y2Ljx2d1AWhQ74yUqM9X9PmErGxWKjNyaTy2qnnP7ec3TqcY1BUhKx7m0qtUIlgg9snll3U-vRfO9q_TEjNn97bWEy5Iq-G1Yp7-xwvtEh8QtGr89MtQu2-X5ob6hTVb7lN3kbNYrDK66Vdm9-sTYvbLuKMqTI899iY1DAAKpf7HHSSfwWZ_xhEFCvtPQMHGGyoCqA0lLE58RSP81MpfN68S813A-Y4-duazbYwM9G5raAQZUOlNpkWfhfyM8TgGS6W2Dgu5MI3t_y-tat9m9yu-nTr9vh8fceqm2MjT1tEGtsyKGrHjlPPjUuvYbCusb4AnifKqed-GSmUqMrb_18aB8siUlOh2CkAVuQuEPDm_YFc8D6QHaHPWGLgReq8JINdePZnGk-Es0rQItJM9K_tdBf_lotdXoyPXgaumpxV7o8M=s578-no?authuser=0"/>
                    </Grid>
                    <Grid item className={classes.gridItem} xs={12} md={9}>
                        <Typography variant="h4">Yohan Joo</Typography>
                        <p>Hello, I'm yohan.</p>
                        <p>I am back-end, front-end Web Engineer.</p>
                        <SocialIcon className={classes.socialIcon} bgColor="#9e9e9e" fgColor="#fafafa" network="instagram" url="https://www.instagram.com/zuyo_han/" target="_blank"/>
                        <SocialIcon className={classes.socialIcon} bgColor="#9e9e9e" fgColor="#fafafa" network="github" url="https://github.com/shield41791" target="_blank"/>
                    </Grid>
                </Grid>
            </Box>
    );
}

export default Home;