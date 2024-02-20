---
title: "Passwords - size matters - here is the proof"
date: "2021-06-14"
categories:
  - "Security"
metaDesc: "Brute force password attacks are common. In this post I will illustrate why the length and complexity of passwords matter."
excerpt: "Passwords remain a fundamental feature of online security yet they remain vulnerable to attack by hackers. According to a recent report, 34% of successful security breaches of systems run by smaller firms were due to brute force attacks. These attacks make use of lists of passwords which are tried one after another in the hope that one will prove to be correct and allow the hacker access. This article illustrates how the use of longer, more complex passwords can significant help harden your systems against these brute force attacks and increase the safety and security of your data."
cloudinaryPrimaryImage: "better-passwords-resist-brute-force-attacks_b45u0a"
primaryImageAlt: "11 feature of professional web agencies"
socialImage: "/images/blog/better-passwords-resist-brute-force-attacks-1200.jpg"
extraStyles: "/css/post.css"
---

## Intro

I've written in some detail about the [benefits of good passwords](/blog/secure-password-protection/) but in this article, I present evidence for the value of longer, more complex passwords.

{{< content-figure folder="/blog/"
src="better-passwords-resist-brute-force-attacks_b45u0a.jpg"
alt="Use stronger passwords to resist brute force attacks on your website"
width="1920" height="1280" defaultWidth="800" >}}

## Brute Force Attacks

One common (but certainly not the only) way that hackers try to access your web server and other computer systems you may have, is by trying many, many different passwords in conjunction with a known user name (which commonly is an email address). It's a crude method but it can be effective.

Of course, the whole process is automated - there's no one actually typing these passwords in to a log in screen.

A survey of available worldwide data conducted by [Verizon in 2020,](https://enterprise.verizon.com/resources/reports/2020-data-breach-investigations-report.pdf) showed that brute force attacks accounted for 34% of all successful IT security breaches in small companies (see page 80 in the Verizon report), so it's a serious issue.

The question naturally arises as to where do hackers get the lists of passwords from. Since we're talking brute force attacks, one approach the hackers use is to create lists of combinations of letters, numbers and special characters using a software program then feed this list into the automated systems they use to repeatedly attempt access to the target system.

It turns out that doing this is really very easy.

## Password Data

This is the part where I show you why size matters. I want to compare passwords of 5 characters against those of 8 characters.

{{< content-figure folder="/blog/"
src="longer-passwords-give-more-protection_a5bfs2.jpg"
alt="Longer, more complex passwords give more protection against brute force attacks on your website"
width="1920" height="1281" defaultWidth="800"
loading="lazy" >}}

So let's start with the 5 character passwords and work out how many combinations there could be, i.e. how many possible passwords could exist.

- lower case letters only - 11,881,376 passwords
- lower case and upper case letters - 380,204,032 passwords
- lower case, upper case letters and numbers - 916,132,832 passwords
- lower case, upper case letters, numbers and 32 special characters<sup>\*</sup> - 7,339,040,224 passwords.

So, as you can appreciate, making the password more complex increases the number of possibilities significantly which will make the process to crack the password longer.

Now let's look at 8 character passwords.

- 8 lower case letters - 208,827,064,576 passwords
- 8 char (lower and upper) - 53,459,728,531,456
- 8 char (lower, upper and numbers) - 218,340,105,584,896
- 8 char (lower, upper, numbers, 32 special chars) - 6,095,689,385,410,8164

The increase in the number of possibilities is dramatic. Using the most complex 5 character password produces 7339 million options but with 8 characters, that increases to 6,095,689,385 million possibilities! Taking that to 12 characters, would mean 475,920,314,814,253,376,475,136 possibilities. Size matters!

The longer the password and the more complex it is, the harder it is for hackers to gain access to your systems.

To illustrate this, we're going to use data from [Sucuri](https://blog.sucuri.net/2021/06/3-password-attacks-101.html) who state

> In 2007, a computer would be able to make about 7 million password attempts per second. Now in 2021, one can make more than 100 million attempts per second.

Let's use that rate of 100 million attempts/second.

- a 5 character password, lower case letters only will take less than 1 second to crack

- a 5 character with upper case, lower case letters, numbers and special characters will take 73 seconds

- an 8 character with upper case, lower case letters, numbers and special characters will take 19 years

- a 12 character with upper case, lower case letters, numbers and special characters will take 150 million years.

A more recent study from [Hive Systems](https://www.hivesystems.io/blog/are-your-passwords-in-the-green) suggests that the increasing power of hardware means that the times taken to crack passowrds given above are now much reduced. They estimate that:

- a 5 character password, lower case letters only can be cracked almost instantly

- a 5 character with upper case, lower case letters, numbers and special characters can be cracked instantly

- an 8 character with upper case, lower case letters, numbers and special characters will take 5 minutes

- a 12 character with upper case, lower case letters, numbers and special characters will take 226 years.

## Conclusion

Well, it's clear that the longer and more complex the password, the more effort it will take hackers to break it. In addition, to quote Sucuri again

> The bigger the effort behind a brute force attack, the easier it is to detect and block with the right tools in place.

As I mentioned above, brute force attacks account for 34% of breaches in small companies. Interestingly, the corresponding figure for large companies is only 8%. The Verizon report does not give any details about why there is such a disparity, however, we could speculate that larger companies have stronger password policies in place to enforce longer and more complex passwords.

It's also worth mentioning that not all brute force attacks use full lists of all possible passwords combinations because, as we've seen, they can take a long time to complete. Another approach is to use a list of common passwords. These become available after a large company's security data is compromised. Attacks using these lists can be more effective and faster as the hackers believe (often correctly) that an individual will use the same password on multiple sites.

## Actions

- Raise awareness about password security in your organisation
- Enforce a policy of using passwords that use lower case and upper case letters, numbers and special characters and which are at least 8 characters in length (better with 12 characters) (**Update May 2023** - 8 character passwords can no longer be considered adequate - 12 characters should now be the minimum).
- Use a [password manager](/blog/secure-password-protection/) so people don't have to remember or write down the passwords
- Don't reuse passwords across different sites
- Review other methods of [protecting your systems](/blog/how-to-protect-your-website-against-hacking/) e.g. 2 Factor authentication.

Note: _ The 32 special characters are - !"#$%&'()_+,-./:;<=>?@[\]^\_`{|}~
