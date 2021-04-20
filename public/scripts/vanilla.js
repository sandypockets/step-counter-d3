const data = [550, 420, 731, 420, 130, 670, 356, 243];

const todaySvg = document.querySelector('svg');

data.forEach((dataPoint, index) => {
  const rectTag = document.createElementNS(`http://www.w3.org/2000/svg`, `rect`);
  rectTag.setAttribute('x', 0);
  rectTag.setAttribute('y', index * 50);
  rectTag.setAttribute('width', dataPoint);
  rectTag.setAttribute('height', '40');
  todaySvg.append(rectTag);
})