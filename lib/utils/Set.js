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

    this.intersect = function(set){
      const intersection = new Set();
      this.array.forEach(item => {
        if([...set].includes(item)){
          intersection.add(item);
        }
      });
      return intersection;
    };

    this.difference = function(set){
      const difference = new Set();
      difference.array = this.array.slice();
      set.array.forEach(item => {
        if([...difference].includes(item)){
          difference.remove(item);
        } else {
          difference.add(item);
        }
      });
      return difference;
    };

    this.unite = function(set){
      const union = new Set();
      union.array = this.array.slice();
      set.array.forEach(item => {
        union.add(item);
      });
      return union;
    };

  }

  [Symbol.iterator](){
    return this.array[Symbol.iterator]();
  }
}

module.exports = Set;
