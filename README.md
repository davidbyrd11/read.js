# Read.js #
## Overview ##
Read.js is a javascript library that fires an event once the user has read a page.

## Possible Solutions ##
- Check that they reach the bottom of the page and that they're rate of scrolling is less than some value that would be considered too fast to read.
- Check that they reach the bottom of the page and that they never scroll faster than a certain speed
- Check the number of words on the page and make sure they spend a reasonable amount of time on the page given that number of words

## End User API ##
I was thinking it would be cool to jquery's domready:

```javascript
$(window).read(function () {
  //do something
});
```
