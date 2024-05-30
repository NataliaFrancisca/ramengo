import './sass/main.scss';
import { setupCounter } from './counter.ts'
import Header from './components/Header/Header.ts';

document.querySelector<HTMLElement>('#page-home')!.innerHTML = `
    ${Header}
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)


