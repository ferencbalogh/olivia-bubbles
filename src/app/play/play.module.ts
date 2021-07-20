import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlayPage } from './play.page';
import { PlayPageRoutingModule } from './play-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PlayPageRoutingModule,
    DragDropModule
  ],
  declarations: [PlayPage]
})
export class PlayPageModule {}
