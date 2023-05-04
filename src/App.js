import { useState } from 'react';
import './App.css';
import './style.scss';
import Inputs from './components/inputs.js';
import Overview from './components/Overview';
import Img from './components/arrow.js';

function App() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [isValid, setIsValid] = useState(false);

  return (
      <div className="App" role={'main'}>
        <Inputs day={day} setDay={setDay} setMonth={setMonth} month={month} year={year} setYear={setYear} 
        isValid={isValid} setIsValid={setIsValid}/>
        <Img/>
        <Overview day={day} month={month} year={year} isValid={isValid}/>
      </div>
  );
}

export default App;
