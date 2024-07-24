import React, { useEffect } from 'react';
import Nav from './components/Nav/Nav';
import Body from './components/Body/Body';
import About from './components/About/About';
import './index.css'
import Projects from './components/Projects/Projects';

const App = () => {
  useEffect(() => {
    const bodyElement = document.getElementById('body');
    const aboutElement = document.getElementById('about');

    const setAboutWidth = () => {
      if (bodyElement && aboutElement) {
        const bodyWidth = bodyElement.offsetWidth;
        aboutElement.style.width = `${bodyWidth - 300}px`;
        console.log(bodyWidth)
        console.log(aboutElement.style.width)
      } else {
        console.log('fail')
      }
    };

    setAboutWidth();

    window.addEventListener('resize', setAboutWidth);
    return () => window.removeEventListener('resize', setAboutWidth);
  }, []);

  return (
    <div>
      <Nav/>
      <Body/>
      <About/>
      <Projects/>
    </div>
  );
};

export default App;