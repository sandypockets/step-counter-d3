const data = [10, 30, 50, 10, 80, 30, 70, 50, 60, 4, 30, 80, 90, 100, 240, 30, 60, 40, 60];

const todaySvg = document.querySelector('svg');

data.forEach((dataPoint, index) => {
  const rectTag = document.createElementNS(`http://www.w3.org/2000/svg`, `rect`);
  rectTag.setAttribute('x', index * 36);
  rectTag.setAttribute('y', 112 - dataPoint);
  rectTag.setAttribute('width', '24');
  rectTag.setAttribute('height', dataPoint);
  todaySvg.append(rectTag);
})

// Convert bars to vertical
// width - 24
// space between bars - 12
// max height - 112