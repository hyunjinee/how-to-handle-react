import React, {useState, Suspense} from 'react';
import logo from './logo.svg';
import './App.css'
import loadable from '@loadable/component';

const SplitMe = loadable(()=> import('./SplitMe'));

const App = () => {

  const [visible,setVisible] = useState(false);

  const onClick: React.MouseEventHandler<HTMLParagraphElement> | undefined = () => {
    setVisible(true);
  
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo"/>


        <p onClick={onClick}>Hello React!</p>
      
      
      {visible && <SplitMe/>}
    
        </header>     
    </div>
  );
};

export default App;