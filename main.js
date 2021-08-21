

class humanos{
    
    constructor(arg){
        for(let [id, value] of Object.entries(arg)){
            this[id] = value;
        }
    }
    caminar(){
        return `Se puede caminar con mis ${this.pies} pies`;
    }
}


let dataClase = {
    cabello: "Verde",
    altura: 170, 
    ojos: 45,
    manos: 2,
    dedos: 5,
    pies: 2
};
let dataClase2 = {
    cabello: "Blanco",
    altura: 150, 
    ojos: 39,
    manos: 2,
    dedos: 5,
    pies: 2
};

const inst = new humanos(dataClase);
console.log(inst.caminar());
const inst2 = new humanos(dataClase2);
console.log(inst2.caminar());


// console.warn("Clase", inst2);



const humanosObjetosMetodos = {
    caminar : function(){
        return `Objeto se puede caminar con mis ${this.pies} pies`;
    },
    constructorHumanos: function(arg){
        for(let [id, value] of Object.entries(arg)){
            this[id] = value;
        }
    }
}
let dataObjeto = {
    cabello: undefined,
    altura: undefined, 
    ojos: undefined,
    manos: undefined,
    dedos: undefined,
    pies: undefined
}
const humanosObjetos = Object.setPrototypeOf(dataObjeto,humanosObjetosMetodos);
humanosObjetos.constructorHumanos({pies: 2});
console.log(humanosObjetos.caminar());
humanosObjetos.constructorHumanos({pies: 4});
console.log(humanosObjetos.caminar());


// console.warn("Objetos", humanosObjetos);














// let obj = {
//     id: "hola",
//     saludar : function(){
//         return this.data();
//     }
    
// }
// console.log(obj.saludar());
