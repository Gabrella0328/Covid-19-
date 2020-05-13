import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './CardGlobal.module.css';

const Info = ({ data: { confirmed, recovered, deaths } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography variant= "h4" color="dark" align ="center" gutterBottom>
              Infected
            </Typography>
            <Typography align="center" variant="h5" component="h2">
              <CountUp start={0} end={confirmed.value} duration={2.50} separator="," />
            </Typography>
            <Typography align="center" variant="body2" component="h2">
              Number of active cases of COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography variant= "h4" color="dark" align ="center" gutterBottom>
              Recovered
            </Typography>
            <Typography align="center" variant="h5" component="h2">
              <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
            </Typography>
            <Typography  align="center" variant="body2" component="h2">
              Number of recoveries from COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography variant= "h4" color="dark" align ="center" gutterBottom>
              Deaths
            </Typography>
            <Typography align="center" variant="h5" component="h2">
              <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
            </Typography>
            <Typography align="center" variant="body2" component="h2">
              Number of deaths caused by COVID-19.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Info;



