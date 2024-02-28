import RecipeList from "@/components/RecipeList";
import React from "react";

export interface Meal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

export interface Meals {
  meals: Array<Meal>;
}

const getRecipes = async (type: string) => {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${type}`
    );
    const response = (await res.json()) as Meals;
    return response.meals;
  } catch (error) {
    console.error(error);
  }
};

export interface RecipesProps {
  params: { type: string };
  type: string;
}

export default async function Page({ params }: RecipesProps) {
  const recipes = await getRecipes(params.type);

  if (!recipes) {
    return <div>Error state here</div>;
  }

  return <RecipeList recipes={recipes} type={params.type} />;
}
