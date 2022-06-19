import {Route,Routes,Outlet} from 'react-router-dom'
import Layout from './Layout'
import Mainpage from './components/mainpage/Mainpage';
import Catalog from './components/catalog/catalog'
import Itempage from './components/catalog/item-page';
import './App.css';
import { useState } from 'react';
function App() {
  const [headerTheme,setheaderTheme] = useState({logo:'white-logo', links:'header-links-white'})
  return (
    <div className="App">

        <Routes>
        <Route path='/' element={<Layout theme={headerTheme}/>}> 
            <Route index element={<Mainpage setheaderTheme={setheaderTheme}/>}/>
            <Route path='/catalog' element={<Catalog setheaderTheme={setheaderTheme}/>}/>
            <Route path='/catalog/item:id' element={<Itempage/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
