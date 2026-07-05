
//reference 
const grandParent = document.getElementById('gp')
const parent = document.getElementById('p')
const child = document.getElementById('c')

//capturing phase /------------------------------------- flow
grandParent.addEventListener('click', (e) => {
  console.log(e.target.id)
  console.log('Grand Parent 📉');
}, true)


parent.addEventListener('click', () => {
  console.log('Parent 📉');
}, true)


//---targert
child.addEventListener('click', () => {
  console.log('Child 🎯');
}, true)


//bubbling phase /------------------------------------- 
grandParent.addEventListener('click', (e) => {
  console.log('Grand Parent 📈');
})

parent.addEventListener('click', () => {
  console.log('Parent📈');
})





