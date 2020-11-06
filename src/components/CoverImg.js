import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Row } from 'react-bootstrap';

window.onload = function(){

    const mainImg = document.getElementById("mainImg");

    window.onscroll = function(){
        let currentPos = window.pageYOffset;
        let imgScale = currentPos/15000
        console.log(currentPos/10000);
        mainImg.style.filter = "blur(" + currentPos/200 + "px)";
        mainImg.style.transform = "scale("+(1+imgScale)+")";
    };
}

function CoverImg() {
    return (
        <Row style={{position:"fixed"}} fluid>
            <Image id="mainImg" style={{objectFit:"cover",minHeight:"40vh",width:"100%",height:"100%"}} src="https://i.imgur.com/jey24yC.jpg" fluid />
        </Row>
    );
  }

export default CoverImg;
