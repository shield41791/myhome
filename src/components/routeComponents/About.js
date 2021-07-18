import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import '../../css/common.css';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

function About() {
    return (
        <Grid container className="grid-root about-grid-root">
            <Grid item className="about-grid-title" xs={12}>
                <h1>Who Am I?</h1>
            </Grid>
            <Grid container xs={12}>
                <Grid container className="about-grid-side" xs={6}>
                    <Grid item xs={12}>
                        <h3>About me</h3>
                    </Grid>
                    <Grid item xs={5}>
                        <img className="about-img-myphoto" src="https://lh3.googleusercontent.com/pw/ACtC-3ejxNJDWqd9-SlD7o1nHx80tancErg8caygmhCn8ydfn3od2KcDuTVDyQhIl0yB0Rneper8L9JZUfcXx6fC5DKgxNaiHFcbuJBruZUjVZTcZslNLGzEKP766jA5m8tnyLDdc9Kg9gTXlxxsMG5nqeY=s720-no?authuser=0"/>
                        <img className="about-img-myphoto" src="https://lh3.googleusercontent.com/pw/ACtC-3e9oeWyPEGmW6edr0m1ZoSj8-3zpCZKBnCUtQUhr1r-qRaar10cO95IvGrGOFnHPxCVyfGLwGC6a7hHWZWIjNWC7t_v5i7qjU6xLCKbFNIekg_dXGyw2zyV33MOcgrMtOsHKRzIPs7lZEVPMwzyvUM=s947-no?authuser=0"/>
                    </Grid>
                    <Grid item xs={7}>
                        <div><strong>1. 해결해야 할 것</strong></div>
                        <div><p>Footer가 가리네</p></div>
                    </Grid>
                </Grid>
                <Grid item className="about-grid-side" xs={6}>
                    <h3>Experience</h3>
                    <Timeline>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot/>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper>
                                    hello
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default About;