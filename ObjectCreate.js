//Object.create

let occupation = {
    type:"none",
 displayType: function(){
     console.log(this.type)
    }
}

//police
let police = Object.create(occupation)
police.type = "police"
police.displayType();

//developer
let developer = Object.create(occupation)
developer.type = "Developer"
developer.displayType();