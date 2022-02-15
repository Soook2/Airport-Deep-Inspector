import React from 'react';

export default function AirportMaintenance() {
    return (
    <>
        <div style={{margin:"50px"}}>
            <p style={{fontSize:"30px"}}>활주로 유지 관리 이력 입력</p>
            <p style={{fontSize:"15px", marginTop:"-10px"}}>활주로 보수 공사 기본 정보를 입력, 저장합니다.</p>
            <hr/>
        </div>

        <div style={{ width:"1600px", height:"500px", marginTop:"100px"}}>
            <div style={{marginLeft:"180px", float:"left"}}>
                <p style={{fontSize:"20px"}}>보수 공사명</p>
                <p style={{fontSize:"20px", marginTop:"30px"}}>보수위치(설명)</p>
                <p style={{fontSize:"20px", marginTop:"30px"}}>착공일</p>
                <p style={{fontSize:"20px", marginTop:"30px"}}>결함 종류</p>
                <p style={{fontSize:"20px", marginTop:"30px"}}>공사 구분</p>
            </div>
            <div style={{float:"left"}}>
            <input style={{width: "250px", marginLeft:"50px"}}></input>
                <br/>
                <input style={{width: "250px",marginTop:"33px", marginLeft:"50px"}}></input>
                <br/>
                <input style={{width: "250px",marginTop:"33px", marginLeft:"50px"}}></input>
                <br/>
                <input style={{width: "250px",marginTop:"33px", marginLeft:"50px"}}></input>
                <br/>
                <input style={{width: "250px",marginTop:"33px", marginLeft:"50px"}}></input>
                <br/>
                {/* <button style={{width:"200px", height:"50px", marginTop:"50px", border:"0px", borderRadius:"5px", backgroundColor:"#2AAEE6", color:"white", fontSize:"20px", cursor:"pointer"}}>
                    저장하기
                </button> */}
            </div>
            <div style={{marginLeft:"400px", float:"left"}}>
                <p style={{fontSize:"20px"}}>건설회사</p>
                <p style={{fontSize:"20px", marginTop:"30px"}}>감독자</p>
                <p style={{fontSize:"20px", marginTop:"30px"}}>준공일</p>
                <p style={{fontSize:"20px", marginTop:"30px"}}>보수 공법</p>
                <p style={{fontSize:"20px", marginTop:"30px"}}>공사비(원)</p>
            </div>
            <div style={{float:"left"}}>
            <input style={{width: "250px", marginLeft:"50px"}}></input>
                <br/>
                <input style={{width: "250px",marginTop:"33px", marginLeft:"50px"}}></input>
                <br/>
                <input style={{width: "250px",marginTop:"33px", marginLeft:"50px"}}></input>
                <br/>
                <input style={{width: "250px",marginTop:"33px", marginLeft:"50px"}}></input>
                <br/>
                <input style={{width: "250px",marginTop:"33px", marginLeft:"50px"}}></input>
                <br/>
            </div>

            <div style={{float:"left", marginLeft:"180px"}}>
                <p style={{fontSize:"20px", float:"left"}}>공사 내용</p>
                <textarea style={{width:"1040px", height:"100px", resize:"none",marginTop:"5px", marginLeft:"93px"}}></textarea>
            </div>

            <div style={{ width:"1500px", height:"80px", float:"left"}}>
                <div style={{marginLeft:"180px", float:"left", width:"90px", marginTop:"25px"}}>
                    <p style={{fontSize:"20px"}}>신청 기업</p>
                </div>
                <div style={{float:"left", marginTop:"25px"}}>
                    <input style={{width: "250px", marginLeft:"78px"}}></input>
                </div>
                <div style={{marginLeft:"400px", float:"left", width:"90px", marginTop:"25px"}}>
                    <p style={{fontSize:"20px"}}>전화번호</p>
                </div>
                <div style={{float:"left", marginTop:"25px"}}>
                    <input style={{width: "250px", marginLeft:"50px"}}></input>
                </div>
            </div>
            
        </div>
        <div style={{ textAlign:"center"}}>
            <button style={{width:"200px", height:"50px", border:"0px", borderRadius:"5px", backgroundColor:"rgb(90, 110, 233)", color:"white", fontSize:"20px", cursor:"pointer", marginTop:"50px"}}>
                저장하기
            </button>
        </div>
        
    </>
    );
}
