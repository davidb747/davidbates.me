---
# layout: article
title: Analyzing 200.000 Chess Games
article_header:
  type: overlay
  theme: dark
#   background_color: '#203028'
  background_image:
    gradient: 'linear-gradient(135deg, rgba(34, 139, 87 , .4), rgba(139, 34, 139, .4))'
    src: /assets/images/chess-set-article-cover.jpg
---

Openings are divided into many subvariations, of which there are too many to analyse them all now. Because of that I wanted to condense most of the subvariations into their main openings, and then look at the win rates of the 20 that were most commonly played in the dataset.
<!--more-->

Most of this was done by splitting each opening name on the characters ' : ' ' , ' and  ' # ', then only keeping the first part of the opening name, and finally stripping any leading or trailing spaces.
