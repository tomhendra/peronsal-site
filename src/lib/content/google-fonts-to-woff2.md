---
title: 'Convert Google Fonts to woff2'
subtitle: 'A guide on how to convert Google fonts to woff2 format with a cli tool.'
date: '2021-03-19'
updated: '2022-04-03'
coverImage: 'coloured-letters'
alt: 'Arrangement of coloured letters'
caption: 'Photo by Magda Ehlers'
tags:
  - 'Typography'
  - 'CSS'
description: "Google Fonts is a great resource for typefaces. It is a well-established
platform and the web app is a joy do use. However if we want to self-host the
fonts we download, which we should do according to Google, the default download 
from Google Fonts is TTF."
---

## Introduction

TTF is rather on the large side in terms of filesize. What we really want to be
using is the optimized WOFF2 format. Now if we search for conversion tools we
are presented with a plethora of online tools, some good and some very bad.

There is however a handy command line tool that does the job for us called
[fontTools](https://github.com/fonttools/fonttools); a library for manipulating
fonts, written in Python.

Sure there are other resources out there that provide already converted fonts,
but if you are like me and wish to use variable fonts from a trusted source then
this is the best way to go about it.

## Steps

1. Download your chosen fonts from Google Fonts.
2. Navigate to the directory the fonts are located.
3. Check if you have Python installed with `python --version`. If not, go ahead
   and install python 3 with Homebrew.

```shell
brew install python3
```

4. Python comes with Pip package manager pre-installed. Pip is to Python like
   npm is to JavaScript. Install FontTools.

```shell
pip install fonttools
```

5. Convert your fonts using the following commands.

```shell
$ python3
>>> from fontTools.ttLib import TTFont
>>> f = TTFont('path/file.ttf')
>>> f.flavor='woff2'
>>> f.save('path/file.woff2')
```

And that's it! Now you can have nicely compressed fonts in WOFF2 format via an
efficient algorithm using a respected command line tool.
