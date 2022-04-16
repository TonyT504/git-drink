
var userInput = document.getElementById ("#drink-name")
var drinkContainer = document.getElementById ("#drink-container")
var drinkImage = document.getElementById ("#drink-image-container")
var apiKey = "1"

var drinkIngredients = [];


searchDrink = addEventListener("click", function(event) {
    event.preventDefault();
    var userInput = document.querySelector ("#drink-name").value;
    // console.log(userInput);
    
    var drinkContainer = document.querySelector ("#drink-container");
    drinkContainer.innerHTML = ""
    for (var i = 0; i > drinkIngredients.length; i++) {
    var ingredients = document.createElement("div")
    ingredients.textContent = drinkIngredients[i]
    ingredients.setAttribute("value", drinkIngredients[i])
    ingredients.onclick = function() {
        getDrinkApi(this.value)
    }
    drinkContainer.appendChild(ingredients)
    getDrinkApi(ingredients)
}
   
})


function getDrinkApi (){
var userInput = document.getElementById("drink-name").value
var requestDrinkApi = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + userInput 
fetch(requestDrinkApi)
.then(function(response, data) {
    response.json().then(function(data){
    console.log(data.drinks[0]);
    
})
})
}




// function displayDrinks(data) {
//     drinkImage.innerHTML = 
//     var drinkThumbnail = drinkImage
//     var drinkThumbnailEl = document.createElement("img")

//    drinkContainer.appendChild(drinkThumbnailEl)
//    drinkThumbnailEl.innerHTML = drinkThumbnail

 

// }



//window.location 






