const adviceHtml = document.querySelector('.advice')
const idHtml = document.querySelector('.advice_id')
const button = document.querySelector('.changer')

async function getAdvice () {
  const result = await fetch('https://api.adviceslip.com/advice')
  const data = await result.json()
  const {id, advice} = data.slip
  return {id, advice}
 }

 const {advice, id} = await getAdvice()
 
 adviceHtml.textContent = advice
 idHtml.textContent = `Advice #${id}`

button.addEventListener('click', async function () {
  const {advice, id} = await getAdvice()
  adviceHtml.textContent = advice
  idHtml.textContent = `Advice #${id}`
})
 