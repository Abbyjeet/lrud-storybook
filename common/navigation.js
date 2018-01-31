import Lrud from 'lrud'

const navigation = new Lrud()

navigation.on('focus', (id) => {
  const el = document.getElementById(id)
  if (el) el.classList.add('focused')
})

navigation.on('blur', (id) => {
  const el = document.getElementById(id)
  if (el) el.classList.remove('focused')
})

navigation.on('active', (id) => {
  const el = document.getElementById(id)
  if (el) el.classList.add('active')
})

navigation.on('inactive', (id) => {
  const el = document.getElementById(id)
  if (el) el.classList.remove('active')
})

document.addEventListener('keydown', (event) => {
  if (Lrud.KEY_CODES[event.keyCode]) {
    navigation.handleKeyEvent(event)
    event.preventDefault()
  }
})

export default navigation
