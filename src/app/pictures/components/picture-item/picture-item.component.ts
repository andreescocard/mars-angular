import { Component, Input, OnInit } from '@angular/core';
import { Picture } from '../../pictures.models';

@Component({
  selector: 'picture-item',
  templateUrl: './picture-item.component.html',
  styleUrls: ['./picture-item.component.scss']
})
export class PictureItemComponent implements OnInit {
  @Input()
  img?:Picture
  constructor() { }

  ngOnInit(): void {
  }

}
