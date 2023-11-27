---
title: "Capturing Email Addresses on Websites"
date: "2015-08-22"
categories:
  - "Email"
  - "Forms"
metaDesc: "Best practice for capturing email addresses on contact and sign up forms. The email address is vital so we should aim to correct it if necessary."
excerpt: "It’s almost certainly the case that you have a contact form on your website and likely that you have other ways of capturing visitors’ email addresses such as a sign up form. In this post I focus on capturing email addresses on contact and sign up forms and ensuring that the email address we capture is correct."
primaryImage: "email-format-validation"
primaryImageAlt: "Checking to make sure email addresses that visitors have entered are valid"
extraStyles: "/scss/post.scss"
---

It’s almost certainly the case that you have a contact form on your website and likely that you have other ways of capturing visitors’ email addresses such as a sign up form. Most people dislike filling in contact forms and keeping the amount of data that has to be completed to a minimum helps with sign up rates. In this post, however, I want to focus on capturing email addresses on contact and sign up forms. This is the most important piece of information on these forms and I believe that it is important that we do what we can to ensure the email address we capture is correct.

Consider what happens if the person types in their email address incorrectly?

1. They never get the reply, the download or the newsletter they wanted so wasting an opportunity for you and possibly damaging your reputation (as the person believes you never bothered contacting them)
2. You have a worthless email address in your list.

Given the importance of the email address, wouldn’t it be worth taking some steps to make sure that any obvious typos in the email were fixed or highlighted so they could be corrected?

## Email Address Format Validation

![Capturing Email addresses and validating their format](/optim/blog/email-format-validation.jpg){width=500}{data-responsiver=blogside}
The first thing that can be done is to make sure that the email address typed in is in the correct format. Clearly, an email address must have an @ symbol within the characters typed as well as other features. This type of validation is easy to achieve and the user must not be allowed to proceed to the next step without correcting the formatting error. So, by taking this simple step we can ensure that the format of the data typed in corresponds to that of an email address. This is basic validation which will certainly help ensure the quality of the data, however, there is more we can do.

## Email address Correction

What if the website visitor types jim.brown@gnail.cmo into the email address field? It is a valid email format but the chances are that the user intended to type jim.brown@gmail.com. We can’t be absolutely sure of this but we can offer the user the option to correct the possible error. Some code behind the form can look out for typos and make suggestions of corrections. The suggested correction can then be clicked (or tapped) to replace the erroneous input.

We can correct many of the common suffixes of email addresses/domain names e.g.

- .cmo to .com
- .oc.uk to .co.uk
- .ifno to .info
- .nte to .net
- .ogr to .org

We can also validate against a list of common email providers such as hotmail, gmail, sky, btinternet etc. and look for an email address that is close to one of these but it doesn’t match exactly as in the video here.

![capturing email addresses, suggested correction](/optim/blog/email-correction1.gif){width=500}{data-responsiver=blogside}
Again, we can offer a corrected version. We cannot auto-correct as it is possible that what we regard as a possible typo is, in fact, correct. Hence, we offer a suggested alternative rather than simply replacing the email. Here's another example.

![capturing email addresses and their correction](/optim/blog/email-correction2.gif){width=500}{data-responsiver=blogside}
These suggestions can only help on the part of the email address after the @ symbol. The part before the @ symbol is fairly free format ( although spaces, @ and a number of other characters are disallowed) but there is nothing here we can validate or check. So if someone types davis.clark@gmail.com and their genuine email address is david.clark@gmail.com we cannot do anything to correct that, sadly.

## Conclusion

I don’t have any statistics to demonstrate the percentage of people who key in erroneous email addresses so I can’t place any specific value on making sure your contact and sign up forms have this type of validation and correction in place.

However, improving the quality of the data we hold about those website visitors who choose to leave their details must be beneficial for you as a business owner and for the individual who left their email address expecting to be contacted.

If you would like any assistance in implementing these features on your website, please do [get in touch](/contact/).
