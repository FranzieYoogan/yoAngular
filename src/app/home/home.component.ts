import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private renderer: Renderer2){}

  checkButton() {

    const check = document.getElementById('check') as HTMLInputElement
    const button = document.getElementById('button') as HTMLElement
    const button2 = document.getElementById('button2') as HTMLElement
    const toggle = document.getElementById('toggle') as HTMLElement
    const body = document.body

    if(check.checked) {

      this.renderer.setStyle(body, 'background-image', 'url(/ds.gif)')
      button.classList.add('buttonStyle')
      button.classList.remove('buttonstyle2')

      button2.classList.add('buttonStyle')
      button2.classList.remove('buttonstyle2')
      toggle.style.background = 'orange'

    } else {

      this.renderer.setStyle(body,'background-image','url(/landscape.gif)')
      button.classList.add('buttonStyle2')
      button.classList.remove('buttonstyle')

      button2.classList.add('buttonStyle2')
      button2.classList.remove('buttonstyle')
      toggle.style.background = 'black'

    }

  }

  git() {

    window.location.href = "https://github.com/FranzieYoogan"

  }

  linkedin() {

    window.location.href = "https://www.linkedin.com/in/franzie-yoogan-5968451ab/"

  }

}
