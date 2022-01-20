import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'

import ReactPlayer from 'react-player'

import { Menu, Dropdown, Button, Tooltip, Progress} from 'antd';

import UAV from '../../img/p_openFolder.png'

export default function Uav() {

    const [url, setUrl] = useState("");
    const [readyurl, setreadyUrl] = useState("");

    const menu1 = (
        <Menu>
            <Menu.Item>
                Streaming
            </Menu.Item>
            <Menu.Item onClick={()=>window.open("/subwindow", "SubWindow", 'top=100, left=200, width=1500, height=800')}>
                Drone Control
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
        <>
        <Navbar />

        <div style={{position:"absolute", left:"0", overflow:"hidden", fontFamily:"pretendard"}}>
            
            {/* 상단 드롭다운 메뉴바 */}
            <div style={{width:"1920px", backgroundColor:"#EEEEEE", paddingLeft:"65px", height:"30px"}}>
                <Dropdown overlay={menu1} placement="bottomLeft">
                    <Button style={{width:"150px", textAlign:"left", backgroundColor:"rgba(0,0,0,0)", marginTop:"-1px", border:"0px"}}>
                        Drone Service
                    </Button>
                </Dropdown>
            </div>

            {/* 좌측 퀵메뉴 영역 */}
            <div style={{width:"65px", height:"91.7vh", backgroundColor:"#EEEEEE", float:"left"}}>
                <div className='LeftIcon'>
                <Tooltip placement="right" title="Streaming">
                <img src={UAV} style={{width:"44px", height:"auto"}} alt="" />
                </Tooltip>
                </div>
            
                <div className='LeftIcon' style={{marginTop:"10px"}}>
                <Tooltip placement="right" title="Drone Control">
                <img src={UAV} style={{width:"44px", height:"auto"}} alt="" onClick={()=>window.open("/subwindow", "SubWindow", 'top=100, left=200, width=1500, height=800')}/>
                </Tooltip>
                </div>
{/*             
                <div className='LeftIcon' style={{marginTop:"10px"}}>
                <Tooltip placement="right" title="Airport Maintenance">
                <img src={UAV} style={{width:"44px", height:"auto"}} alt=""/>
                </Tooltip>
                </div>
            
                <div className='LeftIcon' style={{marginTop:"10px"}}>
                <Tooltip placement="right" title="Airport Maintenance Lookup">
                <img src={UAV} style={{width:"44px", height:"auto"}} alt=""/>
                </Tooltip>
                </div> */}
            </div>

            {/* 작업창 영역 */}
            <div style={{width:"1600px", height:"91.7vh", float:"left", textAlign:"center"}}>
                {/* <div style={{width:"1280px", height:"720px", backgroundColor:"pink",marginLeft:"160px", marginTop:"50px", marginBottom:"50px"}}>   */}
                <p style={{fontSize:"20px", marginTop:"30px"}}>하단에 드론 스트리밍 링크를 입력하면 실시간 관제가 가능합니다.</p>
                <ReactPlayer url={url} playing controls style={{border:"1px solid #313131", marginLeft:"160px", marginTop:"20px", marginBottom:"30px", backgroundColor:"#EEEEEE"}} width="1280px" height="720px"/>
                {/* </div> */}
                <input onChange={handleChange} style={{width: "250px", marginRight:"20px"}} placeholder='여기에 링크를 입력하세요.'/>
                <button onClick={handleClick} style={{width:"150px", height:"30px", border:"0px", borderRadius:"5px", backgroundColor:"#2AAEE6", color:"white", fontSize:"15px", cursor:"pointer"}}>스트리밍 시작</button>
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
