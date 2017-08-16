import {bindable} from 'aurelia-framework';

export class SimpleRepro {
  @bindable public thing;

  thingChanged(newValue) {
    console.log('simple repro')
    console.log(newValue)
  }
}
