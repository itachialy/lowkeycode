
class Quanlyhv {
    constructor(name, phone, birthday, gender="") {
        this.name = name
        this.phone = phone
        this.birthday = birthday
        this.gender = gender
    }
    getName(){
        return this.name
    }
    setName(name){
        this.name = name
    }
    getPhone(){
        return this.phone
    }
    setPhone(phone){
        this.phone = phone
    }
    getBirthday(){
        return this.birthday
    }
    setBirthday(birthday){
        this.birthday = birthday
    }
    getGender(){
        return this.gender
    }
    setGender(gender){
        this.gender = gender
    }
    edit(name, phone, birthday,gender){
        this.name = name
        this.phone = phone
        this.birthday = birthday
        this.gender = gender
    }
}
let myQuanlyhv = new Quanlyhv("Nguyễn Hữu Itachi","09222333444","","" )
let myQuanlyhv1 = new Quanlyhv("Nguyễn Văn Itachi","09222333555" ,"","" )
let myQuanlyhv2 = new Quanlyhv("Nguyễn Itachi","09222333666","","")
let arr = [myQuanlyhv, myQuanlyhv1, myQuanlyhv2]
function display() {
    let str = ""
    for (let i = 0; i < arr.length ; i++) {
        str += "<tr>"
        str += "<td>" + (i+1) + "</td>"
        str += "<td>"+ arr[i].name + "</td>"
        str += "<td>" + arr[i].phone + "</td>"
        str += "<td>" + arr[i].birthday + "</td>"
        str += "<td>" + arr[i].gender + "</td>"
        str += "<td><button onclick='updateFix()'>Sửa</button></td>"
        str += "<td><button onclick='updateDel()'>Xóa</button></td>"
        str += "</tr>"
    }
    document.getElementById("display").innerHTML = str;
}
display()
