---
title: Pantheon
publishDate: 2024-03-01 00:00:00
image: "https://storage.googleapis.com/jennyencho-website/landing-img/pantheon-landing.png"
img_alt: "pantheon-img"
label: "Data Management Tool"
description: |
  Powering nonprofit volunteer management with seamless tech integration.
org: "Develop For Good"
timeline: "September 2023 - Ongoing"
role: Product Designer
second_role: Frontend Engineer
---

# Context

## Background

[**Develop For Good (DFG)**](https://www.developforgood.org/) is a 501(c)(3) nonprofit focused on closing the digital divide in the nonprofit sector and volunteerism. They offer opportunities for underserved and underrepresented college students to build real-world technical products for nonprofits.

## Problem Statement

> With the scale of Develop For Good's programs surpassing the manual capacity of their staff, how might we manage program lifecycle tasks seamlessly and securely?

Over the past two years, DFG has experienced a growing demand from students and nonprofit organizations seeking technical opportunities and digital services. However, _the organization has struggled to scale its offerings due to a reliance on manual lifecycle tasks._

## My Work

Working alongside fellow engineer Anish Sinha, we conceptualized an internal system that optimizes lifecycle tasks for thousands of volunteers per year. _I spearheaded the UX strategy and frontend development for Pantheon — Develop For Good’s first internal data management system._

# Research

## Understanding the Problem

### <i class="fa-solid fa-inbox"></i> DFG does not have the tech infrastructure to protect volunteer and client data.

_Many volunteers use their personal emails for essential client communication._ It is nearly impossible to manage and protect data specific to both volunteers and nonprofit clients, causing user fragmentation.

### <i class="fa-solid fa-circle-pause"></i> DFG’s manual processes limits scalability.

The onboarding and offboarding processes at Develop For Good is labor-intensive, with _Program Director Amanda Lo manually managing over 400 volunteers and clients each project cycle on DFG’s social platforms._ This time-consuming task limits DFG’s ability to scale efficiently with its current infrastructure.

## Existing Solutions

Nonprofits have already been using a variety of platforms for volunteer management, with popular solutions including VolunteerHub, Bloomerang, and Point. However, _none of these out-of-the-box products had the specific app integrations and project management features we need for our unique program_, as they integrated poorly with our existing and working infrastructure.

## Approach

Given our research, our vision for Pantheon was clear:

### <i class="fa-solid fa-table"></i> Unified Management Platform

Build a unified management platform for DFG capable of handling all client lifecycle tasks seamlessly.

### <i class="fa-solid fa-server"></i> Central Data Hub

Establish a central hub for hosting and bridging data between disparate apps and services, from user management to custom AI models.

## Okta Single Sign-On (SSO)

DFG's partnership with Okta for Good provided access to a powerful tool: _Okta Workforce Federation_. The workflow was simple—volunteers accepted into a project cycle were added to an Airtable sheet, triggering a Lambda function to create their profiles in Okta’s universal directory. However, _this approach hit a roadblock when we discovered that Single Sign-On (SSO) integration required enterprise-level subscriptions for platforms like Slack, Figma, and Notion_. Despite having paid business and pro plans, we lacked the resources for enterprise subscriptions, making our Okta-based solution unfeasible and forcing us back to the drawing board.

## Google For Nonprofits

Only product leads and management members are issued Develop for Good handles (@developforgood.org). However, the Google for Nonprofits plan allows up to 2,000 users. While this capacity isn’t unlimited, we’re hardly using a fifth of its limit. When we do reach this limit, paying for SSO capabilities for essential services may become feasible. In the meantime, we chose to build Pantheon around Google Workspace. _The process is straightforward: accept students, upload their information to Workspace (issuing them @developforgood.org emails), monitor allocations, and delete accounts at the end of each cycle to free up space._ With this approach defined, we began development.

# Tech Process

## Airtable

Our foundation was built on Airtable. To streamline executive acess and data management, we needed a seamless connection between Airtable and Google Workspace. Since no existing solutions fit our needs, we designed a custom solution that tailored to our workflow.

<!-- ![Pantheon Architecture](https://storage.googleapis.com/jennyencho-website/pantheon-img/pantheon-architecture.png) -->

We developed a dashboard with Typescript and React that allows executives to log in, create custom views of Airtable data, and export user information to Workspace. Designed with ShadCN/UI and TailwindCSS, this interface ensures a clean, user-friendly, and accessible experience. Authentication was implemented using an Auth0, an Okta product, to secure and simplify access.

## Technical Design Constraints

### <i class="fa-solid fa-bell"></i> Handling Airtable API Limitations

Airtable’s API enforces a maximum of 5 requests per second and returns only 100 records per request, which posed challenges when fetching large datasets. _To address these limitations without blocking our API, we implemented a four-pronged solution_: an asynchronous task framework powered by Tokio to handle non-blocking, cancellable tasks displayed on the UI; lazy loading to fetch data only when requested; and a serverless AWS Lambda function triggered by an Airtable automation script to streamline processing.

### <i class="fa-solid fa-brush"></i> Caching

Requests to Airtable often took 5–15 seconds, causing sluggish UI performance and raising concerns about stale data as new volunteers joined. _To address this, we used our asynchronous job framework to schedule periodic data refreshes every few hours and added a manual refresh button in the UI for immediate updates._ This approach, combined with a cooldown mechanism to avoid rate limits has proven effective, given our modest management team size and infrequent data synchronization issues.

# Design process

## Understand the Target User

The primary end users for Pantheon are DFG's management and executive members. Both groups share the same goal: _automate and visualize the onboarding/offboarding process for volunteers for all project cycles._

<div class="gallery">
  <img src="https://storage.googleapis.com/jennyencho-website/pantheon-img/maryzhu-persona.png">
  <img src="https://storage.googleapis.com/jennyencho-website/pantheon-img/amandalo-persona.png">
</div>

## User Flow

Focusing on Pantheon's management interface, I mapped out the user flow. With every iteration, I incorporated feedback from DFG's executive team and my team to improve the user experience, creating new features along the way.
![User Flow](https://storage.googleapis.com/jennyencho-website/pantheon-img/user-flow.png)

## Low Fidelity Brainstorming

Considering the technical specifications, I explored different layout configurations to optimize user experience and information accessibility. These wireframes served as crucial points for design iterations. During these iterations, I incorporated feedback from Mary, DFG's management needs, and any engineering constraints.

<div class="gallery gap-4">
  <!-- <img src="https://storage.googleapis.com/jennyencho-website/pantheon-img/pantheon-wireframe-1.png"> -->
  <img src="https://storage.googleapis.com/jennyencho-website/pantheon-img/lowfi-1.png">
</div>

## Initial MVP

The first Pantheon MVP was unveiled at Okta For Good's fellowship convention in April 2024. Presented to an audience of hundreds, this showcase provided a valuable opportunity to gather feedback, explore potential improvements to Pantheon's technical infrastructure, and refine our designs accordingly.

<video src="https://storage.googleapis.com/jennyencho-website/pantheon-img/pantheon-demo.mov" width="480" height="270" controls></video>

## Iteration: Multi-Classification Layout

_One notable challenge throughout the Pantheon's backend development was in our approach to extracting multiple categories of data at a time for one database view._ This challange pushed us back to the drawing board, starting with new dashboard layout sketches.

### Multi-Classification Brainstorming

_The initial wireframe sketches assumed that dashboards would display a single internal classification._ To optimize efficiency and functionality, I sketched out a multi-classification approach for a comprehensive look within a single dashboard.

![Low-fi sketch 2](https://storage.googleapis.com/jennyencho-website/pantheon-img/pantheon-wireframe-2.png)

### Low-Fidelity Wireframes

I created low-fidelity wireframes based on the multi-classification approach, working closely with engineers and management to refine the design and ensure optimal functionality.

![Low-fi wireframe 2](https://storage.googleapis.com/jennyencho-website/pantheon-img/lowfi-2.png)

<!-- # FINAL WORK -->
<!-- ## Dashboard Creation

DFG management can create dashboards that provide a comprehensive overview of individual project cycles. These dashboards, powered by Airtable, offer insights into volunteer and client data, data fetching status, and key performance metrics.

![Dashboard View](https://storage.googleapis.com/jennyencho-website/pantheon-img/pantheon-dashboard-overview.png) -->

<!-- ## Smartviews

Each smartview is tailored to specific internal classifications - volunteers, mentors, and nonprofit partners. With these smartviews, built with TypeScript and React, DFG executives can generate custom views pulling data from Airtable, export and import users, analyze key metrics, and seamlessly manage volunteer and client information.

![Volunteer Smartview](https://storage.googleapis.com/jennyencho-website/pantheon-img/pantheon-dashboard-volunteer.png) -->

<!-- ## Analytics Tools

The Analytics Tools section provides detailed insights into the demographics of DFG's volunteer base, including their university, ethnicity, academic year, age group, and socioeconomic background. This data is crucial for DFG's mission of expanding opportunities to underrepresented and underserved students.

<div class="gallery">
<img src="https://storage.googleapis.com/jennyencho-website/pantheon-img/tools.png">
<img src="https://storage.googleapis.com/jennyencho-website/pantheon-img/volunteer-ethnicity.png">
</div> -->

<!-- ## Job Management

The dashboard provides a clear overview of data transfer tasks (exports and imports) between Airtable and Pantheon. These tasks are categorized by status: complete, pending, error, or canceled. This categorization helps streamlines updates and organization of DFG member data.

![Job Management](https://storage.googleapis.com/jennyencho-website/pantheon-img/pantheon-dashboard-status.png) -->

# IMPACT

## Outcomes

Since the inception of this project, _Develop For Good has generated over $1 million in revenue_ through key partnerships with Stanford's StartX and Okta. In November of 2023, _Develop For Good became the first nonprofit to be accepted to Stanford's startup accelerator StartX_ in three years, with Pantheon highlighting DFG as a tech nonprofit startup and partnered with Okta For Good to further the development of Pantheon. As of October 2024, Pantheon's work is featured on [Okta's tech blog](https://www.okta.com/blog/2024/10/oktas-nonprofit-technology-fellowship-empowering-nonprofit-technology-leaders-across/) and has officially launched for every team in the Winter 2025 cycle and beyond!

## Next Steps

### <i class="fa-solid fa-pen-nib"></i> Design additional functionalities.

We're approaching Pantheon as a central platform to house custom AI models and features to further accelerate and personalize the end-to-end project development experience.

### <i class="fa-solid fa-handshake-simple"></i> Streamline beneficiary intake.

We hope this key piece of software will help make it possible for DFG to scale our capacity indefinitely. As a tech nonprofit and startup that develops digital solutions for other nonprofits, we hope to continue contributing to the nonprofit sector with our learnings and insights.

## Reflections

### <i class="fa-solid fa-circle-nodes"></i> Design isn’t just aesthetics.

Pantheon's technical architecture changed multiple times across iterations. _In each technical iteration, I saw firsthand how crucial functional design is to make complex technical systems accessible to everyday users._ It was a thrill to translate complex data structures into user-friendly layouts, and it's reinforced my commitment to continue building upon both my design and technical skills.

### <i class="fa-solid fa-network-wired"></i> Understand the big picture first.

Pantheon required extensive discussions of abstract concepts and potential tech stacks before initiating the UX/UI design process. _These discussions pushed me to thoughtfully conceptualize how data should be presented to users, and gained a deeper understanding of how clean code design directly influences good design._ Without this comprehensive approach to analyzing the big picture, Pantheon would not have achieved its current level of usability and impact today.
