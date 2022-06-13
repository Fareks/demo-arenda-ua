import './content-section.css'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const TypeCard = ({img,text,link}) => {
    return (
        <Link to={link}>
            <motion.div 
            initial={{y:0}}
            whileHover={{y:'6px',scale:1.03}}
            className="type-card-container">
                <motion.div 
                whileHover={{opacity:0}}
                transition={{duration:0.2}}
                className="color-sue"></motion.div>
                <img src={img} alt=""  width="448" height="550" className='type-card-img'/>
                
                <p className="type-card-text">
                    {text}
                </p>

            </motion.div>
        </Link>
        
    );
    };
    
    export default TypeCard;