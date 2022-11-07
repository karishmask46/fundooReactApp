import React, { useState } from "react";
import './siGnup.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { loGinApi } from "../../../services/userService";
const firstNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lastNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
function Signup() {
    const [signUpobj, setSignUpObj] = useState({
        firstName: "", lastName: "", email: "", password: "",service:"advance"
    })
    const [regexObje, setRegexObe] = useState({ firstNameBorder: false, firstNameHelper: "", lastNameBorder: false, lastNameHelper: "", emailBorder: false, emailHelper: "", passwordBorder: false, passwordHelper: "" })
    const takeFirstName = (event) => {
        setSignUpObj(previousState => ({
            ...previousState,
            firstName: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeLastName = (event) => {
        setSignUpObj(previousState => ({
            ...previousState,
            lastName: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeEmail = (event) => {
        setSignUpObj(previousState => ({
            ...previousState,
            email: event.target.value
        }))
        console.log(event.target.value)
    }
    const takePassword = (event) => {
        setSignUpObj(previousState => ({
            ...previousState,
            password: event.target.value
        }))
        console.log(event.target.value)
    }

    const submit = () => {
        let firstNametest = firstNameRegex.test(signUpobj.firstName)
        let lastNametest = lastNameRegex.test(signUpobj.lastName)
        let emailtest = emailRegex.test(signUpobj.email)
        let passwordtest = passwordRegex.test(signUpobj.password)
        if (firstNametest === false) {
            setRegexObe(previousState => ({
                ...previousState,
                firstNameBorder: true, firstNameHelper: "Enter a valid first name"
            }))
        }
        else if (firstNametest === true) {
            setRegexObe(previousState => ({
                ...previousState,
                firstNameBorder: false, firstNameHelper: ""
            }))
        }
        if (lastNametest === false) {
            setRegexObe(previousState => ({
                ...previousState,
                lastNameBorder: true, lastNameHelper: "Enter a valid last name"
            }))
        }
        else if (lastNametest === true) {
            setRegexObe(previousState => ({
                ...previousState,
                lastNameBorder: false, lastNameHelper: ""
            }))
        }
        if (emailtest === false) {
            setRegexObe(previousState => ({
                ...previousState,
                emailBorder: true, emailHelper: "Enter a email or phone number"
            }))
        }
        else if (emailtest === true) {
            setRegexObe(previousState => ({
                ...previousState,
                emailBorder: false, emailHelper: ""
            }))
        }
        if (passwordtest === false) {
            setRegexObe(previousState => ({
                ...previousState,
                passwordBorder: true, passwordHelper: "Enter a valid password"
            }))
        }
        else if (passwordtest === true) {
            setRegexObe(previousState => ({
                ...previousState,
                passwordBorder: false, passwordHelper: ""
            }))
        }
        console.log(signUpobj)
        if (firstNametest === true && lastNametest === true && emailtest === true && passwordtest === true) {
            loGinApi(signUpobj)
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                })
            console.log("signUp success")
        }
    }
    return (
        <div className="maindiv">
            <div className="subdiv">
                <div className="subdiv1">
                    <div className="d1">
                        <div className="d2">
                            <img height={30} width={90}
                                src="data:image/png;base64,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" alt="" />
                        </div>
                        </div>
                    <div className="d3">
                        Create Your Google account
                    </div>
                    <div className="d4">
                        {/* <input className="d5" type=" textfield" value={"First name"} />
                        <input className="d6" type="textfield" value={"last name"} /> */}
                        <TextField className="d5" size="small" onChange={takeFirstName} error={regexObje.firstNameBorder} helperText={regexObje.firstNameHelper} id="outlined-basic" label="First name" variant="outlined" />
                        <TextField className="d6" size="small" onChange={takeLastName} error={regexObje.lastNameBorder} helperText={regexObje.lastNameHelper} id="outlined-basic" label="last name" variant="outlined" />
                    </div>
                    <div className="e1"> <TextField className="d9" size="small" onChange={takeEmail} error={regexObje.emailBorder} helperText={regexObje.emailHelper} id="outlined-basic" label="Your email address" variant="outlined" /></div>
                    <div className="e3"><span>You'll need to confirm that this email belongs to you</span> </div>
                    <div className="e4">
                        <Button variant="text">Create a new Gmail address instead </Button>
                    </div>
                    <div className="g1">
                        {/* <input className="g2" type=" textfield" value={"Password"} />
                        <input className="g3" type="textfield" value={"Confirm"} /> */}
                        <TextField className="g2" size="small" onChange={takePassword} error={regexObje.passwordBorder} helperText={regexObje.passwordHelper} id="outlined-basic" label="Password" variant="outlined" />
                        <TextField className="g3" size="small" id="outlined-basic" label="Confirm" variant="outlined" />
                    </div>
                    <div className="g4"><span>Use 8 or more characters with a mix of letters,numbers & symbols</span></div>
                    <div className="g5"><input type="checkbox" name="" id="g6" />
                        <span className="g7"> Show password </span></div>
                    <div className="t1">
                        <div className="t2">
                            <Button variant="text">Sign in instead</Button></div>
                        <div className="t3"> <Button onClick={submit} variant="contained">Next</Button></div>
                    </div>
                </div>
                <div className="subdiv2">
                    <img className="f1" height={100} width={100} src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="" />
                    <div className="f2">One account.All of Google working for you</div>
                </div>
            </div>

        </div>
    )
}
export default Signup