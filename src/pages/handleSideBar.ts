import { $ } from '../../lib/query'

export default function handleSideBar (): void {
  const button = $('[data-rol="side"]')

  button.addEventListener('click', () => {
    console.log('side menu')
  })
}
