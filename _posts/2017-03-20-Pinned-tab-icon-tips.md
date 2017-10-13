---
layout: post
#title: Example content
#date: 2016-01-12
tags: [svg,htm]
---

I've just updated my site with a spiffy new [Pinned Tab Icon](https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/pinnedTabs/pinnedTabs.html "Apple Developer Documentation"). The code is pretty straight forward, just add the following into your header element.

```HTML
<link rel="mask-icon" href="website_icon.svg" color="red">
```
I used [Affinity Designer](https://affinity.serif.com/en-us/designer/) to create the vector-only icon but had some troubles getting it to display once uploaded. I initially used the built&ndash;in export option "SVG (for Web)". After a little fiddling around I found that the export options needed tweaking to:

- Rasterise: Nothing
- Turn off: Downsample images
- Use document resolution
- Turn off: Allow JPEG compression
- Turn on: Export text as curves

<figure>
	<img style="width:50%;" src="{{ site.baseurl }}{{ site.contentPath }}/2017/03/svgExportSettings.png" alt="SVG Export Settings">
	<figcaption>Affinity Designer export settings.</figcaption>
</figure>

The exported SVG for my sites icon came out as:

```SVG
<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path d="M10.553,0c1.854,0 2.369,0.003 3.155,0.267c0.939,0.343 1.682,1.086 2.025,2.025c0.267,0.794 0.267,1.311 0.267,3.155l0,5.106c0,1.844 0,2.361 -0.267,3.155c-0.343,0.939 -1.086,1.682 -2.025,2.025c-0.793,0.267 -1.31,0.267 -3.155,0.267l-5.106,0c-1.844,0 -2.361,0 -3.155,-0.267c-0.939,-0.343 -1.682,-1.086 -2.025,-2.025c-0.267,-0.794 -0.267,-1.311 -0.267,-3.155l0,-5.106c0,-1.844 0,-2.361 0.267,-3.155c0.343,-0.939 1.086,-1.682 2.025,-2.025c0.786,-0.264 1.301,-0.267 3.155,-0.267l5.106,0Zm0.042,4.562l-5.19,0l0,6.876c0,0 0.966,0 1.68,0c0.483,0 0.95,-0.175 1.315,-0.493c0.437,-0.382 1.045,-0.913 1.51,-1.319c0.436,-0.379 0.685,-0.929 0.685,-1.506l0,-3.558Z"/></svg>
```

It can be further minimised to:

```SVG
<svg viewBox="0 0 16 16"><path d="M10.553,0c1.854,0 2.369,0.003 3.155,0.267c0.939,0.343 1.682,1.086 2.025,2.025c0.267,0.794 0.267,1.311 0.267,3.155l0,5.106c0,1.844 0,2.361 -0.267,3.155c-0.343,0.939 -1.086,1.682 -2.025,2.025c-0.793,0.267 -1.31,0.267 -3.155,0.267l-5.106,0c-1.844,0 -2.361,0 -3.155,-0.267c-0.939,-0.343 -1.682,-1.086 -2.025,-2.025c-0.267,-0.794 -0.267,-1.311 -0.267,-3.155l0,-5.106c0,-1.844 0,-2.361 0.267,-3.155c0.343,-0.939 1.086,-1.682 2.025,-2.025c0.786,-0.264 1.301,-0.267 3.155,-0.267l5.106,0Zm0.042,4.562l-5.19,0l0,6.876c0,0 0.966,0 1.68,0c0.483,0 0.95,-0.175 1.315,-0.493c0.437,-0.382 1.045,-0.913 1.51,-1.319c0.436,-0.379 0.685,-0.929 0.685,-1.506l0,-3.558Z"/></svg>
```