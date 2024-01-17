---
title: "The unreliable other - 3rd-party dependencies"
date: "2023-03-12"
categories:
  - "Speed"
  - "Risk"
metaDesc: "Unmanaged 3rd-party dependencies can have a damaging effect on your website. Learn more about how to get control over them."
excerpt: "Sometimes, in life, things we rely on don't work out as expected. It's the same with your website, especially with external services that your website relies on. However, there are ways of managing these 3rd-party dependencies so that they don't cause too much trouble. The external dependencies are, for example, fonts, videos, ads, reviews, analytics. The worst case scenario is that, if one of these services fails, it prevents your web pages from loading. I strongly suggest doing an audit of the external services your website uses and find ways of managing these so that if one does fail (or loads very slowly), it doesn't affect the load time of your web pages. Fast loading web pages are important to your users and important to search engines so worth getting to grips with this issue. Find out more here."
cloudinaryPrimaryImage: "unreliable-3rd-party-dependencies_bwvvv3"
primaryImageAlt: "Old black and white photo of broken down car with a small crowrd gathered around it"
socialImage: "/images/blog/unreliable-3rd-party-dependencies-1200.jpg"
extraStyles: "/css/post.css"
---

{{< content-figure folder="/blog/"
src="unreliable-3rd-party-dependencies_bwvvv3.jpg"
alt="Old B&W photo of people standing around a broken down car. The unreliable other. (Photo from Pexels: https://www.pexels.com/photo/grayscale-photo-of-people-standing-near-the-wrecked-vintage-car-78793/)."
width="1920" height="1562" defaultWidth="800" >}}

Sometimes, things just don't work out as you expected. People arrive late (or not at all), the five-star service promised by the holiday company only deserves one star or, in the case of the picture above, the garage's guaranteed repair didn't quite live up to its promise.

Well, that's life!

Unfortunately, similar sorts of problems can happen on your website. The difference here though is that you can actually **guard against them** and prevent (most of) them from happening.

Issues can come up when your website depends on an external service that doesn't always do what it promises.

## A case in point

Back in 2017, I created a site for a client that used a special font for headings. Nothing wrong with that - fairly standard practice. Up until February of this year, everything ran smoothly with no glitches whatever due to this font. However, the font was loaded from an external source and so, finally, this weakness came back to bite me.

### The problem

The business owner and I noticed that sometimes the headings were in a very plain font (the backup font), rather than the special font we'd specified. Sometimes, though, it was OK. During the course of a few days, the number of times the special font loaded reduced considerably and the page load speed went through the roof. This was, clearly, bad for the site visitors who had to wait for the page to load and, of course, when it did, the page looked very plain. The problem was caused by an intermittent glitch in the external font service.

### The solution

We could just have used default web fonts and avoided the issue of special fonts altogether but we still wanted something a little different for the heading font so I chose a different font provider. This font provider operates in 2 ways - it can work exactly as the previous one, i.e. as a 3rd-party dependency or, importantly, it will allow developers to download the fonts to the client's website. Naturally, I chose the 2nd option. With the font now located together with the website, there is no dependency on an external provider and the website loads quickly, with the special font, every time.

(Needless to say, I wouldn’t load fonts from external sites any more!)

{{< content-figure folder="/blog/"
src="freedom-from-third-party-dependencies_dfxmcj.jpg"
alt="The word Freedom in orange neon lights representing the ideal of being free from dependencies on external resources. (Photo by Ronê Ferreira from Pexels: https://www.pexels.com/photo/close-up-photo-of-red-neon-light-signage-3690005/)."
width="1920" height="1280" defaultWidth="800"
loading="lazy" >}}

## Other external dependencies

Apart from fonts, here are some other examples of external services your website may be using.

- an analytics service,
- social media services,
- images hosted elsewhere
- ads
- video embeds
- a site that supplies reviews.

Of course, there's nothing wrong with using these services as they can enhance your website but it's good to be aware of these dependencies as they **can negatively affect the load time of your web pages and/or pose a security risk**.

These external dependencies need to be set up and managed well to avoid issues arising. Slow-loading pages irritate users and damage your SEO, so read on to find out what you can do to check your site isn't suffering from these potential difficulties.

## How to Manage 3rd-Party Dependencies Effectively

The font issue discussed above was relatively easy to fix. Others less so.

The first step to managing 3rd-party dependencies is to identify them. Conduct an audit of your website and take note of all the external resources the site uses. Once you have identified them, it is crucial to assess their impact on your website's performance and security. **Ask yourself what would happen if this service failed or slowed to a crawl.**

Consider removing or replacing any resources that are causing significant performance issues and, if at all possible, eliminate the dependency entirely. Additionally, make sure that the 3rd-party resources you use are from trusted sources and are up to date with the latest security patches.

With any remaining 3rd-party dependencies, the aim should be to ensure that a delay or failure in any of them does not prevent your web page from loading. The worst setup is where a failing external service blocks everything else from loading. Each external service should (as far as possible) be independent of all others. There are ways and means of doing this that experienced developers should be aware of.

{{< content-figure folder="/blog/"
src="unreliable-connection-to-external-services_jqhwqw.jpg"
alt="Incomplete electrical wiring in a white wall. (Photo by La Miko from Pexels: https://www.pexels.com/photo/holes-on-white-wall-with-electrical-wires-3615735/)."
width="1920" height="1280" defaultWidth="800"
loading="lazy" >}}

## Benefits of Managing 3rd-Party Dependencies

By managing 3rd-party dependencies effectively, you can:

- **Improve website performance** - external resources can significantly impact website loading speed especially when they are not working as expected. By managing (or removing) 3rd-party dependencies, you can reduce the number of requests made to external servers and provide fail-safe mechanisms, which can help improve website performance.
- **Enhance website security** - 3rd-party dependencies can pose significant security risks to your website. By assessing the security risks of each 3rd-party resource and using trusted sources, you can reduce the risk of a security breach.
- **Provide a better user experience** - a website that loads quickly and is secure gives a better user experience. By managing 3rd-party dependencies effectively, you can ensure that your website provides an improved user experience.

## Conclusion

3rd-party dependencies are an integral part of many websites and provide useful functions which enhance websites. Managing these services is essential for website performance, security, and user experience.

If only there were a way of managing everything in life in the same way!

Let me know if you'd like any [assistance](/contact/) (websites only, I'm afraid!)
