import { dialogClasses } from "@mui/material";
import React from "react";
import './takeNote.css'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import Button from '@mui/material/Button';
import { useState } from "react";
import { addnotes } from "../../services/dataService";
import ColorPopper from "../colorpopper/colorPopper";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
function Note2(props) {
    const [input, setInput] = useState({ title:"", description:"", isArchived: false, color:"" })
    const addTitle = (event) => {
        setInput(prevState => ({
            ...prevState,
            title: event.target.value
        }))
    }
    const addDescription = (event) => {
        setInput(prevState => ({
            ...prevState,
            description: event.target.value
        }))
    }
    const addNote = () => {
        props.listenToNote2()
        addnotes(input)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const addarchieve = () => {
        setInput(prevState => ({
            ...prevState,
            isArchived: true
        }))
        console.log("add Archieve")
    }
    const listenToColorPopper = (colour) => {
        setInput(prevState => ({
            ...prevState,
            color: colour
        }))
    }
    return (
        <div>
            <div className="d3">
                <div className="j1" style={{ backgroundColor: input.color }}>
                    <div className="j3" >
                        <input id="t2" type="textbox" name="" onChange={addTitle} placeholder="Title" />
                        <PushPinOutlinedIcon color="action"></PushPinOutlinedIcon>
                    </div>
                    <div className="takenote">
                        <input id="t2" type="text" name="" onChange={addDescription} placeholder="Take a note..."></input>

                    </div>
                    <div className="j4">
                        <div className="j5">
                            <AddAlertOutlinedIcon id="k1" color="action"></AddAlertOutlinedIcon>
                            {/* <PersonAddAlt1OutlinedIcon id="k1" color="action"></PersonAddAlt1OutlinedIcon> */}
                            <DeleteOutlinedIcon id="k1" color="action" ></DeleteOutlinedIcon>
                            {/* <PaletteOutlinedIcon id="k1" color="action"></PaletteOutlinedIcon> */}
                            <ColorPopper listenToColorPopper={listenToColorPopper} action="create" />
                            <InsertPhotoOutlinedIcon id="k1" color="action"></InsertPhotoOutlinedIcon>
                            <ArchiveOutlinedIcon id="k1" color="action" onClick={addarchieve}></ArchiveOutlinedIcon>
                            <MoreVertOutlinedIcon id="k1" color="action"></MoreVertOutlinedIcon>
                            <UndoIcon id="k1" color="disabled"></UndoIcon>
                            <RedoIcon id="k1" color="disabled"></RedoIcon>
                        </div>
                        <div className="j6">
                            <Button id="j8" variant="text" onClick={addNote} >Close</Button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Note2