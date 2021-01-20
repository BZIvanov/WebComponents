import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component', // this is how our custom tag will be called and it must have at least 1 dash
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string; // Prop decorator will watch for changes on the variable and call render method if changes were made

  /**
   * The middle name
   */
  @Prop({
    reflectToAttr: true,
  })
  middle: string; // reflectToAttr will actually change the attribute value, not just update the DOM

  /**
   * The last name
   */
  @Prop({
    mutable: true,
  })
  last: string; // mutable will allow us to change the value from inside the class, not only from outside

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
      <div>
        Hello, World! I'm {this.getText()}
        <slot />
      </div>
    );
  }
}
