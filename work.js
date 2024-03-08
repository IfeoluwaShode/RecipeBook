// const searchForm = document.getElementById("searchForm");
// const searchResultDiv = document.querySelector(".search-result");
// const container = document.querySelector(".container");
// let searchQuery = "";
// const APP_ID = "79c13932";
// const APP_key = "a400e6a6a9eea8f1cc5fa45feb70b5a4";

// searchForm.addEventListener("click", function (e) {
//   if (e.target && e.target.className == "like-button") {
//       handleLikeButtonClick(e.target.dataset.recipeId);
//   }
// })

// searchForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   searchQuery = e.target.querySelector("input").value;
//   fetchAPI();
// });



// async function fetchAPI() {
//   const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20`;
//   const response = await fetch(baseURL);
//   const data = await response.json();
//   console.log("Before:", searchResultDiv.style); // Log the style before changes
//   generateHTML(data.hits);
//   console.log("After:", searchResultDiv.style); // Log the style after changes
//   console.log(data);
// }


// function generateHTML(results) {
//   container.classList.remove("initial");
//   let generatedHTML = "";
//   results.map((result) => {
//     generatedHTML += 
//     `
//       <div class="item">
//         <img src="${result.recipe.image}" alt="img">
//         <div class="flex-container">
//           <h1 class="title">${result.recipe.label}</h1>
//           <a class="view-btn" target="_blank" href="${result.recipe.url}">View Recipe</a>
//           <button class="like-button" data-recipe-id="${result.recipe.uri}">Like</button>
//         </div>
//         <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
//         <p class="item-data">Diet label: ${result.recipe.dietLabels.length > 0 ? result.recipe.dietLabels: "No Data Found"}</p>
//         <p class="item-data">Health labels: ${result.recipe.healthLabels}</p>
//       </div>
//     `;
//   });
//   searchResultDiv.innerHTML = generatedHTML;
// }

// // Function to handle the like button click
// function handleLikeButtonClick(recipeId) {
//   const index = likedRecipes.indexOf(recipeId);

//   if (index === -1) {
//       // If not liked, add to liked recipes
//       likedRecipes.push(recipeId);
//   } else {
//       // If already liked, remove from liked recipes
//       likedRecipes.splice(index, 1);
//   }

//   updateLikeButtonState(recipeId);
// }

// // Function to update the like button state based on likedRecipes array
// function updateLikeButtonState(recipeId) {
//   const likeButtons = document.querySelectorAll(`.like-button[data-recipe-id="${recipeId}"]`);

//   likeButtons.forEach(button => {
//       if (likedRecipes.includes(recipeId)) {
//           // If liked, turn the button red
//           button.style.backgroundColor = 'red';
//       } else {
//           // If not liked, reset button style
//           button.style.backgroundColor = ''; // or any other default color
//       }
//   });
// }

const searchForm = document.getElementById("searchForm");
const searchResultDiv = document.querySelector(".search-result");
const container = document.querySelector(".container");
let searchQuery = "";
const APP_ID = "79c13932";
const APP_key = "a400e6a6a9eea8f1cc5fa45feb70b5a4";

// Add this array to store liked recipes
const likedRecipes = [];

searchResultDiv.addEventListener("click", function (e) {
  if (e.target && e.target.className == "like-button") {
      handleLikeButtonClick(e.target.dataset.recipeId);
  }
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value;
  fetchAPI();
});

async function fetchAPI() {
  const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20`;
  const response = await fetch(baseURL);
  const data = await response.json();
  console.log("Before:", searchResultDiv.style); // Log the style before changes
  generateHTML(data.hits);
  console.log("After:", searchResultDiv.style); // Log the style after changes
  console.log(data);
}

function generateHTML(results) {
  container.classList.remove("initial");
  let generatedHTML = "";
  results.map((result) => {
    generatedHTML += 
    `
      <div class="item">
        <img src="${result.recipe.image}" alt="img">
        <div class="flex-container">
          <h1 class="title">${result.recipe.label}</h1>
          <a class="view-btn" target="_blank" href="${result.recipe.url}">View Recipe</a>
          <button class="like-button" data-recipe-id="${result.recipe.uri}">Like</button>
        </div>
        <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
        <p class="item-data">Diet label: ${result.recipe.dietLabels.length > 0 ? result.recipe.dietLabels: "No Data Found"}</p>
        <p class="item-data">Health labels: ${result.recipe.healthLabels}</p>
      </div>
    `;
  });
  searchResultDiv.innerHTML = generatedHTML;
}

// Function to handle the like button click
function handleLikeButtonClick(recipeId) {
  const index = likedRecipes.indexOf(recipeId);

  if (index === -1) {
      // If not liked, add to liked recipes
      likedRecipes.push(recipeId);
  } else {
      // If already liked, remove from liked recipes
      likedRecipes.splice(index, 1);
  }

  updateLikeButtonState(recipeId);
}

// Function to update the like button state based on likedRecipes array
function updateLikeButtonState(recipeId) {
  const likeButtons = document.querySelectorAll(`.like-button[data-recipe-id="${recipeId}"]`);

  likeButtons.forEach(button => {
      if (likedRecipes.includes(recipeId)) {
          // If liked, turn the button red
          button.style.backgroundColor = 'red';
      } else {
          // If not liked, reset button style
          button.style.backgroundColor = ''; // or any other default color
      }
  });
}

