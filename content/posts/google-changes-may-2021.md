---
date: "2021-03-26"
tags: ["Search engines"]
title: "Google changes coming in May 2021"
metaDesc: "Google are introducing changes to how they rank web pages in the search results. Page experience (aka Core Web Vitals) will play a larger part."
excerpt: "Starting in June 2021 (originally scheduled for May), Google are introducing some changes to how they rank page in the search results. Page experience will play a larger part and there are 3 new metrics, collectively referred to as Core Web Vitals, which will impact how page experience in measured. Pages that offer a better experience to users will, all other factors being equal, rank higher that those which don't. This post explains what these factors are, how to measure them and how to improve your scores."
cloudinaryPrimaryImage: "searching-in-google"
cloudinaryPrimaryImageHash: "g3xuft"
primaryImageAlt: "Google are making change to their search algorithm. Page experience will play a larger part with the introduction of 3 new factors, referred to as Core Web Vitals."
socialImage: "/images/blog/searching-in-google-1200.jpg"
---
## Introduction

As you may already have heard, Google are planning to introduce some new factors into their search engine algorithm which will affect how pages are ranked in the search results. This change was going to happen in May 2021. However, on April 19, [Google announced](https://developers.google.com/search/blog/2021/04/more-details-page-experience) that they were delaying the update until mid-June. They also stated that the introduction would be gradual and that the 'page-experience' update 'won't play its full role [...] until the end of August'.

<img
  class="hero-image"
  sizes="(max-width: 58em) 96vw, (max-width: 64em) 40em, 50em"
  srcset="https://res.cloudinary.com/attractmore/image/upload/c_scale,f_auto,q_70,w_320/blog/searching-in-google_g3xuft.jpg 320w,
          https://res.cloudinary.com/attractmore/image/upload/c_scale,f_auto,q_70,w_560/blog/searching-in-google_g3xuft.jpg 560w,
          https://res.cloudinary.com/attractmore/image/upload/c_scale,f_auto,q_70,w_640/blog/searching-in-google_g3xuft.jpg 640w,
          https://res.cloudinary.com/attractmore/image/upload/c_scale,f_auto,q_70,w_800/blog/searching-in-google_g3xuft.jpg 800w,
          https://res.cloudinary.com/attractmore/image/upload/c_scale,f_auto,q_70,w_930/blog/searching-in-google_g3xuft.jpg 930w"
  src="https://res.cloudinary.com/attractmore/image/upload/c_scale,f_auto,q_70,w_800/blog/searching-in-google_g3xuft.jpg"
  alt="Page experience will become an increasingly important factor in determining how well pages rank in search results"
  width="1920"
  height="1280">

They announced this nearly a year ago in the hope that website owners would start making any changes that were necessary and there is some evidence that this has been happening ([Google blog post November 2020)](https://developers.google.com/search/blog/2020/11/timing-for-page-experience).

**The update is intended to reward web pages that offer a great user experience by ranking them higher in the search results.**

According to [Google](https://developers.google.com/search/blog/2020/05/evaluating-page-experience)

> Great page experiences enable people to get more done and engage more deeply; in contrast, a bad page experience could stand in the way of a person being able to find the valuable information on a page. By adding page experience to the hundreds of signals that Google considers when ranking search results, we aim to help people more easily access the information and web pages they're looking for, and support site owners in providing an experience users enjoy.

The important question for business owners is, Do the pages on your website offer a "great page experience" or not? and How will you know?

The post explains what the new factors are, how you can measure your web pages against these factors and how you can improve your scores to help boost your search engine rankings.

## Page Experience

As the diagram from Google below shows, there are a number of factors that are taken into account when assessing page experience. The last 4 are already being used - it's the three in green at the top, collectively referred to as Core Web Vitals, that are the new ones.

<img
  sizes="(max-width: 58em) 96vw, (max-width: 64em) 40em, 50em"
  srcset="https://res.cloudinary.com/attractmore/image/upload/c_scale,f_auto,q_70,w_320/blog/page-experience-search-full.jpg 320w,
          https://res.cloudinary.com/attractmore/image/upload/c_scale,f_auto,q_70,w_560/blog/page-experience-search-full.jpg 560w,
          https://res.cloudinary.com/attractmore/image/upload/c_scale,f_auto,q_70,w_640/blog/page-experience-search-full.jpg 640w,
          https://res.cloudinary.com/attractmore/image/upload/c_scale,f_auto,q_70,w_800/blog/page-experience-search-full.jpg 800w,
          https://res.cloudinary.com/attractmore/image/upload/c_scale,f_auto,q_70,w_930/blog/page-experience-search-full.jpg 930w"
  src="https://res.cloudinary.com/attractmore/image/upload/c_scale,f_auto,q_70,w_800/blog/page-experience-search-full.jpg"
  alt="The factors that make up the search signals for page experience">

So, the use of page experience as a search ranking factor isn't new - it's just that Google are expanding the range of metrics they use to 'measure' page experience.

Of course, over time, further metrics may be introduced.

## Core Web Vitals

For now (i.e. May 2021) Google is focusing on

- **Loading** (i.e. how quickly do the components of your web page appear on screen)
- **Interactivity** (i.e. how long does it take before you can interact with the web page, e.g. click a button )
- **Visual Stability** (i.e. do components of your web page move around whilst the page is loading)

Google has devised a way of measuring each of these and has given each metric a three letter acronym (TLA!)

### Largest Contentful Paint (LCP)

This is a measure of how long it take for the largest component of your page to load. The largest component of a page is likely to be a video or an image. Obviously, the quicker this loads the better, so the user doesn't have to wait as long.

As with the other measures, Google have set up traffic light colours for the different thresholds. To be in the green, the largest component has to load in less than 2.5 seconds.

![Largest Contentful Paint](/images/blog/largest-contentful-paint.svg)

Source: [Google](https://web.dev/vitals/)

To improve your score, make sure that images/videos are compressed and optimised. They should also be sized correctly.

It's all too common to see photos on a website that have been uploaded from a phone. A photo may be 4000px by 3000px and occupy 3MB of space, while being displayed in a space that is 400px by 300px. Optimising, compressing and sizing the image correctly could probably reduced the number of bytes to 30KB, i.e 1% of it's full unoptimised size.

If possible, consider the format of the image as well. There are some image formats (e.g. WebP) that provide high quality images in fewer bytes than a standard JPG image.

If fewer bytes have to travel from your server to the user's device then, all things being equal, the page will load faster.

## First Input Delay (FID)

This is a measure of how soon a user can actually interact with your site, e.g. click/tap a link or a button. Again, the faster the better as the user is not kept waiting longer than necessary before they can do what they came to do on your website. It can be seen as a measure of how responsive your website is perceived to be.

Delays in interactivity are caused by the browser doing work in the background. This can cause other tasks to be postponed  and these may be needed to make items interactive.

To be in the green band, the FID score must be below 100ms.

![First Input Delay](/images/blog/first-input-delay.svg)

Source: [Google](https://web.dev/vitals/)

To improve your score, you may have to upgrade your hosting plan to one which offers faster servers. However, that may not be the only issue.  

The components of your site which store the styling information (CSS) or control the interactivity of the site (Javascript) may need compressing, combining or optimising in other ways to help speed up your site.

If your site uses third-party code, e.g. adverts, these should be checked to see if they can be speeded up.

## Cumulative Layout Shift (CLS)

This is a measure of the visual stability of your site as it loads.  If page components are jumping around while the page loads or if fonts are changing leading to alterations in the visual appearance of the page, this will result in a low score.

A common situation is when you are about to click/tap a button, only to find that an ad loads above the button pushing it down the page. These unexpected layout shifts are irritating and the intention behind this metric is to assess the degree of shift.

The measurement of Cumulative Layout Shift is not so obvious. It's not measured in seconds but rather Google compares frames (like in a video) as the page loads and looks for how large the shifts are in the various components from one frame to the next. The larger the shifts, the higher the score, so you should be aiming to keep these movements to a minimum.

![Cumulative Layout Shift](/images/blog/cumulative-layout-shift.svg)

Source: [Google](https://web.dev/vitals/)

To improve your score, make sure your site reserves the correct amount of space for images and videos. The same applies to ads or content that might be injected into the web pages.

## Measuring Core Web Vitals

There are a number of tools available that will give you an indication of how your web pages score again the three Core Web Vitals metrics.

The best one is [Google Search Console](https://search.google.com/search-console/about), if you have this set up on your website and if your site gets enough traffic for Google to have created the reports. If so, then the Core Web Vitals tab on the search console screen will show useful information about what needs improvement and on which pages as you can see in the image below.

<img
  sizes="(max-width: 58em) 96vw, (max-width: 64em) 40em, 50em"
  srcset="https://res.cloudinary.com/attractmore/image/upload/c_scale,f_auto,q_70,w_320/blog/gsc-core-web-vitals-full.jpg 320w,
          https://res.cloudinary.com/attractmore/image/upload/c_scale,f_auto,q_70,w_560/blog/gsc-core-web-vitals-full.jpg 560w,
          https://res.cloudinary.com/attractmore/image/upload/c_scale,f_auto,q_70,w_640/blog/gsc-core-web-vitals-full.jpg 640w,
          https://res.cloudinary.com/attractmore/image/upload/c_scale,f_auto,q_70,w_800/blog/gsc-core-web-vitals-full.jpg 800w,
          https://res.cloudinary.com/attractmore/image/upload/c_scale,f_auto,q_70,w_930/blog/gsc-core-web-vitals-full.jpg 930w"
  src="https://res.cloudinary.com/attractmore/image/upload/c_scale,f_auto,q_70,w_800/blog/gsc-core-web-vitals-full.jpg"
  alt="Google Search Console showing Core Web Vitals">

If you don't have Google Search Console set up for your site or there is no data in the report, then the next best option is [Pagespeed Insights](https://developers.google.com/speed/pagespeed/insights/) from Google. You just type in the address of your page, click Analyze, and the results will be available within a minute.

The image below shows the results for the AttractMore website. As you can see towards the bottom, both the Largest Contentful Paint and Cumulative Layout Shift scores are given but the First Input Delay is missing. There are other speed metrics given but not FID. The reason is that this metric cannot be measured easily if there is no interaction, so the data has to be collected from real users. These users will be using different devices in different ways so the data can be variable. For now, aim to get green dots against all 6 items if using Pagespeed Insights.

<img
  sizes="(max-width: 58em) 96vw, (max-width: 64em) 40em, 50em"
  srcset="https://res.cloudinary.com/attractmore/image/upload/c_scale,f_auto,q_70,w_320/blog/attractmore-pagespeed-insights-full.jpg 320w,
          https://res.cloudinary.com/attractmore/image/upload/c_scale,f_auto,q_70,w_560/blog/attractmore-pagespeed-insights-full.jpg 560w,
          https://res.cloudinary.com/attractmore/image/upload/c_scale,f_auto,q_70,w_640/blog/attractmore-pagespeed-insights-full.jpg 640w,
          https://res.cloudinary.com/attractmore/image/upload/c_scale,f_auto,q_70,w_800/blog/attractmore-pagespeed-insights-full.jpg 800w,
          https://res.cloudinary.com/attractmore/image/upload/c_scale,f_auto,q_70,w_930/blog/attractmore-pagespeed-insights-full.jpg 930w"
  src="https://res.cloudinary.com/attractmore/image/upload/c_scale,f_auto,q_70,w_800/blog/attractmore-pagespeed-insights-full.jpg"
  alt="Example output from Pagespeed Insights">

## Conclusion

It's unclear, at present, how much of an influence on the search results these new factors will have. My guess (and it is only a guess) is that the initial impact will be small but that it will increase over time, particularly if Google are not seeing general improvements in page experience.

However, we should not lose sight of the fact that these factors reflect a desire by website users for faster, more responsive and more stable websites so **the changes are mainly for the benefit of the people who use our sites.** That is enough of a reason to make the changes but the effect that these factors will have on search results is perhaps Google's way of forcing the issue.

They adopted a similar tactic with mobile-friendliness some years ago and more recently in forcing sites to be more secure (https). Both of those initiatives were highly successful so there's no reason to suppose this new initiative will be different.

The time to act is now before the changes come into effect. It's quite possible that my guess about the initial impact on the search results could be wrong and, rather than being modest initially, the effect may be large.

We have been working with some clients on making their sites ready for this change. We have some limited capacity to take on new clients before the end of May to prepare for Core Web Vitals, so if you would like some assistance in this area, please [get in touch](/contact/) very soon.
