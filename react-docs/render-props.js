/*
1.0
The term “render prop” refers to a technique for sharing code between React components
using a prop whose value is a function.
A component with a render prop takes a function that returns a React element and
calls it instead of implementing its own render logic.
*/
<DataProvider render={data => <h1>Hello {data.target}</h1>} />;
//Libraries that use render props include React Router, Downshift and Formik.

//More concretely, a render prop is a function prop that a component uses to know what to render.

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img
        src="/cat.jpg"
        style={{ position: "absolute", left: mouse.x, top: mouse.y }}
      />
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: "100%" }} onMouseMove={this.handleMouseMove}>
        {/*
            Instead of providing a static representation of what <Mouse> renders,
            use the `render` prop to dynamically determine what to render.
          */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={mouse => <Cat mouse={mouse} />} />
      </div>
    );
  }
}

//2.0
// If you really want a HOC for some reason, you can easily
// create one using a regular component with a render prop!
function withMouse(Component) {
  return class extends React.Component {
    render() {
      return (
        <Mouse render={mouse => <Component {...this.props} mouse={mouse} />} />
      );
    }
  };
}

/*
3.0
Be careful when using Render Props with React.PureComponent
*/
