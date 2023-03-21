import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';


import image from "./codingPortfolio/First.Portfolio.png";
import image2 from "./codingPortfolio/PasswordGenerator.png";
import image3 from "./codingPortfolio/ReadmeGenerator.png";
import image4 from "./codingPortfolio/Screen.test.png";
import image5 from "./codingPortfolio/Second.Portfolio.png";



export default function Coding() {
  return (
    <MDBCard  >
      <MDBCardImage src={image} alt='...' position='top'
        width="500" height="800" />
      My Second Portfolio
      <br>
      </br>
      <a href='https://github.com/ChrisCode3/challenge3/deployments/activity_log?environment=github-pages' >Deployed Application</a>

      <a href='https://github.com/ChrisCode3/challenge3' >GitHub Link</a>
      <MDBCardBody>

      </MDBCardBody>
      <MDBCardImage src={image2} alt='...' position='top' width="100" height="500" />
      <MDBCardBody>
        <MDBCardText>
          My Password Generator
          <br>
          </br>
          <a href='https://chriscode3.github.io/Password-Generator/' >Deployed Application</a>
          <br>
          </br>
          <a href='https://github.com/ChrisCode3/Password-Generator' >GitHub Link</a>
        </MDBCardText>
      </MDBCardBody>
      <MDBCardImage src={image3} alt='...' position='top' width="100" height="500" />
      <MDBCardBody>
        <MDBCardText>

          <br>
          </br>
          No deployed application as it runs from the terminal
          <br>
          </br>
          <a href='https://github.com/ChrisCode3/Readme-Challenge' >GitHub Link</a>
        </MDBCardText>
      </MDBCardBody>
      <MDBCardImage src={image4} alt='...' position='top' width="100" height="500" />
      <MDBCardBody>
        <MDBCardText>
          hello
        </MDBCardText>
      </MDBCardBody>
      <MDBCardImage src={image5} alt='...' position='top' width="" height="500" />
      <MDBCardBody>
        <MDBCardText>
          Last
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>

  );
}