---
title: "An exception occurred... Please try again."
categories:
  - EDA
  - Patterns
description: "If there is one certainty in software, it's that things fail."
topics:
  - Resilience
  - Distributed systems
  - .NET
draft: false
order: 8
deliveries: []
sessionizeUrl: "https://sessionize.com/s/noctovis/an-exception-occurred.-please-try-again/51974"
photo: "../../assets/talk-banners/an-exception-occurred.jpg"
githubUrl: "https://github.com/lailabougria/talks/tree/main/an-exception-occurred-please-try-again"
---

If there is one certainty in software, it's that things fail. It's not a matter of if but when. All too often, we throw the error at our users, who have no means of solving the problem except for trying again. Alternatively, we build custom code to address edge cases that can't easily be fixed, and we do so with a dangerous lack of insight into the problem at hand.

In this session, we'll discuss the importance of system resilience and how you can equip your software with the ability to recover from failures scenarios. After exploring different types of failures and considering different resilience strategies, we'll dig deeper into the retry pattern by rolling our own. We'll also see existing options such as Polly and NServiceBus, that can handle this complexity for you.

Join me and embrace your system's failures.