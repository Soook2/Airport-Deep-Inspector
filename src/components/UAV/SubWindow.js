import React, { useState } from 'react'

import droneShot from '../../img/droneShot.png'

import marker from '../../img/marker.png'


export default function SubWindow() {

    const [wayImg, setwayImg] = useState("");
    const [SubwayImg, setSubwayImg] = useState("");
    

    const handleClick = (e) => {
        var x = e.nativeEvent.offsetX;
        var y = e.nativeEvent.offsetY;
    
        // console.log(x);
        // console.log(y);
    
        var img = document.createElement("img");
        img.setAttribute("src", marker);
        img.setAttribute("alt", "아아아");
    
        img.style.position = "absolute";
        img.style.left = x - 20 + "px";
        img.style.top = y - 20 + "px";
        img.style.width = "50px";
    
        document.body.appendChild(img);

        
        setwayImg(img);
        setSubwayImg(wayImg);
        console.log(wayImg);
        console.log(SubwayImg);
    };

    const handleRightClick = (e) =>{
        e.preventDefault();
        setwayImg(SubwayImg);
        // setSubwayImg(wayImg)
        document.body.removeChild(wayImg);
    }    

    return (
        <div style={{position:"relative", fontFamily:"pretendard", height:"100vh"}}>
                <div style={{position:"absolute", color:"white", width:"100vw", height:"100vh"}} onClick={handleClick} onContextMenu={handleRightClick}>
                {/* aaaaaa */}
                </div>
                <img src={droneShot} alt="" style={{height:"100vh", width:"100%", scrollbarWidth:"none"}}/>
            </div>
    )
}