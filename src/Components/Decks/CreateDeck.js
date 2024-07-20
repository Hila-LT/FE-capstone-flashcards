
import BreadCrumbs from "../../Layout/BreadCrumbs";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createDeck } from "../../utils/api";

function CreateDeck() {
    const navigate=useNavigate();

    const pathFragments = [
        { link: "/", text: "Home" },
        {
            text: "Create Deck",
        },
    ];
    const initialState = {
        name: "",
        description: "",
    };

    const [formData, setFormData] = useState({ ...initialState });

    const changeHandler = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Submitted:", formData.name, formData.description);
        await createDeck(formData);
        navigate("/decks");
        setFormData(initialState);
    };
    return (
        // <DeckForm createDeck={createDeck} />
        <div className="CreateDeck">
            <BreadCrumbs pathFragments={pathFragments}/>
            <form name={"createDeck"} onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="deckNname" className="form-label">Name</label>
                    <input id="name"
                           type="text"
                           name="name"
                           onChange={changeHandler}
                           value={formData.name}
                           className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="deckDescription" className="form-label">Description</label>
                    <textarea name="description"
                              id="description"
                              type="textarea"
                              required={true}
                              rows={3}
                              onChange={changeHandler}
                              value={formData.description}
                              className="form-control"

                    >
                    </textarea>
                </div>

                    <button type="submit" style={{marginRight:"15px"}} className="btn btn-primary">Submit</button>
                    <NavLink to="/" >
                        <button className="btn btn-primary" style={{marginLeft:"15px"}}>Cancel</button>
                    </NavLink>



            </form>
        </div>
    );
}

export default CreateDeck;
