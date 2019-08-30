import React from 'react';
//import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './App.css';
import './bootstrap.min.css';
import PropTypes from 'prop-types';


function Hero() {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book written by the author shown</p>
      </div>
    </div>
  );
}

function Book({title, onClick}) {
  return (
    <div className="answer" onClick={()=>{onClick(title)}}>
      <h4>{title}</h4>
    </div>
  );
}

function Turn({author, books, highlight, onAnswerSelected}) {
  function highlightToBgColor(highlight) {
    const mapping = {
      'none': '',
      'correct': 'green',
      'wrong': 'red'
    };
    return mapping[highlight];
  }

  return (
    <div className="row turn" style={{backgroundColor: highlightToBgColor(highlight)}}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorimage" alt="Author" />
      </div>
      <div className="col-6">
        {books.map(title => <Book title={title} key={title} onClick={onAnswerSelected} />)}
      </div>
    </div>
  );
}

Turn.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  books:PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  highlight: PropTypes.string.isRequired
};

function Continue({ show, onContinue }) {
  return (
    <div className="row continue">
      {
        show ? <div className="col-11">
                  <button className="btn btn-primary btn-lg float-right" onClick={onContinue}>
                    continue
                  </button>
              </div>
            : null 
      }
    </div>
  );
}

function Footer() {
  return (
    <div id="footer" className="row col-10 offset-1">
      <div className="col-12">
        <p className="text-muted credit">
          All images are from <a href="http://commons.wikimedia.org/wiki/Main">Wikemedia Coomons</a>
          and are in the public domain
        </p>
      </div>
    </div>
  );
}

function AuthorQuiz({turnData, highlight, onAnswerSelected, onContinue}) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected} />
      <Continue show={highlight === 'correct'} onContinue={onContinue} />
      <p className="row col-10 offset-1"><Link to='/add'>Add an author</Link></p>
      <Footer />
    </div>
  );
}

export default AuthorQuiz;





// const update = (model = { running: false, time: 0 }, intent) => {
//   const updates = {
//       'START': (model) => Object.assign(model, { running: true }),
//       'STOP': (model) => Object.assign(model, { running: false }),
//       'TICK': (model) => Object.assign(model, { time: model.time + (model.running ? 1 : 0) })
//   };
//   return (updates[intent] || (() => model))(model);
// };

// let view = (m) => {
//   let minutes = Math.floor(m.time / 60);
//   let seconds = m.time - (minutes * 60);
//   let secondsFormatted = `${seconds < 10 ? '0' : ''}${seconds}`;
//   let handler = (event) => {
//       container.dispatch(m.running ? 'STOP' : 'START');
//   };
//   return (
//       <div>
//           <p>{minutes}:{secondsFormatted}</p>
//           <button onClick={handler}>{m.running ? 'Stop' : 'Start'}</button>
//       </div>
//   );
// };


// const createStore = (reducer) => {
//   let internalState;
//   let handlers = [];
//   return {
//       dispatch: (intent) => {
//           internalState = reducer(internalState, intent);
//           handlers.forEach(h => { h(); });
//       },
//       subscribe: (handler) => {
//           handlers.push(handler);
//       },
//       getState: () => internalState
//   };
// };

// let container = createStore(update);

// const render = () => {
//   ReactDOM.render(view(container.getState()), document.getElementById('root'));
// };

// container.subscribe(render);

// setInterval(() => {
//   container.dispatch('TICK');
// }, 1000);