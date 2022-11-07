import React from "react";
import './takeNote1.css'
import TextField from '@mui/material/TextField';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import  Stack  from "@mui/material/Stack";
function Note1(props){
    const openNote=()=>{
           props.listenToNote1()
    }
    return(
        <div> 
            <div className="d1">
                 <div className="d2">
                    <div className="d5" role={"textbox"} onClick={openNote} >
                    {/* <TextField onClick={openNote} className="text" id="outlined-basic" label="Take a note..." variant="outlined" /> */}
                    Take a note...
                    </div>
                    <Stack id="f8" spacing={1} direction="row">
                    <CheckBoxOutlinedIcon id="f3" color="action"></CheckBoxOutlinedIcon>
                    <BrushOutlinedIcon id="f4" color="action"></BrushOutlinedIcon>
                    <ImageOutlinedIcon id="f5" color="action"></ImageOutlinedIcon>
                    </Stack>
                    </div>
            </div>
        </div>
    )
}
export default Note1