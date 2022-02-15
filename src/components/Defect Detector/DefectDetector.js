import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import RightPanel from '../RightPanel/RightPanel';

import {Dropdown, Button, Menu, Tooltip, Modal} from 'antd';

import { faCaretLeft, faChevronLeft, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import OpenImage from '../../img/dm_openImage.png'
import DefectDetectorImg from '../../img/dm_defectDetector.png'
import DefectMeasure from '../../img/dm_defectMeasure.png'
import SaveResult from '../../img/dm_saveResult.png'

export default function DefectDetector() {

  const [rightBar, setRightBar] = useState("-300px");
  const [about, setAbout] = useState(false);

  const RightBarClick = () => {
    if (rightBar==="0px") {
        setRightBar("-300px")
        // setRightButton(ChevronRight)
    } else {
        setRightBar("0px")
        // setRightButton(ChevronLeft)
    }
}

  const ChevronLeft = faChevronLeft;

  const menu1 = (
    <Menu style={{padding:"0px"}}>
        <Menu.Item  className='DropDownItem'>
            Open Images
        </Menu.Item>
        <Menu.Item  className='DropDownItem'>
            Save Results
        </Menu.Item>
        <Menu.Item  className='DropDownItem'>
            Save Couple Image
        </Menu.Item>
    </Menu>
    );

const menu2 = (
    <Menu style={{padding:"0px"}}>
        <Menu.Item  className='DropDownItem'>
            View Images
        </Menu.Item>
        <Menu.Item  className='DropDownItem'>
            View Results
        </Menu.Item>
    </Menu>
    );

const menu3 = (
    <Menu style={{padding:"0px"}}>
      <Menu.Item  className='DropDownItem'>
        Defect Detector
      </Menu.Item>
    <Menu.Item  className='DropDownItem'>
        Defect Measuer
    </Menu.Item>
    </Menu>
    );

const menu4 = (
    <Menu style={{padding:"0px"}}>
      <Menu.Item  className='DropDownItem'>
        Help
      </Menu.Item>
      <Menu.Item  className='DropDownItem' onClick={()=>{setAbout(true)}}>
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
                    View
                </Button>
            </Dropdown>

            <Dropdown overlay={menu3} placement="bottomLeft">
                <Button className='DropDown' style={{width:"150px"}}>
                    Run
                </Button>
            </Dropdown>

            <Dropdown overlay={menu4} placement="bottomLeft">
                <Button className='DropDown' style={{width:"150px"}}>
                    Help
                </Button>
            </Dropdown>
        </div>


        {/* 왼쪽 퀵메뉴*/}
        <div style={{width:"75px", height:"96.1vh", backgroundColor:"rgb(225, 226,230)", float:"left"}}>
            {/* 좌측 퀵메뉴 영역 */}
            <div className='LeftIcon' style={{marginTop:"10px"}}>
            <Tooltip placement="right" title="Open Image">
            <img src={OpenImage} style={{width:"44px", height:"auto"}} alt="" />
            </Tooltip>
            </div>

            <div className='LeftIcon' style={{marginTop:"10px"}}>
            <Tooltip placement="right" title="Defect Detector">
            <img src={DefectDetectorImg} style={{width:"44px", height:"auto"}} alt="" onClick={()=>window.open("/subwindow", "SubWindow", 'top=100, left=200, width=1500, height=800')}/>
            </Tooltip>
            </div>

            <div className='LeftIcon' style={{marginTop:"10px"}}>
            <Tooltip placement="right" title="Defect Measuer">
            <img src={DefectMeasure} style={{width:"44px", height:"auto"}} alt="" onClick={()=>window.open("/subwindow", "SubWindow", 'top=100, left=200, width=1500, height=800')}/>
            </Tooltip>
            </div>

            <div className='LeftIcon' style={{marginTop:"10px"}}>
            <Tooltip placement="right" title="Save Result">
            <img src={SaveResult} style={{width:"44px", height:"auto"}} alt="" onClick={()=>window.open("/subwindow", "SubWindow", 'top=100, left=200, width=1500, height=800')}/>
            </Tooltip>
            </div>
        </div>

          {/* 메인창 */}
          <div style={{width:"84%", float:"left", height:"96.1vh"}}>
           Defect Detector 작업창입니다.
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
  )
}
