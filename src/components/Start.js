import React from 'react';
import ar_icon from '../../src/assets/icons/augmented-reality.png';
import { useNavigate } from "react-router-dom";

const Start = () => {
const navigate = useNavigate();

  return (
    <div className="start-main flex flex-c w-100" style={{height:'100vh',width:'100%',justifyContent:'center',alignItems:'center',overflowY:'hidden'}}>
        <div className="icon-area">
            <img src={ar_icon} width="120px" height="120px"/>
        </div>
        <div className="main-area flex flex-c" style={{textAlign:'center',marginTop:'1.5rem'}}>
            <div className="top"><span style={{fontWeight:'bold'}}>BK</span> Codex</div>
            <div className="bottom">An Image Tracking AR Application</div>
        </div>
        <div className="action-area" style={{width:'20rem'}}>
            <button className="get-started-btn" onClick={()=>{navigate('/ar-app')}}>Get Started</button>
        </div>
    </div>
  )
}

export default Start