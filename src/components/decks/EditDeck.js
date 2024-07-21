
import BreadCrumbs from "../../layout/BreadCrumbs";
import React, {useEffect, useState} from "react";
import { NavLink, useNavigate,useParams } from "react-router-dom";
import {updateDeck, createDeck, readDeck} from "../../utils/api";

function EditDeck() {
    const {deckId} = useParams();
    console.log(" in edit deck, deck id ", deckId);
    const navigate=useNavigate();
    const [deckInfo, setDeckInfo] = useState({});

    const changeHandler = (event) => {
        setDeckInfo({ ...deckInfo, [event.target.name]: event.target.value });
    };

    //reading the deck
    useEffect(() => {
        const abortController = new AbortController();
        async function fetchDeck() {
            try {
                const res = await readDeck(deckId, abortController.signal);
                setDeckInfo(res);
            } catch (error) {
                console.error('Error fetching deck info:', error);
            }
        }

        if (deckId) {
            fetchDeck();
        } else {
            console.error('deckId is not defined');
        }

        return () => {
            abortController.abort();
        };
    }, [deckId]);

    const pathFragments = [
        { link: "/", text: "Home" },
        {
            link: `/decks/${deckId}`,
            text: deckInfo ? deckInfo.name : "Error loading deck .",
        },
        {
            text: "Edit deck"
        }
    ];


    //submitting the change to the decl
    const handleSubmit = async (event) => {
       event.preventDefault();
        console.log("Submitted:", deckInfo.name, deckInfo.description);
        const abortController = new AbortController();
        try {
            await updateDeck(deckInfo,abortController.signal);
            navigate(`/decks/${deckId}`);

        }
        catch (error){
            console.error('Error fetching deck info:', error);
        }
    };
   if(deckInfo) {
       console.log("deck: ",deckInfo);
       return (
           // <DeckForm createDeck={createDeck} />
           <div className="EditDeck">
               <BreadCrumbs pathFragments={pathFragments}/>
               <form name={"editDeck"} onSubmit={handleSubmit}>
                   <div className="mb-3">
                       <label htmlFor="deckNname" className="form-label">Name</label>
                       <input id="name"
                              type="text"
                              name="name"
                              placeholder={deckInfo.name}
                              onChange={changeHandler}
                              value={deckInfo.name}
                              className="form-control"
                       />
                   </div>
                   <div className="mb-3">
                       <label htmlFor="deckDescription" className="form-label">Description</label>
                       <textarea name="description"
                                 placeholder={deckInfo.description}
                                 id="description"
                                 type="textarea"
                                 required={true}
                                 rows={3}
                                 onChange={changeHandler}
                                 value={deckInfo.description}
                                 className="form-control"

                       >
                    </textarea>
                   </div>

                   <button type="submit" style={{marginRight: "15px"}} className="btn btn-primary">Submit</button>
                   <NavLink to="/">
                       <button className="btn btn-secondary" style={{marginLeft: "15px"}}>Cancel</button>
                   </NavLink>
               </form>
           </div>
       );
   }
   return "Loading...";
}




export default EditDeck;
