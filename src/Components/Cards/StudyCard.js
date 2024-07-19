import React from "react";
function ViewCardText({card , side}) {

        console.log("cardId",card.id, " side: ", side);
            return (
                    <p>{(side==="front") ? (card.front):(card.back)}</p>
            );
 };
export default ViewCardText;


