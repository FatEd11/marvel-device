# marvelDevice.js

---

Straightforward Angular directive that allows you to input the [Marvel devices](http://marvelapp.github.io/devices.css/) as elements in your app. Basically they are just nice, flat designed versions of mobile devices used to showcase work.

Great for portfolios and showcases!

No dependencies (other than Angular naturally :) )

## Installation

Install with bower with

```bash
bower install --save angular-marvel-device
```

Include as a dependency to your angular app

```js

angular.module('yourApp', [marveldevices]);
```

## Usage 

Add as needed, either as an element or an attribute.

Takes a couple of options

```html
  device-type="ipad" <!-- Defaults to iphone6 if not specified -->
  colour="silver" <!-- All devices have default colour, only provide for a different one -->
  orientation="landscape" <!-- All devices default portrait, only supply for landscape -->
  image="./assets/images/example.png" <!-- Image file to be displayed in the screen --> 
  mobile-alt="Other text" <!-- alt text for the image displayed in the screen --> 
```

## Example

```html
<marvel-device image="./assets/images/example.png" mobile-alt="Alt text" device-type="htc-one" orientation="landscape"></marvel-device>

```

All the colours, devices and layouts can be found [here](http://marvelapp.github.io/devices.css/).