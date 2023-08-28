import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Pathfinder= () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Pathfinder  | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Autonomous Pathfinding Robot </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
            <p><a href="https://github.com/jepeake/pathfinding-robot">Github Repository</a></p>
            <p><i>C++, SystemVerilog, HTML, CSS</i></p>
            <p>Designed an Autonomous Pathfinding Robot - to autonomously navigate, map, and calculate the shortest path through a maze.</p>
            <p><b>Navigation:</b></p>
            <p>To navigate the maze - the Robot used an DE10-Lite FPGA + Camera Module to perform real-time image processing. The feed from the Camera Module was passed to the FPGA board, which was programmed in SystemVerilog to perform image processing and act as a Vision System. The Vision System would use colour-detection to detect the white maze markings in the bottom half of the frame, and the coloured beacons surrounding the maze in the top half of the frame.</p>
            <p>The Robot would then traverse the entirety of the maze - following the left wall, until it reach a point it had already traversed, at which point the server would communicate to command it to follow the right wall.</p>
            <p><b>Map:</b></p>
            <p>To Map the Maze - the Robot must be capable of determining the position in the maze - using a combination of dead-reckoning and vision.</p>
         </Col>
        </Row>

      </Container>
    </HelmetProvider>
  );
};
