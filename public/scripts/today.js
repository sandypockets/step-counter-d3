const todayData = [10, 30, 5, 10, 80, 30, 70, 50, 60, 4, 30, 80, 90, 100, 240, 30, 60, 40, 60];

const todaySvg = d3.select('svg');
const rectTags = d3.selectAll('rect');


rectTags
  .data(todayData)
  .attr('width', 600)