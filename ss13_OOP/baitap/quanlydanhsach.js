class Product {
    constructor(name, color, quantity) {
        this.name = name
        this.color = color
        this.quantity = quantity
    }
    getName(){
        return this.name
    }
    setName(name){
        this.name = name
    }
    getColor(){
        return this.color
    }
    setColor(color){
        this.color = color
    }
    getQuantity(){
        return this.quantity
    }
    setQuantity(quantity){
        this.quantity = quantity
    }
}
let product = new Product("ip","black", 100)
let product1 = new Product("nokia","yellow", 150)
let product2 = new Product("samsung","blue", 200)
let arr = [product, product1 , product2 ]
function display() {
    let str = ""
    for (let i = 0; i < arr.length ; i++) {
        str += "<tr>"
        str += "<td>" + (i+1) + "</td>"
        str += "<td>"+ arr[i].name + "</td>"
        str += "<td>" + arr[i].color + "</td>"
        str += "<td>" + arr[i].quantity + "</td>"
        str += "<td><button onclick='updateProduct("+i+")'>Update</button></td>"
        str += "<td><button onclick='updateDelete("+i+")'>Delete</button></td>"
        str += "</tr>"
    }
    document.getElementById("display").innerHTML = str;
}
display()

function addNew (){
    let name = prompt("Name :")
    let color = prompt("Color :")
    let quantity = +prompt("Quantity :")
    let newProduct = new Product(name,color,quantity)
    arr.push(newProduct)
    display()
}
// function updateProduct(index){
//     let name = prompt("Name :")
//     let color = prompt("Color :")
//     let quantity = +prompt("Quantity :")
//     arr[index].setName(name)
//     arr[index].setColor(color)
//     arr[index].setQuantity(quantity)
//     display()
// }
// function updateDelete(index){
//     let check = confirm("Có chắc xóa không???")
//     if (check){
//         arr.splice(index,1)
//         display()
//     } else {
//         alert("đùa à")
//     }

}