---
layout: post
#title: Example content
#date: 2016-01-12
tags: [sass, css]
---

Sass Mixins are great for adding chunks code with arguments. This allows you to create pre&ndash;fab components and then customise their appearance when you use them throughout your site.

- Like using Javascript object variables with CSS.
- Declare with `@mixin mixinname($arg, $arg, …) {}`
- call with `@include mixinname(value, value, …);`
- arguments can each have a default value separated by a colon. e.g. `@mixin mixinname($arg: default) {}`

Using a Mixin is an elegant way to add a [clearfix](https://css-tricks.com/snippets/css/clear-fix/) to floating elements.


```scss
@mixin clearfix {
	&:after {
		content: '';
		display: table;
		clear: both;
	}
}
ul {
	background-color: green;
	list-style: none;
	@include clearfix; //add this mixin to parent's of floated elements.
}
li {
	float: left;
	background-color: grey;
	padding: .5em;
	margin: 1em;
	color: white;
}
```

```html
<ul>
	<li>Float me</li>
	<li>Floating is fun</li>
	<li>It's a flotilla</li>
</ul>

```

Here's a more involved Mixin that adds variables to set background-image properties:

<p data-height="298" data-theme-id="dark" data-slug-hash="OpYePw" data-default-tab="css,result" data-user="sansSpoon" data-embed-version="2" data-pen-title="sassMixin" data-preview="true" class="codepen">See the Pen <a href="http://codepen.io/sansSpoon/pen/OpYePw/">sassMixin</a> by sansSpoon (<a href="http://codepen.io/sansSpoon">@sansSpoon</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>