import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PicturesListComponent } from "./components/pictures-list/pictures-list/pictures-list.component";

@NgModule({
    imports:[
        CommonModule
    ],
  declarations: [
    PicturesListComponent
  ], 
  exports: [PicturesListComponent]
})
export class PicturesModule {
    constructor(){
        console.log('Eu existo')
    }
}