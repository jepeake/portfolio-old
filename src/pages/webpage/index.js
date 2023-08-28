import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Webpage= () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Webpage Portfolio Design  | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Webpage Portfolio Design </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
            <p><a href="https://github.com/jepeake/jepeake.github.io">Github Repository</a></p>
            <p><i>HTML, CSS, JavaScript, React</i></p>
            <p>Designed this Portfolio Webpage to display my projects, experiences , & thoughts.</p>
          </Col>
        </Row>

      </Container>
    </HelmetProvider>
  );
};
