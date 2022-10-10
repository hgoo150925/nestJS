import './style.css';
import typescriptLogo from './typescript.svg';

// import { meow } from './bases/07-injection';
// import { mew } from './bases/08-decorators';
import { mew } from './bases/09-decorators2';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>  
    <p>${mew}</p>  
  </div>
`;
