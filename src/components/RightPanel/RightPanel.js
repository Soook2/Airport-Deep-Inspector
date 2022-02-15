import React from 'react';

import {Progress} from 'antd';

export default function RightPanel() {
    return (
    <div>
        <div style={{backgroundColor:"rgb(225, 226,230)", width:"90%", height:"96.1vh", float:"left", position:"absolute", right:"0px", top:"0px"}}>
            <div style={{padding:"10px", textAlign:"left", paddingLeft:"8.5%", paddingTop:"30px"}}>
                    <div style={{borderRadius:"100%", backgroundColor:"rgb(90, 110, 233)", width:"17%", height:"18%", color:"white", fontSize:"20px", lineHeight:"45px", float:"left", textAlign:"center", marginRight:"10%"}}> 딥 </div>
                    딥인스펙션<br />
                    deepins@deepinspection.ai
                    <br />
                    <div style={{ height:"30px", paddingLeft:"50%", marginTop:"10px", marginBottom:"-10px"}}>
                        <div style={{ width:"50%", float:"left", lineHeight:"30px", fontSize:"13px"}}>
                            My page
                        </div>
                        <div style={{ width:"40%", float:"left", lineHeight:"30px"}}>
                            Log out
                        </div>
                    </div>
            </div>
                <hr />

                <div style={{padding:"10px"}}>
                    <p style={{fontSize:"13px", marginTop:"-10px", textAlign:"center"}}>Project Information</p>

                    <p style={{textAlign:"left", fontSize:"13px", marginBottom:"5px"}}>Airport Name</p>
                    <input style={{width:"100%", border:"0px", borderRadius:"5px"}} placeholder=' 입력하세요.'></input>

                    <p style={{textAlign:"left", marginTop:"20px", fontSize:"13px", marginBottom:"5px"}}>Airport Location</p>
                    <input style={{width:"100%", border:"0px", borderRadius:"5px"}} placeholder=' 입력하세요.'></input>

                    <p style={{textAlign:"left", marginTop:"20px", fontSize:"13px", marginBottom:"5px"}}>Work Date</p>
                    <input style={{width:"100%", border:"0px", borderRadius:"5px"}} placeholder=' 입력하세요.'></input>

                    <p style={{textAlign:"left", marginTop:"20px", fontSize:"13px", marginBottom:"5px"}}>Memo</p>
                    <textarea style={{width:"100%", height:"140px", borderRadius:"5px", border:"0px", resize:"none", marginBottom:"10px"}} placeholder=' 입력하세요.'></textarea>
                </div>
                <hr />

                <div style={{padding:"10px"}}>
                    <p style={{fontSize:"15px", marginTop:"-5px", marginBottom:"5px", textAlign:"center"}}>Message Window</p>
                    <div style={{backgroundColor:"white", width:"100%", height:"180px", borderRadius:"5px", marginTop:"10px"}} />
                
                <p style={{textAlign:"left", marginTop:"25px", color:"rgb(90, 110, 233)", marginBottom:"0px", fontSize:"12px"}}>Loading...</p>
                <Progress percent={50} status="active" style={{ width:"100%"}} showInfo={false} strokeColor={{'0%': 'rgb(90, 110, 233)', '100%': 'rgb(90, 110, 233)'}}/>
                </div>

                <div style={{textAlign:"right", padding:"10px", fontSize:"10px", }}>
                    Airport Deep Inspector<br />
                    ver 1.0
                </div>
            </div>
    </div>
    );
}
