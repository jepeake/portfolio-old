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
          </Col>
        </Row>

      </Container>
    </HelmetProvider>
  );
};
