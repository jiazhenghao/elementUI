/*
Concretely, a higher-order component is a function that takes a component and returns a new component.
*/
class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      // "DataSource" is some global data source
      comments: DataSource.getComments()
    };
  }

  componentDidMount() {
    // Subscribe to changes
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    // Clean up listener
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    // Update component state whenever the data source changes
    this.setState({
      comments: DataSource.getComments()
    });
  }

  render() {
    return (
      <div>
        {this.state.comments.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    );
  }
}

class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      blogPost: DataSource.getBlogPost(props.id)
    };
  }

  componentDidMount() {
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    this.setState({
      blogPost: DataSource.getBlogPost(this.props.id)
    });
  }

  render() {
    return <TextBlock text={this.state.blogPost} />;
  }
}

/*
We can write a function that creates components, like CommentList and BlogPost,
that subscribe to DataSource. The function will accept as one of its arguments 
a child component that receives the subscribed data as a prop. Let’s call the 
function withSubscription:
*/
const CommentListWithSubscription = withSubscription(CommentList, DataSource =>
  DataSource.getComments()
);

const BlogPostWithSubscription = withSubscription(
  BlogPost,
  (DataSource, props) => DataSource.getBlogPost(props.id)
);
/*
The first parameter is the wrapped component. 
The second parameter retrieves the data we’re interested in, 
given a DataSource and the current props.
*/

// This function takes a component...
function withSubscription(WrappedComponent, selectData) {
  // ...and returns another component...
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource, props)
      };
    }

    componentDidMount() {
      // ... that takes care of the subscription...
      DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props)
      });
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}

/*
2.0
Convention: Wrap the Display Name for Easy Debugging 
The most common technique is to wrap the display name of the wrapped component. 
So if your higher-order component is named withSubscription, and the wrapped 
component’s display name is CommentList, use the display name WithSubscription(CommentList):
*/
function withSubscription(WrappedComponent) {
  class WithSubscription extends React.Component {
    /* ... */
  }
  WithSubscription.displayName = `WithSubscription(${getDisplayName(
    WrappedComponent
  )})`;
  return WithSubscription;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

/*
3.0
Caveats:
3.1
Don’t Use HOCs Inside the render Method:
In those rare cases where you need to apply a HOC dynamically, 
you can also do it inside a component’s lifecycle methods or its constructor.
3.2
Static Methods Must Be Copied Over:
However, this requires you to know exactly which methods need to be copied. 
You can use hoist-non-react-statics to automatically copy all non-React static methods:
*/
import hoistNonReactStatic from "hoist-non-react-statics";
function enhance(WrappedComponent) {
  class Enhance extends React.Component {
    /*...*/
  }
  hoistNonReactStatic(Enhance, WrappedComponent);
  return Enhance;
}
/*
3.3
Refs Aren’t Passed Through 
*/
