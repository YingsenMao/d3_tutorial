var drawBar = function(input) {
    var w = 200;
    var h = 500;
    var padding = 10;

    var svg = d3.select('body').append('svg')
                .attr('width', w)
                .attr('height', h)

    svg.selectAll('rect')
        .data(input)
        .enter()
        .append('rect')
        .attr('x', function(d, i) {
            return i * w / input.length;
        })
        .attr('y', function(d) {
            return h - d;
        })
        .attr('width', w / input.length - padding)
        .attr('height', function(d) {
            return d;
        })
}