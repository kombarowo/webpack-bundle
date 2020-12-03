# Webpack bundle

My webpack bundle for frontend develop with native JS

## What you need to start

* Install nodejs.

## How to use gulp for fonts

- Download your fonts, only .ttf format.
- Run gulp.

````
gulp
````

- Go to fonts.scss.
- First title is font-name, change it on the name without weight:

<p>OpenSans-Regular ==> OpenSans</p>

- Second title is filename, don't change it.
- Change weight numbers correctly:

100: Thin;

200: Extra Light (Ultra Light);

300: Light;

400: Normal;

500: Medium;

600: Semi Bold (Demi Bold);

700: Bold;

800: Extra Bold (Ultra Bold);

900: Black (Heavy).

*Now you have completed font-face for every font in your project:)*

## How use svg sprite

````
<svg class="icon {your classes}">
  <use href="#_sprite_{your sprite name}"></use>
</svg>
````

For example, right-side arrow:

````
<svg class="icon icon_size_1 icon_arrow_right">
  <use href="#_sprite_arrow"></use>
</svg>
````

## How to use animation

* Add class 'anim'.
* Add attributes: 'data-anim'(animation name),
  'data-anim-repeat'(if "once", animation will not repeat by scroll again. Remove to infinite),
  'data-anim-delay'(animation-delay).

````
<p class="anim" data-anim="fadeInDown" data-anim-delay="3s" data-anim-repeat="once">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</p>
````

## How to use anchors

*Add data-anchor="class".

````
<a href="#" data-anchor="home" class="button button--to-home">
  Reset scroll to home
</a>
````

## For webp images

````
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg|png alt="image">
</picture>
````
