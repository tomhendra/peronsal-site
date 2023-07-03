---
title: "Resolve Cloudflare Pages www Redirects"
subtitle: "How to resolve www redirects using Cloudflare DNS for deployments to
  Cloudflare Pages"
date: "2022-04-04"
updated: ""
tags:
  - "Cloudflare Pages"
description:
  "Cloudflare Pages is a fantastic deployment platform, and Cloudflare DNS
  management is great too. But there is a lack of synergy in some places."
---

## Introduction

I spent an hour bashing my head against the wall trying to figure out www
redirects on the Cloudflare dashboard. I was able to resolve the issue, but it
was a bit on the unintuitive side for a devops amateur like me. Hopefully this
blog post can save someone else a headache.

## The Problem

When you deploy to Cloudflare Pages, within the Pages section of the Dashboard
UI CF provides an option to setup a custom domain. During setup, you can choose
to automatically add the DNS settings. This works great for the base domain, but
in the DNS section of the dashboard for the website domain, there is a prompt to
add an A of CNAME record for `www.yourdomain.com`.

No problem, we add a CNAME record with `www` as the Name, and `yourdomain.com`
as the Target, but the problem is this will not resolve. If we visit
`www.yourdomain.com` we get a 522 Error page from Cloudflare.

Because CNAME records are
[not allowed](https://datatracker.ietf.org/doc/html/rfc1034) at the zone apex,
CNAME flattening will be applied to the record we just created.

## The Solution

In order to get around the problem, we need to add a redirect in Rules -> Page
Rules in the CF dashboard.

In the first field enter `www.yourdomain.com/*`

Then the settings are:

- Forwarding URL
- 301 - Permanent Redirect
- `https://yourdomain.com/$1`

And that is all there is too it!
