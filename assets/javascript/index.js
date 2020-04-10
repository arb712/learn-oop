class Coffe{
    constructor(obj = {}){
        this.bean = obj.bean,
        this.method = obj.method
        this.category = obj.category
    }
}
const newCoffe = new Coffe({
    bean:'Gayo Read Honey',
    method : 'Manual Brewing',
    category : 'Arabica'
})
console.log(newCoffe);