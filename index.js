// "key-value" форматы

// const obj = {
//     key1: "value1",
//     key2: "value2"
// };

// const car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2020
// };

// let student = {
//     aty: "Asadbek",
//     age: 20,
//     kurs: "Programming",
//     uiqtaidy: function(){
//         alert("Men uiqybaspyn")
//     }
// }

// console.log(student.age);
// console.log(student.aty);
// console.log(student.kurs);

// student.aty = "Yerkebulan",
// student.salmagy = 53,

// console.log(student);
// alert(student.uiqtaidy());

// let product = {
//     aty: "Sotka",
//     brand: "Apple",
//     model: "iPhone 16 pro max",
//     baga: 800000,
//     skidka_baga: function(){
//         return this.baga - (this.baga * 0.1)
//     },
//     info_list: function(){
//         return `Product aty: ${this.aty}
//         Product brand: ${this.brand}
//         Product model: ${this.model}
//         Product negizgi baga: ${this.baga}
//         Product bagasy skidkamen: ${this.skidka_baga()}`
//     }
// }

// console.log(product.info_list());

// Practice.1

// let  student = {
//     aty: "Akerke",
//     age: 18,
//     fio: "Zhalel",
//     siblings: 5,
//     salmaq: 52,
//     boi: 172,
//     dr: 14.08,
//     info_list: function(){
//         return `Aty: ${this.aty}
//         Zhasy: ${this.age}
//         Familyasy: ${this.fio}
//         Bauyrlary: ${this.siblings}
//         Salmagy: ${this.salmaq}
//         Boiy: ${this.boi}
//         Tugan kuni: ${this.dr}`
//     }
// }

// console.log(student.info_list());

// const menu = {
//     items: ["Pizza", "Sushi", "Doner", "Kopshonyi qurt"],
//     list_menu: function(){
//         return this.items.join("\n")
//     }
// }

// console.log(menu.list_menu());

let library = {
    books: ["Abai joly", "Ushqan uiya", "Qan men ter", "Qazangap"],
    kitapQosu: function(kelgenKitap){
        this.books.push(kelgenKitap);
    },
    list_books: function(){
        return this.books.join('\n')
    },
    setBook: function(engizgenKitap) {
        if(this.books.includes(engizgenKitap)){
            let qanshaKun = +prompt("Kitapty qansha kunge alasyz?")
            alert(`Sizdin kitap bizdin kitaphanada bar! \nKitap aty: ${engizgenKitap} \nAlgan kun sany: ${qanshaKun}`)
        }else{
            alert("Bizde kitaphanada bundai kitap zhoq!")
        }
    }
}

let kitap_aty = prompt("Qandai kitap izdediniz?")
library.setBook(kitap_aty)

// while(true){
//     let kitap_aty = prompt("Kitap atyn engiz!")
//     if(kitap_aty == 0){
//         break;
//     }else{
//         library.kitapQosu(kitap_aty)
//     }
// }

// alert(library.list_books());