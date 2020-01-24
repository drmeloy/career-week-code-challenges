class Set {
  constructor(){
    this.array = [];

    this.add = function(item){
      if(!this.array.includes(item)){
        this.array.push(item);
      } else {
        return 'Set already contains ' + item;
      }
    };

    this.remove = function(item){
      if(this.array.includes(item)){
        this.array.splice(this.array.indexOf(item), 1);
      } else {
        return 'Set does not contain ' + item;
      }
    };

    this.has = function(item){
      return this.array.includes(item);
    };
  }

  [Symbol.iterator](){
    return this.array[Symbol.iterator]();
  }
}

module.exports = Set;
