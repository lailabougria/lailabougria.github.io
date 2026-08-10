---
title: "Mastering complex event-driven architectures"
tagline: "Transition from tightly coupled service-to-service calls to carefully designed processes that reflect your business domain."
description: "A hands-on workshop on designing and evolving complex, long-running business processes with messaging — available as a 1-day or 2-day format, for conferences or in-house teams."
durations:
  - "1 day"
  - "2 days"
audience:
  - "Have a foundational understanding of messaging as an architectural style and the benefits it offers."
  - "Understand the basic message-based communication patterns, including request-reply and publish-subscribe."
  - "Understand concepts like idempotency, eventual consistency and Outbox."
  - "Have experience using message brokers such as Azure Service Bus, RabbitMQ, Amazon SQS or other queuing or broker technologies."
outcomes:
  - "How to identify complex business processes within your domain"
  - "Techniques to help identify the right service boundaries"
  - "Coordinate complex business processes with orchestration and choreography"
  - "Engage in thorough tradeoff analysis to get to the right design"
  - "Manage requirements that need to occur at different points in time"
  - "Seamlessly handle out-of-order messages"
  - "Test complex, long-running processes in an automated way"
  - "Leverage observability to troubleshoot issues where they matter most: in production!"
  - "How to deal with the inevitable: change..."
prerequisites:
  - "The latest version of .NET"
  - "Visual Studio, Rider, or VS Code"
  - "Docker"
  - "A Miro account for the design exercises (a free account is sufficient)"
  - "A GitHub account for access to exercises and additional material"
deliveries:
  - event: "DDD Europe"
    location: "Remote"
    date: 2026-02-09
    dateLabel: "February 9–13, 2026"
    duration: "4 half days"
    eventUrl: "https://ddd.academy/mastering-complex-event-driven-architectures/"
  - event: "DDD Europe"
    location: "Antwerp, Belgium"
    countryCode: "be"
    date: 2026-06-08
    dateLabel: "June 8–9, 2026"
    duration: "2 days"
    eventUrl: "https://ddd.academy/mastering-complex-event-driven-architectures/"
  - event: "NDC Oslo"
    location: "Oslo, Norway"
    countryCode: "no"
    date: 2025-05-19
    dateLabel: "May 19–23, 2025"
    duration: "2 days"
    eventUrl: "https://ndcoslo.com/workshops/designing-complex-business-processes-with-messaging/a979d8cf55dd"
  - event: "NDC London"
    location: "London, United Kingdom"
    countryCode: "gb"
    date: 2025-01-27
    dateLabel: "January 27–31, 2025"
    duration: "2 days"
    eventUrl: "https://ndclondon.com/workshops/designing-complex-business-processes-with-messaging/ae2c6de115c0"
  - event: "NDC Porto"
    location: "Porto, Portugal"
    countryCode: "pt"
    date: 2024-10-14
    dateLabel: "October 14–18, 2024"
    duration: "2 days"
    eventUrl: "https://ndcporto.com/workshops/designing-complex-business-processes-with-messaging/98fc8a71281a"
  - event: "Techorama NL"
    location: "Utrecht, Netherlands"
    countryCode: "nl"
    date: 2024-10-07
    dateLabel: "October 7–9, 2024"
    duration: "1 day"
    eventUrl: "https://techorama.nl/"
draft: false
githubUrl: "https://github.com/lailabougria/workshops/tree/main/designing-complex-business-processes-with-messaging"
---

Event-driven architecture promises to significantly improve our systems in terms of scalability, resilience, and maintainability. It also enables the design of loosely coupled components, improving the autonomy and evolution of individual services. And sending messages or publishing events is pretty straightforward, so what's not to like? Well, it turns out that making all those messages and events work together in meaningful ways is the real challenge.

Our systems are filled with business processes that are anything but trivial. They exceed the boundaries of a single method- or service invocation and require us to redefine many concepts, from how we think about the domain entities and how coupling affects our designs to how we handle time-based requirements and the joys of eventual consistency. The true power of event-driven architectures surfaces when we start expressing complex business processes with intention-revealing messages (both commands and events) to reflect what's happening in the real world.

If you've moved beyond the basic building blocks of messaging and want to transition your designs from meaningless and often tightly coupled service-to-service calls to carefully designed processes that reflect your business domain, this workshop is for you.

Throughout this workshop, we'll divide into smaller groups for design exercises that require nothing more than your imagination and something to write with. Later, we'll switch gears and get more hands-on with some coding exercises to bring those ideas to life using C#.

Join me and unlock the secrets of messaging's real-world superpowers!
