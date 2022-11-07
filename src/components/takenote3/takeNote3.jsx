import React from "react";
import './takeNote3.css'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ColorPopper from "../colorpopper/colorPopper";
import { updatearchiveNotes, updateNotes } from "../../services/dataService";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputBase from '@mui/material/InputBase';
import { useState } from "react";
import Button from '@mui/material/Button';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { border, borderColor, borderRadius } from "@mui/system";

function Note3(props) {
    // const style = {
    //     position: 'absolute',
    //     top: '50%',
    //     left: '50%',
    //     transform: 'translate(-50%, -50%)',
    //     width: 400,
    //     bgcolor: 'background.paper',
    //     // border: '2px solid #000',
    //     boxShadow: 24,
    //     p: 4,
    //     borderRadius: '5px',
    // };
   
    
    const [open, setOpen] = React.useState(false);
    const [inputValue, setInputValue] = useState({ noteId: '', title: '', description: '' })
    const handleOpen = (noteDetails) => {
        console.log(noteDetails, "getting note details")
        setOpen(true)
        setInputValue({ noteId: noteDetails.id, title: noteDetails.title, description: noteDetails.description })
    };
    const handleClose = () => {
        setOpen(false);
    }
    const listenToColorPopperupdate = () => {
        props.getNote()
    }
    const updateArchive = (id) => {
        let archiveNote = {
            noteIdList: [id], isArchived: true
        }
        updatearchiveNotes(archiveNote)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
        console.log("note archieved")
    }
    const updateTitle = (event) => {
        setInputValue(prevState => ({
            ...prevState,
            title: event.target.value
        }))
    }
    const updateDescription = (event) => {
        setInputValue(prevState => ({
            ...prevState,
            description: event.target.value
        }))
    }
    const saveNote3 = () => {
        updateNotes(inputValue)
            .then((response) => {

                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
        setOpen(false);
    }
    console.log(inputValue, "value updated")
    // const handleDelete = () => {

    //   };
    // console.log(props.note,'details...')
    return (
        <div>
            <div className="container">
                <div className="headcontain" style={{ backgroundColor: props.note.color }}>
                    <div className="subcontain">
                        <div className="title" onClick={() => handleOpen(props.note)}>
                            <div className="title1">{props.note.title}</div>
                            <div className="title2">{props.note.description}</div>
                        </div>
                        <div className="pin"><PushPinOutlinedIcon color="action"></PushPinOutlinedIcon></div>
                    </div>
                    <div className="icons">
                        <AddAlertOutlinedIcon id="k1" color="action"></AddAlertOutlinedIcon>
                        <DeleteOutlinedIcon  id="k1" color="action" ></DeleteOutlinedIcon>
                        {/* <PaletteOutlinedIcon id="k1" color="action"></PaletteOutlinedIcon> */}
                        <ColorPopper id={props.note.id} listenToColorPopperupdate={listenToColorPopperupdate} action="update" />
                        <InsertPhotoOutlinedIcon id="k1" color="action"></InsertPhotoOutlinedIcon>
                        <ArchiveOutlinedIcon onClick={() => updateArchive(props.note.id)} id="k1" color="action"></ArchiveOutlinedIcon>
                        <MoreVertOutlinedIcon id="k1" color="action"></MoreVertOutlinedIcon>
                    </div>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box  className="boxcss">
                    {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
                    <div className="box1" style={{ display: "flex", flexDirection: "column" }}>
                        <InputBase className="popbox" type="textbox" name=""
                            onChange={updateTitle}
                            placeholder="Title" defaultValue={inputValue.title} />
                        <InputBase type="text" name=""
                            onChange={updateDescription}
                            placeholder="Take a note..." defaultValue={inputValue.description} />
                        <Button onClick={saveNote3}>Close</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}
export default Note3