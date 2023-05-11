import React from "react";
import styles from "./RecipeCard.module.css";

function RecipeCard() {
  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz2WjumF-nm50Wd9cbmztbdUzOPsRFevFTIlk-qZhu6w&usqp=CAU&ec=48665698"
        alt="Grilled Watermellon"
      />
      <h3>Grilled Watermellon</h3>
      <button>See More</button>
    </div>
  );
}

export default RecipeCard;
