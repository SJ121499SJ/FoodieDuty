import './App.css';
import Nav from './Nav'
import Home from './Home'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Find from './Find';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/find' element={<Find/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
