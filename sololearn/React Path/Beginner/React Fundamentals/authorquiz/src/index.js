import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';

import './index.css';
import * as serviceWorker from './serviceWorker';
//import EvenCounter from './test/test';
//ReactDOM.render(<EvenCounter onEvenClick={(data) => { console.log(`even ${data}`); }} />, document.getElementById('root'));
import AuthorQuiz from './AuthorQuiz';
import AddAuthorForm from './AddAuthorForm';
import { shuffle, sample } from 'underscore';

const authors = [
  {
    name: 'Mark Twain',
    imageUrl: 'images/authors/marktwain.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['The Adventures of Huckleberry Finn']
  },
  {
    name: 'Joseph Conrad',
    imageUrl: 'images/authors/josephconrad.png',
    imageSource: 'Wikimedia Commons',
    books: ['Heart of Darkness']
  },
  {
    name: 'J.K. Rowling',
    imageUrl: 'images/authors/jkrowling.png',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Daniel Ogren',
    books: ['Hary Potter and the Sorcerers Stone']
  },
  {
    name: 'Stephen King',
    imageUrl: 'images/authors/stephenking.png',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Pinguino',
    books: ['The Shining', 'IT']
  },
  {
    name: 'Charles Dickens',
    imageUrl: 'images/authors/charlesdickens.png',
    imageSource: 'Wikimedia Commons',
    books: ['David Copperfield', 'A Tale of Two Cities']
  },
  {
    name: 'William Shakespeare',
    imageUrl: 'images/authors/williamshakespeare.png',
    imageSource: 'Wikimedia Commons',
    books: ['Hamlet', 'Romeo and Juliet']
  }

];

function getTurnData(authors) {
  const allBooks = authors.reduce(function (p, c, i) {
    return p.concat(c.books);
  }, []);
  const fourRandomBooks = shuffle(allBooks).slice(0, 4);
  const answer = sample(fourRandomBooks);
  return {
    books: fourRandomBooks,
    author: authors.find(author =>
      author.books.some(title => title === answer)
    )
  };
}

// function resetState() {
//   return {
//     turnData: getTurnData(authors),
//     highlight: ''
//   };
// }

function reducer(state = { authors, turnData: getTurnData(authors), highlight: '' }, action) {
  switch (action.type) {
    case 'ANSWER_SELECTED':
      const isCorrect = state.turnData.author.books.some(book => book === action.answer);
      return Object.assign({}, state, { highlight: isCorrect ? 'correct' : 'wrong' });
    case 'CONTINUE':
      return Object.assign({}, state, { highlight: '', turnData: getTurnData(state.authors) });
    case 'ADD_AUTHOR':
      return Object.assign({}, state, { authors: state.authors.concat([action.author])});
    default:
      return state;
  }
}

let store = Redux.createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <BrowserRouter>
    <ReactRedux.Provider store={store}>
      <>
        <Route exact path="/" component={AuthorQuiz} />
        <Route path="/add" component={AddAuthorForm} />
      </>
    </ReactRedux.Provider>
  </BrowserRouter>, 
  document.getElementById('root'));

serviceWorker.unregister();

// const AuthorWrapper = withRouter(({ history }) =>
//   <AddAuthorForm onAddAuthor={(author) => {
//     authors.push(author);
//     history.push('/');
//   }} />
// );

// render();

// let state = resetState();

// function onAnswerSelected(answer) {
//     const isCorrect = state.turnData.author.books.some(book => book === answer);
//     state.highlight = isCorrect ? 'correct' : 'wrong';
//     render();
// }