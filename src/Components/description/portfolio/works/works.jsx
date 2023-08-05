import React from "react";
import './works.css';

export default function Works ({works}) {
    return (
        <>
                <div className="worksContainer__examples">
                    {works.length > 0 ? works.map(item => {
                        return <div className="worksContainer__example">
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

                