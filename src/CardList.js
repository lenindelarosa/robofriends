import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
    return (
    <div className='bg-light-pink'>
        {
            robots.map((user, i) => {
            return (
                <Card 
                    key={`"card_" + ${i}`}  
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email}
                />
            )
            })
        }
    </div>
    );
}

export default CardList;