# jdmBlog

A brain dump of my thoughts and lessons learnt while digesting life.

## Usage
This readme is a build log for notes so I can remember what the hell I did.

Up unto this point I've build the blog with Jekyll 3.5.x in a very basic manner with `jekyll serve --drafts`. As I've noticed from may other users of Jekyll, this can get pretty slow when you start getting any kind of decent content. So, I'll be breaking down the build process into a few steps:

-	Seperate content
	-	I want to seperate the content from the site structure. This way I can treat the structure as a theme/template, leading to maybe posting versions available for purchase.
	-	Content to have it's own git repo
	-	Consider having different pipelines to drafts/posts
		-	Markdown GUI
-	Seperate Sass
	-	Quicker build process
	-	Support using Sass maps
	-	support autoprefixer
-	Other unforseen benefits

## Version History

### 20171027 2.0.1
-	Adding a NPM package.json
	-	Exclude node_modules in _config.yml and .gitignore
	

## License

Jekylton is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).