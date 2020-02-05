## Vanilla JS

### Additional info

Content between tags for custom element is not part of the shadow DOM, it is still in the light DOM. So if we want to style that content we can do it in the html or external css file, but for custom component we usually dont want that.

So we can use special selector in our custom component which is **::slotted(.my-item)** but keep in mind selectors we use in the round brackets will only be applied to the first level children elements, not for the nested.

## Stencil JS

**IMPORTANT** when placing content between the tags for custom element and getting that content in a slot tag for example we have access only the top level elements.

Also the content between custom tags is still in the light DOM.

Prop's are immutable, meaning we cant change them from inside the class, only changeable as incoming from outside. But thet can be changed if we provide configuration to Prop with mutable: true.
