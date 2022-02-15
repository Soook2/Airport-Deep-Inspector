// import React, { useState } from 'react'
// import Navbar from '../Navbar/Navbar'

// import ReactPlayer from 'react-player'

// import { Menu, Dropdown, Button, Tooltip, Progress, Modal} from 'antd';

// import UAV from '../../img/p_openFolder.png'

// export default function Uav() {

//     const [url, setUrl] = useState("");
//     const [readyurl, setreadyUrl] = useState("");
//     const [about, setAbout] = useState(false);

//     const menu1 = (
//         <Menu>
//             <Menu.Item>
//                 Streaming
//             </Menu.Item>
//             <Menu.Item onClick={()=>window.open("/subwindow", "SubWindow", 'top=100, left=200, width=1500, height=800')}>
//                 Drone Control
//             </Menu.Item>
//         </Menu>
//         );

//     const menu2 = (
//         <Menu>
//             <Menu.Item>
//                 Help
//             </Menu.Item>
//             <Menu.Item onClick={()=>{setAbout(true)}}>
//                 About
//             </Menu.Item>
//         </Menu>
//         );


//     const handleChange = (e) => {
//         setreadyUrl(e.target.value);
//     }

//     const handleClick = () => {
//         setUrl(readyurl);
//     }

//     return (
//         <>
//         <Navbar />

//         <div style={{position:"absolute", left:"0", overflow:"hidden", fontFamily:"pretendard"}}>
            
//             {/* 상단 드롭다운 메뉴바 */}
//             <div style={{width:"1920px", backgroundColor:"#EEEEEE", paddingLeft:"65px", height:"30px"}}>
//                 <Dropdown overlay={menu1} placement="bottomLeft">
//                     <Button style={{width:"150px", textAlign:"left", backgroundColor:"rgba(0,0,0,0)", marginTop:"-1px", border:"0px"}}>
//                         Drone Service
//                     </Button>
//                 </Dropdown>

//                 <Dropdown overlay={menu2} placement="bottomLeft">
//                     <Button style={{width:"150px", textAlign:"left", backgroundColor:"rgba(0,0,0,0)", marginTop:"-1px", border:"0px"}}>
//                     Help
//                     </Button>
//                 </Dropdown>
//             </div>

//             {/* 좌측 퀵메뉴 영역 */}
//             <div style={{width:"65px", height:"91.7vh", backgroundColor:"#EEEEEE", float:"left"}}>
//                 <div className='LeftIcon'>
//                 <Tooltip placement="right" title="Streaming">
//                 <img src={UAV} style={{width:"44px", height:"auto"}} alt="" />
//                 </Tooltip>
//                 </div>
            
//                 <div className='LeftIcon' style={{marginTop:"10px"}}>
//                 <Tooltip placement="right" title="Drone Control">
//                 <img src={UAV} style={{width:"44px", height:"auto"}} alt="" onClick={()=>window.open("/subwindow", "SubWindow", 'top=100, left=200, width=1500, height=800')}/>
//                 </Tooltip>
//                 </div>
// {/*             
//                 <div className='LeftIcon' style={{marginTop:"10px"}}>
//                 <Tooltip placement="right" title="Airport Maintenance">
//                 <img src={UAV} style={{width:"44px", height:"auto"}} alt=""/>
//                 </Tooltip>
//                 </div>
            
//                 <div className='LeftIcon' style={{marginTop:"10px"}}>
//                 <Tooltip placement="right" title="Airport Maintenance Lookup">
//                 <img src={UAV} style={{width:"44px", height:"auto"}} alt=""/>
//                 </Tooltip>
//                 </div> */}
//             </div>

//             {/* 작업창 영역 */}
//             <div style={{width:"1600px", height:"91.7vh", float:"left", textAlign:"center"}}>
//                 {/* <div style={{width:"1280px", height:"720px", backgroundColor:"pink",marginLeft:"160px", marginTop:"50px", marginBottom:"50px"}}>   */}
//                 <p style={{fontSize:"20px", marginTop:"30px"}}>하단에 드론 스트리밍 링크를 입력하면 실시간 관제가 가능합니다.</p>
//                 <ReactPlayer url={url} playing controls style={{border:"1px solid #313131", marginLeft:"160px", marginTop:"20px", marginBottom:"30px", backgroundColor:"#EEEEEE"}} width="1280px" height="720px"/>
//                 {/* </div> */}
//                 <input onChange={handleChange} style={{width: "250px", marginRight:"20px"}} placeholder='여기에 링크를 입력하세요.'/>
//                 <button onClick={handleClick} style={{width:"150px", height:"30px", border:"0px", borderRadius:"5px", backgroundColor:"#2AAEE6", color:"white", fontSize:"15px", cursor:"pointer"}}>스트리밍 시작</button>
//             </div>

//             {/* About 모달창 */}
//             <Modal visible={about} onCancel={()=>{setAbout(false)}} footer={null} width={530} style={{marginTop:"180px", textAlign:"center", fontFamily:"pretendard", borderRadius:"8px"}}>
//                 <p style={{fontSize:"23px", marginBottom:"0px"}}>About</p>
//                 <div style={{textAlign:"left", marginTop:"20px"}}>
//                     Airport Deep Inspection 2021 Package S/W
//                     <br/>
//                     최종업데이트 일자 : 2021년 06월 18일(Version 2.2 Beta)
//                     <br/>
//                     상 호 : (주)딥인스펙션
//                     <br/>
//                     사업자번호 : 806-81-00125
//                     <br/>
//                     대표 번호 : 02-2038-2716
//                     <br/>
//                     팩스 번호 : 070-4009-2284
//                     <br/>
//                     Homepage : http://컴퓨터비전.com 또는 http://www.deepinspection.ai
//                     <br/>
//                     주 소 : 서울시 송파구 법원로11길 25 H비지니스파크A동 1315호(문정동)
//                     <br/>
//                     주요서비스 : 인공지능/이미지처리 소프트웨어 개발, 이미지 데이터 분석,
//                     <br/>
//                     <p style={{marginLeft:"70px"}}>고속컴퓨팅/분산병렬처리 시스템 구축, 안전점검 자동화 시스템 구축</p>
//                     문의 : 본 프로그램에 대한 의문사항을 프로그램 지원 담당자에게 유선문의 또는 이메일
//                     <br/>
//                     <p style={{marginLeft:"35px"}}>문의하여 주시면 3일 이내로 이메일 회신 또는 유선답변 드리고 있습니다.</p>
//                     </div>
//                     <button onClick={()=>{setAbout(false)}} style={{width:"80px", height:"30px", border:"0px", borderRadius:"5px", backgroundColor:"#2AAEE6", color:"white", fontSize:"15px", cursor:"pointer", marginTop:"10px"}}>닫기</button>
//                     </Modal>
            
//             {/* 우측 프로젝트 매니저 영역 */}
//             <div style={{width:"255px", height:"91.7vh", backgroundColor:"#EEEEEE", float:"left", textAlign:"center", padding:"10px"}}>
//                 <div style={{marginTop:"-10px"}}>
//                 <p>Project Information</p>
//                 <p style={{textAlign:"left", marginTop:"20px", fontSize:"12px", marginLeft:"7px"}}>Project Name</p>
//                 <input style={{width:"225px", border:"0px", borderRadius:"5px"}} placeholder=' 입력하세요.'></input>
            
//                 <p style={{textAlign:"left", marginTop:"20px", fontSize:"12px", marginLeft:"7px"}}>Airport Location</p>
//                 <input style={{width:"225px", border:"0px", borderRadius:"5px"}} placeholder=' 입력하세요.'></input>
            
//                 <p style={{textAlign:"left", marginTop:"20px", fontSize:"12px", marginLeft:"7px"}}>Memo</p>
//                 <textarea style={{width:"225px", height:"320px", borderRadius:"5px", border:"0px", resize:"none"}} placeholder=' 입력하세요.'></textarea>
//                 </div>
            
//                 <hr />
//                 <div>
//                 <p>Message Window</p>
//                 <div style={{backgroundColor:"white", width:"225px", height:"210px", borderRadius:"5px", marginLeft:"5px"}}>
            
//                 </div>
            
//                 <p style={{textAlign:"left", marginLeft:"7px", marginTop:"15px", color:"#2AAEE6", marginBottom:"0px"}}>Loading</p>
//                 <Progress percent={50} size="small" status="active" style={{marginLeft:"7px", width:"225px"}}/>
//                 </div>
//             </div>

//         </div>
//     </>
//     )
// }


import React,{useState} from 'react';
import Navbar from '../Navbar/Navbar';
import RightPanel from '../RightPanel/RightPanel';

import '../Panorama/panorama.css'

import ReactPlayer from 'react-player'

import {Dropdown, Button, Menu, Tooltip, Modal} from 'antd';

import { faCaretLeft,faChevronLeft, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import UAV from '../../img/p_openFolder.png'

export default function Uav() {

    const ChevronLeft = faChevronLeft;

    const [url, setUrl] = useState("");
    const [readyurl, setreadyUrl] = useState("");
    const [rightBar, setRightBar] = useState("-300px");
    const [about, setAbout] = useState(false);
    // const [rightButton, setRightButton] = useState(ChevronLeft);

    const RightBarClick = () => {
        if (rightBar==="0px") {
            setRightBar("-300px")
            // setRightButton(ChevronRight)
        } else {
            setRightBar("0px")
            // setRightButton(ChevronLeft)
        }
    }

    const menu1 = (
                <Menu style={{padding:"0px"}}>
                    <Menu.Item  className='DropDownItem'>
                        Streaming
                    </Menu.Item>
                    <Menu.Item  className='DropDownItem' onClick={()=>window.open("/subwindow", "SubWindow", 'top=100, left=200, width=1500, height=800')}>
                        Drone Control
                    </Menu.Item>
                </Menu>
                );
        
            const menu2 = (
                <Menu style={{padding:"0px"}}>
                    <Menu.Item  className='DropDownItem'>
                        Help
                    </Menu.Item>
                    <Menu.Item  className='DropDownItem'>
                        About
                    </Menu.Item>
                </Menu>
                );
        
            const menu3 = (
            <Menu style={{padding:"0px"}}>
                <Menu.Item  className='DropDownItem'>
                Help
                </Menu.Item>
                <Menu.Item  className='DropDownItem' onClick={()=>{setAbout(true)}}>
                About
                </Menu.Item>
            </Menu>
            );
        

    const handleChange = (e) => {
        setreadyUrl(e.target.value);
    }

    const handleClick = () => {
        setUrl(readyurl);
    }


    return (
    <div div style={{fontFamily:"pretendard", width:"100vw", height:"100vh", position:"fixed"}}>
        {/* 왼쪽 메뉴바 영역 */}
        <div style={{backgroundColor:"#2F3134", width:"200px", height:"100vh", float:"left"}}>
            <Navbar />
        </div>

        {/* 상단바 영역 */}
        <div style={{paddingLeft:"200px", width:"100%", height:"38px", backgroundColor:"rgb(225, 226,230)", lineHeight:"38px"}}>
            <FontAwesomeIcon icon={faCaretLeft} size="2x" color='gray' style={{cursor:"pointer", marginLeft:"20px", marginTop:"7px", float:"left"}}/>

            
            <Dropdown overlay={menu1} placement="bottomLeft">
                <Button className='DropDown' style={{marginLeft:"41px", width:"150px"}}>
                    Input
                </Button>
            </Dropdown>
            
            <Dropdown overlay={menu2} placement="bottomLeft">
                <Button className='DropDown' style={{width:"150px"}}>
                    Lookup
                </Button>
            </Dropdown>

            <Dropdown overlay={menu3} placement="bottomLeft">
                <Button className='DropDown' style={{width:"150px"}}>
                    Help
                </Button>
            </Dropdown>
        </div>

        {/* 왼쪽 퀵메뉴*/}
        <div style={{width:"75px", height:"96.1vh", backgroundColor:"rgb(225, 226,230)", float:"left"}}>
            {/* 좌측 퀵메뉴 영역 */}
            <div className='LeftIcon' style={{marginTop:"10px"}}>
            <Tooltip placement="right" title="Streaming">
            <img src={UAV} style={{width:"44px", height:"auto"}} alt="" />
            </Tooltip>
            </div>

            <div className='LeftIcon' style={{marginTop:"10px"}}>
            <Tooltip placement="right" title="Drone Control">
            <img src={UAV} style={{width:"44px", height:"auto"}} alt="" onClick={()=>window.open("/subwindow", "SubWindow", 'top=100, left=200, width=1500, height=800')}/>
            </Tooltip>
            </div>
        </div>

        {/* 작업창 영역 */}
            <div div style={{width:"84%", float:"left", height:"96.1vh", textAlign:"center"}}>
                 {/* <div style={{width:"1280px", height:"720px", backgroundColor:"pink",marginLeft:"160px", marginTop:"50px", marginBottom:"50px"}}>   */}
                <p style={{fontSize:"20px", marginTop:"40px"}}>하단에 드론 스트리밍 링크를 입력하면 실시간 관제가 가능합니다.</p>
                <ReactPlayer url={url} playing controls style={{border:"1px solid #313131", marginLeft:"160px", marginTop:"40px", marginBottom:"50px", backgroundColor:"#EEEEEE"}} width="1300px" height="700px"/>
                {/* </div> */}
                <input onChange={handleChange} style={{width: "250px", marginRight:"30px"}} placeholder='여기에 링크를 입력하세요.'/>
                <button onClick={handleClick} style={{width:"150px", height:"30px", border:"0px", borderRadius:"5px", backgroundColor:"rgb(90, 110, 233)", color:"white", fontSize:"15px", cursor:"pointer"}}>스트리밍 시작</button>
            </div>

        {/* 오른쪽 슬라이드 정보창 */}
        <div style={{width:"330px", height:"96.1vh", float:"left", position:"absolute", right:`${rightBar}`, transition:"all 0.35s"}}>
                {/* <button style={{border:"0px", backgroundColor:"rgba(0,0,0,0)", cursor:"pointer"}} onClick={RightBarClick}> -- </button> */}
                <FontAwesomeIcon icon={ChevronLeft} size="2x" style={{cursor:"pointer", marginLeft:"10px"}} onClick={RightBarClick}/>
                <br/>
                <Tooltip placement="left" title="About">
                  <FontAwesomeIcon icon={faQuestionCircle} size="2x" style={{position:"absolute", bottom:"10px", marginLeft:"-10px", cursor:"pointer"}} onClick={()=>{setAbout(true)}}/>
                </Tooltip>
                <RightPanel />
            </div>

            {/* About 모달창 */}
            <Modal visible={about} onCancel={()=>{setAbout(false)}} footer={null} width={530} style={{marginTop:"180px", textAlign:"center", fontFamily:"pretendard", borderRadius:"8px"}}>
                <p style={{fontSize:"23px", marginBottom:"0px"}}>About</p>
                <div style={{textAlign:"left", marginTop:"20px"}}>
                    Airport Deep Inspection 2021 Package S/W
                    <br/>
                    최종업데이트 일자 : 2021년 06월 18일(Version 2.2 Beta)
                    <br/>
                    상 호 : (주)딥인스펙션
                    <br/>
                    사업자번호 : 806-81-00125
                    <br/>
                    대표 번호 : 02-2038-2716
                    <br/>
                    팩스 번호 : 070-4009-2284
                    <br/>
                    Homepage : http:컴퓨터비전.com 또는 http:www.deepinspection.ai
                    <br/>                    주 소 : 서울시 송파구 법원로11길 25 H비지니스파크A동 1315호(문정동)
                    <br/>
                    주요서비스 : 인공지능/이미지처리 소프트웨어 개발, 이미지 데이터 분석,
                    <br/>
                    <p style={{marginLeft:"70px"}}>고속컴퓨팅/분산병렬처리 시스템 구축, 안전점검 자동화 시스템 구축</p>
                    문의 : 본 프로그램에 대한 의문사항을 프로그램 지원 담당자에게 유선문의 또는 이메일
                    <br/>
                    <p style={{marginLeft:"35px"}}>문의하여 주시면 3일 이내로 이메일 회신 또는 유선답변 드리고 있습니다.</p>
                    </div>
                <button onClick={()=>{setAbout(false)}} style={{width:"80px", height:"30px", border:"0px", borderRadius:"5px", backgroundColor:"rgb(90, 110, 233)", color:"white", fontSize:"15px", cursor:"pointer", marginTop:"10px"}}>닫기</button>
            </Modal>
        
    </div>
    );
}

