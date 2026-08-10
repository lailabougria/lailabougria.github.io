---
title: "Messaging: The fine line between awesome and awful (and how to stay on the right side of it)"
categories:
  - EDA
  - Patterns
description: "Distributed systems are becoming increasingly common in today's systems landscape, and messaging is often used to coordinate between components in these systems safely."
topics:
  - Messaging
  - Distributed systems
draft: false
order: 6
deliveries: []
sessionizeUrl: "https://sessionize.com/s/noctovis/messaging-the-fine-line-between-awesome-and-awful-/61257"
photo: "../../assets/talk-banners/messaging-fine-line.jpg"
githubUrl: "https://github.com/lailabougria/talks/tree/main/messaging-fine-line-between-awesome-and-awful"
---

Distributed systems are becoming increasingly common in today's systems landscape, and messaging is often used to coordinate between components in these systems safely. With benefits like increased reliability, better performance, easy scalability, and easier decoupling of components, you might quickly think, "Shut up and take my money!". However, as with any architectural choice, the other side of the coin surfaces challenges and pitfalls that we must consider: structuring code to fully leverage messaging, dealing with duplicate messages, ordering issues, and diagnosing problems.

To tackle these challenges, we'll explore different messaging communication patterns and when to use them, learn how to effectively decouple code and consider techniques for system consitency. We'll also prepare for any unexpected issues, because, Murphy. By the end of this session, you will have a comprehensive understanding of the messaging problem space and will be better equipped to make informed decisions about whether and how to incorporate messaging into your distributed systems.