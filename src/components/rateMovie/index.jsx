import Rating from "material-ui-rating";
import * as React from "react";
import { MuiThemeProvider, createTheme } from "@material-ui/core";
import { Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material";
import Button from '@material-ui/core/Button';
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
        <Dialog onClose={handleClose} open={open}>
      <DialogContent style={{backgroundColor:'black'}}>
        <DialogContentText>
          <MuiThemeProvider theme={myTheme}>
            <Rating
              value={value}
              max={5}
              onChange={(value) => setValue(value)}
              />
          </MuiThemeProvider>
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
