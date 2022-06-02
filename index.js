function stack(){
    this.item = []
}

stack.prototype.push = function(input){
    this.item[this.item.length] = input
    console.log(this.item)
}

stack.prototype.pop = function(){
    let output = this.item[this.item.length-1]
    this.item = this.item.splice(0, this.item.length-1)
    return output
}

module.exports = stack