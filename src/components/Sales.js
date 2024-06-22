import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { ArrowUp } from "styled-icons/bootstrap";

const Container = styled.div`
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 2px 5px rgba(0, 0, 0, 0.1);
  height: 60%;
  display: flex;
  flex-direction: column;
  text-align: start;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  padding: 0px 16px;
`;

const StyledLine = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "1px"};
  background-color: ${(props) => props.color || "#ddd"};
`;

const StyledVerticalLine = styled.div`
  width: ${(props) => props.width || "1px"};
  height: ${(props) => props.height || "100%"};
  background-color: ${(props) => props.color || "#ddd"};
  margin: ${(props) => props.margin || "0 10px"};
`;

const InfoIcon = styled(FontAwesomeIcon)`
  color: #888;
`;

const Details = styled.p`
  margin: 10px 0;
  display: flex;

  text-align: center;
  align-items: center;
  color: #8b8b8b;
  padding: 0px 16px;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: start;
  padding: 0px 1.25rem;
  height: auto;
  width: 45%;
`;

const StatValue = styled.h4`
  margin: 0;
  color: #22ab55;
  font-size: 3rem;
`;

const Sales = ({ uploads, linesAdded, uploadSuccess, linesSaved }) => (
  <Container>
    <Header>
      <h3 style={{ color: "#333333" }}>Sales</h3>
      <InfoIcon icon={faInfoCircle} aria-label="Information" />
    </Header>
    <Details aria-live="polite">
      <ArrowUp
        style={{
          color: "#3fb1eb",
          padding: "4px",
          width: "1rem",
          height: "1rem",
        }}
      />{" "}
      You had <strong style={{ padding: "0px 4px" }}>{uploads} uploads </strong>{" "}
      and <strong style={{ padding: "0px 4px" }}> {linesAdded} </strong> lines
      added.
    </Details>
    <StyledLine />
    <Stats>
      <Stat>
        <StatValue>{uploadSuccess}%</StatValue>
        <p style={{ color: "#a5a3a3", fontWeight: 900 }}>UPLOAD SUCCESS</p>
      </Stat>
      <StyledVerticalLine />
      <Stat>
        <StatValue>{linesSaved}%</StatValue>
        <p style={{ color: "#a5a3a3", fontWeight: 900 }}>LINES SAVED</p>
      </Stat>
    </Stats>
  </Container>
);

Sales.propTypes = {
  uploads: PropTypes.number.isRequired,
  linesAdded: PropTypes.number.isRequired,
  uploadSuccess: PropTypes.number.isRequired,
  linesSaved: PropTypes.number.isRequired,
};

export default Sales;
