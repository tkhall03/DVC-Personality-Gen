'use client'

// import {LinkButtons} from './dvcComponents/linkButtons.js';
import {Common} from './dvcComponents/common.js';
import { useEffect, useState } from 'react';


export default function Home() {
  function onLoad()
  {
    Common.applyProperStyle();
    Common.preventContextMenu();
  }

  function loadSpineDragon() {
    Common.setDragonSpineOrImage("/dianu_01_f_adult_pb");
  }

  useEffect(() => {
    // call api or anything
    onLoad();
    loadSpineDragon();
    console.log("loaded");
  },[]);
  return (
      <div id= 'root' className='background'>
        <div className='linkButtonContainer'></div>
        <div>
          <img className='alignCenter' src="https://res.dvc.land/dvc-web/res/logo.png" alt="" />
        </div>
        <div>
          <img className='alignCenter' src="https://res.dvc.land/dvc-illust/dianu_02_adult.png" alt="" />
        </div>
        <div className='dragonCenter'>
          <div className='dragonField'>
            <img className='alignCenter' src="https://res.dvc.land/dvc-web/res/table.png"  alt=""></img>
          </div>
          <div className='drgaonDot'>
            <img id="dragon-image" className='alignCenter' alt="" />
            <canvas id="canvas-dragon" className="spineCanvas dragonCanvas" width="479" height="856"></canvas>
          </div>
        </div>
      </div>
  )
}
