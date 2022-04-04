import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PicturesListComponent } from "./components/pictures-list/pictures-list/pictures-list.component";
import { PicturesService } from "./pictures.service";
import { PictureItemComponent } from './components/picture-item/picture-item.component';

@NgModule({
    imports:[
        CommonModule
    ],
  declarations: [
    PicturesListComponent,
    PictureItemComponent
  ], 
  exports: [PicturesListComponent],
  providers: [ 
    PicturesService
  ]
})
export class PicturesModule {
    constructor(){
        console.log('Eu existo')
    }
}