// import React, { Component } from 'react'
// import Navbar from '../Navbar/Navbar'
// import './information.css'

// import { Menu, Dropdown, Button, Tooltip, Progress, Modal} from 'antd';

// import AirportInformationImg from '../../img/p_openFolder.png'

// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import AirportInformation from './AirportInformation';
// import AirportInformationLookup from './AirportInformationLookup';
// import AirportMaintenance from './AirportMaintenance';
// import AirportMaintenanceLookup from './AirportMaintenanceLookup';



// export default class Information extends Component {
//             constructor(props) {
//                 super(props);
//                 this.state = {
//                     about: false,
//                 }
//             }

//             render(){
//                 const { about } = this.state;

//             const menu1 = (
//                 <Menu>
//                     <a href="/">
//                     <Menu.Item>
//                         Airport Information
//                     </Menu.Item>
//                     </a>
//                     <a href="/information/airport/maintenance">
//                     <Menu.Item>
//                         Airport Maintenance
//                     </Menu.Item>
//                     </a>
//                 </Menu>
//                 );

//             const menu2 = (
//                 <Menu>
//                     <a href="/information/airport/lookup">
//                     <Menu.Item>
//                         Airport Information Lookup
//                     </Menu.Item>
//                     </a>
//                     <a href='/information/airport/maintenance/lookup'>
//                     <Menu.Item>
//                         Airport Maintenance Lookup
//                     </Menu.Item>
//                     </a>
//                 </Menu>
//                 );

//                 const menu3 = (
//                     <Menu>
//                         <Menu.Item>
//                             Help
//                         </Menu.Item>
//                         <Menu.Item onClick={()=>{this.setState({about : true});}}>
//                             About
//                         </Menu.Item>
//                     </Menu>
//                     );

                

//                 return (
//                     <>
//                     <Navbar />
//                             <div style={{position:"absolute", left:"0", overflow:"hidden", fontFamily:"pretendard"}}>
            
//                                 {/* ?????? ???????????? ????????? */}
//                                 <div style={{width:"1920px", backgroundColor:"#EEEEEE", paddingLeft:"65px", height:"30px"}}>
//                                     <Dropdown overlay={menu1} placement="bottomLeft">
//                                         <Button style={{width:"150px", textAlign:"left", backgroundColor:"rgba(0,0,0,0)", marginTop:"-1px", border:"0px"}}>
//                                             Input
//                                         </Button>
//                                     </Dropdown>
            
//                                     <Dropdown overlay={menu2} placement="bottomLeft">
//                                         <Button style={{width:"150px", textAlign:"left", backgroundColor:"rgba(0,0,0,0)", marginTop:"-1px", border:"0px"}}>
//                                             Lookup
//                                         </Button>
//                                     </Dropdown>

//                                     <Dropdown overlay={menu3} placement="bottomLeft">
//                                         <Button style={{width:"150px", textAlign:"left", backgroundColor:"rgba(0,0,0,0)", marginTop:"-1px", border:"0px"}}>
//                                             Help
//                                         </Button>
//                                     </Dropdown>
//                                 </div>
            
//                                 {/* ?????? ????????? ?????? */}
//                                 <div style={{width:"65px", height:"91.7vh", backgroundColor:"#EEEEEE", float:"left"}}>
//                                     <div className='LeftIcon'>
//                                         <Tooltip placement="right" title="Airport Information">
//                                         <a href="/">
//                                         <img src={AirportInformationImg} style={{width:"44px", height:"auto"}} alt=""/>
//                                         </a>
//                                         </Tooltip>
//                                     </div>
            
//                                     <div className='LeftIcon' style={{marginTop:"10px"}}>
//                                         <Tooltip placement="right" title="Airport Information Lookup">
//                                         <a href="/information/airport/lookup">
//                                         <img src={AirportInformationImg} style={{width:"44px", height:"auto"}} alt=""/>
//                                         </a>
//                                         </Tooltip>
//                                     </div>
                                    
            
//                                     <div className='LeftIcon' style={{marginTop:"10px"}}>
//                                         <Tooltip placement="right" title="Airport Maintenance">
//                                         <a href="/information/airport/maintenance">
//                                         <img src={AirportInformationImg} style={{width:"44px", height:"auto"}} alt=""/>
//                                         </a>
//                                         </Tooltip>
//                                     </div>
            
//                                     <div className='LeftIcon' style={{marginTop:"10px"}}>
//                                         <Tooltip placement="right" title="Airport Maintenance Lookup">
//                                         <a href='/information/airport/maintenance/lookup'>
//                                         <img src={AirportInformationImg} style={{width:"44px", height:"auto"}} alt=""/>
//                                         </a>
//                                         </Tooltip>
//                                     </div>
//                                 </div>
            
//                                 {/* ????????? ?????? */}
//                                 <div style={{width:"1600px", height:"91.7vh", float:"left"}}>
//                                 <Router>
//                                     <Route exact path="/" component={AirportInformation} />
//                                     <Route exact path="/information/airport/lookup" component={AirportInformationLookup} />
//                                     <Route exact path="/information/airport/maintenance" component={AirportMaintenance} />
//                                     <Route exact path="/information/airport/maintenance/lookup" component={AirportMaintenanceLookup} />
//                                 </Router>
//                                 </div>
                                
//                                 {/* About ????????? */}
//                                 <Modal visible={about} onCancel={()=>{this.setState({about : false});}} footer={null} width={530} style={{marginTop:"180px", textAlign:"center", fontFamily:"pretendard", borderRadius:"8px"}}>
//                                     <p style={{fontSize:"23px", marginBottom:"0px"}}>About</p>
//                                     <div style={{textAlign:"left", marginTop:"20px"}}>
//                                         {/* <p>Airport Deep Inspection 2021 Package S/W</p>
//                                         <p>Airport Deep Inspection 2021 Package S/W</p> */}
//                                         Airport Deep Inspection 2021 Package S/W
//                                         <br/>
//                                         ?????????????????? ?????? : 2021??? 06??? 18???(Version 2.2 Beta)
//                                         <br/>
//                                         ??? ??? : (???)???????????????
//                                         <br/>
//                                         ??????????????? : 806-81-00125
//                                         <br/>
//                                         ?????? ?????? : 02-2038-2716
//                                         <br/>
//                                         ?????? ?????? : 070-4009-2284
//                                         <br/>
//                                         Homepage : http://???????????????.com ?????? http://www.deepinspection.ai
//                                         <br/>
//                                         ??? ??? : ????????? ????????? ?????????11??? 25 H??????????????????A??? 1315???(?????????)
//                                         <br/>
//                                         ??????????????? : ????????????/??????????????? ??????????????? ??????, ????????? ????????? ??????,
//                                         <br/>
//                                         <p style={{marginLeft:"70px"}}>???????????????/?????????????????? ????????? ??????, ???????????? ????????? ????????? ??????</p>
//                                         ?????? : ??? ??????????????? ?????? ??????????????? ???????????? ?????? ??????????????? ???????????? ?????? ?????????
//                                         <br/>
//                                         <p style={{marginLeft:"35px"}}>???????????? ????????? 3??? ????????? ????????? ?????? ?????? ???????????? ????????? ????????????.</p>
//                                     </div>
//                                     <button onClick={()=>{this.setState({about : false});}} style={{width:"80px", height:"30px", border:"0px", borderRadius:"5px", backgroundColor:"#2AAEE6", color:"white", fontSize:"15px", cursor:"pointer", marginTop:"10px"}}>??????</button>
//                                 </Modal>
            
//                                 {/* ?????? ???????????? ????????? ?????? */}
//                                 <div style={{width:"255px", height:"91.7vh", backgroundColor:"#EEEEEE", float:"left", textAlign:"center", padding:"10px"}}>
//                                     <div style={{marginTop:"-10px"}}>
//                                         <p>Project Information</p>
//                                         <p style={{textAlign:"left", marginTop:"20px", fontSize:"12px", marginLeft:"7px"}}>Project Name</p>
//                                         <input style={{width:"225px", border:"0px", borderRadius:"5px"}} placeholder=' ???????????????.'></input>
            
//                                         <p style={{textAlign:"left", marginTop:"20px", fontSize:"12px", marginLeft:"7px"}}>Airport Location</p>
//                                         <input style={{width:"225px", border:"0px", borderRadius:"5px"}} placeholder=' ???????????????.'></input>
            
//                                         <p style={{textAlign:"left", marginTop:"20px", fontSize:"12px", marginLeft:"7px"}}>Memo</p>
//                                         <textarea style={{width:"225px", height:"320px", borderRadius:"5px", border:"0px", resize:"none"}} placeholder=' ???????????????.'></textarea>
//                                     </div>
            
//                                     <hr />
//                                     <div>
//                                         <p>Message Window</p>
//                                         <div style={{backgroundColor:"white", width:"225px", height:"210px", borderRadius:"5px", marginLeft:"5px"}}>
            
//                                         </div>
            
//                                         <p style={{textAlign:"left", marginLeft:"7px", marginTop:"15px", color:"#2AAEE6", marginBottom:"0px"}}>Loading</p>
//                                         <Progress percent={50} size="small" status="active" style={{marginLeft:"7px", width:"225px"}}/>
//                                     </div>
//                                 </div>       
//                             </div>
//                     </>
//                 )
//             }
//         }





import React, { useState } from 'react';
import '../Panorama/panorama.css'

import { BrowserRouter as Router, Route } from 'react-router-dom';

import {Tooltip, Dropdown, Button, Menu, Modal } from 'antd';

import { faChevronLeft, faCaretLeft, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// import NavBarlogo from '../../img/navbar_logo.png'
import AirportInformationImg from '../../img/p_openFolder.png'

import AirportInformation from './AirportInformation';
import AirportInformationLookup from './AirportInformationLookup';
import AirportMaintenance from './AirportMaintenance';
import AirportMaintenanceLookup from './AirportMaintenanceLookup';
import Navbar from '../Navbar/Navbar';
import RightPanel from '../RightPanel/RightPanel';

export default function Information() {
    const ChevronLeft = faChevronLeft;
    // const ChevronRight = faChevronRight;

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
                <a href="/">
                <Menu.Item className='DropDownItem'>
                    Airport Information
                </Menu.Item>
                </a>
                <a href="/information/airport/maintenance">
                <Menu.Item className='DropDownItem'>
                Airport Maintenance
                </Menu.Item>
                </a>
                </Menu>
                );
        
    const menu2 = (
            <Menu style={{padding:"0px"}}>
            <a href="/information/airport/lookup">
            <Menu.Item className='DropDownItem'>
            Airport Information Lookup
            </Menu.Item>
            </a>
            <a href='/information/airport/maintenance/lookup'>
            <Menu.Item className='DropDownItem'>
            Airport Maintenance Lookup
            </Menu.Item>
            </a>
            </Menu>
            );
        
        const menu3 = (
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
    <div style={{fontFamily:"pretendard", width:"100vw", height:"100vh", position:"fixed"}}>
        {/* ?????? ????????? ?????? */}
        <div style={{backgroundColor:"#2F3134", width:"200px", height:"100vh", float:"left"}}>
            <Navbar />
        </div>

        {/* ????????? ?????? */}
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

        {/* ?????? ?????????*/}
        <div style={{width:"75px", height:"96.1vh", backgroundColor:"rgb(225, 226,230)", float:"left"}}>
            {/* ?????? ????????? ?????? */}
            <div className='LeftIcon' style={{marginTop:"10px"}}>
                <a href="/">
                <Tooltip placement="right" title="AirportInfroamtion">
                <img src={AirportInformationImg} style={{width:"90%", height:"auto"}} alt=""/>
                </Tooltip>
                </a>
            </div>
            
            <div className='LeftIcon' style={{marginTop:"10px"}}>
                <Tooltip placement="right" title="Airport Information Lookup">
                <a href="/information/airport/lookup">
                <img src={AirportInformationImg} style={{width:"90%", height:"auto"}} alt=""/>
                </a>
                </Tooltip>
                </div>
                                    
            
                <div className='LeftIcon' style={{marginTop:"10px"}}>
                <Tooltip placement="right" title="Airport Maintenance">
                <a href="/information/airport/maintenance">
                <img src={AirportInformationImg} style={{width:"90%", height:"auto"}} alt=""/>
                </a>
                </Tooltip>
                </div>
            
                <div className='LeftIcon' style={{marginTop:"10px"}}>
                <Tooltip placement="right" title="Airport Maintenance Lookup">
                <a href='/information/airport/maintenance/lookup'>
                <img src={AirportInformationImg} style={{width:"90%", height:"auto"}} alt=""/>
                </a>
                </Tooltip>
                </div>
        </div>

        {/* ????????? */}
        <div style={{width:"84%", float:"left", height:"96.1vh"}}>
            
        <Router>
            <Route exact path="/" component={AirportInformation} />
            <Route exact path="/information/airport/lookup" component={AirportInformationLookup} />
            <Route exact path="/information/airport/maintenance" component={AirportMaintenance} />
            <Route exact path="/information/airport/maintenance/lookup" component={AirportMaintenanceLookup} />
        </Router>
        </div>

        {/* ????????? ???????????? ????????? */}
        <div style={{width:"330px", height:"96.1vh", float:"left", position:"absolute", right:`${rightBar}`, transition:"all 0.35s"}}>
                {/* <button style={{border:"0px", backgroundColor:"rgba(0,0,0,0)", cursor:"pointer"}} onClick={RightBarClick}> -- </button> */}
                <FontAwesomeIcon icon={ChevronLeft} size="2x" style={{cursor:"pointer", marginLeft:"10px"}} onClick={RightBarClick}/>
                <br/>
                <Tooltip placement="left" title="About">
                  <FontAwesomeIcon icon={faQuestionCircle} size="2x" style={{position:"absolute", bottom:"10px", marginLeft:"-10px", cursor:"pointer"}} onClick={()=>{setAbout(true)}}/>
                </Tooltip>
                <RightPanel />
            </div>


            {/* About ????????? */}
            <Modal visible={about} onCancel={()=>{setAbout(false)}} footer={null} width={530} style={{marginTop:"180px", textAlign:"center", fontFamily:"pretendard", borderRadius:"8px"}}>
                <p style={{fontSize:"23px", marginBottom:"0px"}}>About</p>
                <div style={{textAlign:"left", marginTop:"20px"}}>
                    Airport Deep Inspection 2021 Package S/W
                    <br/>
                    ?????????????????? ?????? : 2021??? 06??? 18???(Version 2.2 Beta)
                    <br/>
                    ??? ??? : (???)???????????????
                    <br/>
                    ??????????????? : 806-81-00125
                    <br/>
                    ?????? ?????? : 02-2038-2716
                    <br/>
                    ?????? ?????? : 070-4009-2284
                    <br/>
                    Homepage : http:???????????????.com ?????? http:www.deepinspection.ai
                    <br/>                    ??? ??? : ????????? ????????? ?????????11??? 25 H??????????????????A??? 1315???(?????????)
                    <br/>
                    ??????????????? : ????????????/??????????????? ??????????????? ??????, ????????? ????????? ??????,
                    <br/>
                    <p style={{marginLeft:"70px"}}>???????????????/?????????????????? ????????? ??????, ???????????? ????????? ????????? ??????</p>
                    ?????? : ??? ??????????????? ?????? ??????????????? ???????????? ?????? ??????????????? ???????????? ?????? ?????????
                    <br/>
                    <p style={{marginLeft:"35px"}}>???????????? ????????? 3??? ????????? ????????? ?????? ?????? ???????????? ????????? ????????????.</p>
                    </div>
                <button onClick={()=>{setAbout(false)}} style={{width:"80px", height:"30px", border:"0px", borderRadius:"5px", backgroundColor:"rgb(90, 110, 233)", color:"white", fontSize:"15px", cursor:"pointer", marginTop:"10px"}}>??????</button>
            </Modal>
    </div>
    );
}