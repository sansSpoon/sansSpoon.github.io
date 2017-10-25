---
layout: post
#title: Example content
#date: 2016-01-12
tags: [sas, css]
---

Sass Extends help reduce the amount of class names you write into HTML elements:
- declare with @extend
- good for optimising the final css output
    - a base set of styles can be hidden
    - as a result you don’t have to declare the base class in html
- set an invisible class with % e.g. %hiddenClass {}

```scss
%btn {
	display: inline-block;
	padding: 6px 12px;
	text-align: center;
	color: white;
}

.btn-default {
	@extend %btn;
	background: grey;
}

.btn-hot {
	@extend %btn;
	background: red;
}

.btn-cool {
	@extend %btn;
	background: blue;
}
```

Is compiled to:

```scss
.btn-default, .btn-hot, .btn-cool {
  display: inline-block;
  padding: 6px 12px;
  text-align: center;
  color: white;
}

.btn-default {
  background: grey;
}

.btn-hot {
  background: red;
}

.btn-cool {
  background: blue;
}
```


<p data-height="265" data-theme-id="dark" data-slug-hash="yMWmgX" data-default-tab="css,result" data-user="sansSpoon" data-embed-version="2" data-pen-title="sassExtends" data-preview="true" class="codepen">See the Pen <a href="http://codepen.io/sansSpoon/pen/yMWmgX/">sassExtends</a> by sansSpoon (<a href="http://codepen.io/sansSpoon">@sansSpoon</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>