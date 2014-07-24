---
title: CanJS Case Study - BrightRoll
category: news
author: Brian Moschel
twitterHandle: brianmoschel
githubHandle: moschel
banner_img: /img/canjs-banner-background.jpg
lead: BrightRoll wrote a case study about their experience developing a large complex application with CanJS.
layout: post
---

[BrightRoll](http://www.brightroll.com) is an online video advertising platform company who built their [Console](http://www.brightroll.com/technology/console/) purchasing application using CanJS. They wanted to share their experience.

The following case study is written by their engineers, posted here with their permission. Feel free to email them at community@brightroll.com or find them at twitter [@brightrolleng](http://twitter.com/brightrolleng).

To see other examples of applications written with CanJS, or to post one of your own, visit the [Bithub Apps](http://bithub.com/app) page.

_______________________________________________________

![BrightRoll Console](/img/blog/brightroll_console.png "BrightRoll Console")

### Intro

BrightRoll adopted CanJS after comparing it against a number of different frameworks in order to update one of our user-facing applications. CanJS has met our needs by being fast, flexible, and easy to use. Below, we outline how we came to determine that CanJS best-suited our needs, and some of the benefits we’ve found using the framework.

### Before CanJS

BrightRoll used CanJS to build its advanced programmatic buying console for digital video advertising. The original BrightRoll interface was architected without a front-end framework, and instead mainly used Rails with a bit of client-side jQuery. Unfortunately, this wasn’t providing our media team and clients with the kind of user experience they needed; console executes orders within our real-time marketplace and connects clients instantly to an ecosystem of more than 15,000 websites and mobile apps, more than 350 partners, 500 million monthly global unique viewers. At that scale, we needed to make the application utilize a more modern data flow as well as increase the speed and responsiveness overall. As a result, we opted to switch to a single-page app, and this ultimately made us realize we needed to investigate some new technologies.

### Choosing a Framework

Once BrightRoll decided to switch the console to a single-page application, we did some comparisons of existing technologies. Of the four major JavaScript MVC frameworks that we investigated, we discovered that CanJS is the most highly intuitive, least opinionated framework that handles live binding efficiently. Additionally, our applications deal with large data sets surrounding the campaigns that customers are managing, and CanJS had the best performance in that arena. Finally, CanJS is a fairly mature framework, as a byproduct of being born of JavaScriptMVC.

Specifically, we found Angular and Ember to both be too opinionated; additionally, Angular’s performance with the large data sets we were using was sub-par. We also considered Backbone, but it was insufficient for our needs because it is essentially a model layer that doesn’t handle templating and live binding. 

In order to create a proving ground for CanJS, we initially built out a number of internal tools and UIs. This allowed us to internally explore all that it had to offer and allow us a more nuanced approach to designing our architecture. Then, we used what was learned to build the Console. The application runs as a single-page web application, and supports deep linking into a heavily data-driven UI. Typical users will open the app in their browser and keep it open all day, placing orders and reporting on outcomes as their video advertising campaigns run.

### Development With CanJS 

CanJS has a short learning curve -- meaning that for our engineers, it was generally intuitive, and that they quickly became productive users of the framework. Because we can inspect the source code, we can see that most functionality is implemented in a straightforward, easy-to-understand fashion, which both informed our own usage of the framework and also allowed us to more easily debug any problems that we had when implementing new features.

One of the most powerful features of CanJS are components, which combine several bits of functionality into a widget. The architecture of components influenced the way that we ourselves architect and develop solutions with CanJS, leading to quicker development cycles and less code duplication/higher re-use. Otherwise, in terms of features, we truly utilize the breadth of those offered by CanJS; for example, we have had great success with live bindings as they relate to Mustache, the logic-less templating language used to render pages.

### CanJS and Other Open-Source Libraries

We have developed our application as a single-page web-app, with a strong model layer backed by a set of APIs served by an internal team. We use the entirety of the core CanJS functionality and are working to support the fledgling module ecosystem, by working with Bitovi to standardize the publication of new modules and working to increase shareability. We also use some generic Javascript libraries, like underscore, as well as SlickGrid, which we have wrapped in a can.Component. For dependency management, we use steal.js, as well as a combination of checked-in js files and git submodules. 

### Onboarding With CanJS

At BrightRoll, new engineers have a designated buddy who helps train them on applications, languages, and frameworks that they may otherwise be unfamiliar with. They also are given a walkthrough of our architecture, and can depend on that buddy, as well as the rest of the engineering team, to answer any questions they have. We pride ourselves on having readable code that is approachable by anyone implementing features, so new developers can be productive quickly. Happily, CanJS is intuitive for anyone familiar with MVC, which makes the onboarding process that much simpler; new developers are typically able to deploy their first change to production in their first week.

CanJS is an open-source project, so looking into its source code is as easy as cloning its git repository. CanJS's website has documentation on its API, which outlines a lot of fundamental concepts and usage patterns. Our engineers found many similarities between CanJS and other frameworks -- features like observable values, binding to changes on a variable with callbacks, etc., have a parallel in CanJS. CanJS also has an IRC channel where other developers/learners can openly ask questions about the framework itself or common usage patterns. Finally, we host a regular [Silicon Valley CanJS meetup](http://www.meetup.com/CanJS-Silicon-Valley/) that is open to the public at our Palo Alto, CA Engineering office, which is a great opportunity for people to ask questions and learn from experts.


### About BrightRoll 

BrightRoll is the only independent and unified programmatic video advertising platform for reaching audiences across web, mobile and connected TV. The company powers digital video advertising for the world’s largest brands, including 85 of the top 100 US advertisers and 18 of the top 20 advertising technology companies. The platform enables advertisers to reach 4 in 5 video viewers online and consistently ranks among the top two video ad platforms in ads served. As a result, BrightRoll technology collects and analyzes hundreds of billions of data points monthly enabling real-time decisions that drive ROI for advertisers. To learn more, visit [www.brightroll.com](www.brightroll.com).