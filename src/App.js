import './App.css';
import {useState,useContext} from 'react';
import Welcome from './pages/Welcome';
import Header from './components/header';
import Footer from './components/footer'
import Login from './pages/login';
import Signup from './pages/signup';
import Forget from './pages/Forget'
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import ProfileDetails from './pages/profileDetails';
import Demopage from './pages/demopage';
import { AuthContext } from './context/AuthContext';



function App() {
  
  
  const {user} = useContext(AuthContext)
  return (
    <>


    
     
     


      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/signin"element={user?<Navigate to="/profile"/>:<Login/>}></Route>
          <Route path="/signup" element={user?<Navigate to="/profile"/>:<Signup/>}/>
          <Route path="/forget" element = {<Forget/>}/>
          <Route path="/profile" element = {user?<Demopage/>:<Login/>}/>
          <Route path="*" element ={"404 Not Found"}/>
          
        </Routes>

      



      </BrowserRouter>

    </>
  );
        
}

export default App;
