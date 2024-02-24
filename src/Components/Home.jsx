import React from 'react';
// import './App.css'; // Import CSS file for styling
import './Home.css'; 
import sound2 from '../assets/sound2.mp3';
import {useRef} from 'react'; // Import CSS file for styling
import download from '../assets/download.png'; // Import image file
import github from '../assets/github.png'; // Import image file
import second from '../assets/second.png';
import first from '../assets/first.png';
import third from '../assets/third.png';
import Music from './Music';
// Import image file
function App() {
    const audioRef = useRef(null);
  return (
    <div>
     <div className="container1"> {/*first hero section here added github quote here */}
      <div className="quote">
        <h2>GitHub and <br></br> Open Source Quote</h2>
        <p>"Your code becomes better if you contribute to open source. It’s an amazing feeling to know that your code is being used by developers all over the world."</p>
        <p>- John Doe</p>
        <Music audioRef={audioRef} />
      <audio ref={audioRef} src={sound2} preload="auto"></audio>
      </div>
      <div className="image">
        <img src={github} alt="Image" />
      </div>
    </div>
    <div className='hero2'> {/*second hero section here added open source stuff here */}
        <div className='hero2-image'>
        <img src={download} alt="Image" />
        </div>
        <div className='hero2des'>
        <h1>Open Source</h1>
        <p>Open source software is software with source code that anyone can inspect, modify, and enhance. "Source code" is the part of software that most computer users don't ever see; it's the code computer programmers can manipulate to change how a piece of software—a "program" or "application"—works. Programmers who have access to a computer program's source code can improve that program by adding features to it or fixing parts that don't always work correctly.</p>
        
        </div>
    </div>
    <div className='hero3'> {/*third hero section here added what you will learn here */}
        <h1>WHAT YOU WILL LEARN?</h1>
      </div>
      <div className='hero3des'>
            <div className='learning1'>
                <img src={second} alt="" />
                <h2>OPEN SOURCE</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium eos maxime officiis laborum odio ipsam assumenda repudiandae iure. Explicabo maxime eos placeat soluta perspiciatis voluptatum velit, distinctio quasi magni dolorum reprehenderit, tempora architecto facere. Aliquid voluptates reiciendis dolores numquam dolorum?
                </p>
            </div>
            <div className='learning1'>
                <img src={third} alt="" />
                <h2>GIT AND GITHUB</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium eos maxime officiis laborum odio ipsam assumenda repudiandae iure. Explicabo maxime eos placeat soluta perspiciatis voluptatum velit, distinctio quasi magni dolorum reprehenderit, tempora architecto facere. Aliquid voluptates reiciendis dolores numquam dolorum?
                </p>
            </div>
            <div className='learning1'>
                <img src={first} alt="" />
                <h2>CONTRIBUTIONS</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium eos maxime officiis laborum odio ipsam assumenda repudiandae iure. Explicabo maxime eos placeat soluta perspiciatis voluptatum velit, distinctio quasi magni dolorum reprehenderit, tempora architecto facere. Aliquid voluptates reiciendis dolores numquam dolorum?
                </p>
            </div>
           
        </div>
    </div>
  );
}

export default App;
