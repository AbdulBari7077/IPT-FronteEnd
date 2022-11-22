import Rating from '@mui/material/Rating';
import * as React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material";
import { Button } from '@mui/material';
import "./rateMovie.css"

const RateDialog = (props) => {
  const [value, setValue] = React.useState(2);
  const myTheme = createTheme({
    overrides: {
      MuiSvgIcon: {
        root: {
          color: "red",
        },
      },
    },
  });
  const { open, setOpen, handleCloseRateDialog, setRateValue} = props;
  

 
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
              className='rating'
              value={value}
              max={5}
              onChange={(value) => setValue(value)}
              />
          </ThemeProvider>
        </DialogContentText>
      </DialogContent>
      <DialogActions style={{backgroundColor:'black'}}>
        <Button onClick={()=> setRateValue(value)+console.log(value)} style={{color:'red'}}> Submit</Button>
      <Button onClick={handleClose} autoFocus style={{color:'red'}}> 
            Close
          </Button>
      </DialogActions>
    </Dialog>
                     
  );
};
export default RateDialog;
