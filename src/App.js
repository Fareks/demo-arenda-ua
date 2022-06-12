import {Route,Routes,Outlet} from 'react-router-dom'
import Layout from './Layout'
import Mainpage from './components/mainpage/Mainpage';
import Catalog from './components/catalog/catalog'
import Itempage from './components/catalog/item-page';
function App() {
  return (
    <div className="App">

        <Routes>
          <Route path='/' element={<Layout/>}> 
            <Route index element={<Mainpage/>}/>
            <Route path='/catalog' element={<Catalog/>}/>
            <Route path='/catalog/item:id' element={<Itempage/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
