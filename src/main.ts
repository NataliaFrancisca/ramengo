import './sass/main.scss';
import Header from './components/Header/Header.ts';
import Form from './components/Form/Form.ts';

document.querySelector<HTMLElement>('#page-home')!.innerHTML = `
    ${Header}
    ${Form}
`