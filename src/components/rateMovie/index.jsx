import Rating from '@mui/material/Rating';
import * as React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material";
import { Button } from '@mui/material';
import "./rateMovie.css"
import { Flag } from '@mui/icons-material';
import { updateMovieRating } from '../../api/Api';

const RateDialog = (props) => {
  const myTheme = createTheme({
    overrides: {

    }
  },
  );
  const { open, setOpen, handleCloseRateDialog, setRateValue, rateValue,movieId } = props;
  const [value, setValue] = React.useState(rateValue);

  async function handleSubmit(){
    setRateValue(rateValue);
    setOpen(false);
    const response = await updateMovieRating(movieId,value);
    if(response?.data.code){
      return alert(response?.data.message);
    }
    // console.log(response,"RATEVALUE");
  }
  const handleClose = () => {
    setOpen(false);
    handleCloseRateDialog();
  };
  
  return (
    <Dialog onClose={handleClose}  open={open}>
      <DialogContent className='Dialograting' style={{ backgroundColor: '' }}>
        <DialogContentText>
          <ThemeProvider theme={myTheme}>
            <Rating
              // defaultValue={1.5} 
              precision={0.1}
              style={{ color: 'red', stroke: 'red' }}
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </ThemeProvider>
        </DialogContentText>
      </DialogContent>
      <DialogActions style={{ backgroundColor: 'black' }}>
        <Button onClick={handleSubmit} style={{ color: 'red' }}> Submit</Button>
        <Button onClick={handleClose} autoFocus style={{ color: 'red' }}>
          Close
        </Button>
      </DialogActions>
    </Dialog>

  );
};
export default RateDialog;
