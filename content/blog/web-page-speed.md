---
title: "Web Page Speed"
date: "2014-03-08"
categories:
  - "Search engines"
  - "Speed"
metaDesc: "Web page speed is important both for humans and also for search engines. This post looks at the factors involved and what can be done to improve matters."
excerpt: "In this post I want to touch on some factors which influence web page speed i.e. how quickly a web page appears on your screen. Clearly this is important for visitors to your site who don’t want to be kept waiting while the page loads. However, it’s also important because Google uses page load speed as one of the factors that determine where the page is placed in the search results."
cloudinaryPrimaryImage: "web-page-speed-test_zlm1uf"
primaryImageAlt: "Understanding how web pages arrive on your screen"
extraStyles: "/scss/post.scss"
---

In this post I want to touch on some factors which influence web page speed i.e. how quickly a web page appears on your screen. Clearly this is important for visitors to your site who don't want to be kept waiting while the page loads. However, it's also important because Google uses page load speed as one of the factors that determine where the page is placed in the search results.

Many studies have been done to understand people's behaviour on web sites and how they respond to different load speeds.  People generally expect sites to load in 2 seconds or less and after 3 seconds 40% of people are likely to abandon your site ([source](https://speakerdeck.com/lara/designing-for-performance)). Poor mobile web page load speed leads to damage to your brand and how people perceive what you are offering ([source](https://calendar.perfplanet.com/2013/slow-pages-damage-perception/)), for example a 1 second delay in page load leads to 11% fewer page views and a 16% reduction in customer satisfaction ([source](https://www.radware.com/Documents/Infographics/SOTU-EcommercePageSpeed-Fall-2013/)). With these figures, it is clear that web page speed is an important issue in creating a high quality site which people will enjoy using and perceive as trustworthy.

## How Websites Get to Your Screen

It's important to appreciate that a web page is not a single unit but instead is made up of a variety of components which, when put together, make up the web page. When you type in a web page address or click a link, a request goes from your device's browser to the server where the web site is located an firstly the framework of the page (the HTML) and the text content is sent across the network. Once that arrives on your device the browser analyses the other components needed by the page and starts to request these. For each component on the page a request has to go to the server and the component itself has to be sent back to the browser for the page to load. Some of these tasks can go on in parallel but not all. These components are photos, other graphics, the stylesheet(s) that determine how the page looks, code to handle dynamic effects, social media code etc. etc.

The graph below shows this 'waterfall'. Each line represents a component (15 in this case) and the horizontal axis is time, so you can see how long each component takes to load and which parts of the process can take place in parallel.

{{< content-figure folder="/blog/"
src="web-page-speed-test_zlm1uf.jpg"
alt="Web Page Speed Test"
width="930" height="294" defaultWidth="500"
loading="lazy">}}

This page loads in 1.4s (which is great!) and you will see from the length of the horizontal lines that some components take longer to load than others. Each request to the server takes time and each transfer of a component from the server back to your device also takes time. Clearly the larger the component (large photo, for example), the longer the time it takes to travel across the network.

## Maximising Web Page Speed

There are four main ways of improving page load speed

1. Use a faster network so components arrive more quickly at the device.
2. Use a faster server so requests are dealt with more quickly.
3. Reduce the number of requests that are made to the server.
4. Make each component of the website as small as possible

As professional web developers, option 1 is out of hands as anyone can access as web site from anywhere using a broadband or mobile network so we need to be able to deliver web pages as fast as possible on any connection. We can certainly advise regarding web hosting to address point 2 but we focus our efforts on options 3 and 4. When creating a website for a client we always look to reduce the number of server requests made and ensure that each component needed by a site is optimised so it is as small as it can be thereby minimising its transfer time. We use a variety of tools to analyse web page speed to look for bottlenecks and then remove them. In these ways we ensure that we do as much as we can to make pages load quickly both for human visitors and for positioning in the search results.

In the [next article](/blog/photos-faster-page-load-times/) I will look at the main culprit of slow pages - photos - and show how we can make sure they can be used effectively without slowing down the page.
