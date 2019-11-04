import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    display: "flex",
    flexWrap: "wrap",
    justifyContent:"center",
    
    fontFamily: 'Fira Sans, sans-serif',
    backgroundColor: "inherit",
    color: "white"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
   
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  let days = props.nextThreeDays
  let forecast;
  if(typeof props.forecast !== "undefined"){
    console.log(props.forecast[0])
    forecast = props.forecast
  
  return (

    <div style = {{display: "flex", justifyContent: "center",flexWrap:"wrap"}}>
      <Card className={classes.card}>
        <CardContent>
          
        <Typography variant="h5" component="h2">
            {days[0]}
          </Typography>
          <Typography variant="h5" component="h2">
            {props.forecast[0].main.temp} F
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          {props.forecast[0].main.temp_min} F
          </Typography>
          <Typography variant="body2" component="p">
            {props.forecast[0].weather[0].main}
          </Typography>
        </CardContent>
        
      </Card>

      <Card className={classes.card}>
        <CardContent>
          
        <Typography variant="h5" component="h2">
            
            {days[1]}
          </Typography>
          <Typography variant="h5" component="h2">
          {props.forecast[7].main.temp} F
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {props.forecast[7].main.temp_min} F
          </Typography>
          <Typography variant="body2" component="p">
          {props.forecast[7].weather[0].main}
          </Typography>
        </CardContent>
        
      </Card>

      <Card className={classes.card}>
        <CardContent>
        <Typography variant="h5" component="h2">
            {days[2]}
          </Typography>
          <Typography variant="h5" component="h2">
          {props.forecast[15].main.temp} F
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          {props.forecast[15].main.temp_min} F
          </Typography>
          <Typography variant="body2" component="p">
          {props.forecast[15].weather[0].main}
          </Typography>
        </CardContent>
        
      </Card>
    </div>
    
  );
  }else {
    return(
      <div>

      </div>
    );
  }
}
