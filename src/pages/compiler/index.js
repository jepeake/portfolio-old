import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Compiler= () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Compiler  | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> C to RISC-V Compiler </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
            <p><a href="https://github.com/jepeake/C-to-RISCV-Compiler">Github Repository</a></p>
            <p><i>C++, RISC-V, Lex/Flex, Yacc/Bison</i></p>
            <p>Designed a C Compiler that takes preprocessed ANSI-C as the source language & produces RISC-V assembly as the target language.</p>
            <p><b>Lexer: </b> <i>C++ & Flex</i> <br></br> Defines a list of Regular Expressions & Associated Actions which tokenise the source code and produce a stream of tokens.</p>
            <p><i>Flex (Fast Lexical Analyser Generator):</i> Open-Source Alternative to Lex</p>
            <p>When a Flex input file is provided with Regular Expressions & Corresponding Actions - Flex generates a C++ program that performs tokenisation based on those rules.</p>
            <p><b>Parser: </b><i>C++ & Bison</i></p>
            <p>Analyses the stream of tokens and formulates an Abstract Syntax Tree.</p>
            <p><i>Bison: </i> GNU Implementation of Yacc</p>
            <p>Bison is a general-purpose parser generator that converts an annotated context-free grammar into a parser table.</p>
            <p>Careful consideration was taken in how the program would create this AST - with a grammar being defined from which a shift-reduce Parser could be generated.</p>
            <p><b>Code Generation:</b></p>
            <p>Once the AST is generated - the nodes can be analysed to generate the corresponding RISC-V assembly.</p>
            <p>See the GitHub Repository for the implementation.</p>
          </Col>
        </Row>

      </Container>
    </HelmetProvider>
  );
};
