# jdmBlog

A brain dump of my thoughts and lessons learnt while digesting life.

## Usage
This readme is a build log for notes so I can remember what the hell I did.

Up unto this point I've build the blog with Jekyll 3.5.x in a very basic manner with `jekyll serve --drafts`. As I've noticed from may other users of Jekyll, this can get pretty slow when you start getting any kind of decent content. So, I'll be breaking down the build process into a few steps:

-	Seperate content
	-	I want to seperate the content from the site structure. This way I can treat the structure as a theme/template, leading to maybe posting versions available for purchase.
	-	Content to have it's own git repo
		-	ignore drafts directory
		-	changes to posts directory tracked
	-	Minimises commits to template
		-	can be done as pre-task to site build task
	-	Consider having different pipelines to drafts/posts
		-	Markdown GUI
	-	bash script to handle rsync copy
		-	doesn't need to be live.
		-	switch to push to drafts or posts
-	Seperate Sass
	-	Quicker build process
	-	Support using Sass maps
	-	support autoprefixer
-	Other unforeseen benefits

## Version History

### 20171027 2.1.0
-	Adding Gem's, in addition to Jekyll
	-	sass
	-	scss-lint
-	Adding NPM management with package.json
	-	All packages are installed globally, hence no dev dependancies.
		-	npm-run-all
		-	watch
		-	postcss
		-	autoprefixer
			-	browserlist in package.json
	-	NPM scripts do all the heavy lifting
		-	custom rsync script to handle external content

## License

Jekylton is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).