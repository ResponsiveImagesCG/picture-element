# The ```<picture>``` Element

This is repository for the <a
href="http://picture.responsiveimages.org">Editor's draft</a> of <cite>the
picture element</cite> specification.

## Pull Requests & Anolis

Confused about generating the page before your Pull Request? To generate the
page, you'll need to run `gen.js`. Instructions for setting up Anolis can be
found at the [WHATWG](http://wiki.whatwg.org/wiki/Anolis), but here are some
super basic instructions for setting this up on a Mac:

* Python should be installed by default, but if not, install it
* [Download](http://mercurial.berkwood.com/) and install Mercurial (hg)
* [Download](http://www.macports.org/) and install MacPorts
* [Download](http://nodejs.org/download/) and install node.js
* [Download](https://github.com/w3c/tidy-html5) and install HTML Tidy for HTML5
* Run:

        hg clone http://bitbucket.org/ms2ger/anolis
        cd anolis && sudo python setup.py install
        sudo port install py27-cssselect
        git clone git://github.com/html5lib/html5lib-python.git
        cd html5lib-python && sudo python setup.py install
		sudo npm install -g optimist

    (Note that Python will probably show a bunch of warnings, but as long as
    there are no *errors*, you should be OK.)

That's it for installing Anolis. To generate the page, just go to your picture
repo and run `./gen.js`.

If you get something like "Error: Cannot find module
'optimist'", try doing the `sudo npm install -g optimist` in your home directory.

If you get something like "Missing Dependency, yay! Please install HTML5 Tidy:
https://github.com/w3c/tidy-html5" (even though you've installed it), try
running `tidy -version`; if the version listed isn't the HTML5 version, then
`tidy` is pointing to a different/old version, not the one you just installed.
You may need to update your path, or you may be able to replace the old one in
`/usr/bin/` with the new one in `/usr/local/bin/`.

In terms of what Anolis *does*, here's @marcoscaceres dropping some science:

> [15:00:18]	\<Marcos\>	ok... so anolis is just html  
> [15:00:32]	\<Marcos\>	If you open up the `index.src.html` file  
> [15:00:55]	\<Marcos\>	you will see there are a few `class="w3c"` and
> `class="ricg"` or some such  
> [15:01:21]	\<Marcos\>	the `./gen.sh` tells anolis to strip out all the
> `w3c` stuff  
> [15:01:44]	\<Marcos\>	the `w3c` stuff, is, obviously, for when we want
> to publish at the `w3c`  
> [15:01:53]	\<Marcos\>	(in which case, it will strip out the `ricg` stuff)  
> [15:02:00]	\<Marcos\>	Anyway, onto the markup  
> [15:02:27]	\<Marcos\>	if you fire up `index.html` in the browser  
> [15:02:41]	\<Marcos\>	you will see lots of hyperlinks are generated  
> [15:03:02]	\<Marcos\>	and that special keywords, like `[DATE]` are
> replaced by actual dates, etc  
> [15:03:28]	\<Marcos\>	there are other special comments in the markup,
> like `<!-- TOC -->` that anolis hooks into  
> [15:03:56]	\<Marcos\>	to automagically hyperlink a word to a `<dfn>`,
> you just put that word in a `<span>`  
> [15:03:58]	\<Marcos\>	so,  
> [15:04:10]	\<Marcos\>	`<dfn>bananas</dfn>`  
> [15:04:31]	\<Marcos\>	the `<span>bananas</span>` ... becomes hyper...  
> [15:05:15]	\<Marcos\>	you can also use `<span title="bananas">the
> delicious yellow fruit</span>`  
> [15:05:27]	\<Marcos\>	i.e., the title will serve as the anchor point  
> [15:05:42]	\<Marcos\>	that's helpful is you have something in plural or
> singular  
> [15:05:59]	\<Marcos\>	like: `<span title="bananas">banana</span>`  
> [15:06:14]	\<Marcos\>	that's pretty much it :)  
> [15:06:23]	\<Marcos\>	The rest you can see in the spec  
> [15:06:28]	\<Marcos\>	but there is not much magic to it  
> [15:07:54]	\<Marcos\>	this is helpful too:
> [http://wiki.whatwg.org/wiki/Howto_spec](http://wiki.whatwg.org/wiki/
> Howto_spec)

If you have trouble, just ask us about it in the [#respimg IRC
channel](irc://irc.w3.org:6665/#respimg).