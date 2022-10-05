import React from "react";
//import logo from './logo.svg';
import './App.css';

function App() {

    const [question,setText] = React.useState('?');

    React.useEffect(()=>{
      if(question === '?'){
        return
      };
      onClick();
    },[question]);


    const onClick = () => {
      const point = Math.random();
      if(point <= 0.1 && point >= 0.0) {
        setText('当たり！！'+point);
      }
      /*else if(point >= 0.31 && point <= 0.5) {
        setText('中吉');
      }*/
      else if(point >= 0.11 && point <= 0.99){
        setText('はずれ、、'+point);
      }
      console.log("結果")
      console.log(point)
    }

    return(
      <div className="wrap">
        <h2>おみくじ</h2>
        <div id="btn" onClick={onClick}>{question}</div>
      </div>
    );
}

export default App;
