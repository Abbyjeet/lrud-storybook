import Lrud from 'lrud'

const navigation = new Lrud()
const $id = (id) => document.getElementById(id)

navigation.on('focus', (id) => {
  const node = navigation.nodes[id]
  const el = $id(id)

  if (el) el.classList.add('focused')
  if (node && node.onFocus) node.onFocus(node)
})

navigation.on('blur', (id) => {
  const node = navigation.nodes[id]
  const el = $id(id)

  if (el) el.classList.remove('focused')
  if (node && node.onBlur) node.onBlur(node)
})

navigation.on('select', (id) => {
  const node = navigation.nodes[id]
  if (node && node.onSelect) node.onSelect(node)
})

navigation.on('move', (event) => {
  const node = navigation.nodes[event.id]
  if (node && node.onMove) node.onMove(event)
})

document.addEventListener('keydown', (event) => {
  if (Lrud.KEY_CODES[event.keyCode]) {
    navigation.handleKeyEvent(event)
    event.preventDefault()
  }
})

export default navigation
