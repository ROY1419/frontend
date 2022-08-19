import logo from './logo.svg';
import './App.css';
import Header from './components/main/Header';
import Admin from './components/admin';
import Main from './components/main';
import User from './components/user';
import Login from './components/main/Login';
import Signup from './components/main/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoard from './components/admin/DashBoard';
import Home from './components/admin/Home';
import MangeUser from './components/admin/MangeUser';
import Profile from './components/admin/Profile';
import ResetPassword from './components/admin/ResetPassword';
import ContactUs from './components/main/ContactUs';

function App() {
  return (
   <div>
    <BrowserRouter>
    {/* <Header /> */}
    <Routes>
      <Route element={<Admin />} path="admin">
        <Route path='dashboard' element={<DashBoard />} />
        <Route path='header' element={<Header />} />
        <Route path='home' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='mangeruser' element={<MangeUser />} />
        <Route path='profile' element={<Profile />} />
        <Route path='reset-password' element={<ResetPassword />} />
        <Route path='signup' element={<Signup />} />
      </Route>
      <Route element={<Main />} path="main">
        <Route path="signup" element={<Signup />} />
        <Route path='contactus' element={<ContactUs />} />
        <Route path='header' element={<Header />}/>
        <Route path='home' element={<Home/>}/>
        <Route path='login' element={<Login/>} />
        <Route path='reset-password' element={<ResetPassword/>} />
      </Route>
      <Route element={<User />} path="user" >
      <Route path='header' element={<Header/>} />
      <Route path='home' element={<Home/>} />
      <Route path='login' element={<Login/>} />
      <Route path='reset-password' element={<ResetPassword/>} />
      <Route path='signup' element={<Signup/>} />
      </Route>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
