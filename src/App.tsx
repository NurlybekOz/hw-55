import './App.css'
import {useState} from "react";
import meatImage from "./assets/meat.png";
import cheeseImage from "./assets/cheese.png";
import saladImage from "./assets/salad.png";
import baconImage from "./assets/bacon.png";
import Burger from "./components/Burger/Burger.tsx";
import Ingredient from "./components/Ingredient/Ingredient.tsx";
interface Ingredient {
  name: string,
  price: number,
  image: string,
}
interface IngredientProp{
  name: string,
  count: number,
}
const App = () => {
  const Ingredients: Ingredient[] = [
    {name: 'Meat', price: 80, image: meatImage},
    {name: 'Cheese', price: 50, image: cheeseImage},
    {name: 'Salad', price: 10, image: saladImage},
    {name: 'Bacon', price: 60, image: baconImage},
  ];
  const [ingredients, setIngredients] = useState<IngredientProp[]>([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0},
  ]);
  const [total, setTotal] = useState<number>(30);
  const updateTotal = (newIngredients: { name: string; count: number; }[]) => {
    const newTotal = newIngredients.reduce((sum, ingredient, index) => {
      return sum + ingredient.count * Ingredients[index].price;
    }, 30);
    setTotal(newTotal);
  };
  const addIngredient = (index: number) => {
    const newIngredients = ingredients.map((ingredient, i) => {
      if (i === index) {
        return {
          ...ingredient,
          count: ingredient.count + 1,
        };
      }
      return ingredient;
    })
    setIngredients(newIngredients)
    updateTotal(newIngredients);
  }
  const deleteIngredient = (index: number) => {
    const newIngredients = ingredients.map((ingredient, i) => {
      if (i === index && ingredient.count > 0) {
        return {
          ...ingredient,
          count: ingredient.count - 1,
        };
      }
      return ingredient;
    })
    setIngredients(newIngredients);
    updateTotal(newIngredients);
  };
  return (
      <>
        <div className="FastFood">
          <div className="ingredients">
            {ingredients.map((ingredient, index) => (
                <>
                <Ingredient key={index} name={ingredient.name}
                            count={ingredient.count}
                            image={Ingredients[index].image}
                            onAdd={() => addIngredient(index)}
                            onDelete={() => deleteIngredient(index)}/>
                </>
            ))}
          </div>
          <Burger ingredients={ingredients} total={total}></Burger>
        </div>

      </>
  )
};

export default App
