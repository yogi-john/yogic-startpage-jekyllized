# yogic-startpage-jekyllized
[![ruby version 2.3.0](https://img.shields.io/badge/ruby-2.3.0-blue.svg)](https://www.ruby-lang.org/en/downloads/releases/)

#### If you would like to see a mobile version of this project please consider giving a :star: or [![Donate](https://img.shields.io/badge/paypal-donate-blue.svg)][1]

## Getting Started
Clone or fork this repo and change the `url` and `puburl` in `_config.yml`

To learn how to install and use this theme check out the [Setup Guide][7] for more information.

### Prerequisites
You will need ruby and the ruby-gem github-pages installed on your computer, if you want to serve the Jekyll page locally.

I highly recommend using [rbenv][2]. Installation is easy if you already have [homebrew][3]:
```
$ brew install rbenv
```

### Ruby and rbenv
After you have rbenv installed, `cd` to your Jekyll site's directory, and install a Ruby version. This theme was tested on **2.3.0**:
```
# list available versions:
$ rbenv install -l

# install a ruby version (this might take a while):
$ rbenv install 2.4.0

# set the ruby version in the working directory:
$ rbenv local 2.4.0

# see which version is selected:
$ rbenv versions
```

### installing Gems
With rbenv **You don't need to SUDO**, but we do need to install **Bundler**:
```
$ gem install bundler
```
*Bundler* tracks dependencies on a per-project basis, it is particularly useful if you need to run different versions of Jekyll in different projects, or if you don’t want to install Jekyll at the system or user level. **If you are using Bundler for the first time, please read now it is configured [here](https://jekyllrb.com/tutorials/using-jekyll-with-bundler/)**

**Optionally** to install our dependencies in an isolated environment, and ensuring they don't conflict with other gems in your system we can get gems installed into `./vender/bundle/` by:
```
bundle install --path vendor/bundle
```

to install the required gems for this project specified in the gemfile
```
$ bundler install
```
you can checkout what [bundler][4] does.

if you are struck with some of these ruby/ gems/ bundler stuff, [this link][5] might be helpful.

### Serving Locally
```
$ bundle exec jekyll serve --watch    # the watch flag looks for real-time changes to files you edit
```
go to [`localhost:4000`][6] in your browser to see your site.

### To-Do
- [ ] get average color and set font to contrast
- [ ] make it responsive
- [ ] fix weather function
- [ ] day vs night background function?

[1]: https://paypal.me/ohjho
[2]: https://github.com/rbenv/rbenv
[3]: https://brew.sh/
[4]: http://bundler.io/
[5]: http://idratherbewriting.com/documentation-theme-jekyll/mydoc_about_ruby_gems_etc.html
[6]: http://localhost:4000
[7]: http://yogi-john.github.io/yogic-startpage-jekyllized
