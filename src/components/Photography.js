import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';


import image from "./photographyPorfolio/000019.jpg";
import image2 from "./photographyPorfolio/000024.jpg";
import image3 from "./photographyPorfolio/15029_001-036.jpg";
import image4 from "./photographyPorfolio/15029_002-009.jpg";


export default function Photography() {
  return (
    <MDBCard>
      <MDBCardImage src={image} alt='...' position='top' 
    width="100" height="600" />
      <MDBCardBody>
        <MDBCardText>
          A long time ago in   <em> Llandudno</em> in 35mm
        </MDBCardText>
      </MDBCardBody>
      <MDBCardImage src= {image2} alt='...' position='top'    width="100" height="600" />
      <MDBCardBody>
        <MDBCardText>
        A long time ago in vol 2  <em> Llandudno</em> in 35mm
        </MDBCardText>
      </MDBCardBody>
      <MDBCardImage src={image3} alt='...' position='top'   width="100" height="600" />
      <MDBCardBody>
        <MDBCardText>
         Kalamata, Greece in 35mm
        </MDBCardText>
      </MDBCardBody>
      <MDBCardImage src={image4} alt='...' position='top'    width="100" height="600"/>
      <MDBCardBody>
        <MDBCardText>
        Kalamata, Greece vol 2 in 35mm
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}