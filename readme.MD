## Scatter Plot with Two categorial Variables
<img src="Scatter Plot with Two categorial variable 3" width="48">
```javascript
//Scale with range
var xScale = d3.scaleBand()
                //scaleBand has continuous range
                .range([ 0, width ]);

var yScale = d3.scaleLinear()
                .range([height, 0]);     

var cScale = d3.scaleOrdinal()
                //scaleOrdinal has categorical range
                .range(["#98abc5", "#8a89a6"]);


//extract categarical variables in forms of array
var years = dataset.map(function(d) {return d.Year})
//["2004", "2008", "2012", "2016"]
var keys = dataset.columns.slice(1);
//["emiglia", "lombardy"]


//scale with domain
xScale.domain(years);

yScale.domain([0, d3.max(dataset, function(d) { return d3.max(keys, function(key) { 
    return d[key]; }); 
})]).nice();

cScale.domain(keys);
```