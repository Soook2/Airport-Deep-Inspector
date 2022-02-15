import React from 'react'

import NavBarlogo from '../../img/navbar_logo.png'
import NavBarAirplane from '../../img/NavBarAirplane.png'

export default function Navbar() {

    return (
        <>

            <div style={{color:"white", fontSize:"130%", fontWeight:"bold", marginBottom:"50px"}}>
                <img src={NavBarlogo} alt="" style={{height:"60px", position:"relative"}}/>
                <div style={{position:"absolute", zIndex:"5", marginTop:"-45px", marginLeft:"25px", letterSpacing:"1.3px"}}>
                Airport <br />
                Deep Inspector
                </div>
            </div>
            <a href= "/">
                <div className="LeftMenuBar" style={{backgroundColor:window.location.href.indexOf('panorama') === -1 && 
                                                                    window.location.href.indexOf('uav') === -1  && 
                                                                    window.location.href.indexOf('defectdetector') === -1 &&
                                                                    window.location.href.indexOf('defectmeasuer') === -1 ? "rgb(90, 110, 233)" : "none",
                                                    color:window.location.href.indexOf('panorama') === -1 && 
                                                        window.location.href.indexOf('uav') === -1 &&
                                                        window.location.href.indexOf('defectdetector')=== -1 &&
                                                        window.location.href.indexOf('defectmeasuer') === -1 ? "white" : "none",
                                                    textDecoration:"none"}}>
                    Information
                </div>
            </a>

            <a href="/panorama/Hor" >
                <div className="LeftMenuBar" style={{backgroundColor:window.location.href.indexOf("panorama") > -1 ? "rgb(90, 110, 233)" : "none",
                                                    color: window.location.href.indexOf("panorama") > -1 ? "white" : "none"
                                                    , textDecoration:"none"}}>
                    Panorama
                </div>
            </a>
            <a href="/defectdetector" >
                <div className="LeftMenuBar" style={{backgroundColor:window.location.href.indexOf("defectdetector") > -1 ? "rgb(90,110,233)" : "none",
                                                    color: window.location.href.indexOf("defectdetector") > -1 ? "white" : "none",
                                                    textDecoration:"none"}}>
                    Defect Detector
                </div>
            </a>
            <a href="/defectmeasuer"  >
                <div className="LeftMenuBar"  style={{backgroundColor:window.location.href.indexOf("defectmeasuer") > -1 ? "rgb(90,110,233)" : "none",
                                                    color: window.location.href.indexOf("defectmeasuer") > -1 ? "white" : "none",
                                                    textDecoration:"none"}}>
                    Defect Measuer
                </div>
            </a>
            <div className="LeftMenuBar">
                Defect Drawer
            </div>
            <div className="LeftMenuBar">
                XAI
            </div>
            <a href="/uav" >
            <div className="LeftMenuBar" style={{backgroundColor:window.location.href.indexOf('uav') > -1 ? "rgb(90, 110, 233)" : "none",
                                                color: window.location.href.indexOf('uav') > -1 ? "white" : "none"
                                                , textDecoration:"none"}}>
                    UAV
            </div>
            </a>

            <img src={NavBarAirplane} alt="" style={{width:"60px", position:"absolute", bottom:"0px", marginLeft:"50px"}}/>

            {/* <div style={{width:"1920px", height:"50px", backgroundColor:"#313131", fontFamily:"pretendard"}}>
                <div style={{float:"left"}}>
                <img src={NavBarlogo} alt="" style={{height:"50px"}}/>
                </div>

                <div>
                <p style={{float:"left", lineHeight:"50px", color:"white",  marginLeft:"-40px", fontSize:"20px", letterSpacing:"1.5px", fontWeight:"bold",textDecoration:"none"}}>
                    Airport Deep Inspector
                </p>
                </div>  

                <div style={{float:"left", lineHeight:"50px",   marginLeft:"200px", fontSize:"16px"}}>
                    <a href="/" style={{color: window.location.href.indexOf('panorama') !== -1 || window.location.href.indexOf('uav') !== -1 ? "#A1D9EF" : "white",textDecoration:"none"}}>
                    Information
                    </a>
                </div>  

                <div style={{float:"left", lineHeight:"50px", color:"#A1D9EF",  marginLeft:"40px", fontSize:"16px"}}>
                    <a href="/panorama/Hor" style={{color: window.location.href.indexOf('panorama') !== -1 ? "white" : "#A1D9EF", textDecoration:"none"}}>
                    Panorama                    
                    </a>
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

                <div style={{float:"right", lineHeight:"50px", color:"#A1D9EF",  marginRight:"40px", fontSize:"16px"}}>
                    MyPage
                </div>         
            </div> */}
        </>
    )
}
