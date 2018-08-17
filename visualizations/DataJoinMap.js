var fs=require('fs');

var stateData=JSON.parse(fs.readFileSync('./parsed_data/data_for_map_byStates.json'));
var foodData = JSON.parse(fs.readFileSync('./parsed_data/Clustered_N_Organized_By_Food_Group.json'))
var geojson = JSON.parse(fs.readFileSync('state.geo.json'));

//console.log(foodData.Meats.length);
//console.log(stateData[0][0]);

geojson = geojson.features;


//loop through state data to find match to append food group to each case
for (var i=0; i<stateData.length; i++){

	   if (stateData[i].length !== 0){

	   	  //within each state, loop through each case
	      for (var j=0; j<stateData[i].length; j++){

	      	 var product = stateData[i][j].product_description;

	      	 for (var m=0; m<foodData.Meats.length; m++){

	      	 	 //if the product description of cases in state data matches that in food data, assign a group to 
	      	 	 //the case in state data.
	      	 	 var to_match = foodData.Meats[m].product_description;

	      	 	 if (product === to_match) stateData[i][j].food_group = 'Meats';

	      	 }

	      	 for (var m=0; m<foodData.Cheese.length; m++){

	      	 	 var to_match = foodData.Cheese[m].product_description;

	      	 	 if (product === to_match) stateData[i][j].food_group = 'Cheese';

	      	 }

	      	 for (var m=0; m<foodData.Condiments.length; m++){

	      	 	 var to_match = foodData.Condiments[m].product_description;

	      	 	 if (product === to_match) stateData[i][j].food_group = 'Condiments';

	      	 }

	      	 for (var m=0; m<foodData.Desserts.length; m++){

	      	 	 var to_match = foodData.Desserts[m].product_description;

	      	 	 if (product === to_match) stateData[i][j].food_group = 'Desserts';

	      	 }

	      	 for (var m=0; m<foodData.Drinks.length; m++){

	      	 	 var to_match = foodData.Drinks[m].product_description;

	      	 	 if (product === to_match) stateData[i][j].food_group = 'Drinks';

	      	 }

	      	 for (var m=0; m<foodData.Flour.length; m++){

	      	 	 var to_match = foodData.Flour[m].product_description;

	      	 	 if (product === to_match) stateData[i][j].food_group = 'Flour';

	      	 }

	      	 for (var m=0; m<foodData.Fruits.length; m++){

	      	 	 var to_match = foodData.Fruits[m].product_description;

	      	 	 if (product === to_match) stateData[i][j].food_group = 'Fruits';

	      	 }

	      	 for (var m=0; m<foodData.Ice_Creams.length; m++){

	      	 	 var to_match = foodData.Ice_Creams[m].product_description;

	      	 	 if (product === to_match) stateData[i][j].food_group = 'Ice Creams';

	      	 }

	      	 for (var m=0; m<foodData.Salads.length; m++){

	      	 	 var to_match = foodData.Salads[m].product_description;

	      	 	 if (product === to_match) stateData[i][j].food_group = 'Salads';

	      	 }

	      	 for (var m=0; m<foodData.Seafood.length; m++){

	      	 	 var to_match = foodData.Seafood[m].product_description;

	      	 	 if (product === to_match) stateData[i][j].food_group = 'Seafood';

	      	 }

	      	 for (var m=0; m<foodData.Snacks.length; m++){

	      	 	 var to_match = foodData.Snacks[m].product_description;

	      	 	 if (product === to_match) stateData[i][j].food_group = 'Snacks';

	      	 }

	      	 for (var m=0; m<foodData.Vegetables.length; m++){

	      	 	 var to_match = foodData.Vegetables[m].product_description;

	      	 	 if (product === to_match) stateData[i][j].food_group = 'Vegetables';

	      	 }

	       }

	   }

}

for(var i=0;i<geojson.length;i++){

	var state=geojson[i].properties.STUSPS10;

	for (var j=0;j<stateData.length;j++){

		if(stateData[j].length !== 0){

			var match = stateData[j][0].state;

			if (state == match){

				geojson[i].cases = stateData[j];
			}

	    }
	}	
}



fs.writeFileSync('./parsed_data/joined_data_for_map.json',JSON.stringify(geojson));
