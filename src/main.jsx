import React from 'react'
import ReactDOM  from 'react-dom/client'
import './index.css'
import {createBrowserRouter,createRoutesFromElements,Route, RouterProvider,} from "react-router-dom";
import App from './App.jsx';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageTeam from './Pages/Team/ManageTeam';
import Contacts from './Pages/Contacts/Contacts';
import Invoices from './Pages/Invoices/Invoices';
import ProfileForm from './Pages/Create Team/ProfileForm';
import Calendar from './Pages/Calendar/Calendar';
import FAQPage from './Pages/FAQPage/FAQPage';
import Barchart from './Pages/BarChart/BarChart';
import PieChart from './Pages/PieChart/PieChart';
import LineChartE from './Pages/LineChart/LineChart';
import GeoghraphyChart from './Pages/GeoghraphyChart/GeoghraphyChart';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index element={<Dashboard/>} />
      <Route path='/ManageTeam'element={<ManageTeam/>} />
      <Route path='/Contacts'element={<Contacts/>} />
      <Route path='/Invoices'element={<Invoices/>} />
      <Route path='/ProfileForm'element={<ProfileForm/>} />
      <Route path='/Calendar'element={<Calendar/>} />
      <Route path='/FAQPage'element={<FAQPage/>} />
      <Route path="/BarChart" element={<Barchart/>}/>
      <Route path="/PieChart" element={<PieChart/>}/>
      <Route path="/LineChart" element={<LineChartE/>}/>
      <Route path="/GeoghraphyChart" element={<GeoghraphyChart/>}/>
    </Route> 
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
