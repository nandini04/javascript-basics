class Desert{

    // constructor()
    // {

    //     console.log("Constructor called")
    // }

    // constructor(calories)
    // {

    //     console.log("This desert has", calories,"calories")
    // }

    constructor(calories=100)
    {

       // console.log("This desert has", calories,"calories")
       this.ingredients = []
        this.calories = calories
    }

    addingredients(ingredient)
    {
        this.ingredients.push(ingredient)
    }

    getIngredients()
    {
        console.log(this.ingredients)
    }
}

//inheritance
class Icecream extends Desert{
    constructor(flavor, calories, toppings = [], ingredients = [])
    {

        super(calories, ingredients)
    
        this.flavor = flavor
        this.toppings = toppings
     
    }


    static shopStatus = true;

    static getshopStatus = function(){
        console.log(this.shopStatus)
    }
    static setshopStatus = function(status){
        this.shopStatus = status
    }

    getIcecream()
    {
        console.log(`this is a ${this.flavor} icecream which has ${this.calories}`)
    }

    
}

const vanillababy = new Icecream("vanilla",275,["chocochips", "jellies"],["milk","butter","sugar"])

vanillababy.getIcecream();
 //console.log(Icecream.shopStatus)
 Icecream.getshopStatus();
 Icecream.setshopStatus(false)
 Icecream.getshopStatus();
//  console.log(typeof(vanillababy));

//   console.log(typeof(Icecream));
// const vanilla = new Desert(275)
// vanilla.addingredients("milk")
// vanilla.addingredients("sugar")
// vanilla.addingredients("butter")
// vanilla.getIngredients();

// console.log(vanilla.calories)


// const strawberry = new Desert(290)

// console.log(strawberry.calories)

// strawberry.addingredients("milk")
// strawberry.addingredients("sugar")
// strawberry.addingredients("strawberry")
// strawberry.getIngredients();

// function Icecream(flavor, calories)
// {
//     this.flavor = flavor
//     this.calories = calories

// }

// Icecream.prototype.getIcecream = function()
// {
//     console.log(`this is a ${this.flavor} icecream with ${this.calories} calories`)
// }

// const van = new Icecream("vanilla", 234)

// van.getIcecream()