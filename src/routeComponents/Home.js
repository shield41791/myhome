import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        123
                    </Grid>
                    <Grid item xs={6}>
                        234
                    </Grid>
                    <Grid item xs={6}>
                        345
                    </Grid>
                </Grid>
                <img alt="profile" src="https://lh3.googleusercontent.com/52D_Q-LC3zoYOCWlLujNHiZYZfXSqH18K9ao3pKq8j800vER8vYdboBmKI_DOflqj6z7jNXqkJq6rXRZdGtigz-C_HQ9HuykB9C8QIEmZ_BoCUPdlmeUyNE0zWHSyXdv6cZedtxWhVVdRDdlJugXeoYxHEzoQlJMM5OSTH3Y6cKNBIHGGrTxta2VwRaFkPeD7CjTuuuMcQC5n9QkpikuoRvCZ-O0GIFSmu3KFGjjuqhBz5IIRprrj0DlKrhjMupejir57xyUG5XopOiJJxYArwA6l8U320knOBTQ7_W1xoqVj0xtFNRflGWppy3LltLpCNYkZemtDZD3V6VHLQYLv_EPKMGr_Bu1Y2Ljx2d1AWhQ74yUqM9X9PmErGxWKjNyaTy2qnnP7ec3TqcY1BUhKx7m0qtUIlgg9snll3U-vRfO9q_TEjNn97bWEy5Iq-G1Yp7-xwvtEh8QtGr89MtQu2-X5ob6hTVb7lN3kbNYrDK66Vdm9-sTYvbLuKMqTI899iY1DAAKpf7HHSSfwWZ_xhEFCvtPQMHGGyoCqA0lLE58RSP81MpfN68S813A-Y4-duazbYwM9G5raAQZUOlNpkWfhfyM8TgGS6W2Dgu5MI3t_y-tat9m9yu-nTr9vh8fceqm2MjT1tEGtsyKGrHjlPPjUuvYbCusb4AnifKqed-GSmUqMrb_18aB8siUlOh2CkAVuQuEPDm_YFc8D6QHaHPWGLgReq8JINdePZnGk-Es0rQItJM9K_tdBf_lotdXoyPXgaumpxV7o8M=s578-no?authuser=0"/>
                <h1>I am Home! 안녕하세요.</h1>
                <Typography variant="h1" guterBottom>I am Home! 안녕하세요.</Typography>
            </div>
        )
    }
}

export default Home;