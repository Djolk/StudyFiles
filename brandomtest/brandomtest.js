var coordinates= [
[0,0, "wall"],
[0,1,"ground"],
[0,3, "ground"],
[0,5, "ground"],
[0,3, "rat"]
]


function CoordinateAsk(place){
  var coordinatesReturn = [];
for (i=0 ; i<coordinates.length ; i+=1) {
var coordinatesSearch = coordinates[i];

if (coordinatesSearch[2] === place ) {
  coordinatesReturn.push(coordinatesSearch);
}
}
return coordinatesReturn;
}
