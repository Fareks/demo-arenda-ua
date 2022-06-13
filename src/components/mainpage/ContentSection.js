import { motion } from "framer-motion";


import TypeCard from "./TypeCard";
import type_card_img1 from '../../img-content/mainpage/arenda-mainpage-card03.png'
import type_card_img2 from '../../img-content/mainpage/arenda-mainpage-card02.png'
import type_card_img3 from '../../img-content/mainpage/arenda-mainpage-card01.png'

import benefit1 from '../../img-content/benefits/benefit1.png'
import benefit2 from '../../img-content/benefits/benefit2.png'
import benefit3 from '../../img-content/benefits/benefit3.png'


const type_card_img_arr = [type_card_img1, type_card_img2, type_card_img3];
const ContentSection = () => {
    return (
        <div className="content-section-main-container">
            <div className="type-card-header-container">
                <div className="type-card-header-decoration-container">
                    <div className="type-card-header-decoration"></div>
                </div>
                <div className="type-card-main-text">Кожному - своє!</div>
                <div className="secondary-text">оберіть власну категорію нерухомості.</div>
            </div>
            <div className="type-card-section">
                <TypeCard img={type_card_img_arr[0]} text="КВАРТИРА" link=" "/>
                <TypeCard img={type_card_img_arr[1]} text="ОФІС" link=" "/>
                <TypeCard img={type_card_img_arr[2]} text="ПРОМИСЛОВІСТЬ" link=" "/>
            </div>
            <div className="benefits-section">
                <p className="why-us">
                    Чому ми?
                </p>
                <div className="benefits-container">
                    <motion.div
                      initial={{opacity:0}}
                      whileInView={{opacity:1}}
                      viewport={{once:true}}
                      transition={{delay:0.3,duration:0.3}}
                      className="benefits-item">
                        <img src={benefit1} alt="" width="65" height="65" />
                        <p className="benefit-text">
                        Ми надаємо повний спектр професійних послуг, що відповідають найвищим міжнародним стандартам: від надходження заявки до укладення угоди.
                        </p>
                    </motion.div>
                    <motion.div
                      initial={{opacity:0}}
                      whileInView={{opacity:1}}
                      viewport={{once:true}}
                      transition={{delay:0.5,duration:0.3}}
                      className="benefits-item">
                        <img src={benefit2} alt="" width="65" height="65" />
                        <p className="benefit-text">
                        Багаторічний досвід роботи на ринку, професіоналізм консультантів та досконале знання нюансів сфери.
                        </p>
                    </motion.div>
                    <motion.div
                      initial={{opacity:0}}
                      whileInView={{opacity:1}}
                      viewport={{once:true}}
                      transition={{delay:0.7,duration:0.3}}
                      className="benefits-item">
                        <img src={benefit3} alt="" width="65" height="65" />
                        <p className="benefit-text">
                        Годі переплачувати! Ми пропонуємо найоптимальніші ціни за виключну якість.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
    };
    
    export default ContentSection;