import { Component } from "@angular/core";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'q-singularity'
  age = '24'
  logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
  images = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
  ]
  currentDate = new Date()
  cost = 2000
  temperature = 25.3
  pizza = {
    toppings: ['pepperoni', 'bacon'],
    size: 'large'
  }
  blueClass = false
  fontSize = 16


  getName() {
    return this.name
  }
  getAge() {
    return this.age
  }
  setLogo(url: string) {
    this.logo = url;
  }
  onChangeLogo(event: KeyboardEvent) {
    this.logo = (event.target as HTMLInputElement).value
  }
  logImg(event: string) {
    console.log('clicked child', event)
  }

}