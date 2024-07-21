import React from "react";
import {deleteDeck} from "../../utils/api";
import {useNavigate} from "react-router-dom";

function DeleteDeckBtn ({ deck }) {

    const navigate = useNavigate();
    const handleDelete =  () => {
        const result = window.confirm("Delete this deck? //r//n You will not be able to recover it.");
        if (result) {
            deleteDeck(deck.id).then(navigate(0))
        }
    };
        return (
            <>
            {console.log("delete deck")}
            <button className="btn btn-danger" style={{marginLeft: "45px"}} onClick={handleDelete}>
                Delete
            </button>
        </>
        )


}
export default DeleteDeckBtn;
