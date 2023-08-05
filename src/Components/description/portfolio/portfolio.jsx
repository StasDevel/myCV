import React, { useState } from "react";
import "./portfolio.css";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import PetProjects from "./petProjects/petProjects";
import shelterImg from '../../../img/sites images/shelter.jpg';
import zooImg from '../../../img/sites images/zoo.jpg';
import Works from "./works/works";


export default function Portfolio () {
    let [button, changeButton] = useState([
        {
            content: "Pet projects",
            show: true,
            link: 'petProjects'
        },
        {
            content: "Works",
            show: false,
            link: 'works'
        }
    ])

    function turner (num) {
        return button.map((item, index) => {index == num ? item.show = true : item.show = false
            return item;
        });
    }

    let worksList = {
        petProj: [
            {
                link: 'https://rolling-scopes-school.github.io/stasdevel-JSFE2023Q1/shelter/main/index.html',
                image: shelterImg,
            },
            {
                link: 'https://rolling-scopes-school.github.io/stasdevel-JSFE2022Q3/online-zoo/pages/main/index.html',
                image: zooImg,
            },
        ],
        works: [
            
        ]
    }

    return (
        <>
            <div className="worksContainer">
                <ul className="worksContainer__navigation">
                    {button.map((item, index) => {
                        return <Link to={item.link} className={`navigation__item ${item.show ? 'active' : ''}`}><li onClick={() => changeButton(turner(index))}>{item.content}</li></Link>
                    })}
                </ul>
                    <Routes>
                        <Route path={"petProjects"} element={<PetProjects proj={worksList.petProj}/>}></Route>
                        <Route path={"works"} element={<Works works={worksList.works}/>}></Route>
                    </Routes>
            </div>
        </>
    )
}