var draw_bar = function(numBar, yScale) {

    var dataset = []

    for (var i = 0; i < numBar; i++) {
        var newNum = Math.floor(Math.random() * yScale);
        dataset.push(newNum);
    }

    var w = numBar * 50;
    var h = 600;
    var fontSz = 20;

    var xScale = d3.scaleBand()
                    .domain(d3.range(numBar))
                    .range([0, w])
                    .paddingInner(0.05);

    var yScale = d3.scaleLinear()
                    .domain([0, yScale])
                    .range([0, h]);


    var svg = d3.select('.right')
                .append('svg')
                .attr('width', w)
                .attr('height', h);

    dataset.sort()
    svg.selectAll('rect')
        .data(dataset)
        .enter()
        .append('rect')
        .attr('x', function(d, i) {
            return xScale(i);
        })
        .attr('y', function(d) {
            return h - yScale(d);
        })
        .attr('width', xScale.bandwidth())
        .attr('height', function(d) { return yScale(d); })
        .attr("fill", function(d) {
            return "rgb(0, 0, " + Math.round(d * 10) + ")";
       });


    svg.selectAll('text')
       .data(dataset)
       .enter()
       .append('text')
       .text(function(d) {
           return d;
       })
       .attr("text-anchor", "middle")
       .attr('x', function(d, i) {
            return xScale(i) + xScale.bandwidth() / 2;
        })
        .attr('y', function(d) {
            if (d < 5) {
                return h - yScale(d);
            }
            else {
                return h - yScale(d) + fontSz;
            }
        })
        .attr("font-family", "sans-serif")
       .attr("font-size", fontSz)
       .attr("fill", function(d) {
        if (d < 5) {
            return 'black';
        }
        else {
            return 'white';
        }
    })
}