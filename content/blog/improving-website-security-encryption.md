---
title: "Improving Website Security with Encryption"
date: "2017-03-19"
categories:
  - "Security"
metaDesc: "Website security can be significantly enhanced by installing a security certificate and encrypting traffic moving to and from the server."
excerpt: "This blog post discusses website security in particular the increasing need to move to secure connections between server and devices used to access websites to combat hacking. The benefits of encryption are mentioned and the move to HTTPS is strongly recommended."
cloudinaryPrimaryImage: "security-warning-firefox_awn3pm"
primaryImageAlt: "Keeping websites safe"
extraStyles: "/scss/post.scss"
---

‘Hacking’, as we all know, is a major problem on the internet and one that is of increasing concern for **website security**.

## Why Hack?

Hacking of small and medium sized businesses is not usually carried out with the intention of damaging the site or taking it offline, but is done simply to gain access to the server. The server can then be used as a transmission point for so-called Distributed Denial of Service (DDoS) attacks on other sites. If hackers have gained access for this purpose, your site may not be affected but may be slower to load. The other purpose of hacking is to **gain access to data you may have stored on your server** including, potentially, your email. If you have any commercially sensitive data on your server, this could be at risk from hackers.

## Encrypting the Data

An effective way to guard against unauthorised access and keep yourself secure is to **encrypt the data that moves between your server and the devices** used by anyone accessing your site. You should, of course, already be doing this is you are taking payments online. If you are not encrypting the data, then the logon id and password that you use to access to your site will be passed as entered over the network connection you are using. It is relatively straightforward for hackers to ‘spy’ on the connection and acquire the data that is passed.

Encryption of the data is achieved fairly easily by installing a security certificate on the server and making minor amendments to some of the internals of your site to ensure the certificate is being used properly. If this is done properly, you’ll see a green padlock icon in the address bar of the browser and the web address will be preceded by HTTPS. You will see the green padlock on this website.

## Browser Behaviour

{{< content-figure folder="/blog/"
class="alignright"
src="chrome-website-security_tulgap.jpg"
alt="Chrome Website security warning"
width="500" height="195" defaultWidth="500" >}}

Google is pushing hard to encourage all website owners to make their sites secure and is giving sites that have taken this step an additional (but small) boost in the search engine rankings. I believe this boost will become greater in the next 12 months as Google relentlessly pursues its objective of making the web a safer place.

Google is planning on marking ALL non-https sites as ‘Not secure’ in the near future.

> Starting January 2017, Chrome 56 will label HTTP pages with password or credit card form fields as "not secure," given their particularly sensitive nature. In following releases, we will continue to extend HTTP warnings, for example, by labelling HTTP pages as “not secure” in Incognito mode, where users may have higher expectations of privacy.
>
> Eventually, we plan to label all HTTP pages as non-secure, and change the HTTP security indicator to the red triangle that we use for broken HTTPS.
>
> Source [Google](https://security.googleblog.com/2016/09/moving-towards-more-secure-web.html "website security")

{{< content-figure folder="/blog/"
class="alignright"
src="security-warning-firefox_awn3pm.jpg"
alt="Password security warning Firefox"
width="500" height="164" defaultWidth="500"
loading="lazy">}}

Firefox 52 (the current version – March 2017) is also taking this approach and marks HTTP pages with passwords or credit card fields as ‘not secure’ both in the address bar and below the insecure fields.

## Conclusion

So even if your website doesn’t take payments or require users to register, you’ll soon find your web pages marked as non-secure. This will surely have a negative impact on how site visitors feel about your business.

There are significant advantages of making the move to HTTPS to improve **website security** and now is the time to get started to ensure you keep your company website safe and secure. [Contact us now](/contact/) to find out how we can help secure your website.
