---
title: Pantheon
publish"Date: 2024-03-01 00:00:00
image: "https://storage.googleapis.com/jennyencho-website/landing-img/pantheon-landing.png"
img_alt: "pantheon-img"
label: "Data Management Tool"
description: |
  "Powering nonprofit volunteer management with seamless tech integration."
org: "Develop For Good"
timeline: "September 2023 - Ongoing"
role: "Product Designer & Frontend Engineer"
---

# Context

## Background

<a href="https://www.developforgood.org/"><strong>Develop For Good (DFG)</strong></a> is a 501(c)(3) nonprofit organization dedicated to empowering underserved and underrepresented college students. Founded in March 2020 by Stanford students Mary Zhu and Amay Aggarwal, DFG was established to support nonprofits struggling with digital access during the COVID-19 pandemic. By providing opportunities to work on real-world technical projects for nonprofits, DFG aims to bridge the digital divide and promote meaningful volunteer experiences.

## My Work

I joined Develop For Good as a software engineer in March 2023. Alongside fellow engineer Anish Sinha, we identified a critical need for a dedicated cloud infrastructure to support DFG's growing demand among students and nonprofits. In August 2023, we proposed a series of Cloud and AI initiatives to DFG Founder Mary Zhu, which ultimately led to the creation of Pantheon. As a founding designer and engineer, I spearheaded the design strategy and frontend engineering for DFG's internal services, and continue to work on Pantheon to this date.

## Observation

### <i class="fa-solid fa-arrows-spin"></i> Develop For Good operates in four-month project cycles twice a year.

Volunteers are placed in teams focusing on technical projects in web/mobile development, data engineering, and UI/UX design, with each team consisting of at least 8 volunteers.

### <i class="fa-solid fa-arrow-trend-up"></i> An increasing number of students and nonprofits are turning to DFG for technical opportunities and services.

An increasing number of students and nonprofits are seeking technical opportunities and services from DFG. Despite this rising demand, DFG can currently support around 35 nonprofit clients per cycle.

## Problem

### <i class="fa-solid fa-square-xmark"></i> Develop For Good does not have the tech infrastructure to protect volunteer and client data.

Develop For Good currently operates without a dedicated cloud environment for its services, resulting in user fragmentation. This limitation makes it difficult to securely manage and protect data specific to both volunteers and nonprofit clients.

### <i class="fa-solid fa-square-xmark"></i> DFG's onboarding/offboarding processes limits scalability.

The onboarding and offboarding processes at Develop For Good is labor-intensive, with Program Director Amanda Lo manually managing over 400 volunteers and clients each project cycle on DFG's social platforms. This time-consuming task limits DFG's ability to scale efficiently with its current infrastructure.

> With the scale of our programs surpassing the manual capacity of our staff, how might we manage program lifecycle tasks seamlessly and securely?

## Goals

### <i class="fa-solid fa-gear"></i> Automate the onboarding/offboarding process for all project cycles.

Instead of manually inviting every new volunteer onto DFG's platforms, we can invite volunteers in bulk.

### <i class="fa-solid fa-business-time"></i> Determine what services the management team needs to handle lifecycle tasks.

The management team also relies on other lifecycle tasks to ensure that each cycle operates seamlessly. Understanding what services are needed to interact with both volunteers and clients were crucial.

# Research

## Existing Solutions

Nonprofits have already been using a variety of platforms for volunteer management, with popular solutions including VolunteerHub, Bloomerang, and Point. However, none of these out-of-the-box products had the specific app integrations and project management features we need for our unique program, as they integrated poorly with our existing and working infrastructure.

## DFG's Approach

Pantheon is a tool Anish and I conceptualized a year ago and initiated in January of 2024. Our vision was clear:

### <i class="fa-solid fa-layer-group"></i> Unified Management Platform

Build a unified management platform for DFG capable of handling all client lifecycle tasks seamlessly.

### <i class="fa-solid fa-layer-group"></i> Central Data Hub

Establish a central hub for hosting and bridging data between disparate apps and services, from user management to custom AI models.

As a starting tool, our top priority, as of now, is functionality.

## Okta Single Sign-On (SSO)

&nbsp;&nbsp;&nbsp;&nbsp; Our partnership with Okta for Good was instrumental in facilitating access to a potent tool: **Okta Workforce Federation**. This workflow was straightforward. Upon a volunteer’s acceptance to a project cycle, they are added to an Airtable sheet. Afterwards, a lambda is triggered to create all volunteers in our Okta tenant’s universal directory.

&nbsp;&nbsp;&nbsp;&nbsp; However, this plan fell short when we discovered that Single Sign-On (SSO) integration was an enterprise feature in platforms like Slack, Figma, and Notion. Despite our paid business and pro plans, we lack the resources for enterprise-level subscriptions, rendering our Okta-based solutions unviable. We were back at square one.

## Square One: Google For Nonprofits

&nbsp;&nbsp;&nbsp;&nbsp; Currently, the only volunteers issued Develop for Good handles (@developforgood.org) are product leads and management team members. However, the Google for Nonprofits plan allows up to 2,000 users. Although it can’t scale forever, we are hardly using a fifth of its total capacity. When we eventually reach this threshold, we could potentially pay for SSO capabilities for the essential services we rely on. Until then, we decided to build Pantheon around Google Workspace. This concept is simple: accept students, upload their information to Workspace (and issue them @developforgood.org emails), monitor the email allocations, and delete them at the end of each cycle to free up space in Workspace.

&nbsp;&nbsp;&nbsp;&nbsp; This streamlined approach not only manages user accounts and their life cycles, but also ensures controlled access to services since every service we rely on has complimentary SSO for Google. With this plan in motion, we started building.

# TECH PROCESS

## Airtable

Our foundation was Airtable. To facilitate executive access and data management, we needed a solution to bridge Airtable and Google Workspace seamlessly. Although no first-party integration met our requirements, this wasn’t a setback, as we were prepared to build everything from scratch.

![Pantheon Architecture](https://storage.googleapis.com/jennyencho-website/pantheon-img/pantheon-architecture.png)

&nbsp;&nbsp;&nbsp;&nbsp; We constructed an adapter mechanism which would recognize valid base structures in Airtable, and a frontend capable of creating and presenting read-only views from these bases. We then integrated various functionalities into different view types, each tailored to specific internal classifications. For instance, user views enable the export of users to Workspace. With this dashboard, crafted with TypeScript and React, our executives can log in, generate custom views pulling data from Airtable, and export users. We also utilized ShadCN/UI and TailwindCSS to craft an aesthetically pleasing UI that prioritizes user-friendliness, intuitiveness, and accessibility. Authentication was seamlessly managed through Auth0, an Okta product, bringing our project full circle.

## Backend

We used Rust for our backend. Our goal was to build a maintainable codebase which would compile to a small binary that could be easily deployed on a server or Kubernetes cluster, and horizontally scaled. Drawing from past experiences, we ruled out Go (over Rust) due to previous challenges. We used Axum as our backend web framework because it is lightweight and had excellent mechanisms for dependency injection. In selecting our database and cache solutions, we settled on PostgreSQL and Redis respectively as they are battle-tested technologies that were well-suited for our requirements. PostgreSQL is used to store views, keep track of exported users, and manage data regarding asynchronous jobs, such as export and import tasks. During development, we utilize Docker to spin up a database, while for production, we use an RDS t1.medium instance on AWS that fits our needs nicely.

## Challenges

### <i class="fa-solid fa-chart-simple"></i> Rate Limits

&nbsp;&nbsp;&nbsp;&nbsp; Airtable’s API imposes a maximum of 5 requests per second and returns only 100 records per request when fetching data. To circumvent these limitations without causing our API endpoint to block, we did three things. Firstly, we built a framework for asynchronous, cancellable tasks. Upon receiving a request, we return and initiate an asynchronous job. Job metadata is stored in PostgreSQL, and in the Pantheon UI, a window displays information about jobs associated with the view, categorized as complete, pending, error, or canceled.

&nbsp;&nbsp;&nbsp;&nbsp; This approach was powered by Tokio’s task functionality. Tokio is the asynchronous runtime we chose for our API and has the capability to run blocking tasks on a separate thread pool so as to not block the API. This solution ensures our API remains non-blocking while managing rate limits by launching tasks with artificial delays and retry mechanisms as needed.

&nbsp;&nbsp;&nbsp;&nbsp; Second, we lazily loaded the views. Rather than loading all the data at once, we waited until it was requested by a team member. Lastly, (and most importantly), we created a server-less function on AWS Lambda which is called by an Airtable automation we set up as a JavaScript script.

### <i class="fa-solid fa-brush"></i> Caching

&nbsp;&nbsp;&nbsp;&nbsp; Requests to Airtable often took considerable time (5 - 15 seconds), causing the UI to feel sluggish. Moreover, concerns about stale data persisted as new volunteers were added and accepted at DFG over time, which would invalidate the cache. To address this, we used our asynchronous job framework to schedule periodic data refreshes every few hours, with a manual refresh button in the UI for immediate updates.

&nbsp;&nbsp;&nbsp;&nbsp; This solution, although not perfect, allows our management team to ensure data accuracy by triggering a refetch when necessary, with a cooldown mechanism in place to prevent hitting rate limits. Thus far, this approach has proven effective, given our modest management team size and infrequent data synchronization issues.

# DESIGN PROCESS

## User Journey

Focusing on Pantheon's management interface, I mapped out the entire user journey. With every iteration, I incorporated feedback from DFG's management and my team to improve the user experience, and created new features along the way.
![User Journey](https://storage.googleapis.com/jennyencho-website/pantheon-img/pantheon-user-flow.png)

## Wireframing

Considering the technical specifications, I began sketching wireframes to visualize the extensive volunteer and client data for Mary and DFG's manage.

### Low-Fi Wireframes

I sketched the initial wireframes by hand and explored different layout configurations to optimize user experience and information accessibility.

![Low-fi Wireframe 1](https://storage.googleapis.com/jennyencho-website/pantheon-img/pantheon-wireframe-1.png)

### Mid-Fi Wireframes

Next, I created mid-fidelity wireframes to visualize the overall look of Pantheon. These wireframes served as crucial points for design iterations. During these iterations, I incorporated feedback from Mary, DFG's management needs, and any engineering constraints.
![Mid-fi Wireframe 1](https://storage.googleapis.com/jennyencho-website/pantheon-img/midfi-db-creation-v1.png)

## Iteration

### Multi-Classification Approach

As Pantheon's tech architecture and constraints evolved, so did the design. One notable change was in how Airtable data was extracted to Pantheon. With these changes, we were back to square one, starting with new dashboard layout sketches.

### Wireframing

The initial wireframe sketches assumed that dashboards would display a single internal classification. To optimize efficiency and functionality, I sketched out a multi-classification approach for a comprehensive look within a single dashboard.

![Low-fi Wireframe 2](https://storage.googleapis.com/jennyencho-website/pantheon-img/pantheon-wireframe-2.png)

### Mid-Fi Wireframe

I created mid-fidelity wireframes based on the multi-classification approach, working closely with engineers and management to refine the design and ensure optimal functionality.

![Mid-fi Wireframe 3](https://storage.googleapis.com/jennyencho-website/pantheon-img/midfi-db-creation-v3.png)

# FINAL WORK

## Dashboard Creation

DFG management can create dashboards that provide a comprehensive overview of project cycles. These dashboards, powered by Airtable, offer insights into volunteer and client data, data fetching status, and key performance metrics.

![Dashboard View](https://storage.googleapis.com/jennyencho-website/pantheon-img/pantheon-dashboard-overview.png)

## Smartviews

Each smartview is tailored to specific internal classifications - volunteers, mentors, and nonprofit partners. With these smartviews, built with TypeScript and React, DFG executives can generate custom views pulling data from Airtable, export and import users, analyze key metrics, and seamlessly manage user information.

![Volunteer Smartview](https://storage.googleapis.com/jennyencho-website/pantheon-img/pantheon-dashboard-volunteer.png)

## Analytics Tools

The Analytics Tools section provides detailed insights into the demographics of DFG's volunteer base, including their university, ethnicity, academic year, age group, and socioeconomic background. This data is crucial for DFG's mission of expanding opportunities to underrepresented and underserved students.

<div class="gallery">
<img src="https://storage.googleapis.com/jennyencho-website/pantheon-img/tools.png">
<img src="https://storage.googleapis.com/jennyencho-website/pantheon-img/volunteer-ethnicity.png">
</div>

## Job Management

The dashboard provides a clear overview of data transfer tasks (exports and imports) between Airtable and Pantheon. These tasks are categorized by status: complete, pending, error, or canceled. This categorization helps streamlines updates and organization of DFG member data.

![Job Management](https://storage.googleapis.com/jennyencho-website/pantheon-img/pantheon-dashboard-status.png)

## Airtable Automation

We created a server-less function on AWS Lambda which is called by an Airtable automation we set up as a Javascript script. Whenever a record is created, edited, or deleted, that lambda is triggered and notifies our system.

![Airtable Automation](https://storage.googleapis.com/jennyencho-website/pantheon-img/pantheon-airtable.png)

# IMPACT

## Outcomes

Since the inception of this project, Develop For Good has recieved over $1 million in funding in support of Pantheon's development through key partnerships with Stanford's StartX and Okta. In November of 2023, Develop For Good became the first nonprofit to be accepted to Stanford's startup accelerator StartX, with Pantheon highlighting DFG as a tech nonprofit startup and partnered with Okta For Good to further the development of Pantheon. As of October 2024, Pantheon's work is featured on Okta's tech blog community and has officially launched for every team in the Winter 2025 cycle and beyond!

## Next Steps

### <i class="fa-solid fa-lightbulb"></i> Design additional functionalities.

We're approaching Pantheon as a central platform to house custom AI models and features to further accelerate and personalize the end-to-end project development experience.

### <i class="fa-solid fa-handshake"></i> Streamline beneficiary intake.

We hope this key piece of software will help make it possible for DFG to scale our capacity indefinitely. As a tech nonprofit and startup that develops digital solutions for other nonprofits, we hope to continue contributing to the nonprofit sector with our learnings and insights.

## Reflections

### <i class="fa-solid fa-list"></i> Design isn’t just aesthetics—it’s the backbone of making technology usable and scalable.

Pantheon stands out as the most intricate technical architecture I’ve worked on to date (as of October 2024). Its evolution through multiple architectural changes has given me invaluable lessons on the importance of functional design to make complex technical systems accessible to everyday users. Combining my background in both tech and design to bring a scalable product to life has been an excited challenge and reinforced my commitment to continuously update my technical skills alongside design skills.

### <i class="fa-solid fa-list"></i> Understand the big picture first.

Pantheon required an extensive discussions of abstract concepts and potential tech stacks before initiating the UI design process. Along the way, I gained a deeper understanding of how clean code design directly influences effective user interface design. These discussions pushed me thoughtfully conceptualize how data should be presented to users in a clear, uncomplicated manner. Without this comprehensive approach to analyzing the big picture, Pantheon would not have achieved its current level of usability and impact today.
