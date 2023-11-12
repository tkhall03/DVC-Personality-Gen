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
    Common.setDragonSpineOrImage()
  }

  useEffect(onLoad);
{/* <div className='dragonCenter'>
        <div className='drgaonDot bg-white mt-100'>
          <canvas className="spineCanvas dragonCanvas bg-slate-600" width="1600" height="1564" onLoad={loadSpineDragon}></canvas>
        </div>
      </div> */}
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
            <canvas id="canvas-dragon" className="spineCanvas dragonCanvas"></canvas>
          </div>
        </div>
      </div>
  )
}
