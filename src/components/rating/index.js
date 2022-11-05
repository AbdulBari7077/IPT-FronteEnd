import Rating from 'material-ui-rating';
import * as React from 'react';

export default function Rate(){
    
    const [value, setValue] = React.useState(2);


    return(
        <Rating
  value={value}
  max={5}
  onChange={(value) => setValue(value) +console.log(value)}
  

/>
    );
}