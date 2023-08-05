import React from "react";
import './petProjects.css';

export default function PetProjects ({proj}) {
    return (
        <>
                <div className="petProjContainer__examples">
                    {proj.length > 0 ? proj.map(item => {
                        return <div className="petProjContainer__example">
                            <img  src={item.image} className="exampleImage"></img>
                            <div className="darkBack">
                                <div class="text-box">
                                    <a href={item.link} class="btn btn-white btn-animate" target="_blanck">Watch</a>
                                </div>
                            </div>
                        </div>
                    }) : <h2 className="plug">Not yet</h2>}
                </div>
        </>
    )
}

                