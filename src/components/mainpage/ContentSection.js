import TypeCard from "./TypeCard";
import type_card_img1 from '../../img-content/mainpage/arenda-mainpage-card03.png'
import type_card_img2 from '../../img-content/mainpage/arenda-mainpage-card02.png'
import type_card_img3 from '../../img-content/mainpage/arenda-mainpage-card01.png'

const type_card_img_arr = [type_card_img1, type_card_img2, type_card_img3];
const ContentSection = () => {
    return (
        <div className="content-section-main-container">
            <div className="type-card-section">
                <TypeCard img={type_card_img_arr[0]} text="КВАРТИРА" link=" "/>
                <TypeCard img={type_card_img_arr[1]} text="ОФІС" link=" "/>
                <TypeCard img={type_card_img_arr[2]} text="ПРОМИСЛОВІСТЬ" link=" "/>
            </div>
            <div className="benefits-section">
                
            </div>
        </div>
    );
    };
    
    export default ContentSection;