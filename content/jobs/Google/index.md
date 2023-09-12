---
date: '4'
title: 'Software Engineer Intern'
company: 'Google'
location: 'Seattle, WA'
range: 'Jun 2023 - Sep 2023'
url: 'https://cloud.google.com/storage'
---

- I had the privilege to intern at Google this summer, where I contributed to Dataflux, an incubation project aimed at optimizing Google Cloud Storage for AI and ML workflows. During my time on the project, I implemented parallel listing to reduce object listing latency for ML training workflows.

- I designed and implemented the Storage Insights integration workflow to achieve parallel listing. The integration had a remarkable impact, reducing latency by approximately 400 times on datasets of 100 million objects. The optimization transformed a once time-consuming listing process that took around 3 hours into a swift operation of only 30 seconds.

- Furthermore, I implemented a semi-distributed, goroutine-oriented work-stealing algorithm in Go. This algorithm played a crucial role in dynamically rebalancing workloads during parallel listing operations. I integrated this workflow into gcsfs, an open-source Pythonic filesystem library that allows customers to interact with GCS. My time at Google was an invaluable learning experience, especially because I had the opportunity to be part of the process of taking a product from 0 to 1.
