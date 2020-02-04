# Additional info

Content between tags for custom element is not part of the shadow DOM, it is still in the light DOM. So if we want to style that content we can do it in the html or external css file, but for custom component we usually dont want that.

So we can use special selector in our custom component which is **::slotted(.my-item)** but keep in mind selectors we use in the round brackets will only be applied to the first level children elements, not for the nested.
