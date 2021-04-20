const todayData = [
  100, 113, 300, 50, 100, 800, 300,
  450, 530, 630, 42, 30, 80, 90, 100,
  240, 30, 60, 40, 60
];

const todaySvg = d3.select('svg');

todaySvg
  .selectAll('rect')
  .data(todayData)
  .enter()
  .append('rect')
  .attr('width', (dataPoint, index) => {
    return dataPoint;
  })
  .attr('y', (dataPoint, index) => {
    return 40 * index;
  })
  .attr('x', 0)
  .attr('height', 30)