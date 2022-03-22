import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component } from '@angular/core';
import { Picture } from 'src/app/pictures/pictures.models';

@Component({
  selector: 'pictures-list',
  templateUrl: './pictures-list.component.html'
})
export class PicturesListComponent {
  images: Picture[];
  
  constructor(){
    this.images = [
      {
        img_src: 'https://mars.nasa.gov/system/resources/detail_files/26526_PIA25046-web.jpg',
      },
      {
        img_src: 'https://www.nasa.gov/sites/default/files/thumbnails/image/pia21044_orig.jpg',
        title: 'Mars'
      },
      {
        img_src: 'https://www.nasa.gov/sites/default/files/thumbnails/image/pia22313.jpg',
        title: 'Mars'
      }
    ];
  }
}
