let inputIngredients;

let dishesArray = [
    {
        Dish: "Biryani",
        ingredients: ["chicken", "potato", "tomato"]
    },
    {
        Dish: "Qorma",
        ingredients: ["Chicken", "onion", "mint"]
    },
]

inputIngredients = prompt("Enter Your Ingredients")

let NewArray = inputIngredients.split(" ");


if (NewArray.includes("Chicken", "onion", "mint")) {
    document.write("You can easily cook Qorma");
}

else if (NewArray.includes("chicken", "potato", "tomato")) {
    document.write("You can easily cook Biryani");
}

else if (NewArray.includes("milk", "powder", "fruits")) {
    document.write("You can easily cook Custard")

}


else if (NewArray.includes("potato", "flour", "oil")) {
    document.write("You can easily cook French Fries")

}

else {
    document.write("Sorry you can not make any thing...");
}
