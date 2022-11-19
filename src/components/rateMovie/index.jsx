import Rating from '@mui/material/Rating';
import * as React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material";
import { Button } from '@mui/material';
import "./rateMovie.css"

const RateDialog = (props) => {
  const myTheme = createTheme({
    overrides: {
      
    }
  },
  );
  const { open, setOpen, handleCloseRateDialog, setRateValue, rateValue} = props;
  const [value, setValue] = React.useState(rateValue);
  

 
  const handleClose = () => {
      setOpen(false);
      handleCloseRateDialog();
    };
    

    
    return (
      <Dialog  onClose={handleClose} open={open}>
      <DialogContent  className='Dialograting' style={{backgroundColor:''}}>
        <DialogContentText>
          <ThemeProvider theme={myTheme}>
          <Rating
          style={{color:'red',stroke:'red'}}
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
          </ThemeProvider>
        </DialogContentText>
      </DialogContent>
      <DialogActions style={{backgroundColor:'black'}}>
        <Button onClick={()=> {setRateValue(value)+ setOpen(false)}} style={{color:'red'}}> Submit</Button>
      <Button onClick={handleClose} autoFocus style={{color:'red'}}> 
            Close
          </Button>
      </DialogActions>
    </Dialog>
                     
  );
};
export default RateDialog;
