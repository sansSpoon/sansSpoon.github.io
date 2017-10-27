---
layout: post
#title: Sass nesting and the Parent selector
#date: 2017-01-16
tags: [sass,css]
---

## Nested Rules
Sass nesting makes it clearer to see which rules apply to a parent whilst reducing the amount of rule writing. Inner rules only apply to their outer rule. e.g.:

```scss
#content p {
  color: #00ff00;
  font-family: Helvetica, sans-serif;

  .altp {
    color: #ff0000;
    font-family: Times, serif;
  }
}
```

is compiled to:

```css
#content p {
  color: #00ff00;
  font-family: Helvetica, sans-serif; }
  #content p .altp {
    color: #ff0000;
    font-family: Times, serif; }
```

## Parent Selector
Another Sass shortcut is achieved by using the Parent Selector `&`. It's useful for adding in pseudo classes without having to specify a seperate rule. e.g.:


```scss
#content p {
  color: #00ff00;
  font-family: Helvetica, sans-serif;

  .altp {
    color: #ff0000;
    font-family: Times, serif;
  }
  
  a {
    color: #990099;
    &:hover {
      color: #660066; 
     }
  }
}
```

is compiled to:

```css
#content p {
  color: #00ff00;
  font-family: Helvetica, sans-serif; }
  #content p .altp {
    color: #ff0000;
    font-family: Times, serif; }
  #content a {
	 color: #990099; 
  }
  #content a:hover {
	  color: #660066;
  }
```

A trailing parent selector is useful for applying a specific class selector to an element rule. e.g.:

```scss
p {
  color: #00ff00;
  font-family: Helvetica, sans-serif;

  .nav & {
    color: #ff0000;
    font-family: Times, serif;
  }
}
```

is compiled to:

```css
p {
  color: #00ff00;
  font-family: Helvetica, sans-serif; }
p.nav {
    color: #ff0000;
    font-family: Times, serif; }
```