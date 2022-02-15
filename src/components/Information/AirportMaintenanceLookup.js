import React from 'react';
import { Table} from 'antd';

export default function AirportMaintenanceLookup() {
    const columns = [
        {
            title: '번호',
            dataIndex: 'number',
        },
        {
            title: '보수 공사명',
            dataIndex: 'maintenanceName',
        },
        {
            title: '착공일',
            dataIndex: 'date',
        },
        {
            title: '결함종류',
            dataIndex: 'flaw',
        },
        {
            title: '보수 위치',
            dataIndex: 'location',
        },
    ];

    const data = [
        {
            key: '1',
            number: '1',
            maintenanceName: '인천국제공항결함',
            date: '2000.00.00',
            flaw: 'Crack',
            location: 'A1'
        },
        {
            key: '2',
            number: '2',
            maintenanceName: '김포 공항 사고',
            date: '2000.00.01',
            flaw: '철판 뜯김',
            location: 'B2'
        },
        {
            key: '3',
            number: '3',
            maintenanceName: '군산 공항 자연재해',
            date: '2111.11.11',
            flaw: '오염',
            location: 'BC-5'
        },
        {
            key: '4',
            number: '4',
            maintenanceName: '김해국제공항',
            date: '2022.01.13',
            flaw: '아스팔트 패임',
            location: 'A100-1101'
        },
        {
            key: '5',
            number: '5',
            maintenanceName: '김해국제공항',
            date: '2022.01.13',
            flaw: '노후',
            location: 'B전구역'
        },
    ]; 

    return (
        
        <>
            <div style={{margin:"50px"}}>
                <p style={{fontSize:"30px"}}>활주로 유지 관리 이력 조회</p>
                <p style={{fontSize:"15px", marginTop:"-10px"}}>저장된 활주로 유지 관리 이력 정보를 조회 할 수 있습니다.</p>
                <hr/>
            </div>
            <div style={{ width:"220px", float:"right", marginRight:"20px", marginTop:"-30px"}}>
                <button style={{width:"80px", height:"30px", border:"0px", borderRadius:"5px", backgroundColor:"rgb(90, 110, 233)", color:"white", fontSize:"15px", cursor:"pointer"}}>
                    수정
                </button>
                <button style={{width:"80px", height:"30px", border:"0px", borderRadius:"5px", backgroundColor:"rgb(90, 110, 233)", color:"white", fontSize:"15px", cursor:"pointer", marginLeft:"20px"}}>
                    삭제
                </button>
            </div>
            <div style={{width:"94%", height:"500px",margin:"50px", marginTop:"70px"}}>
                <div>
                <Table
                    rowSelection={{type: 'radio'}}
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                />
                </div>
            </div>
        </>
    )
}
