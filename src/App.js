import './App.css';
import React from 'react'

function App(props) {
  const {backgroundColor, highlightColor, companyName } = props
  const [color, setColor] = React.useState('red')
  return (
    <div className="widget" style={{backgroundColor: backgroundColor}}>
      <header className="widget-header">
        <h4 style={{color: highlightColor}}>
          Hey I'm a cool widget, my name is { companyName }
        </h4>
        <h2 className="number" style={{color:color}}>Change my color</h2>
        <button onClick={() => props.changeColor(setColor, 'blue')}>blue</button>
        <button onClick={() => props.changeColor(setColor, 'red')}>red</button>
        <button onClick={() => props.changeColor(setColor, 'green')}>green</button>
      </header>
    </div>
  );
}

export default App;
