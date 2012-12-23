This document is indended to address the use cases addressed by both the `picture` proposal (including `srcset` limited to resolution-switching only), and the extended `srcset` proposal.

## Viewport Sizes
Assuming three image “breakpoints” based on maximum widths, using pixel-based values: 400px, 600px, and 800px. The smallest image source has been designated as fallback content.

**`picture` Element**
```
<picture>
    <source media="(max-width: 400px)" src="image1.jpg">
    <source media="(max-width: 600px)" src="image2.jpg">
    <source media="(max-width: 800px)" src="image3.jpg">
    <img src="image1.jpg" alt="">
</picture>
```

**Extended `srcset`**
```
<img src="image1.jpg" srcset="image1.jpg 400w, image2.jpg 600w, image3.jpg 800w" alt="">
```


### Using min-width ###
Assuming three image “breakpoints” intended to remain in sync with a media-query-based CSS layout making use of `min-width` media queries.

**`picture` Element**
```
<picture>
    <source media="(min-width: 400px)" src="image1.jpg">
    <source media="(min-width: 600px)" src="image2.jpg">
    <source media="(min-width: 800px)" src="image3.jpg">
    <img src="image1.jpg" alt="">
</picture>
```

**Extended `srcset`**

*N/A*


### Relative units ###
Assuming three image “breakpoints” intended to remain in sync with a media-query-based layout specced in `em` units.

**`picture` Element**
```
<picture>
    <source media="(max-width: 20em)" src="image1.jpg">
    <source media="(max-width: 40em)" src="image2.jpg">
    <source media="(max-width: 60em)" src="image3.jpg">
    <img src="image1.jpg" alt="">
</picture>
```

**Extended `srcset`**

*N/A*

Note: the `em` values above could be manually converted to `px` by the author to ensure that the image breakpoints are within a few pixels of the `em`-based layout media queries, resulting in:

```
<img src="image1.jpg" srcset="image1.jpg 320w, image1.jpg 640w, image2.jpg 960w" alt="">
```

While the `em`-based CSS layout will be reevaulated based on user zoom in all modern browsers (see http://blog.cloudfour.com/the-ems-have-it-proportional-media-queries-ftw/ for a description and functional example) and we can assume the same for the `em`-based image breakpoints, the `px`-based image breakpoints will fall out of sync with the layout when the user zooms in or out.

## Portait vs. Landscape Orientation ##

**`picture` Element**
Assuming the author simply wants to preform image source swapping based on a device’s orientation. This would likely see use in a standalone mobile site catering to specific devices or in a combination web/native app.

```
<picture>
    <source media="(device-orientation: portrait)" src="image1.jpg">
    <source media="(device-orientation: landscape)" src="image2.jpg">
    <img src="image1.jpg" alt="">
</picture>
```

**Extended `srcset`**

*N/A*


## Display Density
The two proposals are functionally identical in terms of dealing with display density when independent of the “Viewport Sizes” use case:

```
<img src="image1.jpg" srcset="image2.jpg 2x">
```


## Display density in conjunction with viewport sizing ##
Assuming three image “breakpoints” based on maximum widths, using pixel-based values: 400px, 600px, and 800px. The smallest standard resolution image source has been designated as fallback content.

**`picture` Element**
```
<picture>
    <source media="(max-width: 400px)" srcset="image1.jpg, image1-hd.jpg 2x">
    <source media="(max-width: 600px)" srcset="image2.jpg, image2-hd.jpg 2x">
    <source media="(max-width: 800px)" srcset="image3.jpg, image3-hd.jpg 2x">
    <img src="image1.jpg" alt="">
</picture>
```

**Extended `srcset`**
```
<img src="image1.jpg" srcset="image1.jpg 400w, image1-hd.jpg 400w 2x, image2.jpg 600w, image2-hd.jpg 600w 2x, image3.jpg 800w, image3-hd.jpg 800w 2x" alt="">
```


## Print sources
Assuming two image sources indended for display on screen depending on window size, each with a standard and high-definition source, and a single image source intended for printing.

**`picture` Element**
```
<picture>
    <source media="screen and (min-width: 20em)" srcset="image1.jpg, image1-hd.jpg 2x">
    <source media="screen and (min-width: 40em)" srcset="image2.jpg, image2-hd.jpg 2x">
    <source media="print" src="image3.jpg">
    <img src="image1.jpg" alt="">
</picture>
```

**Extended `srcset`**

*N/A*


## Color saturation/high-contrast mode
This is based on the high-contrast mode and ambient light media queries currently being proposed in the CSS WG.

**`picture` Element**
```
<picture>
    <source media="" srcset="image1.jpg">
    <source media="" srcset="image2.jpg">
    <img src="image1.jpg" alt="">
</picture>
```

**Extended `srcset`**

*N/A*


## Potential for addressing bandwidth concerns ##
[[ TODO: `srcset` as suggestion overrideable by UA, in both cases. Seperation of concerns (“art direction” vs. density cases) may make this simpler with `picture`, see writeup in http://www.w3.org/community/respimg/2012/06/18/florians-compromise/ ]]


## Accessibility ##

Both patterns are functionally identical in terms of _short_ descriptive text, though authoring differs. The `picture` pattern will allow fallback content to serve as the content exposed to assistive technologies (in this case, the fallback `img` alt tag would be used), while the extended `srcset` syntax would rely on the `img` element’s `alt` attribute.

**`picture` Element**
```
<picture>
    [ … ]
    <img src="image1.jpg" alt="Short descriptive text.">
</picture>
```

**Extended `srcset`**
```
<img src="image1.jpg" srcset="[…]" alt="Short descriptive text.">
```

Further discussion: <a href="http://lists.w3.org/Archives/Public/public-html/2012Sep/0029.html">http://lists.w3.org/Archives/Public/public-html/2012Sep/0029.html</a>


## Potential for addressing new image formats ##
With the lack of a fallback mechanism browsers can rely on, web authors
cannot reliably use image formats that are only supported by some
browser vendors, but not all. (e.g. WebP, JPEG2K, JPEG-XR)

The `<picture>` element can provide such a fallback mechanism, that will
enable usage and broader adoption of new, more efficient image formats.

**`picture` Element**
```
<picture>
    <source src="image1.webp" type="image/webp">
    <source src="image2.jpg" media="(min-width: 20em)">
    <source src="image3.jpg" media="(min-width: 40em)">
    <img src="image2.jpg" alt="">
</picture>
```

**Extended `srcset`**

*N/A*

