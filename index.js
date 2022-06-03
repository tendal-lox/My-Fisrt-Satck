function stack(limit = 10){
    this.limit = limit
    this.item = Array()
}

stack.prototype.push = function(input){
    if(this.isFull()){
        return -1
    }
    this.item[this.item.length] = input
    console.log(this.item)
    return 1
}

stack.prototype.pop = function(){
    let output = this.item[this.item.length-1]
    this.item = this.item.splice(0, this.item.length-1)
    return output
}

stack.prototype.size = function(){
    return this.item.length
}

stack.prototype.isEmpty = function(){
    return this.size() === 0
}

stack.prototype.isFull = function(){
    return this.size() === this.limit
}

module.exports = stack