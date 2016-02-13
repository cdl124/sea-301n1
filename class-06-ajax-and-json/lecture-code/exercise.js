// 3 examples of JSON, 3 objects

/* var cortney = {
  hair: "brown",
  eyes: "dark brown",
  heightFeet: 5,
  heightInches: 4
}

var myJacket = {
  color: "red",
  hooded: true,
  fastener: "zipper"
}

var myShoes = {
  type: "boots",
  color: "black",
  warm: true
}

*/

// forEach looping

var flowers = [
{
  name: "pansy",
  color: "purple",
  size: "small",
  rating: 6
},
{
  name: "callalilly",
  color: "white",
  size: "long",
  rating: 9
}
]

flowers.forEach(function(flowy) {
  console.log("Here's a pretty " + flowy.name + " that is " + flowy.size + " and " + flowy.color);
});

var colors = flowers.map(function(f) {
  return f.rating + 4;
})
console.log(colors);
