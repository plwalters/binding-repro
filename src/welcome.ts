import {WelcomeBase} from './welcome-base';

export class Welcome extends WelcomeBase {
  public thing;
  test = false;

  constructor() {
    super(arguments);
  }
  activate(params) {
    console.log('activating')
    this.test = true;
    super.activate(params);
  }
  setThing() {
    let newThing = { message: 'New message' };
    this.thing = newThing;
  }
}
