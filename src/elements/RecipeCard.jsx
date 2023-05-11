import React from "react";
import styles from "./RecipeCard.module.css";

function RecipeCard() {
  return (
    <div className={styles.recipe_card}>
      <div>
        <div className={styles.recipe_img_container}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz2WjumF-nm50Wd9cbmztbdUzOPsRFevFTIlk-qZhu6w&usqp=CAU&ec=48665698"
            alt="Grilled Watermellon"
          />
        </div>
        <h3 className={styles.cardH3}>Grilled Watermellon</h3>
      <button className={styles.recipeBtn}>See More</button>
      </div>
    </div>
  );
}

export default RecipeCard;
