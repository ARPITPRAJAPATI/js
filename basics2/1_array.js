const marvel_heroes = ["thor","ironman","spiderman"]
const dc_heroes = ["superman","batman","flash"]

marvel_heroes.push(dc_heroes)

console.log(marvel_heroes)

const newarr = marvel_heroes.concat(dc_heroes)

console.log(newarr)

const newarr = [...marvel_heroes,...dc_heroes]
console.log(newarr)


const newarr = [1,2,3,[2,4],[6,7,8,[9]],[1,2]]
const annewarr = newarr.flat(Infinity)
console.log(annewarr)
arrayof
arrayfrom