import React from 'react'
import { Table} from 'antd';

export default function AirportInformationLookup() {
    const columns = [
        {
            title: '번호',
            dataIndex: 'number',
        },
        {
            title: '공항 명칭',
            dataIndex: 'runwayname',
        },
        {
            title: '활주로 유형',
            dataIndex: 'runwaytype',
        },
        {
            title: '활주로 길이',
            dataIndex: 'runwayheight',
        },
        {
            title: '활주로 폭',
            dataIndex: 'runwaywidth',
        },
    ];

    const data = [
        {
            key: '1',
            number: '1',
            runwayname: '인천국제공항',
            runwaytype: '민간공항',
            runwayheight: '3,750m',
            runwaywidth: '60m'
        },
        {
            key: '2',
            number: '2',
            runwayname: '김포국제공항',
            runwaytype: '민간공항',
            runwayheight: '3,600m',
            runwaywidth: '45m'
        },
        {
            key: '3',
            number: '3',
            runwayname: '군산 공항',
            runwaytype: '민군 겸용 공항',
            runwayheight: '5,180m',
            runwaywidth: '46m'
        },
        {
            key: '4',
            number: '4',
            runwayname: '김해국제공항',
            runwaytype: '민군 겸용 공항',
            runwayheight: '3,200m',
            runwaywidth: '60m'
        },
    ]; 

    return (
        
        <>
            <div style={{margin:"50px"}}>
                <p style={{fontSize:"30px"}}>활주로 세부 사항 조회</p>
                <p style={{fontSize:"15px", marginTop:"-10px"}}>저장된 활주로 세부 사항 정보를 조회 할 수 있습니다.</p>
                <hr/>
            </div>
            <div style={{ width:"220px", float:"right", marginRight:"50px", marginTop:"-40px"}}>
                <button style={{width:"100px", height:"50px", border:"0px", borderRadius:"5px", backgroundColor:"#2AAEE6", color:"white", fontSize:"20px", cursor:"pointer"}}>
                    수정
                </button>
                <button style={{width:"100px", height:"50px", border:"0px", borderRadius:"5px", backgroundColor:"#2AAEE6", color:"white", fontSize:"20px", cursor:"pointer", marginLeft:"20px"}}>
                    삭제
                </button>
            </div>
            <div style={{width:"1500px", height:"500px",margin:"50px", marginTop:"70px"}}>
                <div>
                <Table
                    rowSelection={{type: 'radio'}}
                    columns={columns}
                    dataSource={data}
                />
                </div>
            </div>
        </>
    )
}
