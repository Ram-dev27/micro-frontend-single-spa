import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const recipes = [
  {
    id: 1,
    name: "Classic Margherita Pizza",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella cheese",
      "Fresh basil leaves",
      "Olive oil",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Preheat the oven to 475°F (245°C).",
      "Roll out the pizza dough and spread tomato sauce evenly.",
      "Top with slices of fresh mozzarella and fresh basil leaves.",
      "Drizzle with olive oil and season with salt and pepper.",
      "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
      "Slice and serve hot.",
    ],
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    servings: 4,
    difficulty: "Easy",
    cuisine: "Italian",
    caloriesPerServing: 300,
    tags: ["Pizza", "Italian"],
    userId: 45,
    image: "https://cdn.dummyjson.com/recipe-images/1.webp",
    rating: 4.6,
    reviewCount: 3,
    mealType: ["Dinner"],
  },
  // Add more recipes here if needed
];

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<any>();

  useEffect(() => {
    async function getRecipes() {
      try {
        const response = await fetch("https://dummyjson.com/recipe/" + id);
        const result = await response.json();
        setRecipe(result); // Assuming the API response has a 'recipes' field
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }

    getRecipes();
  }, []);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">{recipe.name}</h1>
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-64 object-cover mb-4 rounded-md"
      />
      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-2">Instructions</h2>
      <ol className="list-decimal list-inside mb-4">
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
      <p className="mb-2">
        <strong>Prep Time:</strong> {recipe.prepTimeMinutes} minutes
      </p>
      <p className="mb-2">
        <strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes
      </p>
      <p className="mb-2">
        <strong>Servings:</strong> {recipe.servings}
      </p>
      <p className="mb-2">
        <strong>Difficulty:</strong> {recipe.difficulty}
      </p>
      <p className="mb-2">
        <strong>Cuisine:</strong> {recipe.cuisine}
      </p>
      <p className="mb-2">
        <strong>Calories per Serving:</strong> {recipe.caloriesPerServing}
      </p>
      <p className="mb-2">
        <strong>Rating:</strong> {recipe.rating} ({recipe.reviewCount} reviews)
      </p>
      <p className="mb-2">
        <strong>Meal Type:</strong> {recipe.mealType.join(", ")}
      </p>
    </div>
  );
}

export default RecipeDetail;
