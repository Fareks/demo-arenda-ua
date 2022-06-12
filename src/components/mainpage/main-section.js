import { Link } from "react-router-dom";
import poster_building from '../../img-content/mainpage/building_main_poster 1.png'

const MainSection = () => {
    return (
        <div className="main-section-container">
            <div className="text-area">
                <p className="pre-h1">
                    знайти. обрати. купити.
                </p>
                <h1>ARENDA.UA - знайти бажане у кілька кліків!</h1>
                <p className="secondary-text">
                Скористайся нашими послугами у сфері підбору та аренди нерухомості. Отримай консультацію від кваліфікованих спеціалістів нашої компанії безкоштовно.
                </p>
                <Link to="/catalog">
                    <button className="mainpage-search-button">Розпочати</button> 
                </Link>   
            </div>
            <div className="poster-area">
                <div className="block1"></div>
                <div className="block2"></div>
                <div className="block3"></div>
                <img src={poster_building} className="img-poster"></img>
                <div className="poster-decoration-container">
                    <div className="poster-decoration">  
                    </div>
                    <div className="poster-decoration2">  
                    </div>
                </div>
                <div className="block4"></div>
            </div>
        </div>
    );
    };
    
    export default MainSection;