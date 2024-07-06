import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <button>click me</button>
  </div>


`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
