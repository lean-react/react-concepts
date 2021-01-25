// Styles
import './styles/styles.css';

// React
import React from 'react';
import ReactDOM from 'react-dom';

// React Elements
const headingClass = 'teaser';

// JSX Element
const heading1 = <h1 className={headingClass}>JSX Elements</h1>;

// Plain code element
const heading2 = React.createElement('h1', { className: headingClass }, 'React Elements');

ReactDOM.render(heading1, document.getElementById('heading1'));
ReactDOM.render(heading2, document.getElementById('heading2'));

// Updating elements
function tick() {
  const element = (
    <div>
      <h1>Updating Elements</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
