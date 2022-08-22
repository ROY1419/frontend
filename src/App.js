import logo from './logo.svg';
import './App.css';
import Admin from './components/admin';
import Main from './components/main';
import User from './components/user';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoard from './components/admin/DashBoard';
import ResetPassword from './components/admin/ResetPassword';
import ContactUs from './components/main/ContactUs';
import AdminHeader from './components/admin/Header';
import AdminHome from './components/admin/Home';
import AminLogin from './components/admin/Login';
import AdminProfile from './components/admin/Profile';
import AdminSignup from './components/admin/Signup';
import MainSignup from './components/main/Signup';
import UserHeader from './components/user/Header';
import MainLogin from './components/main/Login';
import MainResetpassword from './components/main/ResetPassword';
import UserSignup from './components/user/Signup';
import MainHeader from './components/main/Header';
import UserHome from './components/user/Home';
import UserLogin from './components/user/Login';
import AdminResetPassword from './components/admin/ResetPassword';
import MainHome from './components/main/Home';
import MangeUser from './components/admin/MangeUser';

function App() {
  return (
   <div>
    <BrowserRouter>
    {/* <Header /> */}
    <Routes>
      <Route element={<Admin />} path="admin">
        <Route path='dashboard' element={<DashBoard />} />
        <Route path='header' element={<AdminHeader />} />
        <Route path='home' element={<AdminHome />} />
        <Route path='login' element={<AminLogin />} />
        <Route path='mangeruser' element={<MangeUser />} />
        <Route path='profile' element={<AdminProfile />} />
        <Route path='reset-password' element={<AdminResetPassword />} />
        <Route path='signup' element={<AdminSignup />} />
      </Route>
      <Route element={<Main />} path="main">
        <Route path="signup" element={<MainSignup />} />
        <Route path='contactus' element={<ContactUs />} />
        <Route path='header' element={<MainHeader />}/>
        <Route path='home' element={<MainHome/>}/>
        <Route path='login' element={<MainLogin/>} />
        <Route path='reset-password' element={<MainResetpassword/>} />
      </Route>
      <Route element={<User />} path="user" >
      <Route path='header' element={<UserHeader/>} />
      <Route path='home' element={<UserHome/>} />
      <Route path='login' element={<UserLogin/>} />
      <Route path='reset-password' element={<ResetPassword/>} />
      <Route path='signup' element={<UserSignup/>} />
      </Route>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
