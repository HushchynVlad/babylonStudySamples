import React from "react";
import DevTools from "mobx-react-devtools";
import babb from "babylonjs";
import IntroScene from "../components/IntroScene"
;
//import "./Canvas.css";

const Problematic = () => {
  throw new Error("버그가 나타났다!");
  return <div />;
};

class TestApp extends React.Component {
  state = {
    mainCanv: null,
  };

  canv:any = null;

  render() {
    const style = {
      backgroundColor: "black",
      width: "100%",
      height: "54%"
    };

    return (
      <div>
        <canvas className="mainCanvas" style={style} ref={ref => {
            this.canv = ref;
        }}/>

        <h1>Test</h1>
        {console.log(this.state)}

        <IntroScene/>
      </div>
    );
  }

  componentDidMount() {
    // console.log(this.state.canv);
    console.log(document.getElementsByClassName("mainCanvas"));
    this.setState({
      mainCanv: this.canv
    });
    console.log(this.state);
  }
}

export default TestApp;
