import React, { useState } from 'react'
import { Drawer } from 'antd';
import Clock from 'react-live-clock';
import { Joystick } from 'react-joystick-component';

import marker from '../../img/marker.png'
import droneShot from '../../img/droneShot.png'

import { faBars, faPlusCircle, faMinusCircle, faCamera, faVideo, faFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SubWindowMission() {

    const [wayImg, setwayImg] = useState("");
    const [SubwayImg, setSubwayImg] = useState("");

    const [sideMenu, setSideMenu] = useState(false);

    const [functionbar, setFuntionbar] = useState(true); 

    const showDrawer = () => {
        setSideMenu(true);
    };
    
    const onClose = () => {
        setSideMenu(false);
    };

    const functionBarOpen = () => {
        setFuntionbar(true);
        setSideMenu(false);
    }

    const functionBarClose = () => {
        setFuntionbar(false);
    }

    const handleLeftClick = (e) => {
        var x = e.nativeEvent.offsetX;
        var y = e.nativeEvent.offsetY;
    
        // console.log(x);
        // console.log(y);
    
        var img = document.createElement("img");
        img.setAttribute("src", marker);
        img.setAttribute("alt", "아아아");
    
        img.style.position = "absolute";
        img.style.left = x - 25 + "px";
        img.style.top = y - 25 + "px";
        img.style.width = "50px";
    
        document.body.appendChild(img);
        console.log(img);

        
        setwayImg(img);
        setSubwayImg(wayImg);
        // console.log(wayImg);
        // console.log(SubwayImg);
    };

    const handleRightClick = (e) =>{
        e.preventDefault();
        setwayImg(SubwayImg);
        setSubwayImg(wayImg)
        document.body.removeChild(wayImg);
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
                        영상 배율 확대 축소
                        <br />
                        <FontAwesomeIcon icon={faPlusCircle} size="2x" style={{cursor:"pointer", marginRight:"10px", marginTop:"10px"}}/>
                        <FontAwesomeIcon icon={faMinusCircle} size="2x" style={{cursor:"pointer", marginLeft:"10px", marginTop:"10px"}}/>
                    </div>
                    <div style={{width:"150px", height:"90px", float:"left", borderLeft:"2px solid white", textAlign:"center", paddingTop:"15px"}}>
                        촬영 및 임무수행
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
            <div style={{position:"absolute", color:"white", width:"100vw", height:"100vh", padding:"10px"}} onClick={handleLeftClick} onContextMenu={handleRightClick}>
                {/* <div style={{position:"absolute", color:"white", width:"94vw", height:"95vh", marginLeft:"50px"}} > */}
                <div style={{width:"50px", height:"400px", textAlign:"center", float:"left"}}>
                        <FontAwesomeIcon icon={faBars} size="3x" onClick={showDrawer} style={{cursor:"pointer"}}/>
                        <button style={{width:"40px", height:"40px", borderRadius:"5px", border:"1px solid white", backgroundColor:"gray", marginTop:"20px", cursor:"pointer"}}>버튼</button>
                        <button style={{width:"40px", height:"40px", borderRadius:"5px", border:"1px solid white", backgroundColor:"gray", marginTop:"10px", cursor:"pointer"}}>버튼</button>
                        <button style={{width:"40px", height:"40px", borderRadius:"5px", border:"1px solid white", backgroundColor:"gray", marginTop:"10px", cursor:"pointer"}}>버튼</button>
                        <button style={{width:"40px", height:"40px", borderRadius:"5px", border:"1px solid white", backgroundColor:"gray", marginTop:"10px", cursor:"pointer"}}>버튼</button>

                        <a href='/subwindow' >
                            <button style={{width:"60px", height:"40px", borderRadius:"5px", border:"1px solid white", backgroundColor:"gray", marginTop:"480px", cursor:"pointer", color:"white"}}>나가기</button>
                        </a>
                        
                            <Drawer title="Funtion Menu" placement="left" onClose={onClose} visible={sideMenu}>
                            <div style={{textAlign:"center"}}>
                                <a href='/subwindow/mission'>
                                    <button style={{width:"300px", height:"40px", border:"0px", borderRadius:"5px", backgroundColor:"rgb(90, 110, 233)", color:"white", fontSize:"17px", cursor:"pointer"}}>
                                        임무 작성
                                    </button>
                                </a>
                                <button style={{width:"300px", height:"40px", border:"0px", borderRadius:"5px", backgroundColor:"rgb(90, 110, 233)", color:"white", fontSize:"17px", cursor:"pointer", marginTop:"20px"}}>
                                    상태 메시지
                                </button>
                                <button style={{width:"300px", height:"40px", border:"0px", borderRadius:"5px", backgroundColor:"rgb(90, 110, 233)", color:"white", fontSize:"17px", cursor:"pointer", marginTop:"20px"}}>
                                    짐벌 설정
                                </button>
                                <button style={{width:"300px", height:"40px", border:"0px", borderRadius:"5px", backgroundColor:"rgb(90, 110, 233)", color:"white", fontSize:"17px", cursor:"pointer", marginTop:"20px"}}>
                                    드론 설정
                                </button>
                                <button style={{width:"300px", height:"40px", border:"0px", borderRadius:"5px", backgroundColor:"rgb(90, 110, 233)", color:"white", fontSize:"17px", cursor:"pointer", marginTop:"20px"}}>
                                    컨트롤러 설정
                                </button>
                                <button onClick={functionBarOpen} style={{width:"300px", height:"40px", border:"0px", borderRadius:"5px", backgroundColor:"rgb(90, 110, 233)", color:"white", fontSize:"17px", cursor:"pointer", marginTop:"20px"}}>
                                기능 창
                                </button>
                            </div>
                            </Drawer>
                </div>

                {functionbar ? <><FunctionBar /></> : <></>}



                {/* <div style={{width:"400px", height:"780px", float:"left", marginLeft:"1030px", backgroundColor:"pink"}}> */}
                    <div style={{width:"200px", height:"30px", backgroundColor:"rgba(0,0,0,0.5)", float:"right", lineHeight:"30px", textAlign:"center"}}>
                        <Clock format={'YYYY-MM-DD HH시 mm분 ss초 '} ticking={true} timazone={'KR/Pacific'}/>
                    </div>
                    <div style={{width:"250px", height:"270px", backgroundColor:"rgba(0,0,0,0.5)", marginLeft:"150px", marginTop:"180px", padding:"20px", fontSize:"17px", position:"absolute", right:"10px"}}>
                        <p>순번</p>
                        <p style={{marginTop:"-10px"}}>위도</p>
                        <p style={{marginTop:"-10px"}}>경도</p>
                        <p style={{marginTop:"-10px"}}>고도</p>
                        <p style={{marginTop:"-10px"}}>속도</p>
                        <p style={{marginTop:"-10px"}}>정지</p>
                        <p style={{marginTop:"-10px"}}>임무</p>
                    </div>

                    <div style={{width:"400px", height:"250px", backgroundColor:"rgba(0,0,0,0.5)", marginTop:"50px", position:"absolute", bottom:"10px", right:"10px"}}>
                        <table border="1" width="400" height="150">
                            <th>순번</th>
                            <th>종류</th>
                            <th>고도</th>
                            <th>속도</th>
                            <th>정지</th>
                            <tr align="center">
                                <td>1</td>
                                <td>Move</td>
                                <td>100</td>
                                <td>11</td>
                                <td>20</td>
                            </tr>
                            <tr align="center">
                                <td>2</td>
                                <td>Move</td>
                                <td>100</td>
                                <td>11</td>
                                <td>20</td>
                            </tr>
                            <tr align="center">
                                <td>3</td>
                                <td>Move</td>
                                <td>100</td>
                                <td>11</td>
                                <td>20</td>
                            </tr>
                        </table>
                        <div style={{width:"400px", height:"30px", backgroundColor:"rgba(0,0,0,0.5)", marginTop:"70px", textAlign:"center", fontSize:"20px"}}>
                        임무 업로드
                        </div>
                    </div>
                {/* </div> */}
                

                
            </div>
        <img src={droneShot} alt="" style={{height:"100vh", width:"100%", scrollbarWidth:"none"}}/>
        </div>
    );
}
