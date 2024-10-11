import React from "react";
import "./GridStyle.css";
import myszzdj from "./myszka.jpg"
import sluchawkizdj from "./sluchawki.jpg"
import klawzdj from "./klawiatura.jpg"
import monizdj from "./monitor.jpg"
import obzdj from "./obudowa.jpg"
import proczdj from "./procesor.jpg"
import drukzdj from "./drukarka.jpg"
import grafzdj from "./grafika.jpg"
import gloszdj from "./glosniki.jpg"
const products = [
    {
        id: 1,
        name: 'myszka',
        price: "$30",
        image: myszzdj,
        description: "mega super dzialajaca myszka najlepsza"
    },
    {
        id: 2,
        name: 'sluchawki',
        price: "$50",
        image: sluchawkizdj,
        description: "mega super dzialajace sluchawki najlepsze"
    },
    {
        id: 3,
        name: 'klawiatura',
        price: "$100",
        image: klawzdj,
        description: "mega super dzialajaca klawiatura najlepsza"
    },
    {
        id: 4,
        name: 'monitor',
        price: "$200",
        image: monizdj,
        description: "mega super dzialajacy monitor najlepszy"
    },
    {
        id: 5,
        name: 'obudowa',
        price: "$250",
        image: obzdj,
        description: "mega super dzialajaca obudowa najlepsza"
    },
    {
        id: 6,
        name: 'procesor',
        price: "$300",
        image: proczdj,
        description: "mega super dzialajacy procesor najlepszy"
    },
    {
        id: 7,
        name: 'drukarka',
        price: "$100",
        image: drukzdj,
        description: "mega super dzialajaca drukarka najlepsza"
    },
    {
        id: 8,
        name: 'karta graficzna',
        price: "$400",
        image: grafzdj,
        description: "mega super dzialajaca karta graficzna najlepsza"
    },
    {
        id: 9,
        name: 'glosniki',
        price: "$80",
        image: gloszdj,
        description: "mega super dzialajace glosniki najlepsze"
    },
    
    

]
const Grid = () => {
    return(
      <div className="productgrid">
            {products.map(item => (
                <div className="kafel">
                    <img src={item.image} alt={item.name}/>
                    <h1 className="nazwa">{item.name}</h1>
                    <h2>{item.price}</h2>
                    <p>{item.description}</p>
                </div>
            ))}
      </div>
    );
};
export default Grid;