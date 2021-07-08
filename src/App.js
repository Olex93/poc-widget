import "./App.css";
import React from "react";
import Chatbox from "./components/Chatbox";
import Iframe from "./components/Iframe";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./scss/typography.scss";
import "./scss/global.scss";

function App(props) {
  const {
    backgroundColor,
    highlightColor,
    companyName,
    widgetType,
    changeColor,
  } = props;
  //This is an example of how functions can
  // const [color, setColor] = React.useState('red')

  return (
    <Container fluid className="widget" style={{ backgroundColor: backgroundColor }}>
      <Row className="widget-containerRow">
        <Col className="widget-containerCol">
          {widgetType === "chatBox" && (
            <Chatbox
              backgroundColor={backgroundColor}
              highlightColor={highlightColor}
              companyName={companyName}
            />
          )}
          {widgetType === "topBar" && (
            <Topbar
              backgroundColor={backgroundColor}
              highlightColor={highlightColor}
              companyName={companyName}
            />
          )}
          {widgetType === "footer" && (
            <Footer
              backgroundColor={backgroundColor}
              highlightColor={highlightColor}
              companyName={companyName}
            />
          )}
          {widgetType === "iframeEmbed" && (
            <Iframe
              backgroundColor={backgroundColor}
              highlightColor={highlightColor}
              companyName={companyName}
            />
          )}
          {/* <header className="widget-header">
        <h2 className="number" style={{color:color}}>Change my color</h2>
        <button onClick={() => changeColor(setColor, 'blue')}>blue</button>
        <button onClick={() => changeColor(setColor, 'red')}>red</button>
        <button onClick={() => changeColor(setColor, 'green')}>green</button>
      </header> */}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
