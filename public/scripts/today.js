const todayData = [
  12, 110, 56, 85, 29, 123, 34, 56, 89, 12, 2, 67, 33, 99, 35, 13, 54, 54, 29, 10
];

const todaySvg = d3.select('svg');

todaySvg
  .selectAll('rect')
  .data(todayData)
  .enter()
  .append('rect')
  .attr('width', 24)
  .attr('y', (dataPoint, index) => {
    return 112 - dataPoint;
  })
  .attr('x', (dataPoint, index) => {
    return 36 * index;
  })
  .attr('height', (dataPoint, index) => {
    return dataPoint;
  })