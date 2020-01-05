import { Component, Input } from '@angular/core';

@Component({
  selector: 'myorg-shell',
  template: `
    <h1>{{ title }}</h1>
    <div>
       <a href="learn-more">Learn more about Tuskdesk</a>
      <a href="learn-more-about-myorg">Learn more about Myorg</a>
      Copyright stuff is in here as well.
    </div>
  `,
  styles: []
})
export class ShellComponent  {
  @Input() title: string;
}
