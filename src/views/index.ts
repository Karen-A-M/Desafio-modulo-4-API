import { Messages } from "../utils/enums"; 
import { randomMeal, getMealById, getMealByName } from "../controllers/meal-controller";
import { randomCocktail, getCocktailById, getCocktailByName } from "../controllers/cocktail-controller";

export async function endPoints(sendedMessage) {
    const message = JSON.parse(sendedMessage);
    if(!message.action) {
        return Messages.BAD_REQUEST;
    };

    if(message.action == "getRandomMeal") {
        return await randomMeal();
    }
    else if(message.action == "getRandomCocktail") {
        return randomCocktail();
    }
    else if(message.action == "mealById") {
        return await getMealById(message.body.id);
    }
    else if(message.action == "cocktailById") {
        return getCocktailById(message.body.id);
    }
    else if(message.action == "mealByName") {
        return getMealByName(message.body.name);
    }
    else if(message.action == "cocktailByName") {
        return getCocktailByName(message.body.name);
    }
    else {
        return Messages.BAD_REQUEST;
    };
};