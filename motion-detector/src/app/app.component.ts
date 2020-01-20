import { Component, OnInit, OnDestroy } from '@angular/core';

import { fromEvent, Subscription } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  
  private supports_motion_detection: boolean = true;
  private message: string;
  private speed: string;
  private orientationChangeSubscription: Subscription;
  private rotationRateChangeSubscription: Subscription;

  constructor(){}

  ngOnInit(){
    this.supports_motion_detection = (window.DeviceOrientationEvent ? true : false);
    this.detectRotation();
    this.detectMotion();
  }

  ngOnDestroy(){
    if(this.orientationChangeSubscription) 
      this.orientationChangeSubscription.unsubscribe();

    if(this.rotationRateChangeSubscription)
      this.rotationRateChangeSubscription.unsubscribe();
  }

  async detectRotation(){
    //create observable that emits click events
    const source = fromEvent(window, 'deviceorientation');
    //map to string with given event timestamp
    const example = source.pipe(map(event => this.getMessageForOrientationChange(event)));
    //output (example): 'Event time: 7276.390000000001'
    this.orientationChangeSubscription = example.subscribe(val => this.message = val);
  }

  getMessageForOrientationChange(event: Event): string{
    if(event instanceof DeviceOrientationEvent)
      return `Device is tilted from center by ${event.gamma} degrees`;
  }

  async detectMotion(){
    //create observable that emits click events
    const source = fromEvent(window, 'devicemotion');
    //map to string with given event timestamp
    const example = source
      .pipe(
        map(event => this.getMessageForRotationRateChange(event)),
        debounceTime(300)
      );
    //output (example): 'Event time: 7276.390000000001'
    this.rotationRateChangeSubscription = example.subscribe(val => this.speed = val);
  }

  getMessageForRotationRateChange(event: Event): string{
    if(event instanceof DeviceMotionEvent)
      return `Device is shaken around center at ${event.rotationRate.gamma} degrees per second`;
  }



}
