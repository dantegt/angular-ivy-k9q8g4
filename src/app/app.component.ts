import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  imgParent: string = '';

  register = {
    name: '',
    email: '',
    password: '',
  };

  onRegister() {
    console.log(this.register);
  }

  onLoaded(img: string) {
    console.log('on Loaded: OK! ', img);
  }
}
