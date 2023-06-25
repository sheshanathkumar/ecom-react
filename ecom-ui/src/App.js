import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Registration from './component/registration';
import AdminPanel from './component/adminpannel/adminboard';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import PageNotFound from './component/adminpannel/pagenotfound';
import Dashboard from './productdash/dashboard';
import Product from './component/adminpannel/product';

function App() {
  return (

    <BrowserRouter >
      <Routes >
        <Route  path = "/" element={ <Dashboard /> }  />
        <Route path = "/admin" element = {<AdminPanel />} />
        <Route path="/dashboard" element = {<Dashboard /> } />
        <Route path = "/pagenotfound" element= {<PageNotFound menu="" />}  />

      </Routes>
    
    
    
    </BrowserRouter>


  );
}

export default App;
