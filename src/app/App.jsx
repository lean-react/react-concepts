import React from 'react';
import {WelcomeFC} from "./components/WelcomeFC";
import {WelcomeCC} from "./components/WelcomeCC";
import {Comment} from "./components/Comment";

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

export function App() {
  return (<>
    <h1>Components and Props</h1>
    <WelcomeFC name={'Thomas'}></WelcomeFC>
    <WelcomeCC name={'Manuel'}></WelcomeCC>
    <Comment {...comment} />
  </>);
}
