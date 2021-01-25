// Styles
import './styles/styles.css';

// React
import React from 'react';
import ReactDOM from 'react-dom';

// ECMAScript language extension: JSX - transpiled to plain ES creating React elements.
const element = <h1>Hello JSX!</h1>;

// Embedding expressions
const title = 'React Grundlagen';
const training = <h2>Training: {title}</h2>;

const me = {
  firstName: 'Micha',
  lastName: 'Alt'
};
function formatName(person) {
  return `${person.firstName} ${person.lastName}`;
}
const trainer = <h2>Dozent: {formatName(me)}</h2>;

// JSX itself is an expression
const greeting = (new Date().getHours() < 11) ? <h2>Guten Morgen!</h2> : <h2>Guten Tag!</h2>;

// Specifying attribute values
const libraryUrl = 'https://reactjs.org';
const libraryTitle = 'React';
const linkClass = 'outbound-anchor';
const libraryLink = <a href={libraryUrl} className={linkClass}>{libraryTitle}</a>;

// Specifying children
const libraryLogoUrl =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png';
const libraryLogo = <img height={32} src={libraryLogoUrl} />; // Empty Element
const library = <div>
  <h2>
    UI Library: {libraryLink}
    <small>
      {libraryLogo}
    </small>
  </h2>
</div>;

ReactDOM.render(element, document.getElementById('heading'));
ReactDOM.render(training, document.getElementById('training'));
ReactDOM.render(library, document.getElementById('library'));
ReactDOM.render(trainer, document.getElementById('trainer'));
ReactDOM.render(greeting, document.getElementById('greeting'));
