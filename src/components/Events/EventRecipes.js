import React from "react";
import EventRecipe from "./EventRecipe";

export default function EventRecipes(props) {
  // console.log(props.recipes);
  if (props.recipes) {
    const recipes = props.recipes;
    if (typeof recipes == "object") {
      return recipes.map(recipe => <EventRecipe recipe={recipe} />);
    } else if (typeof recipes == "string") {
      return <p>{recipes}</p>;
    }
  } else {
    return <div>No Recipes Added Yet</div>;
  }
}
