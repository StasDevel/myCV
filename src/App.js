import './App.css';
import React, {useState} from 'react';
import SidebarRight from './Components/sidebarRight/sidebar_right';
import BoxMe from './Components/boxMe/boxMe';
import Skills from './Components/description/skills/skills';
import About from './Components/description/about/about';

import {HashRouter, Routes, Route} from 'react-router-dom';
import Experience from './Components/description/experience/experience';
import Protfolio from './Components/description/portfolio/portfolio';


function App() {
  let [directory, setDirectory] = useState(`About`);

  function addDirectory (dir) { setDirectory(dir)} ;

  return (
    <div className='mainContainer'>
      <BoxMe/>
      <div className='mainContainer__content'>
        <HashRouter>
          <div className='navPos'>
            <div className='navPos_decor'></div>
            {directory}
          </div>
          <div className='main-about-container'>
            <SidebarRight addDirectory={addDirectory}/>
            <div className='about-container'>
                <Routes>
                    <Route path='/' exact element={<About/>}></Route>
                    <Route path='/skills' element={<Skills/>}></Route>
                    <Route path='/experience' element={<Experience/>}></Route>
                    <Route path='/portfolio/*' element={<Protfolio/>}></Route>
                </Routes>
            </div>
          </div>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
