
import './App.css';
import Register from './pages/register/register';
import Home from './pages/Home/Home';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/login/login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index element = {<Home/> }/>
        <Route path='login' element={<Login/> } />
        <Route path='register' element={<Register/> } />
      </Route>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
