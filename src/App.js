import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import { DataProviderHook } from './DataProvider';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio.js'
import AdminRoutes from './admin/adminRoutes.js';
import About from './Pages/About.js';
import ScrollToTop from './components/return.js';
import Loading from './components/Loading.js';
function App() {

  return (
    <div className={"centered-cursor"}>
      <DataProviderHook>
        <Loading/>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/about' element={<About/>}/>
          <Route  path="/admin/*" element={<AdminRoutes/>} />


        </Routes>
        
      </DataProviderHook>
    </div>
    
  );
}

export default App;
