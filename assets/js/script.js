
var userInput = document.getElementById("#drink-name");
var apiKey = "1";

function getDrinkApi() {

    var userInput = document.getElementById("drink-name").value
    var requestDrinkApi = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + userInput + "&limit-5"
    fetch(requestDrinkApi)
        .then(function (response) {
            response.json().then(function (data) {
                displayDrink(data.drinks[0]);

            })
        })
    function displayDrink(data) {
        var recipeCard = document.getElementById("recipe-text");

        var drinkIngred1 = data.strIngredient1;
        drinkIngred1El = document.createElement("dt");
        drinkIngred1El.setAttribute("id", "ingred1");
        drinkIngred1El.innerHTML = "Ingredient 1: " + drinkIngred1;
        var measure1 = data.strMeasure1;
        measure1El = document.createElement("dd");
        measure1El.setAttribute("id", "meas1");
        measure1El.innerHTML = "Measure: " + measure1;
        recipeCard.appendChild(drinkIngred1El);


        

        var drinkIngred2 = data.strIngredient2;
        drinkIngred2El = document.createElement("dt");
        drinkIngred2El.innerHTML = "Ingredient 2: " + drinkIngred2;
        drinkIngred2El.setAttribute("id", "ingred2")
        var measure2 = data.strMeasure2;
        measure2El = document.createElement("dd");
        measure2El.setAttribute("id", "meas2");
        measure2El.innerHTML = "Measure: " + measure2;
        drinkIngred2El.appendChild(measure2El)
        recipeCard.appendChild(drinkIngred2El);



        var drinkIngred3 = data.strIngredient3;
        drinkIngred3El = document.createElement("dt");
        drinkIngred3El.setAttribute("id", "ingred3")
        drinkIngred3El.innerHTML = "Ingredient 3: " + drinkIngred3;
        var measure3 = data.strMeasure3;
        measure3El = document.createElement("dd");
        measure3El.setAttribute("id", "meas3");
        measure3El.innerHTML = "Measure: " + measure3;
        drinkIngred3El.appendChild(measure3El)
        recipeCard.appendChild(drinkIngred3El);



        var drinkIngred4 = data.strIngredient4;
        drinkIngred4El = document.createElement("dt");
        drinkIngred4El.innerHTML = "Ingredient 4: " + drinkIngred4;
        drinkIngred4El.setAttribute("id", "ingred4");
        var measure2 = data.strMeasure2;
        measure2El = document.createElement("dd");
        measure2El.setAttribute("id", "meas2");
        measure2El.innerHTML = "Measure: " + measure2;
        drinkIngred2El.appendChild(measure2El)
        recipeCard.appendChild(drinkIngred2El);


        var drinkIngred5 = data.strIngredient5;
        drinkIngred5El = document.createElement("dt");
        drinkIngred5El.setAttribute("id", "ingred5");
        drinkIngred5El.setAttribute('id', 'ingred5');
        drinkIngred5El.innerHTML = "Ingredient 5: " + drinkIngred5;
        var measure5 = data.strMeasure5;
        measure5El = document.createElement("dd");
        measure5El.setAttribute("id", "meas5");
        measure5El.innerHTML = "Measure: " + measure5;
        drinkIngred5El.appendChild(measure5El)
        recipeCard.appendChild(drinkIngred5El);

       

        var drinkIngred6 = data.strIngredient6;
        drinkIngred6El = document.createElement("dt");
        drinkIngred6El.setAttribute("id","ingred6");
        drinkIngred6El.innerHTML = "Ingredient 6: " + drinkIngred6;
        var measure6 = data.strMeasure1;
        measure6El = document.createElement("dd");
        measure6El.setAttribute("id", "meas6");
        measure6El.innerHTML = "Measure: " + measure6;
        drinkIngred1El.appendChild(measure6El)
        recipeCard.appendChild(drinkIngred6El);


        var instructions = data.strInstructions

        console.log(drinkIngred1El);



    }

    searchDrink = addEventListener("click", function (event) {
        event.preventDefault();
        var userInput = document.querySelector("#drink-name").value;
        // console.log(userInput);


    });

}

