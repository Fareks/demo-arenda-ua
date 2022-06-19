import { Outlet } from "react-router-dom";
import Header from './components/mainpage/header'
import Footer from './components/mainpage/footer'
import Mainpage from './components/mainpage/Mainpage'
const Layout = ({theme}) => {
return (
 <>
    <Header theme={theme}/>
    <div className="main-content">
        <Outlet/>
    </div>
    <Footer/>
 </>
);
};
export default Layout;