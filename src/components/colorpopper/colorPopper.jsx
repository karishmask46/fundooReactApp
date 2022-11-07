import * as React from 'react';
import './colorPopper.css'
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { changeColorNotes } from '../../services/dataService';

export default function ColorPopper(props) {
    const colors = ["#2ECC71", "#AF7AC5", "#F1948A", "#A3E4D7", "#F5B7B1", "#F5B041", "#DC7633", "#F1C40F", "#AAB7B8", "#F1948A", "#2ECC71", "#F5B041"]
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const selectColor=(colour)=>{   
     if(props.action==="create"){
        props.listenToColorPopper(colour)
     } 
     else if (props.action==="update"){
        let updatecolor={
         noteIdList:[props.id],color:colour
        }
       changeColorNotes(updatecolor)
       .then((response) => {
        console.log(response)
        props.listenToColorPopperupdate()
    })
    .catch((error) => {
        console.log(error)
    })
    console.log(colour,"updating color")
     } 
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      {/* <button aria-describedby={id} type="button" onClick={handleClick}>
        Toggle Popper
      </button> */}
      <div style={{height:23,width:25}}>
      <ColorLensOutlinedIcon  color="action" onClick={handleClick}></ColorLensOutlinedIcon>
      </div>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper',display:"flex",flexdirection:"row" }}>
          {
            colors.map((color)=>(
                <div style={{height:25,width:25,backgroundColor:color,borderRadius:50,marginRight:10}} onClick={()=>selectColor(color)}>

                </div>
            ))
          }
        </Box>
      </Popper>
    </div>
  );
}
