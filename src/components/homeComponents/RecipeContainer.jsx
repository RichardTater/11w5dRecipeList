import React, { useState } from 'react'
import styles from "./Home.module.css"
import RecipeCard from "../../elements/RecipeCard"



function RecipeContainer({recipes}) {
  const [search, setSearch] = useState("");
  

  return (
    <div className={styles.recipeContainer}>
    <RecipeCard/>
    </div>
  )
}

export default RecipeContainer