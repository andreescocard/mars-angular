import { Injectable } from "@angular/core";
import { Picture } from "./pictures.models";
@Injectable()
export class PicturesService {
    getImages():Picture[]{
        return [
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