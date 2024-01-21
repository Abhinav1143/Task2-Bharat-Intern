import Login from './Components/Login';
import Register from './Components/Register';
import Navbar from './Components/Navbar';
import Blog from './Components/Blog';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Display from './Components/Display';
import Dashboard from './Components/Dashboard';
import ViewBlog from './Components/ViewBlog';

function App() {
  return (
    <div className="App">
       
       <BrowserRouter>
        <Routes>
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/register' element={<Register/>} />
          <Route exact path='/blog' element={<Blog/>} />
          <Route exact path='/Display' element={<Display/>} />
          <Route exact path='/' element={<Dashboard/>} />
          <Route exact path='/viewblog/:id' element={<ViewBlog/>} />
        </Routes>
       </BrowserRouter>
      
    </div>
  );
}

export default App;
