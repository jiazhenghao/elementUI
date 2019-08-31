var HelloWorld = React.createClass({
  render: function() {
    return <h1>Hello World</h1>;
  }
});

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>Hello World</h1>;
  }
}

function HelloWorld(props) {
  return <h1>Hello World</h1>;
}

const HelloWorld = props => {
  return <h1>Hello World</h1>;
};
