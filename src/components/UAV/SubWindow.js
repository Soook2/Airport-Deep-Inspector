import React, { useState } from 'react'
import { Drawer, Modal, Slider } from 'antd';
import Clock from 'react-live-clock';
import { Joystick } from 'react-joystick-component';

import droneShot from '../../img/droneShot.png'

import { faBars, faPlusCircle, faMinusCircle, faCamera, faVideo, faFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SubWindow() {

    const [sideMenu, setSideMenu] = useState(false);
    const [StateMsg, setStateMsg] = useState(false);
    const [Gimbal, setGimbal] = useState(false);
    const [Drone, setDrone] = useState(false);
    const [Contoller, setContoller] = useState(false); 
    const [functionbar, setFuntionbar] = useState(true);   

    const showDrawer = () => {
        setSideMenu(true);
    };
    
    const onClose = () => {
        setSideMenu(false);
    };

    const handleStateMsgOpen = () => {
        setStateMsg(true);
        setSideMenu(false);
    }

    const handleStateMsgClose = () => {
        setStateMsg(false);
    }

    const handleGimbalOpen = () => {
        setGimbal(true);
        setSideMenu(false);
    }

    const handleGimbalClose = () => {
        setGimbal(false);
    }

    const handleDroneOpen = () =>{
        setDrone(true);
        setSideMenu(false);
    }

    const handleDroneClose = () => {
        setDrone(false);
    }

    const handleControllerOpen = () =>{
        setContoller(true);
        setSideMenu(false);
    }

    const handleControllerClose = () => {
        setContoller(false);
    }

    const functionBarOpen = () => {
        setFuntionbar(true);
        setSideMenu(false);
    }

    const functionBarClose = () => {
        setFuntionbar(false);
    }

    const StateMessage = () => {
        return(
            <div style={{width:"250px", height:"250px", backgroundColor:"rgba(0,0,0,0.5)", float:"left", position:"absolute", bottom:"10px", padding:"10px", fontSize:"20px", fontFamily:"pretendard"}}>
                <div style={{float:"left", marginLeft:"40px"}}>
                ?????? ?????? ?????????
                </div>
                <div onClick={handleStateMsgClose} style={{width:"25px", height:"25px", border:"1px solid white", float:"left", fontSize:"15px", marginLeft:"30px", cursor:"pointer", textAlign:"center"}}>
                    X
                </div>
                <hr style={{marginTop:"40px"}}/>
                <div style={{fontSize:"15px", textAlign:"center"}}>
                    <Clock format={'HH??? mm??? ss??? '} ticking={true} timazone={'KR/Pacific'}/> Okay!
                </div>
            </div> 
        )
    }

    const FunctionBar = () => {
        return(
            <div>
                <div style={{width:"500px", height:"100px", backgroundColor:"rgba(0,0,0,0.5)", float:"left", marginLeft:"400px", padding:"5px", fontFamily:"pretendard"}}>
                    <div style={{width:"90px", height:"90px", border:"2px solid white", padding:"15px", float:"left"}}>
                        <Joystick size={55} sticky={false} baseColor="none" baseShape='rectangle' stickColor="white" ></Joystick>
                    </div>
                    <div style={{width:"80px", height:"90px", float:"left", textAlign:"center",paddingTop:"23px"}}>
                        Tilt/Pen 
                        <br/>
                        0/0
                    </div>
                    <div style={{width:"150px", height:"90px", float:"left", borderLeft:"2px solid white", textAlign:"center", paddingTop:"15px"}}>
                        ?????? ?????? ?????? ??????
                        <br />
                        <FontAwesomeIcon icon={faPlusCircle} size="2x" style={{cursor:"pointer", marginRight:"10px", marginTop:"10px"}}/>
                        <FontAwesomeIcon icon={faMinusCircle} size="2x" style={{cursor:"pointer", marginLeft:"10px", marginTop:"10px"}}/>
                    </div>
                    <div style={{width:"150px", height:"90px", float:"left", borderLeft:"2px solid white", textAlign:"center", paddingTop:"15px"}}>
                        ?????? ??? ????????????
                        <br />
                        <FontAwesomeIcon icon={faCamera} size="2x" style={{cursor:"pointer", marginRight:"12px", marginTop:"10px"}}/>
                        <FontAwesomeIcon icon={faVideo} size="2x" style={{cursor:"pointer", marginRight:"12px", marginTop:"10px"}}/>
                        <a href='/subwindow/mission'>
                            <FontAwesomeIcon icon={faFlag} size="2x" style={{cursor:"pointer", marginTop:"12px", color:"white"}} />
                        </a>
                    </div>
                    <div onClick={functionBarClose} style={{width:"20px", height:"23px", float:"left", textAlign:"center", border:"1px solid white", cursor:"pointer"}}>
                        X
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div style={{position:"relative", fontFamily:"pretendard", height:"100vh"}}>
            <div style={{position:"absolute", color:"white", width:"100vw", height:"100vh", padding:"10px"}}>
                {/* ?????? ?????? div */}
                <div style={{width:"50px", height:"400px", textAlign:"center", float:"left"}}>
                    <FontAwesomeIcon icon={faBars} size="3x" onClick={showDrawer} style={{cursor:"pointer"}}/>
                    <button style={{width:"40px", height:"40px", borderRadius:"5px", border:"1px solid white", color:"black", marginTop:"20px", cursor:"pointer"}}>??????</button>
                    <button style={{width:"40px", height:"40px", borderRadius:"5px", border:"1px solid white", color:"black", marginTop:"10px", cursor:"pointer"}}>??????</button>
                    <button style={{width:"40px", height:"40px", borderRadius:"5px", border:"1px solid white", color:"black", marginTop:"10px", cursor:"pointer"}}>??????</button>
                    <button style={{width:"40px", height:"40px", borderRadius:"5px", border:"1px solid white", color:"black", marginTop:"10px", cursor:"pointer"}}>??????</button>
                    <button style={{width:"40px", height:"40px", borderRadius:"5px", border:"1px solid white", color:"black", marginTop:"10px", cursor:"pointer"}}>??????</button>
                    <button style={{width:"40px", height:"40px", borderRadius:"5px", border:"1px solid white", color:"black", marginTop:"10px", cursor:"pointer"}}>??????</button>
                    
                        <Drawer title="Function Menu" placement="left" onClose={onClose} visible={sideMenu}>
                        <div style={{textAlign:"center"}}>
                            <a href='/subwindow/mission'>
                                <button style={{width:"300px", height:"40px", border:"0px", borderRadius:"5px", backgroundColor:"rgb(90, 110, 233)", color:"white", fontSize:"17px", cursor:"pointer"}}>
                                    ?????? ??????
                                </button>
                            </a>
                            <button onClick={handleStateMsgOpen} style={{width:"300px", height:"40px", border:"0px", borderRadius:"5px", backgroundColor:"rgb(90, 110, 233)", color:"white", fontSize:"17px", cursor:"pointer", marginTop:"20px"}}>
                                ?????? ?????????
                            </button>
                            <button onClick={handleGimbalOpen} style={{width:"300px", height:"40px", border:"0px", borderRadius:"5px", backgroundColor:"rgb(90, 110, 233)", color:"white", fontSize:"17px", cursor:"pointer", marginTop:"20px"}}>
                                ?????? ??????
                            </button>
                            <button onClick={handleDroneOpen} style={{width:"300px", height:"40px", border:"0px", borderRadius:"5px", backgroundColor:"rgb(90, 110, 233)", color:"white", fontSize:"17px", cursor:"pointer", marginTop:"20px"}}>
                                ?????? ??????
                            </button>
                            <button onClick={handleControllerOpen} style={{width:"300px", height:"40px", border:"0px", borderRadius:"5px", backgroundColor:"rgb(90, 110, 233)", color:"white", fontSize:"17px", cursor:"pointer", marginTop:"20px"}}>
                                ???????????? ??????
                            </button>
                            <button onClick={functionBarOpen} style={{width:"300px", height:"40px", border:"0px", borderRadius:"5px", backgroundColor:"rgb(90, 110, 233)", color:"white", fontSize:"17px", cursor:"pointer", marginTop:"20px"}}>
                                ?????? ???
                            </button>
                        </div>
                        </Drawer>

                    

                    
                </div>
                {/* ?????? ??? div */}

                {/* ??????????????? */}
                {StateMsg ? <><StateMessage /></> : <></>}

                {/* ????????? */}
                {functionbar ? <><FunctionBar /></> : <></>}

                {/* ?????? ????????? */}
                <Modal visible={Gimbal} onCancel={handleGimbalClose} footer={null} width={400} style={{marginTop:"150px", textAlign:"center", fontFamily:"pretendard", borderRadius:"8px"}}>
                    <p style={{fontSize:"23px", marginBottom:"0px"}}>?????? ?????? ??????</p>
                    <hr />
                    <p style={{marginTop:"15px"}}>?????? IP/Port ??????</p>
                    <p style={{float:"left", marginLeft:"60px"}}>IP</p>
                    <input style={{marginLeft:"-20px"}} placeholder='URL...'></input>
                    <br />
                    <p style={{float:"left", marginLeft:"-15px", marginTop:"10px"}}>Port</p>
                    <input style={{marginLeft:"-31px", marginTop:"10px"}} placeholder='URL...'></input>
                    <br />
                    <br />
                    <button onClick={handleGimbalClose} style={{width:"80px", height:"30px", border:"0px", borderRadius:"5px", backgroundColor:"rgb(90, 110, 233)", color:"white", fontSize:"15px", cursor:"pointer"}}>??????</button>
                    <button onClick={handleGimbalClose} style={{width:"80px", height:"30px", border:"1px solid rgb(90, 110, 233)", borderRadius:"5px", backgroundColor:"white", color:"rgb(90, 110, 233)", fontSize:"15px", cursor:"pointer", marginLeft:"20px"}}>??????</button>
                </Modal>

                {/* ?????? ????????? */}
                <Modal visible={Drone} onCancel={handleDroneClose} footer={null} width={400} style={{marginTop:"150px", textAlign:"center", fontFamily:"pretendard", borderRadius:"8px"}}>
                    <p style={{fontSize:"23px", marginBottom:"0px"}}>?????? ?????? ??????</p>
                    <hr />
                    <p style={{marginTop:"15px"}}>?????? URI ??????</p>
                    
                    <input placeholder='URI...'></input>
                    <br />
                    <br />
                    <button onClick={handleDroneClose} style={{width:"80px", height:"30px", border:"0px", borderRadius:"5px", backgroundColor:"rgb(90, 110, 233)", color:"white", fontSize:"15px", cursor:"pointer"}}>??????</button>
                    <button onClick={handleDroneClose} style={{width:"80px", height:"30px", border:"1px solid rgb(90, 110, 233)", borderRadius:"5px", backgroundColor:"white", color:"rgb(90, 110, 233)", fontSize:"15px", cursor:"pointer", marginLeft:"20px"}}>??????</button>
                </Modal>

                {/* ???????????? ?????? ????????? */}
                <Modal visible={Contoller} onCancel={handleControllerClose} footer={null} width={400} style={{marginTop:"100px", textAlign:"center", fontFamily:"pretendard", borderRadius:"8px"}}>
                    <p style={{fontSize:"23px", marginBottom:"0px"}}>???????????? ??????</p>
                    <hr />
                    <div style={{width:"350px", height:"150px"}}>
                        <div style={{width:"150px", height:"150px", float:"left", textAlign:"left"}}>
                            <div style={{width:"150px", height:"30px", textAlign:"center"}}>
                                ??????
                            </div>
                            <div style={{width:"150px", height:"30px", paddingLeft:"5px"}}>
                                X
                                {/* <button>aaaa</button> */}
                                <Slider defaultValue={30} style={{width:"120px", marginLeft:"20px", marginTop:"-15px"}}/>
                            </div>
                            <div style={{width:"150px", height:"30px", paddingLeft:"5px"}}>
                                Y
                                {/* <button>aaaa</button> */}
                                <Slider defaultValue={30} style={{width:"120px", marginLeft:"20px", marginTop:"-15px"}}/>
                            </div>
                            <div style={{width:"150px", height:"30px", paddingLeft:"5px"}}>
                                RX
                                {/* <button>aaaa</button> */}
                                <Slider defaultValue={30} style={{width:"120px", marginLeft:"20px", marginTop:"-15px"}}/>
                            </div>
                            <div style={{width:"150px", height:"30px", paddingLeft:"5px"}}>
                                RY
                                {/* <button>aaaa</button> */}
                                <Slider defaultValue={30} style={{width:"120px", marginLeft:"20px", marginTop:"-15px"}}/>
                            </div>
                        </div>
                        <div style={{width:"70px", height:"150px", float:"left"}}> 
                            <div style={{width:"70px", height:"30px", textAlign:"center"}}>
                                ??????
                            </div>
                            <div style={{width:"70px", height:"30px", paddingLeft:"5px"}}>
                            0000
                            </div>
                            <div style={{width:"70px", height:"30px", paddingLeft:"5px"}}>
                            0000
                            </div>
                            <div style={{width:"70px", height:"30px", paddingLeft:"5px"}}>
                            0000
                            </div>
                            <div style={{width:"70px", height:"30px", paddingLeft:"5px"}}>
                            0000
                            </div>
                        </div>
                        <div style={{width:"90px", height:"150px", float:"left"}}> 
                            <div style={{width:"90px", height:"30px", textAlign:"center"}}>
                                ?????? ??????
                            </div>
                            <div style={{width:"90px", height:"30px", paddingLeft:"5px"}}>
                            0000
                            </div>
                            <div style={{width:"90px", height:"30px", paddingLeft:"5px"}}>
                            0000
                            </div>
                            <div style={{width:"90px", height:"30px", paddingLeft:"5px"}}>
                            0000
                            </div>
                            <div style={{width:"90px", height:"30px", paddingLeft:"5px"}}>
                            0000
                            </div>
                        </div>
                        <div style={{width:"40px", height:"150px", float:"left"}}> 
                            <div style={{width:"40px", height:"30px", textAlign:"center"}}>
                                ??????
                            </div>
                            <div style={{width:"40px", height:"30px", paddingLeft:"5px"}}>
                                <input type="checkbox"/>
                            </div>
                            <div style={{width:"40px", height:"30px", paddingLeft:"5px"}}>
                                <input type="checkbox"/>
                            </div>
                            <div style={{width:"40px", height:"30px", paddingLeft:"5px"}}>
                                <input type="checkbox"/>
                            </div>
                            <div style={{width:"40px", height:"30px", paddingLeft:"5px"}}>
                                <input type="checkbox"/>
                            </div>
                        </div>
                    </div>

                    <div style={{width:"350px", height:"90px", marginBottom:"20px", marginTop:"10px"}}>
                        <div style={{width:"170px", height:"90px", border:"1px solid gray", marginRight:"10px", float:"left", textAlign:"left", padding:"5px"}}>
                            <div style={{width:"160px"}}>
                            ?????? ?????? ??????
                            </div>

                            <div style={{fontSize:"12px", marginTop:"10px", float:"left"}}>
                                altHold
                                <input type="radio" name="aaaa" style={{marginLeft:"10px"}}/>
                            </div>
                            <div style={{fontSize:"12px", marginTop:"10px", float:"left", marginLeft:"20px"}}>
                                ?????? Off
                                <input type="radio" name="aaaa" style={{marginLeft:"10px"}}/>
                            </div>

                            <div style={{fontSize:"12px", marginTop:"10px", float:"left"}}>
                                Loiter
                                <input type="radio" name="aaaa" style={{marginLeft:"10px"}}/>
                            </div>
                            <div style={{fontSize:"12px", marginTop:"10px", float:"left", marginLeft:"20px"}}>
                                ?????? On
                                <input type="radio" name="aaaa" style={{marginLeft:"10px"}}/>
                            </div>
                        </div>
                        <div style={{width:"170px", height:"90px", border:"1px solid gray", float:"left", textAlign:"left", padding:"5px"}}>
                        <div style={{width:"160px"}}>
                            ?????? ??????
                            </div>

                            <div style={{fontSize:"12px", marginTop:"10px"}}>
                                ?????? 1
                                <input type="radio" name="bbbb" style={{marginLeft:"10px"}}/>
                            </div>
                            <div style={{fontSize:"12px", marginTop:"10px"}}>
                                ?????? 2
                                <input type="radio" name="bbbb" style={{marginLeft:"10px"}}/>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleControllerClose} style={{width:"80px", height:"30px", border:"0px", borderRadius:"5px", backgroundColor:"rgb(90, 110, 233)", color:"white", fontSize:"15px", cursor:"pointer"}}>?????? ??????</button>
                    <button onClick={handleControllerClose} style={{width:"80px", height:"30px", border:"1px solid rgb(90, 110, 233)", borderRadius:"5px", backgroundColor:"white", color:"rgb(90, 110, 233)", fontSize:"15px", cursor:"pointer", marginLeft:"20px"}}>??????</button>
                </Modal>
                

                <div style={{width:"200px", height:"30px", backgroundColor:"rgba(0,0,0,0.5)", float:"right", lineHeight:"30px", textAlign:"center"}}>
                    <Clock format={'YYYY-MM-DD HH??? mm??? ss??? '} ticking={true} timazone={'KR/Pacific'}/>
                </div>

                <div style={{width:"250px", height:"300px", backgroundColor:"rgba(0,0,0,0.5)", position:"absolute", right:"0", bottom:"0", marginBottom:"10px", marginRight:"10px", padding:"20px", fontSize:"17px"}}>
                    <p>??????</p>
                    <p style={{marginTop:"-10px"}}>??????</p>
                    <p style={{marginTop:"-10px"}}>??????</p>
                    <p style={{marginTop:"-10px"}}>????????????</p>
                    <p style={{marginTop:"-10px"}}>??????</p>
                    <p style={{marginTop:"-10px"}}>?????????</p>
                    <p style={{marginTop:"-10px"}}>GPS</p>
                    <p style={{marginTop:"-10px"}}>MGRS</p>
                </div>
            </div>
            <img src={droneShot} alt="" style={{height:"100vh", width:"100%", scrollbarWidth:"none"}}/>
        </div>
    )
}