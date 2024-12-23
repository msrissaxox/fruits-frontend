// Select the button and input elements
const fruitButton = document.querySelector('button[type="button"]');
const fruitInput = document.getElementById("nameOfFruit");

//Adding Fruit info to page:
const family = document.getElementById("family");
const order = document.getElementById("order");
const genus = document.getElementById("genus");

const calories = document.getElementById("calories");
const fats = document.getElementById("fats");
const sugars = document.getElementById("sugars");
const carbs = document.getElementById("carbs");
const protein = document.getElementById("protein");

const fruitNameInputted = document.getElementById("fruitNameInputted");
const fruitImage = document.getElementById("image");

function getFruitInfo() {
  // Capture the input value
  let inputValue = fruitInput.value.toLowerCase().trim();
  //Function to convert plural to singular
  function getSingularForm(word) {
    //common plural endings
    if (word.endsWith("ies")) {
      return word.slice(0, -3) + "y"; //berries > berry
    } else if (word.endsWith("oes")) {
      return word.slice(0, -3) + "o"; //mangoes > mango
    } else if (word.endsWith("es")) {
      return word.slice(0, -2); //oranges > orange
    } else if (word.endsWith("s")) {
      return word.slice(0, -1); //bananas > banana
    }
    return word;
  }

  const singularFruit = getSingularForm(inputValue);

  // Do something with the input value
  // Do something with the input value (API call)
  fetch(`https://fruits-backend-d7q9.onrender.com/api/fruit/${singularFruit}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("data:", data);
      // Optional: do something with the data
      function capitalizeFirstLetter(val) {
        return val.charAt(0).toUpperCase() + val.slice(1);
    }
    
      fruitNameInputted.textContent = `Fruit: ${capitalizeFirstLetter(inputValue)}`;
      family.textContent = `${data.family}`;
      order.textContent = `${data.order}`;
      genus.textContent = `${data.genus}`;

      // Update nutritional information
      calories.textContent = `${data.calories}`;
      fats.textContent = `${data.fats} g`;
      sugars.textContent = `${data.sugars} g`;
      carbs.textContent = `${data.carbs} g`;
      protein.textContent = `${data.protein} g`;

      //Second API call to PixaBay
      //Get API Key first
      return fetch("https://fruits-backend-d7q9.onrender.com/api/pixabay-key")
        .then((response) => response.json())
        .then((keyData) => {
          return fetch(
            `https://pixabay.com/api/?key=${keyData.apiKey}&q=${inputValue}&image_type=photo`
          );
        })
        .then((pixabayResponse) => pixabayResponse.json())
        .then((pixabayData) => {
          console.log("Pixabay data:", pixabayData);
          if (pixabayData.hits && pixabayData.hits.length > 0) {
            // Example: Set an image source (assuming you have an img element)

            fruitImage.src = pixabayData.hits[0].webformatURL;
            console.log(fruitImage);
          }
        });
    })

    .catch((error) => console.error("Error:", error));

  // Clear the input field
  fruitInput.value = "";
  fruitImage.src = "";
}

// Add event listener to the button
fruitButton.addEventListener("click", function () {
  getFruitInfo();
});

// Add event listener for Enter key press on the input field
fruitInput.addEventListener("keypress", function (event) {
  // Check if the pressed key is "Enter"
  if (event.key === "Enter") {
    getFruitInfo();
  }
});
