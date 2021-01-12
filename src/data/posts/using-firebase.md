---
date: "2020-01-31"
title: "Summary of using Firebase for over a year"
intro: ""
---

## Happy 2020 everyone!

On a side project I have been using firebase for hosting, cloud functions and firebase database for over a year now and these are my thoughts and opinions about using firebase for over a year.

## Ever-changing firebase

When I used firebase for the first time it was still very new, breaking changes were frequent and the libraries that were available were also volatile. On the other hand using firebase was fun and exciting and the ability to be able to CRUD on the client side and having built in authentication.

## Authentication

Having built in authentication with the ability to create a user via Google sign in or the usual username.

With the addition of users and authentication, there are also verify URLs which gives the developer opportunity to allow the user to verify their account so they can access user only parts of the site. You can also use the forgot password functionality within firebase so a user can reset their password

## Cloud Functions

Whilst Firebase has a lot of functionality spread across different parts of key website functionality some parts are missing and this is where cloud functions step in to allow the developer to fill in those missing gaps.

Cloud functions allow you to use node packages wrapper in a cloud function to add new functionality to the site. For example I used it for generating emails to the user.

## Firestore Database

Here is a big part of firebase; the database and its ever changing ways thoughts firebase life. At the start there was only one database, the realtime database. The realtime database is a no sql database which was easy to use but wasn’t strongly typed. Later firebase introduced the firestore database which is supposedly better than the realtime database. From using both the collections and the firestore concept resulted in a better developer experience but due to its different interface wasn’t easy to transfer between each database.

Overall I would recommend using firebase on any project you are thinking of creating as its out-of-the-box tools and functionality can give a developer a great headstart for making their ideas a reality.
