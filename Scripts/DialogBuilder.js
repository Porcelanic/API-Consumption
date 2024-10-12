var listOfIngredients;
var listOfMeasurements;

function ingredients(data) {
  let listIngredients = [];
  let listMeasurements = [];
  for (let i = 1; i <= 15; i++) {
    if (data[`strIngredient${i}`] === null) {
      break;
    } else {
      listIngredients.push(data[`strIngredient${i}`]);
      if (data[`strMeasure${i}`] === null) {
        listMeasurements.push("To liking");
      } else {
        listMeasurements.push(data[`strMeasure${i}`]);
      }
    }
  }
  listOfIngredients = listIngredients;
  listOfMeasurements = listMeasurements;
}

function buildDialogs(data) {
  ingredients(data);
  const infoDialog = document.getElementById("info");

  infoDialog.innerHTML = `
              <div class="abr">
              <h1>Info about the drink</h1>
              <h2>${data.strDrink}</h2>
              <p>Type: ${data.strAlcoholic}</p>
              <p>Category: ${data.strCategory}</p>
              ${listOfIngredients
                .map(
                  (ingredient, index) =>
                    `<p>Ingredient ${index + 1}:${ingredient}</p>`
                )
                .join("")}
              <form method="dialog"><input type="submit" value="Close" /></form>
              </div>
      `;

  const instructionsDialog = document.getElementById("instructions");

  instructionsDialog.innerHTML = `
  <div class="ab">
              <h1>How to make this drink</h1>
              <h2>Ingredients and measurements</h2>
              ${listOfMeasurements
                .map(
                  (measurement, index) =>
                    `<p>${measurement}: ${listOfIngredients[index]}</p>`
                )
                .join("")}
              <p>Instructions: ${data.strInstructions}</p>
              <form method="dialog"><input type="submit" value="Close" /></form>
              </div>
      `;

  animation(data.strDrinkThumb);
}
