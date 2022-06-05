import './App.css';
import { useState } from 'react';
import Header from './ui/Header';
import Counter from './components/Counter';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {

  // to manage the textarea content state
  const [content, contentHandler] = useState("");

  function changeHandler(event) {
    contentHandler(event.target.value);
  }

  // to count words
  function wordCountHandler(data) {
    let matches = data.match(/\S+/g);
    return matches ? matches.length : 0;
  }
  // to count characters
  function characterCountHandler(data) {
    return data.length;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='card'>
          {/* Header is a simple UI element to which contain the counter values */}
          <Header>
            <Counter title={"Character Count"} value={content} valueHandler={characterCountHandler} />
            <Counter title={"Word Count"} value={content} valueHandler={wordCountHandler} />
          </Header>
          {/* we are getting the data from here */}
          <textarea name="" id="" className='text-field' onChange={changeHandler} placeholder="Enter Some Text Here" autoFocus></textarea>
        </div>
      </header>
        <footer className='contact'>
        <a href='https://github.com/MrLuciferM' className='link'> <FaGithub/> GitHub</a>
          
        <a href='https://linkedin.com/in/justk9' className='link'> <FaLinkedin/> LinkedIn</a>
        </footer>
    </div>
  );
}

export default App;
