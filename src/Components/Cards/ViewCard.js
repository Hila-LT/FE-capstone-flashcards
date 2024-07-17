import React from "react";
function ViewCard({card , side}) {

        console.log("cardId",card.id, " side: ", side);
            return (
                    <p>{(side==="front") ? (card.front):(card.back)}</p>
            );
 };
export default ViewCard;


