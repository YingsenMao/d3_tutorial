## Shape Generator Tutorial
Complex shapes can be created using shape generator. [reference](https://github.com/d3/d3-shape)  
### Line Generator
Line generator can then be used to compute the d attribute of an SVG path element:
```javascript
var line = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.value); });

path.datum(data).attr("d", line);   
```  
### Arc Generator  
The arc generator produces a circular or annular sector, as in a pie or donut chart. The pie generator computes the necessary angles to represent an array of data as a pie or donut chart.  

## Group and Transform
* Grouping - To group a set of SVG elements that share the same attribute
* Transforming - To define a new coordinate system for a set of SVG elements by applying a transformation to **each** coordinate specified in this set of SVG elements
```javascript
//from 2 Categorial Vlbs 1 Continuous Vlbs/Scatter Plot
    var category = svg.selectAll("g")
                    .data(dataset)
                    .enter().append("g")
                    .attr("class", "category")
                    
                    .attr("transform", function(d) { 
                        return "translate(" + xScale.bandwidth()/2 + ",0)"; 
                    });
```  

## Looping
### Loop to get the largest y scale number
```javascript
//array within array within array
var dataset = [
                [ [ 0, 5 ], [ 0, 4 ], [ 0, 2 ], [ 0, 7 ], [ 0, 23] ],
                [ [ 5, 15 ], [ 4, 16 ], [ 2, 21 ], [ 7, 30 ], [ 23, 40 ] ],
                [ [ 15, 37 ], [ 16, 44 ], [ 21, 53 ], [ 30, 65 ], [ 40, 83 ] ]
             ];

//Largest Number in dataset
d3.max(dataset, function(innerArray) { 
    return d3.max(innerArray, function(innerinnerArray) { 
        return d3.max(innerinnerArray, function(innerinnerinnerArray) { 
            return innerinnerinnerArray;
        })
    }) 
})

```  
```javascript
//object within array
var dataset =  [ {Year: "2004", emiglia: 10, lombardy: 70}, 
                 {Year: "2008", emiglia: 15, lombardy: 50},
                 {Year: "2012", emiglia: 23, lombardy: 30},
                 {Year: "2016", emiglia: 70, lombardy: 110} ];

//get the key
var keys = Object.keys(dataset[0]);

//Largest Number in dataset
d3.max(dataset, function(d) {
     return d3.max(keys, function(key) { 
         return d[key]; 
    }); 
})
```  
## Two categorial Variables and One Continuous Variable
### Dot Plot
<img src="Overview/2 Categorial Vlbs 1 Continuous Vlbs/Scatter Plot/dot_plot.PNG" width="480">  
### Bar Chart
<img src="Overview/2 Categorial Vlbs 1 Continuous Vlbs/Bar Chart/bar_chart.PNG" width="480">

## Scale
* scaleLinear() - continuous range; continuous domain; output generated from continuous range
* scaleBrand() - continuous range; discrete domain; output generated from continuous range
* scaleOrdinal() - discrete range; discrete domain; output generated from discrete range
* scaleQuantize() - discrete range; continuous domain; output generated from discrete range
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

```javascript
var color = d3.scaleQuantize()
                .range(["rgb(237,248,233)","rgb(186,228,179)","rgb(116,196,118)","rgb(49,163,84)","rgb(0,109,44)"])
                .domain([
					d3.min(data, function(d) { return d.value; }), 
					d3.max(data, function(d) { return d.value; })
				        ]);
```