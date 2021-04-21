const monthSvg = d3.select('svg.month');
const radiusScale = d3.scaleSqrt()
  .domain([0, 30000])
  .range([0, 50])

monthSvg
  .selectAll('circle')
  .data(monthData)
  .enter()
  .append('circle')
  // These attr are used to lay the circles out in 7 column grid
  .attr('cx', (d, i) => {return (i % 7) * 120 + 60})
  .attr('cy', (d, i) => {return Math.floor(i / 7) * 100 + 60})
  .attr('r', (d, i) => {return radiusScale(d)})


