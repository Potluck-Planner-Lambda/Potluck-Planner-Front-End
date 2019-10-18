import React from "react";

export default function EventRecipe(props) {
  const { full_name, recipe_name, user_id } = props.recipe;
  return (
    <div className="recipe">
      <p>
        {full_name} {recipe_name} {user_id}
      </p>
    </div>
  );
}
