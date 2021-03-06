---
date: "2019-06-01"
title: "Presentation Framework"
intro: ""
---

Recently I have been practising new design patterns in a project. This project is for creating presentation and its
slides and is open source. The idea is to allow the developer/user to data drive all the presentation including its
styling. In addition they can add custom functionality.

The design patterns I decided to use in the end where the mediator and observer pattern. In addition a lot of the
classes were singleton in design.

The decision to choose the mediator pattern was due to the numinous domain classes that are being constructed and
consumed. I am saying domain classes as a way of describing a class which is a ‘real’ thing. So a router is a real thing
as its job is do be the information of the routing, sameas the dom where its job is too know and perform all the dom
checking and manipulation. Subsequently the mediator pattern seemed to fit well as there are links between both in terms
or events for example going to the next page.

When the user wants to navigate to the next page there are several actions to be done in order for this to happen: tell
the router to change the history state, update the router so that the next page is the active page, remove all elements
on the page and replace them with the active page’s elements and optionally trigger animation. In this example the
change in the router directly affects the dom but both are two separate constructs. The mediator is the class which can
order what class is called at what time, correctly chaining the events to perform the switch of active pages correctly.

Another pattern that was used was the observer pattern, I am somewhat familiar with this pattern mainly thanks to RxJS
but I didn’t want to use any libraries in this project so I opted so a custom made message bus style class. This message
bus will hold the subscriptions with there data and another method will create the subscription, publish a change then
the method which is checking for changes in the subscription which receive the latest data. I found this very useful
when I wanted a plug-in mentatility for two parts of the project; components and hooks. The Components will be
constructed as normal but can subscribe to events that go on in the presentation, the example at the moment is the
progress bar, which detects the router change and updates its percentage. The other is the concept of hooks so that
other developers/users will be able to make custom changes based of events in the presentation.

As the project expands I am hopeful that more design patterns will emerge or change to better suit the needs of the
project.
