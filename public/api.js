// api.js

const fetchData = async () => {
    try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito');
        const data = response.data;
        const imageContainer = document.querySelector(".imageContainer");
    
        const drink = data.drinks[0];

        const imageUrl = drink.strDrinkThumb; // Get the Image
        const image = document.createElement("img");
        image.src = imageUrl;
        image.style.width = "500px";
        image.style.height = "500px";
    
        imageContainer.innerHTML = "";
        imageContainer.appendChild(image);
    
        // Create the drink text container
        const drinkTextContainer = document.createElement("div");
        drinkTextContainer.classList.add("drinkText");
    
        // Display other infos
        const instructions = document.createElement("p");
        instructions.textContent = drink.strInstructions;
        drinkTextContainer.appendChild(instructions);
    
        // Display the ingredients
        for (let i = 1; i <= 15; i++) {
            const ingredient = drink['strIngredient' + i];
            const measure = drink['strMeasure' + i];
            if (ingredient && measure) {
            const ingredientItem = document.createElement("p");
            ingredientItem.textContent = `${measure} ${ingredient}`;
            drinkTextContainer.appendChild(ingredientItem);
            }
        }
    
        imageContainer.insertAdjacentElement("afterend", drinkTextContainer);
    } catch (error) {
        console.error(error);
    }
};

fetchData();
