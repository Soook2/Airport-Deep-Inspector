// import React, { useState } from 'react';
// import Navbar from '../Navbar/Navbar'
// import './panorama.css';

// import { Menu, Dropdown, Button, Tooltip, Progress, Modal} from 'antd';

// import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// import openFiles from '../../img/p_openFiles.png'
// import openFolder from '../../img/p_openFolder.png'
// import panorama from '../../img/p_panorama.png'
// import panoramaForce from '../../img/p_panoramaForce.png'
// import saveResult from '../../img/p_saveResult.png'


// export default function PanoramaHor() {

//     const [about, setAbout] = useState(false);
//     const [HpOption, setHpOption] = useState(false);
//     const [HpOptionDes, setHpOptionDes] = useState(false);


//     const menu1 = (
//         <Menu>
//             <Menu.Item>
//                 Open Image
//             </Menu.Item>
//             <Menu.Item>
//                 Open Folder
//             </Menu.Item>
//             <Menu.Item>
//                 Save Result
//             </Menu.Item>
//         </Menu>
//         );

//     const menu2 = (
//         <Menu>
//             <Menu.Item>
//                 Scale Image
//             </Menu.Item>
//             <Menu.Item>
//                 Lean Image
//             </Menu.Item>
//             <Menu.Item>
//                 Rotate Image
//             </Menu.Item>
//             <Menu.Item>
//                 Cut Image
//             </Menu.Item>
//             <Menu.Item>
//                 Modification
//             </Menu.Item>
//         </Menu>
//         );

//     const menu3 = (
//         <Menu>
//             <Menu.Item>
//                 View Images
//             </Menu.Item>
//             <Menu.Item>
//                 View Results
//             </Menu.Item>
//         </Menu>
//         );

//     const menu4 = (
//         <Menu>
//             <Menu.Item>
//                 Panorama-Hor
//             </Menu.Item>
//             <Menu.Item disabled>
//                 Panorama-Ver
//             </Menu.Item>
//         </Menu>
//         );

//     const menu5 = (
//         <Menu>
//             <Menu.Item onClick={()=>{setHpOption(true)}}>
//                 HP-Set up
//             </Menu.Item>
//             <Menu.Item disabled>
//                 VP-Set up
//             </Menu.Item>
//         </Menu>
//         );

//     const menu6 = (
//         <Menu>
//             <Menu.Item>
//                 Help
//             </Menu.Item>
//             <Menu.Item onClick={()=>{setAbout(true)}}>
//                 About
//             </Menu.Item>
//         </Menu>
//         );

//     const HPOptionDesClickOpen = () => {
//         setHpOption(false);
//         setHpOptionDes(true);
//     }

//     const HPOptionDesClickClose = () => {
//         setHpOption(true);
//         setHpOptionDes(false);
//     }

//     return (
//     <>
//         <Navbar />
//         <div style={{position:"absolute", left:"0", overflow:"hidden", fontFamily:"pretendard"}}>

//             {/* 상단 드롭다운 메뉴바 */}
//             <div style={{width:"1920px", backgroundColor:"#EEEEEE", paddingLeft:"65px", height:"30px"}}>
//                     <Dropdown overlay={menu1} placement="bottomLeft">
//                         <Button style={{width:"150px", textAlign:"left", backgroundColor:"rgba(0,0,0,0)", marginTop:"-1px", border:"0px"}}>
//                             File
//                         </Button>
//                     </Dropdown>

//                     <Dropdown overlay={menu2} placement="bottomLeft">
//                         <Button style={{width:"150px", textAlign:"left", backgroundColor:"rgba(0,0,0,0)", marginTop:"-1px", border:"0px"}}>
//                             Edit
//                         </Button>
//                     </Dropdown>

//                     <Dropdown overlay={menu3} placement="bottomLeft">
//                         <Button style={{width:"150px", textAlign:"left", backgroundColor:"rgba(0,0,0,0)", marginTop:"-1px", border:"0px"}}>
//                             View
//                         </Button>
//                     </Dropdown>

//                     <Dropdown overlay={menu4} placement="bottomLeft">
//                         <Button style={{width:"150px", textAlign:"left", backgroundColor:"rgba(0,0,0,0)", marginTop:"-1px", border:"0px"}}>
//                             Run
//                         </Button>
//                     </Dropdown>

//                     <Dropdown overlay={menu5} placement="bottomLeft">
//                         <Button style={{width:"150px", textAlign:"left", backgroundColor:"rgba(0,0,0,0)", marginTop:"-1px", border:"0px"}}>
//                             Tool
//                         </Button>
//                     </Dropdown>

//                     <Dropdown overlay={menu6} placement="bottomLeft">
//                         <Button style={{width:"150px", textAlign:"left", backgroundColor:"rgba(0,0,0,0)", marginTop:"-1px", border:"0px"}}>
//                             About
//                         </Button>
//                     </Dropdown>
//             </div>

//             {/* 좌측 퀵메뉴 영역 */}
//             <div style={{width:"65px", height:"91.7vh", backgroundColor:"#EEEEEE", float:"left", textAlign:"center"}}>
//                 <p style={{fontWeight:"bold", marginBottom:"5px"}}>Mode</p>
//                 <div style={{marginBottom:"5px", color:"white", borderRadius:"5px", marginLeft: "8.5px", width:"48px", height:"24px", backgroundColor:"#187CAC", cursor:"pointer"}}>
//                     Hor
//                 </div>
//                 <a href="/panorama/Ver">
//                     <div style={{marginBottom:"20px", color:"#187CAC", borderRadius:"5px", border:"1px solid #187CAC", marginLeft: "8.5px", width:"48px", height:"24px", backgroundColor:"white", cursor:"pointer"}}>
//                         Ver
//                     </div>  
//                 </a>              
                
//                 <div className='LeftIcon'>
//                     <Tooltip placement="right" title="Open Files">
//                     <img src={openFiles} style={{width:"44px", height:"auto"}} alt="" />
//                     </Tooltip>
//                 </div>
                
//                 <div className='LeftIcon' style={{marginTop:"10px"}}>
//                     <Tooltip placement="right" title="Open Folder">
//                     <img src={openFolder} style={{width:"44px", height:"auto"}} alt="" onClick={()=>window.open("/subwindow", "SubWindow", 'top=100, left=200, width=1500, height=800')}/>
//                     </Tooltip>
//                 </div>     

//                 <div className='LeftIcon' style={{marginTop:"10px"}}>
//                     <Tooltip placement="right" title="Panorama">
//                     <img src={panorama} style={{width:"44px", height:"auto"}} alt=""/>
//                     </Tooltip>
//                 </div>
                
//                 <div className='LeftIcon' style={{marginTop:"10px"}}>
//                     <Tooltip placement="right" title="Panorama Force">
//                     <img src={panoramaForce} style={{width:"44px", height:"auto"}} alt=""/>
//                     </Tooltip>
//                 </div>

//                 <div className='LeftIcon' style={{marginTop:"10px"}}>
//                     <Tooltip placement="right" title="Save Result">
//                     <img src={saveResult} style={{width:"44px", height:"auto"}} alt=""/>
//                     </Tooltip>
//                 </div> 
//             </div>

//             {/* 작업창 영역 */}
//             <div style={{width:"1600px", height:"91.7vh", float:"left", padding:"10px"}}>
//                 <div style={{width:"100%", height:"430px", marginBottom:"10px", borderBottom:"1px solid #EEEEEE"}}>
//                 Horizontal Orininal Image
//                 </div>
//                 <div style={{width:"100%", height:"430px"}}>
//                 Horizontal Result Image
//                 </div>
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

//             {/* HpSetUP 모달창 */}
//             <Modal visible={HpOption} onCancel={()=>{setHpOption(false)}} footer={null} width={430} style={{marginTop:"180px", textAlign:"center", fontFamily:"pretendard", borderRadius:"8px"}}>
//                 <p style={{fontSize:"23px", marginBottom:"0px"}}>HP SetUp
//                 <FontAwesomeIcon icon={faQuestionCircle} size="1x" color='#696969' style={{cursor:"pointer", marginLeft:"10px", paddingTop:"5px"}} onClick={HPOptionDesClickOpen}/>
//                 </p>
//                 <div>
//                     <div style={{textAlign:"left", marginTop:"20px", width:"170px", height:"280px", float:"left", marginLeft:"30px"}}>
//                         <p>Horizontal Rotate</p>
//                         <p>Horizontal Lean</p>
//                         <p>Horizontal Y Fix</p>
//                         <p>Horizontal X Limit</p>
//                         <p>Horizontal Y Limit</p>
//                         <p>Horizontal Rotation Limit</p>
//                         <p>Horizontal Scale Limit</p>
//                         <p>Horizontal Feature</p>
//                     </div>
//                     <div style={{textAlign:"left", marginTop:"20px", width:"150px", height:"280px", float:"left", marginLeft:"20px"}}>
//                         <input style={{height:"20px", width:"150px"}}></input>
//                         <input style={{height:"20px", width:"150px", marginTop:"15px"}}></input>
//                         <input style={{height:"20px", width:"150px", marginTop:"15px"}}></input>
//                         <input style={{height:"20px", width:"150px", marginTop:"15px"}}></input>
//                         <input style={{height:"20px", width:"150px", marginTop:"15px"}}></input>
//                         <input style={{height:"20px", width:"150px", marginTop:"15px"}}></input>
//                         <input style={{height:"20px", width:"150px", marginTop:"15px"}}></input>
//                         <input style={{height:"20px", width:"150px", marginTop:"15px"}}></input>
//                     </div>
//                 </div>
//                 <div>
//                     <button onClick={()=>{setHpOption(false)}} style={{width:"80px", height:"30px", border:"0px", borderRadius:"5px", backgroundColor:"#2AAEE6", fontSize:"15px", cursor:"pointer", marginTop:"10px", marginRight:"20px"}}>적용하기</button>
//                     <button onClick={()=>{setHpOption(false)}} style={{width:"80px", height:"30px", border:"0px", borderRadius:"5px", backgroundColor:"#EEEEEE", fontSize:"15px", cursor:"pointer", marginTop:"10px", marginLeft:"20px"}}>취소하기</button>
//                 </div>
//             </Modal>

//             {/* HpSetUP 설명 모달창 */}
//             <Modal visible={HpOptionDes} onCancel={HPOptionDesClickClose} footer={null} width={520} style={{marginTop:"180px", textAlign:"center", fontFamily:"pretendard", borderRadius:"8px"}}>
//                 <p style={{fontSize:"23px", marginBottom:"20px"}}>HP 옵션 설명</p>
//                     <div style={{textAlign:"left"}}>
//                         <p>Horizontal Roate[ON]: 수평정합한 이미지를 자동으로 직선이 되도록 회전</p>
//                         <p>Horizontal Lean[%]: 이미지의 기울임</p>
//                         <p style={{marginTop:"-20px", marginLeft:"125px"}}>+일 때 왼쪽,  –일 때 오른쪽으로 기움 (-0.99 ~ 0.99)</p>
//                         <p>Horizontal Y Fix[pix]: 수평정합시 Y의 이동값 (0 ~ 100)</p>
//                         <p>Horizontal X Limit[%]: 수평정합시 X의 이동제한 (0 ~ 1.00)</p>
//                         <p>Horizontal Y Limit[%]: 수평정합시 Y의 이동제한 (0 ~ 1.00)</p>
//                         <p>Horizontal Rotation Limit[%]: 수평정합시 회전 제한 (0 ~ 1.00)</p>
//                         <p>Horizontal Scale Limit[%]: 수평정합시 스케일 조절 허용범위  (0 ~ 1.00)</p>
//                         <p>Horizontal High Feature[ON]: 수평정합을 더 정밀하게 정합하는 기능</p>
//                         <p style={{color:"orange"}}>※ Horizontal High Feature 사용 시 수평정합에 소요되는 시간이 상당히 증가합니다.</p>
//                     </div>
//                 <div>
//                     <button onClick={HPOptionDesClickClose} style={{width:"80px", height:"30px", border:"0px", borderRadius:"5px", backgroundColor:"#2AAEE6", fontSize:"15px", cursor:"pointer", marginTop:"10px"}}>닫기</button>
//                 </div>
//             </Modal>

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
//     );
// }

import React, {useState} from 'react'
import Navbar from '../Navbar/Navbar';
import RightPanel from '../RightPanel/RightPanel';

import {Dropdown, Button, Menu, Tooltip, Modal} from 'antd';

import { faCaretLeft, faChevronLeft, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import openFiles from '../../img/p_openFiles.png'
import openFolder from '../../img/p_openFolder.png'
import panorama from '../../img/p_panorama.png'
import panoramaForce from '../../img/p_panoramaForce.png'
import saveResult from '../../img/p_saveResult.png'

export default function PanoramaHor() {
    const [rightBar, setRightBar] = useState("-300px");
    const [about, setAbout] = useState(false);
    const [HpOption, setHpOption] = useState(false);
    const [HpOptionDes, setHpOptionDes] = useState(false);

    const ChevronLeft = faChevronLeft;

    const RightBarClick = () => {
        if (rightBar==="0px") {
            setRightBar("-300px")
            // setRightButton(ChevronRight)
        } else {
            setRightBar("0px")
            // setRightButton(ChevronLeft)
        }
    }

        const HPOptionDesClickOpen = () => {
        setHpOption(false);
        setHpOptionDes(true);
    }

    const HPOptionDesClickClose = () => {
        setHpOption(true);
        setHpOptionDes(false);
    }

    const menu1 = (
                <Menu style={{padding:"0px"}}>
                    <Menu.Item className='DropDownItem'>
                        Open Image
                    </Menu.Item>
                    <Menu.Item className='DropDownItem'>
                        Open Folder
                    </Menu.Item>
                    <Menu.Item className='DropDownItem'>
                        Save Result
                    </Menu.Item>
                </Menu>
                );
        
            const menu2 = (
                <Menu style={{padding:"0px"}}>
                    <Menu.Item className='DropDownItem'>
                        Scale Image
                    </Menu.Item>
                    <Menu.Item className='DropDownItem'>
                        Lean Image
                    </Menu.Item>
                    <Menu.Item className='DropDownItem'>
                        Rotate Image
                    </Menu.Item>
                    <Menu.Item className='DropDownItem'>
                        Cut Image
                    </Menu.Item>
                    <Menu.Item className='DropDownItem'>
                        Modification
                    </Menu.Item>
                </Menu>
                );
        
            const menu3 = (
                <Menu style={{padding:"0px"}}>
                    <Menu.Item className='DropDownItem'>
                        View Images
                    </Menu.Item>
                    <Menu.Item className='DropDownItem'>
                        View Results
                    </Menu.Item>
                </Menu>
                );
        
            const menu4 = (
                <Menu style={{padding:"0px"}}>
                    <Menu.Item className='DropDownItem'>
                        Panorama-Hor
                    </Menu.Item>
                    <Menu.Item disabled className='DropDownItem'>
                        Panorama-Ver
                    </Menu.Item>
                </Menu>
                );
        
            const menu5 = (
                <Menu style={{padding:"0px"}}>
                    <Menu.Item className='DropDownItem' onClick={()=>{setHpOption(true)}}>
                        HP-Set up
                    </Menu.Item>
                    <Menu.Item disabled className='DropDownItem'>
                        VP-Set up
                    </Menu.Item>
                </Menu>
                );
        
            const menu6 = (
                <Menu style={{padding:"0px"}}>
                    <Menu.Item className='DropDownItem'>
                        Help
                    </Menu.Item>
                    <Menu.Item className='DropDownItem' onClick={()=>{setAbout(true)}}>
                        About
                    </Menu.Item>
                </Menu>
                );



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
                        File
                    </Button>
                </Dropdown>

                    <Dropdown overlay={menu2} placement="bottomLeft">
                        <Button className='DropDown' style={{width:"150px"}}>
                            Edit
                        </Button>
                    </Dropdown>

                    <Dropdown overlay={menu3} placement="bottomLeft">
                        <Button className='DropDown' style={{width:"150px"}}>
                            View
                        </Button>
                    </Dropdown>

                    <Dropdown overlay={menu4} placement="bottomLeft">
                        <Button className='DropDown' style={{width:"150px"}}>
                            Run
                        </Button>
                    </Dropdown>

                    <Dropdown overlay={menu5} placement="bottomLeft">
                        <Button className='DropDown' style={{width:"150px"}}>
                            Tool
                        </Button>
                    </Dropdown>

                    <Dropdown overlay={menu6} placement="bottomLeft">
                        <Button className='DropDown' style={{width:"150px"}}>
                            About
                        </Button>
                    </Dropdown>
            </div>


            {/* 왼쪽 퀵메뉴*/}
            <div style={{width:"75px", height:"96.1vh", backgroundColor:"rgb(225, 226,230)", float:"left"}}>
                {/* 좌측 퀵메뉴 영역 */}
                <p style={{fontWeight:"bold", marginBottom:"5px", marginLeft:"20px"}}>Mode</p>
                <div style={{marginBottom:"5px", color:"white", borderRadius:"5px", marginLeft: "15px", width:"48px", height:"24px", backgroundColor:"rgb(90, 110, 233)", cursor:"pointer", textAlign:"center"}}>
                    Hor
                </div>
                <a href="/panorama/Ver">
                    <div style={{marginBottom:"20px", color:"white", borderRadius:"5px", marginLeft: "15px", width:"48px", height:"24px", backgroundColor:"rgb(105,105,105)", cursor:"pointer", textAlign:"center"}}>
                        Ver
                    </div>  
                </a>              
                
                <div className='LeftIcon'>
                    <Tooltip placement="right" title="Open Files">
                    <img src={openFiles} style={{width:"44px", height:"auto"}} alt="" />
                    </Tooltip>
                </div>
                
                <div className='LeftIcon' style={{marginTop:"10px"}}>
                    <Tooltip placement="right" title="Open Folder">
                    <img src={openFolder} style={{width:"44px", height:"auto"}} alt=""/>
                    </Tooltip>
                </div>     

                <div className='LeftIcon' style={{marginTop:"10px"}}>
                    <Tooltip placement="right" title="Panorama">
                    <img src={panorama} style={{width:"44px", height:"auto"}} alt=""/>
                    </Tooltip>
                </div>
                
                <div className='LeftIcon' style={{marginTop:"10px"}}>
                    <Tooltip placement="right" title="Panorama Force">
                    <img src={panoramaForce} style={{width:"44px", height:"auto"}} alt=""/>
                    </Tooltip>
                </div>

                <div className='LeftIcon' style={{marginTop:"10px"}}>
                    <Tooltip placement="right" title="Save Result">
                    <img src={saveResult} style={{width:"44px", height:"auto"}} alt=""/>
                    </Tooltip>
                </div> 
            </div>


            {/* 작업창 영역 */}
            <div div style={{width:"84%", float:"left", height:"96.1vh", padding:"30px"}}>
                <div style={{width:"100%", height:"430px", marginBottom:"10px", borderBottom:"1px solid #EEEEEE"}}>
                Horizontal_Original_Image
                </div>
                <div style={{width:"100%", height:"430px"}}>
                Horizontal_Result_Image
                </div>
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

            {/* HpSetUP 설명 모달창 */}
            <Modal visible={HpOptionDes} onCancel={HPOptionDesClickClose} footer={null} width={520} style={{marginTop:"180px", textAlign:"center", fontFamily:"pretendard", borderRadius:"8px"}}>
                <p style={{fontSize:"23px", marginBottom:"20px"}}>HP 옵션 설명</p>
                    <div style={{textAlign:"left"}}>
                        <p>Horizontal Roate[ON]: 수평정합한 이미지를 자동으로 직선이 되도록 회전</p>
                        <p>Horizontal Lean[%]: 이미지의 기울임</p>
                        <p style={{marginTop:"-20px", marginLeft:"125px"}}>+일 때 왼쪽,  –일 때 오른쪽으로 기움 (-0.99 ~ 0.99)</p>
                        <p>Horizontal Y Fix[pix]: 수평정합시 Y의 이동값 (0 ~ 100)</p>
                        <p>Horizontal X Limit[%]: 수평정합시 X의 이동제한 (0 ~ 1.00)</p>
                        <p>Horizontal Y Limit[%]: 수평정합시 Y의 이동제한 (0 ~ 1.00)</p>
                        <p>Horizontal Rotation Limit[%]: 수평정합시 회전 제한 (0 ~ 1.00)</p>
                        <p>Horizontal Scale Limit[%]: 수평정합시 스케일 조절 허용범위  (0 ~ 1.00)</p>
                        <p>Horizontal High Feature[ON]: 수평정합을 더 정밀하게 정합하는 기능</p>
                        <p style={{color:"orange"}}>※ Horizontal High Feature 사용 시 수평정합에 소요되는 시간이 상당히 증가합니다.</p>
                    </div>
                <div>
                    <button onClick={HPOptionDesClickClose} style={{width:"80px", height:"30px", border:"0px", borderRadius:"5px", backgroundColor:"#2AAEE6", fontSize:"15px", cursor:"pointer", marginTop:"10px"}}>닫기</button>
                </div>
            </Modal>

            {/* HpSetUP 모달창 */}
            <Modal visible={HpOption} onCancel={()=>{setHpOption(false)}} footer={null} width={430} style={{marginTop:"180px", textAlign:"center", fontFamily:"pretendard", borderRadius:"8px"}}>
                <p style={{fontSize:"23px", marginBottom:"0px"}}>HP SetUp
                <FontAwesomeIcon icon={faQuestionCircle} size="1x" color='#696969' style={{cursor:"pointer", marginLeft:"10px", paddingTop:"5px"}} onClick={HPOptionDesClickOpen}/>
                </p>
                <div>
                    <div style={{textAlign:"left", marginTop:"20px", width:"170px", height:"280px", float:"left", marginLeft:"30px"}}>
                        <p>Horizontal Rotate</p>
                        <p>Horizontal Lean</p>
                        <p>Horizontal Y Fix</p>
                        <p>Horizontal X Limit</p>
                        <p>Horizontal Y Limit</p>
                        <p>Horizontal Rotation Limit</p>
                        <p>Horizontal Scale Limit</p>
                        <p>Horizontal Feature</p>
                    </div>
                    <div style={{textAlign:"left", marginTop:"20px", width:"150px", height:"280px", float:"left", marginLeft:"20px"}}>
                        <input style={{height:"20px", width:"150px"}}></input>
                        <input style={{height:"20px", width:"150px", marginTop:"15px"}}></input>
                        <input style={{height:"20px", width:"150px", marginTop:"15px"}}></input>
                        <input style={{height:"20px", width:"150px", marginTop:"15px"}}></input>
                        <input style={{height:"20px", width:"150px", marginTop:"15px"}}></input>
                        <input style={{height:"20px", width:"150px", marginTop:"15px"}}></input>
                        <input style={{height:"20px", width:"150px", marginTop:"15px"}}></input>
                        <input style={{height:"20px", width:"150px", marginTop:"15px"}}></input>
                    </div>
                </div>
                <div>
                    <button onClick={()=>{setHpOption(false)}} style={{width:"80px", height:"30px", border:"0px", borderRadius:"5px", backgroundColor:"rgb(90, 110, 233)", fontSize:"15px", cursor:"pointer", marginTop:"10px", marginRight:"20px", color:"white"}}>적용하기</button>
                    <button onClick={()=>{setHpOption(false)}} style={{width:"80px", height:"30px", border:"0px", borderRadius:"5px", backgroundColor:"#EEEEEE", fontSize:"15px", cursor:"pointer", marginTop:"10px", marginLeft:"20px"}}>취소하기</button>
                </div>
            </Modal>
        </div>
    )
}

