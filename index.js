import './index.css';
import logo from './assets/javascript.png';


console.log('Hello World!');

const title = document.createElement('h1');
title.textContent = 'I love JavaScript';
const image = document.createElement('img');
image.src = logo;

[title, image].forEach(element => {

    document.body.append(element);
});