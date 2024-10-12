
function randomDrink() {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((data) => {
      data = data.drinks[0];
      buildDialogs(data);
    })
    .catch((error) => {
      alert("Error retrieving your drink");
      ServingDrink(false);
    });
}

function searchDrink(drink) {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink)
    .then((response) => response.json())
    .then((data) => {
      if (data.drinks == null) {
        throw new error();
      }
      data = data.drinks[0];
      buildDialogs(data);
    })
    .catch((error) => {
      alert("The drink you tried to search is not in our database");
      ServingDrink(false);
    });
}

function searchDrinkByIngredient(ingredient) {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient)
    .then((response) => response.json())
    .then((data) => {
      if (data.drinks == null) {
        throw new error();
      }
      const randomDrink = Math.floor(Math.random() * data.drinks.length) + 1;
      searchDrink(data.drinks[randomDrink].strDrink);
    })
    .catch((error) => {
      alert("The ingredient you tried to search is not in our database");
      ServingDrink(false);
    });
}
