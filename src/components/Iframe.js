import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../scss/iframe.scss";
import "../scss/typography.scss";

export default function Iframe(props) {
  const { highlightColor, backgroundColor, companyName } = props;
  return (
    <Container fluid className="iframe p-3">
      <Row>
        <Col>
          <h4 style={{ color: highlightColor }}>Hey {companyName}</h4>
          <p className="bodyText">I am a chatbox style widget</p>
        </Col>
      </Row>
    </Container>
  );
}