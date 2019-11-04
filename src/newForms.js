import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    color: "white"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
    color:"white"
    
  },
 
  button:{
    height: 45,
    top: 15
  },
  multilineColor:{
    color:"white",
    borderBottomColor:"white"
  }
}));



export default function TextFields(props) {
  const classes = useStyles();
  
  const show = {
    display : props.disp,
    width: "40%"

  }

  const iconUrl = "http://openweathermap.org/img/w/" + props.iconCode + ".png"

  return (
      <div>
            <form className={classes.container} noValidate autoComplete="off" onSubmit = {props.data} >
    
            <TextField
                id="standard-with-placeholder"
                label="City"
                placeholder="City"
                className={classes.textField}
                margin="normal"
                defaultValue = "Detroit"
                name = "city" onChange = {props.change}
                InputProps={{
                  className: classes.multilineColor
               }}
                required
            />

            <TextField
                id="standard-with-placeholder"
                label="Country"
                placeholder="Country"
                className={classes.textField}
                margin="normal"
                defaultValue = "US"
                name = "country" onChange = {props.change}  
                InputProps={{
                  className: classes.multilineColor
               }}
                required
            />

            <Button variant="contained" color="primary" className={classes.button} type="submit" >
                Submit
            </Button>
            
            </form>



            

    </div>

  );
}
