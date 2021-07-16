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

//Third party package to pull ip data
var ip = require("ip");

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

  const [ipAddress, setIpAddress] = React.useState("");
  const [totalResourcesSize, setTotalResourcesSize] = React.useState(0);

  
  React.useEffect(() => {
    //Set IP address
    setIpAddress(ip.address());
    props.calcLoadedResources(setTotalResourcesSize);
  }, []);

  return (
    <Container
      fluid
      className="widget"
      style={{ backgroundColor: backgroundColor }}
    >
      <Row className="widget-containerRow">
        <Col className="widget-containerCol">
          {widgetType === "chatBox" && (
            <Chatbox
              backgroundColor={backgroundColor}
              highlightColor={highlightColor}
              companyName={companyName}
              ipAddress={ipAddress}
              totalResourcesSize={totalResourcesSize}
            />
          )}
          {widgetType === "topBar" && (
            <Topbar
              backgroundColor={backgroundColor}
              highlightColor={highlightColor}
              companyName={companyName}
              ipAddress={ipAddress}
              totalResourcesSize={totalResourcesSize}
            />
          )}
          {widgetType === "footer" && (
            <Footer
              backgroundColor={backgroundColor}
              highlightColor={highlightColor}
              companyName={companyName}
              ipAddress={ipAddress}
              totalResourcesSize={totalResourcesSize}
            />
          )}
          {widgetType === "iframeEmbed" && (
            <Iframe
              backgroundColor={backgroundColor}
              highlightColor={highlightColor}
              companyName={companyName}
              ipAddress={ipAddress}
              totalResourcesSize={totalResourcesSize}
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
