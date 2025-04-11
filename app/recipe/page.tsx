import { title } from "@/components/primitives";

export default function RecipePage() {
  return (
    <div>
      <h1 className={title()}>Recipe</h1>
      <h2>French Omelette</h2>
      <p>Ingredients: 3 Eggs, Butter, Salt, Pepper, Green Onion</p>
      <p>Steps:</p>
      <p>
        1. Crack all 3 eggs in a bowl, season with salt and pepper, and beat
      </p>
      <p>2. Dice the green onions</p>
      <p>3. Heat the pan, melt the butter, add the eggs</p>
      <p>4. Constantly stir over low-medium heat until one side is smooth</p>
      <p>5. Roll up the omelette with the smooth side showing</p>
      <p>6. Plate the omelette and add the diced green onions for color</p>
    </div>
  );
}
