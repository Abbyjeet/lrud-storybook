import Lrud from 'lrud'

const navigation = new Lrud()

navigation.on('focus', (id) => {
  const el = document.getElementById(id)
  if (el) el.style.color = 'red'
})

navigation.on('blur', (id) => {
  const el = document.getElementById(id)
  if (el) el.style.color = ''
})

document.addEventListener('keydown', (event) => {
  if (Lrud.KEY_CODES[event.keyCode]) {
    navigation.handleKeyEvent(event)
    event.preventDefault()
  }
})

export default navigation
