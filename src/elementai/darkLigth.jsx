import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';



function DrkLight(){
    const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    const htmlElement = document.querySelector('html');
    htmlElement.setAttribute('data-bs-theme', 
    darkMode ? 'dark' : 'light');
  };
  return(

      <div><div className={`App ${darkMode ? 'theme-dark' : 'theme-light'}`}>
      <Container className="py-4">
       
        <Button variant="primary" onClick={toggleTheme}>
          {!darkMode ? '☀︎': '☾' }
        </Button>
      </Container>
    </div></div>
    )
}
export default DrkLight;