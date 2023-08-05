import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Vega = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Vega  | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Vega Avionics System </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
            <p><a href="https://karmanspace.co.uk">Karman Space Programme</a></p>
            <p>The Vega Avionics System is a System that is designed to enable the Karman Space Programme to become the first student-led team to reach space, 100km, with a reusable rocket.</p>
            <img src={process.env.PUBLIC_URL + "images/KSPoster.jpg"} class='image'/>
            <p><br></br>Throughout the design process - there are a particular set of considerations that the system must provide to ensure a successful mission. These include: System Architecture, Sensors & Data Processing, Telemetry Communication, Control System, Power Distribution, Camera System, & Software. Throughout my role as an Avionics Engineer - I have been responsible in particular for designing the System Architecture, Software, & Control Systems. Moreover, coordinating closely with other team members to ensure all design considerations are met. Thus far - the Vega Team has produced several Design Reviews that outline the functionality & design choices taken - a poster summarising the PDR can be found above.</p>
            <p><br></br></p>
          </Col>
        </Row>

      </Container>
    </HelmetProvider>
  );
};
