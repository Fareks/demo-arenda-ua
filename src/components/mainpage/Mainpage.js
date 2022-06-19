import MainSection from "./main-section";
import ContentSection from "./ContentSection";
import ContactUs from "./contact-us";
import './main-section.css';
import { useEffect } from "react";

const Mainpage = ({setheaderTheme}) => {
    useEffect(() => {
        setheaderTheme({logo:"white-logo",links:"header-links-white"});
    },[])
    return (
        <>
        <MainSection/>
        <ContentSection/>
        <ContactUs/>
        </>
    );
    };
    
    export default Mainpage;