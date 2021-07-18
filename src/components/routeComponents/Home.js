import React from "react";
import Grid from '@material-ui/core/Grid';
import { SocialIcon } from 'react-social-icons';
import '../../css/common.css';

function Home() {
    return (
        <Grid container className="grid-root home-grid-root">
            <Grid item className="home-grid-profile" xs='auto'>
                <img className="home-img-profile" alt="yohan's profile image" src="https://lh3.googleusercontent.com/52D_Q-LC3zoYOCWlLujNHiZYZfXSqH18K9ao3pKq8j800vER8vYdboBmKI_DOflqj6z7jNXqkJq6rXRZdGtigz-C_HQ9HuykB9C8QIEmZ_BoCUPdlmeUyNE0zWHSyXdv6cZedtxWhVVdRDdlJugXeoYxHEzoQlJMM5OSTH3Y6cKNBIHGGrTxta2VwRaFkPeD7CjTuuuMcQC5n9QkpikuoRvCZ-O0GIFSmu3KFGjjuqhBz5IIRprrj0DlKrhjMupejir57xyUG5XopOiJJxYArwA6l8U320knOBTQ7_W1xoqVj0xtFNRflGWppy3LltLpCNYkZemtDZD3V6VHLQYLv_EPKMGr_Bu1Y2Ljx2d1AWhQ74yUqM9X9PmErGxWKjNyaTy2qnnP7ec3TqcY1BUhKx7m0qtUIlgg9snll3U-vRfO9q_TEjNn97bWEy5Iq-G1Yp7-xwvtEh8QtGr89MtQu2-X5ob6hTVb7lN3kbNYrDK66Vdm9-sTYvbLuKMqTI899iY1DAAKpf7HHSSfwWZ_xhEFCvtPQMHGGyoCqA0lLE58RSP81MpfN68S813A-Y4-duazbYwM9G5raAQZUOlNpkWfhfyM8TgGS6W2Dgu5MI3t_y-tat9m9yu-nTr9vh8fceqm2MjT1tEGtsyKGrHjlPPjUuvYbCusb4AnifKqed-GSmUqMrb_18aB8siUlOh2CkAVuQuEPDm_YFc8D6QHaHPWGLgReq8JINdePZnGk-Es0rQItJM9K_tdBf_lotdXoyPXgaumpxV7o8M=s578-no?authuser=0"/>
            </Grid>
            <Grid item className="home-grid-introduce" xs='auto'>
                <h1 className="home-text">Yohan Joo</h1>
                <p className="home-text">Hello, I'm yohan.</p>
                <p className="home-text">I am back-end, front-end Web Engineer.</p>
                <SocialIcon className="home-img-social" bgColor="#616161" fgColor="#fafafa" network="instagram" url="https://www.instagram.com/zuyo_han/" target="_blank"/>
                <SocialIcon className="home-img-social" bgColor="#616161" fgColor="#fafafa" network="github" url="https://github.com/shield41791" target="_blank"/>
            </Grid>
        </Grid>
    );
}

export default Home;