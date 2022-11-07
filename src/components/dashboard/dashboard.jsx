import React, { useEffect, useState } from "react";
import './dashboard.css'
import { getnotesList } from "../../services/dataService";
import Noes from "../Header/header";
import Note1 from "../takenote1/takeNote1";
import Note2 from "../takenote2/takeNote2"
import Note3 from "../takenote3/takeNote3";
function Dashboard() {
    const [toggle, setToggle] = useState(false)
    const [noteList, setNoteList] = useState([])
    const listenToNote1 = () => {
        setToggle(true)
    }
    const listenToNote2=()=>{
        setToggle(false)
    }
    useEffect(() => {
       getNote()
    },[])
    const getNote=()=>{
        getnotesList()
        .then((response) => {
            console.log(response)
            setNoteList(response.data.data.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    return (
        <div>
            <Noes />
            <div>
                {
                    toggle ? <Note2 listenToNote2={listenToNote2} /> : <Note1 listenToNote1={listenToNote1} />
                }
                <div className="note">
                    <div className="note1">
                        {
                            noteList.map((note) => (<Note3 note={note} getNote={getNote} />))
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Dashboard
