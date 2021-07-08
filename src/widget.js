import * as zoid from "zoid/dist/zoid.frameworks";

let MyWidget = zoid.create({
  tag: "my-widget",
  url: "http://localhost:3000/index.html",
  // url: "https://poc-react-widget.netlify.app/",
  dimensions: {
    width: "100%",
    height: "100%",
  },
});

console.log("loaded widget");

export default MyWidget;
