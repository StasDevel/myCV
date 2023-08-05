import React, { useState } from "react";
import "./sidebar_right.css"
import { Link, useLocation } from "react-router-dom";


export default function SidebarRight ({addDirectory}) {
    const url = useLocation();
    const [iconsArray, setIconsArray] = useState([
        {
            img: <svg width="8" height="8" viewBox="0 0 8 8" className="navBar_icon">
            <path d="M4 0c-1.1 0-2 1.12-2 2.5s.9 2.5 2 2.5 2-1.12 2-2.5-.9-2.5-2-2.5zm-2.09 5c-1.06.05-1.91.92-1.91 2v1h8v-1c0-1.08-.84-1.95-1.91-2-.54.61-1.28 1-2.09 1-.81 0-1.55-.39-2.09-1z" />
            </svg>,
            active: true,
            link: '/',
            directory: `ABOUT`
        },
        {
            img: <svg width="8" height="8" viewBox="0 0 8 8" className="navBar_icon">
            <path d="M.75 0c-.41 0-.75.34-.75.75v5.5c0 .41.34.75.75.75h6.5c.41 0 .75-.34.75-.75v-5.5c0-.41-.34-.75-.75-.75h-6.5zm.25 1h1v1h-1v-1zm2 0h4v1h-4v-1zm-2 2h1v1h-1v-1zm2 0h4v1h-4v-1zm-2 2h1v1h-1v-1zm2 0h4v1h-4v-1z" />
            </svg>,
            active: false,
            link: '/skills',
            directory: `SKILLS`
        },
        {
            img: <svg width="8" height="8" viewBox="0 0 8 8" className="navBar_icon">
            <path d="M3 0c-.55 0-1 .45-1 1v5.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-1.5h-1v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-3h-4v-2.5c0-.28.22-.5.5-.5s.5.22.5.5v1.5h4v-2c0-.55-.45-1-1-1h-4z" />
            </svg>,
            active: false,
            link: '/experience',
            directory: `EXPIRIENCE`
        },
        {
            img: <svg width="8" height="8" viewBox="0 0 8 8" className="navBar_icon">
            <path d="M0 0v2h8v-1h-5v-1h-3zm0 3v4.5c0 .28.22.5.5.5h7c.28 0 .5-.22.5-.5v-4.5h-8z" />
            </svg>,
            active: false,
            link: '/portfolio/petProjects',
            link1: '/portfolio/works',
            directory: `PORTFOLIO`
        }
    ])

    iconsArray.map((item) => {
        if (url.pathname === (item.link) || url.pathname.includes(item.link1)) { addDirectory(item.directory); item.active = true} else {item.active = false}
    })

    function colorItem (number) {
        setIconsArray(iconsArray.map((item, index) => {if (number != index) {item.active = false} else {
            addDirectory(item.directory)
            item.active = true};
            return item
        }))
    }


    return (
        <div className="navBar">
            <ul className="navBar__iconContainer">
                {iconsArray.map((item, index) => <Link to={item.link}><li className="navBar_icon-wrapper" style={{backgroundColor:`${item.active ? "#1FA184" : ""}`}} onClick={() => colorItem(index)}>{item.img}</li></Link>)}
            </ul>
            
        </div>
    )
}