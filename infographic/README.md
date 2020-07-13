# Ways to add SVG to webpage HTML

## symbol Defining and Usage

```
<svg class="hidden">
  <symbol id="rectangle" viewBox="0 0 20 20">
    <rect x="0" y="0" width="300" height="300" fill="rgb(255,159,0)" />
  </symbol>
</svg>

<svg>
  <use xlink:href="#rectangle" href="#rectangle" />
</svg>

<svg>
  <use xlink:href="#rectangle" href="#rectangle" />
</svg>
```

## Data URLs

```
<img src="data:image/svg+xml;<DATA>" alt="Flag" />

<object data="data:image/svg+xml;<DATA>" type="image/svg+xml"></object>

<iframe data="data:image/svg+xml;<DATA>" frameborder="0"></iframe>
```

Just change <DATA> with the appropriate Data URL.
Styling elements

Any SVG element can accept a style attribute, just like HTML tags. Not all CSS properties work as you would expect, due to the SVG nature. For example to change the color of a text element, use fill instead of color.
Other common properties are

    fill-opacity, background color opacity
    stroke, defines the border color
    stroke-width, sets the width of the border

CSS can target SVG elements like you would target HTML tags:
Interacting with a SVG with CSS or JavaScript

SVG images can be styled using CSS, or scripted with JavaScript, in those cases:

    when the SVG is inlined in the HTML
    when the image is loaded through object, embed or iframe tags

but (⚠️ depending on the browser implementation) they must be loaded from the same domain (and protocol), due to the same-origin policy.

iframe needs to be explicitly sized, otherwise the content is cropped, while object and embed resize to fit their content.

If the SVG is loaded using a img tag, or through CSS as a background, independently of the origin:

    CSS and JavaScript cannot interact with it
    JavaScript contained in the SVG is disabled
    External resources like images, stylesheets, scripts, fonts cannot be loaded

in detail
Feature Inline SVG object/embed/iframe img
Can interact with the user ✅ ✅ ✅
Supports animations ✅ ✅ ✅
Can run its own JavaScript ✅ ✅ 👎🏼
Can be scripted from outside ✅ 👎🏼 👎🏼

Inline SVG images are definitely the most powerful and flexible, and it’s the only way to perform certain operations with SVG.

If you want to do any interaction with the SVG with your scripts, it must be loaded inline in the HTML.
SVG Symbols

Symbols let you define an SVG image once, and reuse it in multiple places. This is a great help if you need to reuse an image, and maybe just change a bit some of its properties.

You do so by adding a symbol element and assigning an id attribute:

<svg class="hidden">
  <symbol id="rectangle" viewBox="0 0 20 20">
    <rect x="0" y="0" width="300" height="300" fill="rgb(255,159,0)" />
  </symbol>
</svg>

<svg>
  <use xlink:href="#rectangle" href="#rectangle" />
</svg>

<svg>
  <use xlink:href="#rectangle" href="#rectangle" />
</svg>

(xlink:href is for Safari support, even if it’s a deprecated attribute)

This starts to give an idea of the power of SVG.

If you want to style those 2 rectangles differently, for example using a different color for each? You can use CSS Variables.
