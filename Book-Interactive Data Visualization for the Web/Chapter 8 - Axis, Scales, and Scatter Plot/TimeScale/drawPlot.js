var drawPlot = function(dt) {
    w = 500;
    h = 300;

    var svg = d3.select('body')
                .append('svg')
                .attr('width', w)
                .attr('height', h);
    svg.selectAll('circle')
        .data(dt)
        .enter()
        .append('circle')
        .attr('r', 5)
        .attr('cx', function(d) {
            return d[0];
        })
        .attr('cy', function(d) {
            return d[1];
        })
}