import './sass/main.scss';
import { setupCounter } from './counter.ts'

document.querySelector<HTMLElement>('#page-home')!.innerHTML = `
 
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
