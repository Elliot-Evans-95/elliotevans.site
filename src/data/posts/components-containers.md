---
date: "2019-04-01"
title: "Components and Containers"
intro: "This month we will be exploring the concept of components and containers and how this structural concept will help in separating concerns of an application"
---

It's no surprise to me that the component architecture has taken off in the land of Front-end. Having decoupled logic/styling that can be freely moved around is a huge benefit for developers. It also with reusable code principles and in addition encapsulated logic, but the idea can be further explored.

Currently, any piece of work would be a component in some form. Let's take an example of an order page. The page will be a component, an outline of all the stuff of the page. The checkout, basket and items will each be a component. These component will live on the page component. Due to this the page component is not very reusable but that makes sense as that page shouldn’t need to be duplicated. Subsequently, it makes sense to break a small logic based component, and a page component, you could think of this as components and containers.

A Container is a large component which is a wrapper for small reusable components. The container will hold all the main logic calls and routing, so the smaller component can just take props into them and display them. Taking two popular frameworks; react and angular into consideration with this is mind, it's rather frustrating since both of them have no concept of a container component. It is definitely talked about in the React documentation but there is no implementation of a ‘container’, or a ‘page’ and this is also the same in angular. Angular components can also be on its routing and can be used with guards, resolvers and data. These additions are completely optional and makes an Angular Component flexible.

It seems that both frameworks are leaning over flexibility with their implementation over the configuration of having different components for different problems.
