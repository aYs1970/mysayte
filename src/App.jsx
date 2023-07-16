import './App.css';
import Header from './Header/Header';
import { Routes, Route } from 'react-router-dom';
import Main from './Main/Main';
import About from './About/About';
import Contacts from './Contacts/Contacts';
import Skils from './Skils/Skils';


function App() {
  return (
    <>
    <Header />
    <main className='main'>
        <Routes>
          <Route path = "/"  element = {<Main/> }  ></Route>
          <Route  path='/about'  element = {<About/>} ></Route>
          <Route  path='/skils'  element = {<Skils/>} ></Route>
          <Route  path='/contacts'  element = {<Contacts/>} ></Route>

        </Routes>

    </main>
    
    </>
  );
}

export default App;
