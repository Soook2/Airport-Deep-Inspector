import React from 'react'
import './start.css'

import background from '../../img/background.png'
import startLogo from '../../img/startlogo.png'

export default function Start() {


    return (
        <>
            <div style={{position:"relative", fontFamily:"pretendard", height:"100vh"}}>
                <div style={{position:"absolute"}}>
                    <div style={{width:"1920px", height:"50px", padding:"50px", float:"left"}}>
                        <div>
                            <img src={startLogo} alt="" style={{float:"left", marginRight:"990px"}}/>
                        </div>

                        <div style={{marginTop:"-10px"}}>
                            <a href="http://deepinspection.ai/bbs/content.php?co_id=0101" style={{textDecoration:"none"}}>
                                <p style={{color:"white", fontSize:"20px", float:"left", marginRight:"70px"}}>프로그램 소개</p>
                            </a>
                            <a href="http://deepinspection.ai/bbs/content.php?co_id=0403" style={{textDecoration:"none"}}>
                                <p style={{color:"white", fontSize:"20px", float:"left", marginRight:"70px"}}>프로그램 문의</p>
                            </a>
                            <p style={{color:"white", fontSize:"20px", float:"left", marginRight:"70px"}}>로그인</p>
                            <p style={{color:"white", fontSize:"20px", float:"left"}}>회원가입</p>
                        </div>
                    </div>

                    <div style={{width:"1700px", height:"300px", float:"left", marginTop:"200px", marginLeft:"200px", color:"white"}}>
                        <p style={{fontSize:"35px", fontWeight:"bold",letterSpacing:"2px"}}>AI기술을 통한 <br/> 안전점검 프로그램의 새로운 기준</p>
                        <br />
                        <p style={{marginTop:"-20px", letterSpacing:"1px"}}>딥인스펙션은 웹 기반 안전점검 프로그램을 제공합니다.<br/>
                        프로그램을 통해 딥인스펙션의 혁신적인 AI기술력을 체험해보세요.</p>
                        <br />

                        <a href="/information/airport" style={{textDecoration:"none"}}>
                            <div className='startBtn' >
                                시작하기
                            </div>
                        </a>

                    </div>
                </div>

                <div style={{ float:"left", position:"absolute", bottom:"10px", right:"10px", color:"white"}}>
                        Deep Inspector v 1.0
                </div>

                <img src={background} alt="" style={{height:"100vh", width:"100%", scrollbarWidth:"none"}}/>
            </div>

            
        </>
    )
}

