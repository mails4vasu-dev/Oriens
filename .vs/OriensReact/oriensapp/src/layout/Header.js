import React from "react";
import './style.css';
import Bell from '../assets/images/header_icons/bell_icon.png';
import question from '../assets/images/header_icons/question_icon.png';
import avatar from '../assets/images/header_icons/avatar.png';
import sidetoggle from '../assets/images/header_icons/menu.png';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {  useProSidebar } from 'react-pro-sidebar';

function Header() {
    const { collapseSidebar } = useProSidebar();
    return (
      <>
        <div className="header_outer_wrap">
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="side_bar_toggle_wrap">
                    <button type="button" className="side_bar_toggle_inner_wrap" onClick={() => collapseSidebar()}>
                        <img src={sidetoggle} alt="" />
                    </button>
                </div>
                <a className="navbar-brand" href="/">Oriens EAM</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown header_icon_outer_wrap remove_arrow">
                            <UncontrolledDropdown>
                                <DropdownToggle>
                                    <div className="question_icon_outer_wrap">
                                        <img src={question} alt="question" />
                                    </div>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>Header</DropdownItem>
                                    <DropdownItem>Another Action</DropdownItem>
                                    <DropdownItem>Another Action</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </li>
                        <li className="nav-item active header_icon_outer_wrap">
                            <div className="bell_notification_outer_wrap">
                                <a className="nav-link" href="/">
                                    <img src={Bell} alt="Bell"/>
                                </a>
                                <span className="notification_count_wrap">10</span>
                            </div>
                        </li>
                        
                        <li className="nav-item dropdown arrow_icon">
                            <UncontrolledDropdown>
                                <DropdownToggle>
                                    <div className="profile_avatar_header_wrap">
                                        <img src={avatar} alt="avatar"/>
                                    </div>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>Header</DropdownItem>
                                    <DropdownItem>Another Action</DropdownItem>
                                    <DropdownItem>Another Action</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
      </>
     )
 }

export default Header;