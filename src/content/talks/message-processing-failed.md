---
title: "Message processing failed! But what's the root cause?"
categories:
  - O11Y
  - EDA
description: "How do you investigate failures in a distributed system?"
topics:
  - Observability
  - Distributed systems
  - Debugging
draft: false
order: 7
deliveries: []
sessionizeUrl: "https://sessionize.com/s/noctovis/message-processing-failed-but-whats-the-root-cause/51975"
photo: "message-processing-failed.jpg"
githubUrl: "https://github.com/lailabougria/talks/tree/main/message-processing-failed-but-whats-the-root-cause"
---

How do you investigate failures in a distributed system? If your first thought is to look at the call stack, then good luck... In a distributed system, there is no such thing as a single call stack! Instead, it is scattered across multiple services that tackle a specific concern and communicate through a continuous stream of messages that flow through the system. That call stack becomes a haystack, so how do you find the proverbial needle?

Luckily, there are techniques and tools to regain the overview we lost. In this session, we'll look at modeling techniques, integration testing, and a deep dive into instrumentation with OpenTelemetry to help create visibility into your entire distributed system. And even if you're not (yet) using messaging in your architecture, you'll walk away with concrete takeaways around system observability that you can use in other architectures as well.