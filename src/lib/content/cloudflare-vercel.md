---
title: 'How to Set Up Cloudflare with Vercel'
subtitle: 'Use the proxy service from Cloudflare with deployments to Vercel.'
date: '2020-08-10'
updated: '2022-04-03'
coverImage: 'proxy-provider'
alt: 'Mobile phone with a generic Proxy Provider company logo'
caption: 'Photo by Ed Webster'
tags:
  - 'Vercel'
  - 'Cloudflare'
description:
  "There are some potential issues with getting Vercel to play nicely with
Cloudflare when using the proxy feature which brings the security benefits.
Here's how to get things running smoothly."
---

## Introduction

This post is an edited version of
[this blog post](https://levelup.gitconnected.com/how-to-set-up-cloudflare-with-zeit-93daa7d45dd)
by Dom Talbot, since it wasn't quite how things worked for me. I had to take
some info from the
[Vercel docs](https://vercel.com/knowledge/using-cloudflare-with-vercel) to get
things up and running.

My situation was also different in that my domain was registered with Google in
the first instance but later transferred to Vercel.

## Steps

1.  Create a project on Vercel.
2.  Configure Cloudflare DNS.
3.  Connect a Cloudflare-managed domain to a Vercel project.

## Create a Project on Vercel

1.  Select the Import Project button in the Vercel dashboard.
2.  Select the Continue button on the Git Repository card.
3.  Allow Vercel to build and deploy to the .vercel.app domain.

Check that all is well by launching the site in the browser.

## Configure Cloudflare DNS

The next step is to create a new site in Cloudflare and add the Vercel A record.

1.  Select the 'Add a Site' button in the Cloudflare dashboard.
2.  Enter your domain.
3.  Choose the free plan.
4.  Select add record inthe DNS section.
5.  Enter Name as `@` and the IP address as `76.76.21.21` to point to Vercel.
6.  Update DNS nameservers to Cloudflare's.

The Cloudflare nameservers will look something lik `aisha.ns.cloudflare.com` and
`jack.ns.cloudflare.com`.

If you registered or transferred a domain to Vercel, there is no option (yet) to
change nameservers yourself. Contact [Vercel support](mailto:support@vercel.com)
and ask them to make the update. Otherwise make the changes with the registrar.

Vercel Supoprt were excellent in my case and all was done within a few hours.
The nameserver change propogated overnight.

## Connect Cloudflare to Vercel

If your domain isn't registered with Vercel or already added to your account,
you can do so with the Vercel CLI.

1.  Run `vercel add domain example.com` in terminal.
2.  Create a TXT record in Cloudflare with verification code received.
3.  Run `vercel domains verify example.com` in terminal

The next step is to set up HTTPS in Cloudflare.

### 1: Encryption

To create a secure connection between Cloudflare and Vercel, set Clousdflare's
encryption level within the 'SSL/TLS' tab to 'Full (strict)'. Vercel has a
Cloudflare Origin CA Certificate so we can use the strict option.

### 2: Exception

When Vercel builds a project, the final step of the build process is to issue an
SSL certificate. As part of this step Vercel makes an HTTP request to
`<domain>/.well-known/acme-challenge`. If this HTTP request gets redirected to
HTTPS, Vercel will fail to issue an SSL certificate.

To prevent this specific request being redirected, create an HTTPS exception
page rule by:

1.  Select 'Create Page Rule' within the 'Page Rules' tab of the Cloudflare
    dashboard.
2.  Enter `example.com/.well-known/` in the 'If the URL matches' text field.
3.  Select 'SSL' from the 'Pick a Setting' dropdown, then 'Off' from the 'Select
    SSL Setting' dropdown.
4.  Select the 'Save and Deploy' button.

### 3: Redirection

To ensure all other HTTP requests continued to redirect to HTTPS, create another
page rule by:

1.  Disable the 'Always Use HTTPS' setting in the 'Edge Certificates' section of
    the 'SSL/TLS' tab.
2.  Select the 'Create Page Rule' button within the 'Page Rules' tab.
3.  Enter `http://example.com` in the 'If the URL matches' text field.
4.  Selecting 'Always Use HTTPS' from the 'Pick a Setting' dropdown.
5.  Selecting 'Last' from the 'Order' dropdown.
6.  Selecting the 'Save and Deploy' button.

### 4: Test

The last stage is to test the HTTPS setup worked. Go to the Vercel dashboard and
assign the domain you added to the project. Then run a test in Terminal using
curl:

```shell
curl http://example.com/.well-known/acme-challenge -I
```

If successful you should see `HTTP/1.1 404 Not Found` returned, which means you
have a configuration that will allow Vercel to run smoothly!

You can now confirm traffic is being handled via Cloudflare by checking the SSL
certificate in the browser when visiting the URL.

### Summary

Now all should be up and running with a proxy-enabled Cloudflare site. Vercel
recommends to avoid using the proxy due to performance degradation, but in my
case this has proven negligible.

Again caption to Dom Talbot's blog post. He did all the hard work and I just
piggy backed his solution and have rewritten it here for my own future
reference, and for anyone else who is in the same situation.
