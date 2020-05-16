//Object Constructor

let laptop = new Object();
let propertyName = "resolution"
laptop.brand = "HP"
laptop.storage = "1TB"
laptop.ram = "8GB"
laptop[propertyName] = "1080p"

console.log("My laptop info:"+laptop.brand+" storage:"+ laptop["storage"]+" RAM:"+laptop.ram + " Resolution: "+ laptop.resolution)
