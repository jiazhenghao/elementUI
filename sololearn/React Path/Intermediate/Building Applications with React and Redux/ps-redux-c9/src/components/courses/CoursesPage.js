import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: ""
    }
  };

  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.createCourse(this.state.course);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="save" />
        {this.props.courses.map(course => {
          return <div key={course.title}>{course.title}</div>;
        })}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  //createCourse: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

/* manual mapping
function mapDispatchToProps(dispatch) {
  return {
    createCourse: course => dispatch(courseActions.createCourse(course))
  };
}
*/

/* bindActionCreators */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

/* Object
const mapDispatchToProps = {
  createCourse: courseActions.createCourse
};
*/

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
