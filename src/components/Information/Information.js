import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import './information.css'

import { Menu, Dropdown, Button, Tooltip, Progress} from 'antd';

import AirportInformationImg from '../../img/p_openFolder.png'

import { BrowserRouter as Router, Route } from 'react-router-dom';
import AirportInformation from './AirportInformation';
import AirportInformationLookup from './AirportInformationLookup';


export default class Information2 extends Component {
            render(){
            const menu1 = (
                <Menu>
                    <a href="/information/airport">
                    <Menu.Item>
                        Airport Information
                    </Menu.Item>
                    </a>
                    <a href="/information/airport/lookup">
                    <Menu.Item>
                        Airport Maintenance
                    </Menu.Item>
                    </a>
                </Menu>
                );

            const menu2 = (
                <Menu>
                    <Menu.Item>
                        Airport Information Lookup
                    </Menu.Item>
                    <Menu.Item>
                        Airport Maintenance Lookup
                    </Menu.Item>
                </Menu>
                );

                return (
                    <>
                    <Navbar />
                            <div style={{position:"absolute", left:"0", overflow:"hidden", fontFamily:"pretendard"}}>
            
                                {/* 상단 드롭다운 메뉴바 */}
                                <div style={{width:"1920px", backgroundColor:"#EEEEEE", paddingLeft:"65px", height:"30px"}}>
                                    <Dropdown overlay={menu1} placement="bottomLeft">
                                        <Button style={{width:"150px", textAlign:"left", backgroundColor:"rgba(0,0,0,0)", marginTop:"-1px", border:"0px"}}>
                                            Input
                                        </Button>
                                    </Dropdown>
            
                                    <Dropdown overlay={menu2} placement="bottomLeft">
                                        <Button style={{width:"150px", textAlign:"left", backgroundColor:"rgba(0,0,0,0)", marginTop:"-1px", border:"0px"}}>Lookup</Button>
                                    </Dropdown>
                                </div>
            
                                {/* 좌측 퀵메뉴 영역 */}
                                <div style={{width:"65px", height:"91.7vh", backgroundColor:"#EEEEEE", float:"left"}}>
                                    <div className='LeftIcon'>
                                        <Tooltip placement="right" title="Airport Information">
                                        <a href="/information/airport">
                                        <img src={AirportInformationImg} style={{width:"44px", height:"auto"}} alt=""/>
                                        </a>
                                        </Tooltip>
                                    </div>
            
                                    <div className='LeftIcon' style={{marginTop:"10px"}}>
                                        <Tooltip placement="right" title="Airport Information Lookup">
                                        <a href="/information/airport/lookup">
                                        <img src={AirportInformationImg} style={{width:"44px", height:"auto"}} alt=""/>
                                        </a>
                                        </Tooltip>
                                    </div>
                                    
            
                                    <div className='LeftIcon' style={{marginTop:"10px"}}>
                                        <Tooltip placement="right" title="Airport Maintenance">
                                        <img src={AirportInformationImg} style={{width:"44px", height:"auto"}} alt=""/>
                                        </Tooltip>
                                    </div>
            
                                    <div className='LeftIcon' style={{marginTop:"10px"}}>
                                        <Tooltip placement="right" title="Airport Maintenance Lookup">
                                        <img src={AirportInformationImg} style={{width:"44px", height:"auto"}} alt=""/>
                                        </Tooltip>
                                    </div>
                                </div>
            
                                {/* 작업창 영역 */}
                                <div style={{width:"1600px", height:"91.7vh", float:"left"}}>
                                <Router>
                                    <Route exact path="/information/airport" component={AirportInformation} />
                                    <Route path="/information/airport/lookup" component={AirportInformationLookup} />
                                </Router>
                                </div>
            
                                {/* 우측 프로젝트 매니저 영역 */}
                                <div style={{width:"255px", height:"91.7vh", backgroundColor:"#EEEEEE", float:"left", textAlign:"center", padding:"10px"}}>
                                    <div style={{marginTop:"-10px"}}>
                                        <p>Project Information</p>
                                        <p style={{textAlign:"left", marginTop:"20px", fontSize:"12px", marginLeft:"7px"}}>Project Name</p>
                                        <input style={{width:"225px", border:"0px", borderRadius:"5px"}} placeholder=' 입력하세요.'></input>
            
                                        <p style={{textAlign:"left", marginTop:"20px", fontSize:"12px", marginLeft:"7px"}}>Airport Location</p>
                                        <input style={{width:"225px", border:"0px", borderRadius:"5px"}} placeholder=' 입력하세요.'></input>
            
                                        <p style={{textAlign:"left", marginTop:"20px", fontSize:"12px", marginLeft:"7px"}}>Memo</p>
                                        <textarea style={{width:"225px", height:"320px", borderRadius:"5px", border:"0px", resize:"none"}} placeholder=' 입력하세요.'></textarea>
                                    </div>
            
                                    <hr />
                                    <div>
                                        <p>Message Window</p>
                                        <div style={{backgroundColor:"white", width:"225px", height:"210px", borderRadius:"5px", marginLeft:"5px"}}>
            
                                        </div>
            
                                        <p style={{textAlign:"left", marginLeft:"7px", marginTop:"15px", color:"#2AAEE6", marginBottom:"0px"}}>Loading</p>
                                        <Progress percent={50} size="small" status="active" style={{marginLeft:"7px", width:"225px"}}/>
                                    </div>
                                </div>       
                            </div>
                    </>
                )
            }
        }
