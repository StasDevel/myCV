import React, { useState } from "react";
import "./skills.css"


export default function Skills () {
   

    return (
        
       <div className="skillsContainer">
        <div className="skillsContainer__personalInfo">
            <h3 className="skillsContainer__head">Personal Information</h3>
            <ul className="skillsContainer__listContainer">
                <li className="skillsContainer__listItem">
                    <p className="skillsContainer__listName">FULL NAME</p>
                    <p className="skillsContainer__listRes">Stanislav Shkradov</p>
                </li>
                <li className="skillsContainer__listItem">
                    <p className="skillsContainer__listName">D.O.B.</p>
                    <p className="skillsContainer__listRes">07 June 1998</p>
                </li>
                <li className="skillsContainer__listItem">
                    <p className="skillsContainer__listName">LOCATION</p>
                    <p className="skillsContainer__listRes">Minsk, Belarus</p>
                </li>
                <li className="skillsContainer__listItem">
                    <p className="skillsContainer__listName">E-MAIL</p>
                    <p className="skillsContainer__listRes">studingdev@gmail.com</p>
                </li>
            </ul>
        </div>
        <div className="skillsContainer__languages">
            <h3 className="skillsContainer__head">Languages</h3>
            <ul className="skillsContainer__listContainer">
                <li className="skillsContainer__listItem">
                    <p className="skillsContainer__listName">RUSSIAN</p>
                    <p className="skillsContainer__listRes">native</p>
                </li>
                <li className="skillsContainer__listItem">
                    <p className="skillsContainer__listName">ENGLISH</p>
                    <p className="skillsContainer__listRes">B1</p>
                </li>
            </ul>
        </div>
        <div className="skillsContainer__professionalSkills">
            <h3 className="skillsContainer__head">Skills</h3>
            <ul>
                <li className="skillsContainer__listItem">
                    <div class="range__label">HTML</div>
                    <div class="range" style={{'--p':"85"}}></div>
                </li>
                <li className="skillsContainer__listItem">
                    <div class="range__label">CSS</div>
                    <div class="range" style={{'--p':"75"}}></div>
                </li>
                <li className="skillsContainer__listItem">
                    <div class="range__label">JS</div>
                    <div class="range" style={{'--p':"60"}}></div>
                </li>
                <li className="skillsContainer__listItem">
                    <div class="range__label">React</div>
                    <div class="range" style={{'--p':"35"}}></div>
                </li>
                <li className="skillsContainer__listItem">
                    <div class="range__label">Git</div>
                    <div class="range" style={{'--p':"40"}}></div>
                </li>
                <li className="skillsContainer__listItem">
                    <div class="range__label">Figma</div>
                    <div class="range" style={{'--p':"20"}}></div>
                </li>
            </ul>
        </div>
        <div className="skillsContainer__individualQualities">
        <h3 className="skillsContainer__head">Personal qualities</h3>
            <ul>
                <li className="skillsContainer__listItem-together">
                    <p className="skillsContainer__listName-together">&#10004;</p>
                    <p className="skillsContainer__listName-quality">Self Motivated</p>
                </li>
                <li className="skillsContainer__listItem-together">
                    <p className="skillsContainer__listName-together">&#10004;</p>
                    <p className="skillsContainer__listName-quality">Responsible </p>
                </li>
                <li className="skillsContainer__listItem-together">
                    <p className="skillsContainer__listName-together">&#10004;</p>
                    <p className="skillsContainer__listName-quality">Diligent</p>
                </li>
                <li className="skillsContainer__listItem-together">
                    <p className="skillsContainer__listName-together">&#10004;</p>
                    <p className="skillsContainer__listName-quality">Creative Thinking</p>
                </li>
                <li className="skillsContainer__listItem-together">
                    <p className="skillsContainer__listName-together">&#10004;</p>
                    <p className="skillsContainer__listName-quality">Active</p>
                </li>
            </ul>
        </div>
       </div>
    )
}