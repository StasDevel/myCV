import React from "react";
import "./boxMe.css"
import myPhoto from "../../img/myPhoto/me.png";
import telegram from "../../img/icons/telegram.svg";
import gitHub from "../../img/icons/gitHub.svg";
import discord from "../../img/icons/discord.svg";

export default function BoxMe () {
    return (
        <div className="boxMe-container">
            <div className="boxMe-container__wrapper">
                <div className="boxMe-container__photo-wrapper">
                    <img className="boxMe-container__photo" src={myPhoto} alt="me"/>
                </div>
                <h2 className="boxMe-container__name">Stanislav Shkradov</h2>
                <h3 className="boxMe-container__level">Starting Front-end Developer</h3>
                <div className="boxMe-container__links">
                    <div className="boxMe-container__small"><a href="https://t.me/StasDev" target="_blank"><img className="boxMe-container__icon" src={telegram} alt="icon"/></a></div>
                    <div className="boxMe-container__small"><a href="https://github.com/StasDevel" target="_blank"><img className="boxMe-container__icon" src={gitHub} alt="icon"/></a></div>
                    <div className="boxMe-container__small"><a href="https://discordapp.com/users/977955366866391051" target="_blank"><img className="boxMe-container__icon" src={discord} alt="icon"/></a></div>
                </div>
            </div>
        </div>
    )
}