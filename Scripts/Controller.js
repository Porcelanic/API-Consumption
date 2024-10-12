var audioFiles = {
  shake: new Audio("Media/Audio/Shaking.mp3"),
  serve: new Audio("Media/Audio/Serving.mp3"),
};

function ServingDrink(bool) {
  var buttons = document.querySelectorAll("button");

  buttons.forEach(function (button) {
    button.disabled = bool;
  });

  if (bool === true) {
    closeDialogs();
  }
}

function closeDialogs() {
  var dialogs = document.querySelectorAll("dialog");

  dialogs.forEach(function (dialog) {
    dialog.close();
  });
}

function animation(src) {
  const image = document.getElementById("mainImage");
  if (!image.classList.contains("shake-animation")) {
    document.getElementById("buttonHide").classList.add("hidden");
    image.src = "Media/Images/cocktail-shaker.png";
    image.classList.add("shake-animation");
    image.classList.remove("hidden");
    audioFiles["shake"].play();
    setTimeout(() => {
      image.src = "Media/Images/Pouring.png";
      image.classList.remove("shake-animation");
      audioFiles["serve"].play();
      setTimeout(() => {
        document.getElementById("buttonHide").classList.remove("hidden");
        ServingDrink(false);
        image.src = src;
        image.classList.add("hidden");
        image.classList.remove("hidden");
      }, 3000);
    }, 4000); // Duration in milliseconds
  }
}

randomBtn.addEventListener("click", () => {
  ServingDrink(true);
  randomDrink();
});

searchNameBtn.addEventListener("click", () => {
  ServingDrink(true);
  input = document.getElementById("Name");
  if (input.value === "") {
    alert("The name input was not filled");
    ServingDrink(false);
  } else {
    searchDrink(input.value);
    input.value = "";
  }
});

searchIngredientBtn.addEventListener("click", () => {
  ServingDrink(true);
  input = document.getElementById("Ingredient");
  if (input.value === "") {
    alert("The ingredient input was not filled");
    ServingDrink(false);
  } else {
    searchDrinkByIngredient(input.value);
    input.value = "";
  }
});

instructionsBtn.addEventListener("click", () => {
  closeDialogs();
  document.getElementById("instructions").show();
});

infoBtn.addEventListener("click", () => {
  closeDialogs();
  document.getElementById("info").show();
});
