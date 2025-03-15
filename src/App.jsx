
import { Route, Routes } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard'
import Profile from './components/profile/Profile'
import DashboardRocket from "./components/dashboard/DashboardRocket";
import Table from "./components/table/Table";
import NotFound from "./components/notFound/NotFound";
import Login from "./components/login/Login";

export default function App() {
  return (
    <>
      <Routes >
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='dashboard/:id' element={<DashboardRocket />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/table" element={<Table />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/*" element={<NotFound />} ></Route>
   
     
    </Routes>
    
    </>
  )
}
