import React from "react";
import {deleteDeck} from "../../utils/api";
import {useNavigate} from "react-router-dom";

function DeleteDeck ({ deck }) {

    const navigate = useNavigate();
    const handleDelete =  () => {
        const result = window.confirm("Delete this deck? //r//n You will not be able to recover it.");
        if (result) {
            deleteDeck(deck.id);
            navigate("0");

        }

        return (
            <button className="btn btn-danger" onClick={handleDelete}>
                Delete
            </button>
        )
    };

}
export default DeleteDeck;
