import React, { useState } from "react";



function RecipeCreate({createRecipe}) {

    /*
    To create a recipe entry, your app will need to have a form with input fields for the name of the dish,
     the cuisine it belongs to, and an URL that points to a picture of the dish.
     Use <textarea> for the ingredients and preparation. For the tests to pass,
      use the following names for your inputs:
       <input name="name">, <input name="cuisine">, <input name="photo">, <textarea name="ingredients"> and <textarea name="preparation">.

     */

    // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
    // TODO: Add the required input and textarea form elements.
    // TODO: Add the required submit and change handlers.

    const [name, setName] = useState("Name");
    const handleNameChange = (event) => setName(event.target.value);
    // TODO: When the form is submitted, a new post should be created, and the form contents cleared.
    const [photo, setPhoto] = useState("URL");
    const handlePhotoChange = (event) => setPhoto(event.target.value);
    const [ingredients, setIngredients] = useState("Ingredeients");
    const handleIngredeientsChange = (event) => setIngredients(event.target.value);
    const [cuisine, setCuisine] = useState("Cuisine");
    const handleCuisineChange = (event) => setCuisine(event.target.value);
    const [preparation, setPreparations] = useState("Preparations");
    const handlePreparationsChange = (event) => setPreparations(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted:", name,cuisine,photo,ingredients,preparation);
        createRecipe({name,cuisine,photo,ingredients,preparation});
        setName("Name");
        setPhoto("URL");
        setIngredients("Ingredients");
        setCuisine("Cuisine");
        setPreparations("Preparations");

    };

    return (
        <form name="create" onSubmit={handleSubmit}>
            <table>
                <tbody>
                <tr>
                    <td>
                        <input
                            name="name"
                            id="name"
                            type="text"
                            onChange={handleNameChange}
                            value={name}
                        />
                    </td>
                    <td>
                        <input
                            name="cuisine"
                            id="cuisine"
                            type="text"
                            onChange={handleCuisineChange}
                            value={cuisine}
                        />
                    </td>
                    <td>
                        <input
                            name="photo"
                            id="photo"
                            type="text"
                            onChange={handlePhotoChange}
                            value={photo}
                        />
                    </td>
                    <td>
                <textarea
                    name="ingredients"
                    id="ingredients"
                    required={true}
                    rows={3}
                    onChange={handleIngredeientsChange}
                    value={ingredients}
                />
                    </td>
                    <td>
                <textarea
                    name="preparation"
                    id="preparation"
                    required={true}
                    rows={3}
                    onChange={handlePreparationsChange}
                    value={preparation}
                />
                    </td>
                    <td>
                        <button type="submit">Create</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </form>
    );
}

export default RecipeCreate;
