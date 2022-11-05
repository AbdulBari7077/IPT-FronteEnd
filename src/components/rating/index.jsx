import Rating from 'material-ui-rating';
import * as React from 'react';
import { MuiThemeProvider,createTheme } from '@material-ui/core';

export default function Rate(){
   
    const [value, setValue] = React.useState(2);
    const myTheme = createTheme({
        overrides:{
            MuiSvgIcon:{
                root:{
                    color:'red'
                }
            }
        }
    })

    return(
        <MuiThemeProvider theme={myTheme}>

        <Rating
  value={value}
  max={5}
  onChange={(value) => setValue(value) +console.log(value)}
  
  
/>
  </MuiThemeProvider>
    );
}