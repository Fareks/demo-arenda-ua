import './content-section.css'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const TypeCard = ({img,text,link}) => {
    return (
        <Link to={link}>
            <motion.div 
            initial={{y:0}}
            whileHover={{y:'4px'}}
            className="type-card-container">
                
                <img src={img} alt=""  width="448" height="550" className='type-card-img'/>
                
                <p className="type-card-text">
                    {text}
                </p>

            </motion.div>
        </Link>
        
    );
    };
    
    export default TypeCard;