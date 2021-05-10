import React from 'react'
import { render } from 'react-dom'
import Asd from './child';
// Asd();

console.log(1);
console.log(2);
function App() {
  return (
    <div>
      我是app
      <Asd />
    </div>
  )
}
var div = document.createElement('div')
div.id = 'app'
document.body.appendChild(div)
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);