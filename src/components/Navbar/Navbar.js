import React from 'react'

import NavBarlogo from '../../img/navbar_logo.png'

export default function Navbar() {

    return (
        <>
            <div style={{width:"1920px", height:"50px", backgroundColor:"#313131", fontFamily:"pretendard"}}>
                <div style={{float:"left"}}>
                <img src={NavBarlogo} alt="" style={{height:"50px"}}/>
                </div>

                <div>
                <a href="/" style={{float:"left", lineHeight:"50px", color:"white",  marginLeft:"-40px", fontSize:"20px", letterSpacing:"1.5px", fontWeight:"bold",textDecoration:"none"}}>
                    Airport Deep Inspector
                </a>
                </div>  

                <div style={{float:"left", lineHeight:"50px",   marginLeft:"200px", fontSize:"16px"}}>
                    <a href="/information/airport" style={{color: window.location.href.indexOf('information') !== -1 ? "white" : "#A1D9EF",textDecoration:"none"}}>
                    Information
                    </a>
                </div>  

                <div style={{float:"left", lineHeight:"50px", color:"#A1D9EF",  marginLeft:"40px", fontSize:"16px"}}>
                    Panorama                    
                </div>   

                <div style={{float:"left", lineHeight:"50px", color:"#A1D9EF",  marginLeft:"40px", fontSize:"16px"}}>
                    Crack / Defect Detector
                </div>

                <div style={{float:"left", lineHeight:"50px", color:"#A1D9EF",  marginLeft:"40px", fontSize:"16px"}}>
                    Crack / Defect Measure
                </div>

                <div style={{float:"left", lineHeight:"50px", color:"#A1D9EF",  marginLeft:"40px", fontSize:"16px"}}>
                    Crack / Defect Drawer
                </div>

                <div style={{float:"left", lineHeight:"50px", color:"#A1D9EF",  marginLeft:"40px", fontSize:"16px"}}>
                    XAI
                </div>

                <div style={{float:"left", lineHeight:"50px",  marginLeft:"40px", fontSize:"17px"}}>
                    <a href="/uav" style={{color: window.location.href.indexOf('uav') !== -1 ? "white" : "#A1D9EF", textDecoration:"none"}}>
                    UAV
                    </a>
                </div>           
            </div>
        </>
    )
}
