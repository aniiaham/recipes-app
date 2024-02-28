"use client";

import { Meal } from "@/app/types/[type]/page";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecipeList = ({ recipes, type }: { recipes: Meal[]; type: string }) => {
  console.log(recipes);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5 overflow-y-auto server rounded-md">
      {recipes?.map((meal, idx) => {
        console.log(meal.strMealThumb);
        return (
          <div
            key={idx}
            className="rounded bg-slate-200 w-full flex flex-col justify-center items-center"
          >
            <Image
              unoptimized
              alt="Recipes url"
              width={500}
              height={500}
              src={meal.strMealThumb}
              className="rounded-md"
            />
            <div className="text-2xl font-medium mt-3 text-blue-950 text-center">
              {meal.strMeal}
            </div>
            <Link
              href={`/types/${type}/${meal.idMeal}`}
              className=" max-w-[200px] text-white bg-blue-500 rounded py-2 px-6 my-4 block hover:bg-blue-600 text-center uppercase"
            >
              Get Details
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
