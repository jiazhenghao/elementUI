class Sum extends React.Component {
  render() {
    return <h1>
      {props.a} + {props.b} = {props.a + props.b};
      </h1>;
  }
}

ReactDOM.render(<Sum a={4} b={2} />,
  document.getElementById('root')
);
