import React from 'react';
import './App.css';
import ScrollBox from './ScrollBox';

const App = () => {
  return (
    <div>
      <ScrollBox ref= {(ref) => this.scrollBox = ref}/>
      <button onClick={() => this.scrollBox.scrollToBottom()}>
        一番下へ
      </button>
    </div>
  );  
}

export default App;
