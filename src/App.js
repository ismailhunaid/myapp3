import React from 'react';
import Lesson5 from './lesson5'
import Lesson6 from './lesson6'
import Lesson7 from './lesson7';
import Lesson7a from './lesson7a'
import Lesson8 from './lesson8'
import Lesson8a from './lesson8a'
import Lesson8b from './lesson8b'
import Lesson9 from './lesson9'
import Lesson9a from './Lesson9a'
import Lesson12 from './Lesson12'
//import Search from  './Lesson14'
//import logo from './logo.svg';
//import './App.css';

const  App = () => {
  return (
    <div className="App">
    
        
        <h1>
        Learn React
          <Lesson5/>
          <Lesson6 />

          </h1>  
          <h2>
            lesson # 3 variables and functions in jsx
            <Lesson7 />

          </h2>
          <h3>
            this is lesson 7a conditional rendering 
            <Lesson7a />
          </h3>
          <p>
             
            <Lesson8 title ={'Github Finder'}   name ={'ismail'} />

          </p>
          <p>
          <Lesson8a />
          </p>
          <Lesson8b title ={'Github Finder'}  />
          <p>
            <Lesson9 />
            
          </p>
          <p>
            <Lesson9a />
          </p>
          
          {/* <Search /> */}
          <Lesson12 />
          

    </div>
  );
}

export default App;
