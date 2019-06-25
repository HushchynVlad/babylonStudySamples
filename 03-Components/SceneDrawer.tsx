import * as React from "react";
import * as BABYLON from "babylonjs";
//import ".../Canvas.css";

export type SceneEventArgs = {
  engine: BABYLON.Engine,
  scene: BABYLON.Scene,
  canvas: HTMLCanvasElement
};

export type SceneProps = {
  engineOptions?: BABYLON.EngineOptions;
  adaptToDeviceRatio?: boolean;
  onSceneMount?: (args: SceneEventArgs) => void;
  width?: string; //multi canvas에 쓸지도 모름.
  height?: string; //multi canvas에 쓸지도 모름.
};

class SceneDrawer extends React.Component<
  SceneProps & React.HTMLAttributes<HTMLCanvasElement>, {}
> {
  private scene!: BABYLON.Scene;
  private engine!: BABYLON.Engine;
  private canvas!: HTMLCanvasElement;

  onResizeWindow = () => {
    if (this.engine) {
      console.log('onResize');
      this.engine.resize();
    }
  };

  componentDidMount() {
    console.log('onDidMount');

    this.engine = new BABYLON.Engine(
      this.canvas,
      true,
      this.props.engineOptions,
      this.props.adaptToDeviceRatio
    );

    let scene = new BABYLON.Scene(this.engine);
    this.scene = scene;
      console.log('typeof_onSceneMount : '+typeof this.props.onSceneMount);
    if (typeof this.props.onSceneMount === "function") {
      this.props.onSceneMount({
        scene,
        engine: this.engine,
        canvas: this.canvas
      });
      console.log(this.props.onSceneMount);
    } else {
      console.log("onSceneMount function not available");
    }

    // Resize the babylon engine when the window is resized
    window.addEventListener("resize", this.onResizeWindow);
  }

  componentWillUnmount() {
    console.log('willUnMount');
    window.removeEventListener("resize", this.onResizeWindow);
    //이벤트 쌓이는걸 방지.
  }

  onCanvasLoaded = (c: HTMLCanvasElement) => {
    console.log('onCanvas : '+c);
    if (c !== null) {
      c.style.width = '100%';
      c.style.height = '54%';
      this.canvas = c;
    }
  };

  render() {
    // 'rest' can contain additional properties that you can flow through to canvas:
    // (id, className, etc.)
    console.log('renderStart');
    let { width, height, ...rest } = this.props; //destructuring

    let opts: any = {};

    if (width !== undefined && height !== undefined) {
      opts.width = width;
      opts.height = height;
      //opts.backgroundColor = backgroundColor;
    }

    return (
      <div>
        <canvas {...opts} ref={this.onCanvasLoaded} />
      </div>
    );
  }
}

export default SceneDrawer;
