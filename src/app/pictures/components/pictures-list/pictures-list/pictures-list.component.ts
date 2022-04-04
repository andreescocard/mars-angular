import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component } from '@angular/core';
import { Picture } from 'src/app/pictures/pictures.models';
import { PicturesService } from 'src/app/pictures/pictures.service';

@Component({
  selector: 'pictures-list',
  templateUrl: './pictures-list.component.html'
})
export class PicturesListComponent {
  images = this.service.getImages();
  
  constructor(private service: PicturesService){

  }
}
