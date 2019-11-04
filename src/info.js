import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '560px',
    margin:"0px"
    
  },
}));

export default function ListDividers(props) {
  const classes = useStyles();
  let humidity = "Humidity : " + props.weatherObject.humidity+"%"
  let tempLow = "Temperature Low : " + props.weatherObject.temp_min + " F"
  let tempMax = "Temperature High : " + props.weatherObject.temp_max + " F"
  let pressure = "Pressure : " + props.weatherObject.pressure + " ATM"


  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem>
        <ListItemText primary={humidity}  />
        
      </ListItem>
      <Divider />
      <ListItem  divider>
        <ListItemText primary={tempLow} />
      </ListItem>
      <ListItem >
        <ListItemText primary={tempMax} />
      </ListItem>
      <Divider light />
      <ListItem divider>
        <ListItemText primary={pressure} />
      </ListItem>
      
      
    </List>



  );
}