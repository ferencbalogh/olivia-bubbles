import {Component, ViewEncapsulation} from '@angular/core';
import {shuffle} from 'lodash-es';
import {CdkDragDrop} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tab1',
  templateUrl: 'play.page.html',
  encapsulation: ViewEncapsulation.None
})
export class PlayPage {

  public bubbles: any = [
    'red',
    'blue',
    'orange',
    'yellow',
    'black',
    'lightblue',
    'cyan',
    'purple',
    'green',
    'lightgreen',
  ];

  public randomBubbles: any = [];
  public shuffleBubbles: any = [];
  public readyBubbles: any = [];
  public youwin: boolean = false;

  constructor() {
    this.randomBubbles = this.bubbles.sort(() => Math.random() - Math.random()).slice(0, 5);
    this.shuffleBubbles = shuffle(this.randomBubbles);
  }

  /**
   * Get logo
   */
  public getLogo() {
    return 'assets/logo.png';
  }

  /**
   * Get Win logo
   */
  public getWin() {
    return 'assets/win.gif';
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log('CONTAINER ELÖZŐ', event.previousContainer);
    console.log('CONTAINER HUZOTT', event.container);
    if (event.previousContainer.data === event.container.data && event.previousContainer.id !== event.container.id) {
      this.add(event.previousContainer.data);
      this.win();
    }
  }

  /**
   * Add item to bubble
   *
   * @param bubble
   */
  add(bubble): void {
    this.readyBubbles.push(bubble);
    this.shuffleBubbles = this.shuffleBubbles.filter(item => item !== bubble);
  }

  /**
   * Show win message
   */
  win(): void {
    if (this.readyBubbles.length === this.randomBubbles.length) {
      this.youwin = true;
    }
  }

  /**
   * Check if bubble added
   *
   * @param bubble
   */
  ready(bubble: string): boolean {
    return this.readyBubbles.includes(bubble);
  }

  /**
   * Get ready bubble color
   *
   * @param bubble
   */
  getClass(bubble: string): string {
    return this.ready(bubble) ? 'bubble ' + bubble : 'graybubble gray';
  }
}
