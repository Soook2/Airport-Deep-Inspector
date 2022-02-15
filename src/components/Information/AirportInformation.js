import React, { Component } from 'react'

import { Select, Descriptions} from 'antd';

import {InfoWindow, withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from 'react-google-autocomplete';

const { Option } = Select;

Geocode.setApiKey("AIzaSyDxad0hFhUIICr4SRawQS96DdpcYLEgUcs");
Geocode.enableDebug();

export default class AirportInformation extends Component {
    
    state = {
        address: "",
        city: "",
        area: "",
        state: "",
        zoom: 15,
        height: 400,
        mapPosition: {
            lat: 0,
            lng: 0
        },
        markerPosition: {
            lat:0,
            lng:0
        }
    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.setState({
                    mapPosition: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    },
                    markerPosition: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    }
                },
                    () => {
                        Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
                            response => {
                                console.log(response)
                                const address = response.results[0].formatted_address,
                                    addressArray = response.results[0].address_components,
                                    city = this.getCity(addressArray),
                                    area = this.getArea(addressArray),
                                    state = this.getState(addressArray);
                                console.log('city', city, area, state);
                                this.setState({
                                    address: (address) ? address : '',
                                    area: (area) ? area : '',
                                    city: (city) ? city : '',
                                    state: (state) ? state : '',
                                })
                            },
                            error => {
                                console.error(error);
                            }
                        );

                    })
            });
        } else {
            console.error("Geolocation is not supported by this browser!");
        }
    };




    getCity = (addressArray) => {
        let city = '';
        for (let index = 0; index < addressArray.length; index++) {
            if (addressArray[index].types[0] && 'administrative_area_level_2' === addressArray[index].types[0]) {
                city = addressArray[index].long_name;
                return city;
            }
        }
    };

    getArea = (addressArray) => {
        let area = '';
        for (let index = 0; index < addressArray.length; index++) {
            if (addressArray[index].types[0]) {
                for (let j = 0; j < addressArray[index].types.length; j++) {
                    if ('sublocality_level_1' === addressArray[index].types[j] || 'locality' === addressArray[index].types[j]) {
                        area = addressArray[index].long_name;
                        return area;
                    }
                }
            }
        }
    };

    getState = (addressArray) => {
        let state = '';
        for (let index = 0; index < addressArray.length; index++) {
            for (let index = 0; index < addressArray.length; index++) {
                if (addressArray[index].types[0] && 'administrative_area_level_1' === addressArray[index].types[0]) {
                    state = addressArray[index].long_name;
                    return state;
                }
            }
        }
    };


    onMarkerDragEnd = (event) => {
        let newLat = event.latLng.lat();
        let newLng = event.latLng.lng();


        Geocode.fromLatLng(newLat, newLng).then(
            response => {
                const address = response.results[0].formatted_address,
                    addressArray = response.results[0].address_components,
                    city = this.getCity(addressArray),
                    area = this.getArea(addressArray),
                    state = this.getState(addressArray);
                this.setState({
                    address: (address) ? address : '',
                    area: (area) ? area : '',
                    city: (city) ? city : '',
                    state: (state) ? state : '',
                    markerPosition: {
                        lat: newLat,
                        lng: newLng
                    },
                    mapPosition: {
                        lat: newLat,
                        lng: newLng
                    },
                })
            },
            error => {
                console.error(error);
            }
        );
    }


    onPlaceSelected = (place) => {
        const address = place.formatted_address,
            addressArray = place.address_components,
            city = this.getCity(addressArray),
            area = this.getArea(addressArray),
            state = this.getState(addressArray),
            latValue = place.geometry.location.lat(),
            lngValue = place.geometry.location.lng();
        // Set these values in the state.
        this.setState({
            address: (address) ? address : '',
            area: (area) ? area : '',
            city: (city) ? city : '',
            state: (state) ? state : '',
            markerPosition: {
                lat: latValue,
                lng: lngValue
            },
            mapPosition: {
                lat: latValue,
                lng: lngValue
            },
        })
    };


    render() {

        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
            >
            <Marker
                draggable={true}
                onDragEnd={this.onMarkerDragEnd}
                position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
            >    
            <InfoWindow>
                <div>
                    {this.state.markerPosition.lat}, {this.state.markerPosition.lng}
                </div>
            </InfoWindow>
            <Autocomplete
                    style={{
                        width: '100%',
                        height: '40px',
                        paddingLeft: '16px',
                        marginTop: '2px',
                        marginBottom: '2rem'
                    }}
                    onPlaceSelected={this.onPlaceSelected}
                    types={['(regions)']}
                />
            </Marker>
            </GoogleMap>
        ));

        return (
            <>
                <div style={{margin:"3.5%"}}>
                    <p style={{fontSize:"30px"}}>활주로 세부 사항 입력</p>
                    <p style={{fontSize:"15px", marginTop:"-10px"}}>활주로 세부 사항 정보를 입력, 저장합니다.</p>
                    <hr/>
                </div>

                    <div style={{marginLeft:"10%", float:"left", marginTop:"3.2%"}}>
                        <p style={{fontSize:"20px"}}>공항명칭</p>
                        <p style={{fontSize:"20px", marginTop:"30px"}}>활주로 유형</p>
                        <p style={{fontSize:"20px", marginTop:"30px"}}>활주로 길이</p>
                        <p style={{fontSize:"20px", marginTop:"30px"}}>활주로 폭 영역</p>
                        <p style={{fontSize:"20px", marginTop:"30px"}}>활주로 폭</p>
                        <p style={{fontSize:"20px", marginTop:"30px"}}>활주로 방향</p>
                        <p style={{fontSize:"20px", marginTop:"30px"}}>활주로 표면</p>
                    </div>
                    <div style={{float:"left"}}>
                        <input style={{width: "250px", marginLeft:"50px", marginTop:"50px"}}></input>
                        <br/>
                        <input style={{width: "250px",marginTop:"33px", marginLeft:"50px"}}></input>
                        <br/>
                        <input style={{width: "250px",marginTop:"33px", marginLeft:"50px"}}></input>
                        <br/>
                        <Select defaultValue="====선택====" style={{ width: "250px", marginTop:"33px", marginLeft:"50px" }}>
                        <Option value="A1">A1</Option>
                        <Option value="B1">B1</Option>
                        <Option value="C1">C1</Option>
                        </Select>
                        <br/>
                        <input style={{width: "250px",marginTop:"33px", marginLeft:"50px"}}></input>
                        <br/>
                        <input style={{width: "250px",marginTop:"33px", marginLeft:"50px"}}></input>
                        <br/>
                        <input style={{width: "250px",marginTop:"33px", marginLeft:"50px"}}></input>
                        <br/>
                        <button style={{width:"200px", height:"50px", marginTop:"50px", border:"0px", borderRadius:"5px", backgroundColor:"rgb(90, 110, 233)", color:"white", fontSize:"20px", cursor:"pointer"}}>
                            저장하기
                        </button>
                    </div>

                                    
            
                                    {/* 구글맵 영역 */}
                                    <div style={{width:"700px", height:"550px", float:"left", marginLeft:"150px", marginTop:"-30px"}}>
                                    <Descriptions title="Find Airport" bordered>
                                        <Descriptions.Item label="Area">{this.state.area}</Descriptions.Item>
                                        <Descriptions.Item label="State">{this.state.state}</Descriptions.Item><br />
                                        <Descriptions.Item label="Address">{this.state.address}</Descriptions.Item>
                                    </Descriptions>
                                    <MapWithAMarker
                                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDxad0hFhUIICr4SRawQS96DdpcYLEgUcs&v=3.exp&libraries=geometry,drawing,places"
                                    loadingElement={<div style={{ height: `100%` }} />}
                                    containerElement={<div style={{ height: `400px` }} />}
                                    mapElement={<div style={{ height: `100%` }} />}
                                    />
                                    </div>
            </>
        )
    }
}
