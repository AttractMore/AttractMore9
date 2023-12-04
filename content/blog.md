---
title: "Blog"
layout: "layouts/feed.html"
metaDesc: "News and articles to help you get the best from your business website or online shop. More articles are added on a regular basis so do check back for more."
pageHeaderSummary:
  p1: "News and articles to help you get the best from your website or online shop."
pagination:
  data: collections.blog
  size: 5
permalink: "blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html"
paginationPrevText: "Newer posts"
paginationNextText: "Older posts"
paginationAnchor: "#post-list"
---
