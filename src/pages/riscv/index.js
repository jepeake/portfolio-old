import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Riscv= () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> RISC-V CPU | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> RISC-V CPU Design </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
            <p><a href="https://github.com/jepeake/RISCV-CPU">Github Repository</a></p>
            <p>As part of the Imperial College London Instruction Architecture & Compilers Course - a multi-stage pipelined RISC-V CPU was implemented as a group project. This project taught the RISC-V Instruction Set Architecture, Microarchitecture Design, Pipelining, Hazard Units, Data Cache, & Verification of Hardware Designs.</p>
            <p><br></br>The Group first implemented a simple Single-Cycle RISC-V 32I Design - which implemented most of the RV32I Instructions - including Jump and Link (JAL) such that subroutines could be performed. Then, this was extended by adding pipelining to the design, enabling multiple instructions to execute simultaneously. Data and Control Hazards could be dealt with in software by identifying and inserting NOPs. Then, to increase complexity, data cache was implemented.</p>
            <p><br></br>For this project - I was responsible for implementing the ALU, Data Memory, Register File, CPU and Data Cache Modules. These modules were written in SystemVerilog, and then testbenches written in C++. In the ALU, an enumerated type was used to characterise all of the ALU operations as numbers corresponding to the value of the ALU control signal. Then, a combinational logic statement defined the operations for each case. For Data Memory, memory was defined with respect to a mapping given in the project brief. On the positive edge of the clock, if write enable = 1, then data is written to memory at the specified address. For this CPU, this is done with byte-addressing.</p>
            <p><br></br>For the Register File, it had the functionality to simply pass the values at address ad1 and ad2 to outputs rd1 and rd2 to read data from the registers - and if write enable = 1, then value of wd3 written to register at address ad3. The CPU module is a SV Structural Module, that connects each of the RTL components together. It defines the intput/output logic, interconnecting wires and instances of the behavioural modules that have been previously defined.</p>
            <p><br></br>The cache used is direct mapped cache as it is simple to implement into the existing processor- and only requires a small amount of extra hardware which can be put inside the Data Memory module itself. The limit for this project was 256 bytes of data cache - therefore, the cache was implemented as having a capacity of 64 words, with a width of 57bits (32 for data, 24 for tag, and 1 for valid bit). When reading data from memory, the cache should be checked first, before checking the data memory itself. To implement this is SV, we use an if statement to compare value in Cache with the corresponding Tag of the address- and check if the V bit is 1. If true, read data from Cache, otherwise go to the data memory address to read data and also copy that data into cache. A problem is encountered is when writing data to cache memory. If cache misses, the cache block is fetched from main memory and the word is written to the cache block. If cache hits, the word is simply written to the cache block. Once a word is written, the cache contains different data from the main memory (cache coherency). To solve this, I implemented the cache as write through- so that data is written to cache and the main memory simultaneously. Whenever write enable is 1- any data written to main memory is also written to the corresponding set in cache.</p>
          </Col>
        </Row>

      </Container>
    </HelmetProvider>
  );
};
