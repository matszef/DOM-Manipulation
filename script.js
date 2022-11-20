// let titleDiv = document.getElementById('title')

// console.log('before: ', titleDiv.innerText)

// let message = 'Goodbye'
// titleDiv.innerText = message

// console.log('after: ', titleDiv.innerText)

// titleDiv.innerHTML = `<p>${message}</p>`

// console.log('change: ', title.innerHTML)

// titleDiv.style.background = 'silver'

// const red = document.getElementById('red')
// const yellow = document.getElementById('yellow')
// const green = document.getElementById('green')
// const msg = document.getElementById('msg')

// red.onclick = () => {
//   msg.innerText = 'RED'
//   console.log('red')
// }

// yellow.onclick = () => {
//   msg.innerText = 'YELLOW'
//   console.log('yellow')
// }

// green.onclick = () => {
//   msg.innerText = 'GREEN'
//   console.log('green')
// }

const squares = document.querySelectorAll('.colorSquare')
const msg = document.getElementById('msg')

const timesClicked = { "red": 0, "yellow": 0, "green": 0 }

squares.forEach(square => {
  square.onclick = () => {
    console.log(square.value)
    msg.innerText = `${square.value}`

    timesClicked[square.value] += 1

  }
})