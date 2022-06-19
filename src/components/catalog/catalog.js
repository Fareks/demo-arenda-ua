import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { offers } from "./offers";
import './catalog.css';

const Catalog = ({setheaderTheme,currentCategory='all'}) => {
    const [currentOffers, setCurrentOffers] = useState(offers);
    const [categoryCheckbox, setCategoryCheckbox] = useState([true,true,true]);
    useEffect(() => {
        setheaderTheme({logo:"dark-logo",links:"header-links-dark"});
    },[])
    
    const handleOnChange = (e) => {
        const target = e.target.id;
        setCategoryCheckbox((prevState => {
          const oldStates = prevState;
          const updatedCheckedState = prevState.map((item, index) =>
          { 
            return (index == target ? !item : item)});
          
            return(updatedCheckedState);
        }));




        setCurrentOffers(prevState => {
          
          const allOffers = offers;
          let newOffers = [];
          newOffers = allOffers.filter(item => {
            switch (item.category) {
              case "room":
                if (categoryCheckbox[0] == true) {
                  console.log("filtering!");
                  return item
                }
                break;
            
                case "office":
                if (categoryCheckbox[1] == true) {
                  return true
                }
                break;

                case "industry":
                if (categoryCheckbox[2] == true) {
                  return true
                }
                break;
              default:
                break;
            }
          })
          console.log(newOffers);
          return newOffers;
        });
      };
      
    return (
        <div className="catalog-main-container">
            <div className="filters">
              <div className="filter-item">
                  <input class="defaultCheckbox"
                    type="checkbox"
                    name="room"
                    id="0"
                    checked={categoryCheckbox[0]}
                    onChange={handleOnChange}/>
                <label for="0">Квартири</label>
              </div>
              <div className="filter-item">
                  <input class="defaultCheckbox"
                  type="checkbox"
                  name="office"
                  id="1"
                  checked={categoryCheckbox[1]}
                    onChange={handleOnChange}/>
                <label for="1">Офіси</label>
              </div>
              <div className="filter-item">
                  <input class="defaultCheckbox"
                  type="checkbox"
                  name="industry"
                  id="2"
                  checked={categoryCheckbox[2]}
                onChange={handleOnChange}/>
                <label for="2">Промисловість</label>
              </div>
            
            </div>
            <div className="offers-container">

            </div>
        </div>
    );
    };
    
    export default Catalog;