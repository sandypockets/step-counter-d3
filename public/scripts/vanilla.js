// const headerTag = document.querySelector("h1");
// headerTag.innerText = "Changing the doc!";
//
// headerTag.style.backgroundColor = 'var(--primary-orange)'
// headerTag.style.fontSize = '64px'

const headerTags = document.querySelectorAll('h1');
headerTags.forEach((h1) => {
  const hue = 360 * Math.random();
  h1.innerText = 'Things'
  h1.style.backgroundColor = `hsl(${hue}, 100%, 50%)`
})