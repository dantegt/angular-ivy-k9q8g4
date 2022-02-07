import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css'],
})
export class ImgComponent implements OnInit {
  @Input() img: string;
  @Output() loaded = new EventEmitter<string>();

  imgDefault = 'https://picsum.photos/id/1069/200';

  constructor() {}

  ngOnInit() {}

  imgError() {
    this.img = this.imgDefault;
  }

  imgLoaded() {
    console.log('image loaded');
    this.loaded.emit(this.img);
  }
}
