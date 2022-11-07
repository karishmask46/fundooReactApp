import React from "react";
import './notes.css'
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import MenuIcon from '@mui/icons-material/Menu';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import SettingsIcon from '@mui/icons-material/Settings';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ColorizeIcon from '@mui/icons-material/Colorize';
import ImageIcon from '@mui/icons-material/Image';
import PushPinIcon from '@mui/icons-material/PushPin';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PaletteIcon from '@mui/icons-material/Palette';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
function Notes() {
    return (
        <div>
            <div className="header">
                <div className="subdiv">
                    <div className="a1">
                        <div className="a5">
                       <MenuIcon id="l1" color="action"></MenuIcon>
                        </div>
                        <div className="a4">
                            <img className="a2" height={100} width={100} src="https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png" alt="" /></div>
                        <div className="a3"><span>Keep</span></div>
                    </div>
                    <div className="b1"> 
                    <div className="r1">
                      <SearchIcon id="r2" color="action"></SearchIcon>
                      <span>Search</span>
                      </div>
                    </div>
                    <div className="b3">
                        <div className="b4">
                            <div className="f1">
                      <RefreshIcon id="b5" color="action" ></RefreshIcon>
                      <ViewStreamIcon id="b6" color="action"></ViewStreamIcon>
                      <SettingsIcon id="b7" color="action"></SettingsIcon>
                      </div>
                      </div>
                    
                    <div className="c1"><ViewCompactIcon id="c2" color="action"></ViewCompactIcon>
                    <AccountCircleIcon id="c3" color="action"></AccountCircleIcon></div>
                    </div>
                </div>
                <div className="d1">
                 <div className="d2">
                    <span id="f2">Take a note...</span> 
                 <div className="f3">
                    <div className="f4">
                    <CheckBoxIcon color="action"></CheckBoxIcon>
                    <ColorizeIcon color="action"></ColorizeIcon>
                    <ImageIcon color="action"></ImageIcon>
                    </div>
                 </div>
            </div>
            </div>
            <div className="d3">
                <div className="j1">
                   <div className="j2"> <span>Title</span>
                   <PushPinIcon color="action"></PushPinIcon></div>
                   <div className="j3">
                    <span>Take a note...</span>
                   </div>
                  <div className="j4">
                    <div className="j5">
                       <AddAlertIcon id="k1" color="action"></AddAlertIcon>
                       <PersonAddAlt1Icon id="k1" color="action"></PersonAddAlt1Icon>
                       <PaletteIcon id="k1" color="action"></PaletteIcon>
                       <InsertPhotoIcon id="k1" color="action"></InsertPhotoIcon>
                       <ArchiveIcon id="k1" color="action"></ArchiveIcon>
                       <MoreVertIcon id="k1" color="action"></MoreVertIcon>
                       <UndoIcon id="k1" color="disabled"></UndoIcon>
                       <RedoIcon id="k1" color="disabled"></RedoIcon>
                  </div>
                  <div className="j6"><span id="j8">Close</span></div>
                  </div>
                </div>
            </div>
            </div>
            
        </div>
    )

}
export default Notes