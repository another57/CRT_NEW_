/*
  =============================================================
  React Learning Concepts Demonstrated:
  1. Button Click (onClick) Event
  2. Input Change (onChange) Event
  3. Controlled Components with useState ({ name, email, ... })
  4. Universal handleChange handler using [name]: value
  5. Form Submission (onSubmit) & e.preventDefault()
  6. Saving data to LocalStorage (localStorage.setItem) & Console Logging
  =============================================================
*/

import SimpleForm from './components/SimpleForm';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <SimpleForm />
    </div>
  );
}

export default App;