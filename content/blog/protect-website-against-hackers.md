---
title: "How to protect your website against hacking"
date: "2021-02-02"
categories:
  - "Security"
metaDesc: "Find out how to protect your website against hackers. Learn about the main vulnerabilities and how to close them down."
excerpt: "Your website is at risk from hackers and this post explores some measures that can be taken to protect your site against malicious attack by dealing with security vulnerabilities that may be present. Some of the actions suggested can be done without external help; others will need some specific expertise."
cloudinaryPrimaryImage: "protect-website-against-hackers_pwqo8f"
primaryImageAlt: "How you can protect your business website against hackers."
socialImage: "/images/blog/protect-website-against-hackers-1200.jpg"
extraStyles: "/scss/post.scss"
---

## Summary

Your website is at risk from hackers and this post explores some measures that can be taken to protect your site against malicious attack by dealing with security vulnerabilities that may be present. Some of the actions suggested can be done without external help; others will need some specific expertise.

I'll consider how the following items affect website security:

- The quality of website hosting
- Risks associated with contact forms
- The value of strong passwords
- The benefits of a website firewall
- Some specific measures to use with WordPress websites.

My intention is to convince you to review your website security and take action to improve it where appropriate.

## Introduction

This post is a follow on to the post on [Why people are trying to hack your website](https://www.attractmore.uk/blog/why-are-people-trying-to-hack-your-website/).

If you've read that, you'll appreciate that hackers have plenty of good, lucrative reasons to get into your website however, large or small your business may be. The numbers are scary, yet there is a lot you can do to protect your website from the majority of attacks from hackers.

{{< content-figure folder="/blog/"
src="protect-website-against-hackers_pwqo8f.jpg"
alt="Review your website security and protect your website against hackers"
width="1920" height="1079" defaultWidth="800" >}}

Some of the actions you may well be able to undertake yourself but others will need the assistance of someone with more experience of web security. There will be some cost to this but the cost of not doing it could be considerably higher. It's better to be safe than sorry as the costs for restoring your site after a hack can be high and the consequences for the reputation of your business may have even greater financial impact.

If your website isn't properly protected you may, unwittingly be giving hackers access to personal or financial data about your customers or distributing malware to visitors of your site.

Let's look at some of the actions you can take to mitigate the risks.

## Hosting

Your website hosting is vitally important and is the basis for decent security management. Many people chose cheap hosting in the belief that all hosting is the same so why pay more than the minimum. The truth is that hosting is not a commodity and different companies offer different services. You get what you pay for.

{{< content-figure folder="/blog/"
class="alignright"
src="web-hosting-security_d3pngz.jpg"
alt="Secure website hosting helps protect against hacking"
width="500" height="333" defaultWidth="500"
loading="lazy" >}}

Cheap, shared hosting (where your website lives on the same server as many others) is unlikely to offer much in terms of protecting your site. Since the server is shared, it is possible for your site to be compromised via a hack on another website on the same server. Chose a reputable, reliable hosting company and spend more to get more security.

While we're taking about hosting, please make sure that you have a security certificate for your website. This encrypts data that is sent to and fro over the network between your server and the devices your visitors use. This helps stop hackers spying on the network and stealing data in transmission. This data could be from a contact form that a user has filled in and is sending to you and could contain personal information. Security certificates are free these days from reputable hosting companies and there is no reason not to use them. If you are running a website where payments are taken online, it is essential you have a security certificate.

## Contact forms

I mentioned contact forms above and these can be a source of vulnerabilities. To protect against these, ask your web developers to check that all input fields on the form are validated and 'santised'. That means only allows sensible data to be passed along to your server. You must avoid the situation where a hacker attempts to send some malicious code to your server using a field on a contact form. The code could do damage on the server and allow the hacker access to the server.

For similar reasons, you should be very careful about allowing users to upload files in contact forms (or anywhere else for that matter). Hackers can disguise malicious code in a file that appears to be a PDF or an image, for example. Any file that is intended for upload should be checked for malicious code before being processed.

## Passwords

I'm taking here mainly about the passwords that you and your staff (plus others maybe) used to access your site. These accounts are likely to have 'admin' level access which enables them to make changes to everything on the site.

How many admin users does your site have? Are they all still needed or are some of them for staff that have left?

Simple passwords are ridiculously easy to crack using a computer program. The most common password people use is, yes, it's 'password'.

{{< content-figure folder="/blog/"
class="alignright"
src="password-security_dgbjkw.jpg"
alt="Strong passwords are an essential tool in protecting your website against hackers"
width="500" height="620" defaultWidth="500"
loading="lazy" >}}

If you're serious about protecting your website (email, online bank account etc), please make your passwords more complex. Include upper and lower case letters, numbers and some 'special' characters (e.g. \*, &, ^, $, !, ?, >). 8 characters in total is really not enough - go for 12 characters. In addition, you should change your passwords regularly just in case they have been cracked or discovered by someone.

Of course, if you make passwords hard to crack, they're also hard/impossible to remember. The way to deal with this is using a password manager. A password manager is a piece of software whose job is to remember your passwords and use them to log you into the sites that you authorise. There are several of these available and they're free (with premium versions). All you need to remember is the password to the password manager! The main password managers are [LastPass](https://www.lastpass.com/), [1Password](https://1password.com/) and [Dashlane](https://www.dashlane.com/) but there are others available. You may be concerned that if your password manager service gets hacked then all your passwords are then available to hackers. The password manager companies are very aware of that too and make strenuous efforts to protect the passwords in their care.

WordFence (a WordPress security company) in their [threat report for 2020](https://www.wordfence.com/blog/2021/01/the-wordfence-2020-wordpress-threat-report/), disclose that they detected 90 billion malicious login attempts during the year. And that's just WordPress sites that have WordFence installed. 90 billion!

Some website content management systems provide a feature called 2-factor authentication (2FA) which means you have to provide, not only a password but also a single use code, in order to access your site. (Your bank may already be doing this.) The code is either sent to you via text message or, better still, you have an app on your phone that generates the code when needed.

Clearly, if this feature is in place, a hacker who has managed to get your password will still not be able to gain access to your website. This is the approach recommended by WordFence.

## Firewall

In the context of protecting websites, a firewall is a software program that creates digital protection around your site to prevent security breaches.

If your site runs on WordPress or another content management system (Joomla, Drupal etc) a firewall really is a must-have. It protects against specific, known threats but has more general rules that can protect against a whole variety of unusual, different and exotic threats. Decent firewall software is updated frequently to keep your site as safe as it can be. No firewall can guarantee to be 100% safe but your site will be much less vulnerable with a properly set up firewall in place.

If you allow users to log in to your site (normal with ecommerce sites) this give hackers an opportunity to attempt to login with false credentials. This is a very common way in which hackers gain access to websites and a firewall can help enormously in protecting against these malicious login attempts.

Ask your developers about this. The two best-known firewall software companies are [Sucuri](https://sucuri.net/) and [WordFence](https://www.wordfence.com/) (WordPress only). Both require some set up to protect your site effectively so get someone who knows what they're doing to configure the software for you.

## WordPress

WordPress is used by nearly [40% of websites](https://w3techs.com/technologies/overview/content_management) that have a content management system (February 2021). Its huge popularity makes it a prime target for hackers even though it is no less secure than many other content management systems.

{{< content-figure folder="/blog/"
class="alignright"
src="wordpress-website-security_zjshdz.jpg"
alt="There are specific actions to be taken to protect WordPress sites against hackers"
width="500" height="333" defaultWidth="500"
loading="lazy" >}}

The suggestions below will apply to WordPress and may also apply to other systems.

WordPress plugins are helpful software addons which provide additional, specific features to WordPress. They are mostly not written by the developers behind WordPress but by developers all over the world who offer their plugins to anyone who wants to use them. This is great, but plugins need to be kept up-to-date as security vulnerabilities are regularly found in plugins which provide a means for hackers to exploit websites that use them. If plugins are not being updated regularly, this should raise concerns as they may have ben abandoned by their developers. It would be best to find a replacement.

WordPress itself is updated on a regular basis (8 releases in the last 12 months) and again, some of these releases will address security vulnerabilities that have been discovered.

WordPress themes may also be updated for similar reasons and in all cases, you should ensure that WordPress itself, the theme and plugins are all kept up-to-date. Failure to do so may leave security holes in your website which can be exploited.

Some plugins and themes are available for a fee which gives the developer the incentive to continue the development of the software, however, some people avoid the fee by downloading 'pirated' (sometimes called, 'nulled') plugins.

The issue here is that you will not know what additional code may have been inserted in the pirated copy of the software by the vendor. This is a popular approach among hackers who seem to be offering something for free but the cost comes later when you realise your site has been seriously hacked via the pirated software. WordFence have evidence that this is the most widespread threat to WordPress security.

The [WordFence Threat report for 2020](https://www.wordfence.com/blog/2021/01/the-wordfence-2020-wordpress-threat-report/) states that their software blocked 4.3 billion attempts to access WordPress via software vulnerabilities so this is not a trivial issue.

Moving away from plugins and the like, there are many other actions you can take to secure your WordPress site but these should probably be done by a professional software developer familiar with WordPress. These actions include:

- Limiting access to configuration files and system folders
- disabling the file editor
- Enforcing admin logoff after a fairly short period of inactivity
- Enforcing strong passwords
- Disabling the display of errors (which can give hackers useful information)
- Installing software to prevent SPAM comments (assuming you have a blog which allows comments)
- Protecting the login page

## Conclusion

Your business website is going to be attacked. It probably already has been attacked, but an attack does not necessarily mean that your site has been compromised. Taking appropriate action now can protect your site against hackers and save you a lot of money. It may mean that you have to make some limited investment now, but it will save you a lot in the future.

Some people may suggest that running regular security checks on your website is enough. Sadly, this is not true. Security checkers (e.g. [Sucuri SiteCheck](https://sitecheck.sucuri.net/)) detect when your site has been compromised. By then, it's too late, the damage has been done and you're left with a crisis to manage. Would it not be better to put all the necessary protection in place to begin with, to avoid the crisis? You can, of course, insure against loss from a cyberattack, for instance, some insurance is available if you're a member of the [Federation of Small Businesses](https://www.fsb.org.uk/join-us/membership/cyber-protection.html) (FSB), but again, this is for after your business has suffered a loss.

I would urge you to take some action to protect your website, or review the protection you have in place.

If you need any advice about website security or you would like us to help in protecting your website against hackers, please [get in touch](https://www.attractmore.uk/contact/).
