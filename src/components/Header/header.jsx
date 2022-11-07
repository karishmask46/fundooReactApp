import React from "react";
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import MenuIcon from '@mui/icons-material/Menu';
import AppsIcon from '@mui/icons-material/Apps';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
function Noes() {
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
                                <ViewStreamOutlinedIcon id="b6" color="action"></ViewStreamOutlinedIcon>
                                <SettingsOutlinedIcon id="b7" color="action"></SettingsOutlinedIcon>
                            </div>
                        </div>

                        <div className="c1"><AppsIcon id="c2" color="action"></AppsIcon>
                            <AccountCircleOutlinedIcon id="c3" color="action"></AccountCircleOutlinedIcon></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Noes
