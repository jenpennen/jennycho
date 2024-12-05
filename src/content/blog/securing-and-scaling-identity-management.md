---
title: Identity Management with Keycloak and Kubernetes
publishDate: 2023-11-04 00:00:00
author: Anish Sinha and Jenny Cho
label: Demo
description: |
  A written report of the first Pantheon prototype.
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; In recent years, Develop For Good (DFG),
has faced a growing interest from many students and nonprofit partners seeking
technical opportunities and digital services. However, the possibility of
scaling the organization was nonexistent. Since DFG was first established, the
organization has relied on a manual onboarding/offboarding process, where DFG
Program Director Amanda Lo personally invites each accepted volunteer and
nonprofit to the organization’s social platforms. This is a labor-intensive
process that takes hours to complete, with each project cycle consisting of over
250 volunteers and roughly 40 nonprofit partners. In addition to this
time-consuming process, there were other technical issues within DFG that had to
be considered at scale.

## User Fragmentation and Data Confidentiality

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ensuring the secure removal of volunteers
from DFG's social platforms after each project cycle is nearly impossible. Many
student volunteers use personal or university email accounts to work on client
projects, leaving any private client data shared during the cycle stored in
those personal accounts. This creates significant risks for nonprofit partners,
as such sensitive information could remain accessible to volunteers long after
their involvement with them ends. Consequently, all DFG-specific project files
are vulnerable to unauthorized access and sharing, jeopardizing the
confidentiality of client and organization data. Combined with the current
onboarding and offboarding process, which already takes hours to manage at DFG's
existing scale, makes it virtually impossible for the organization to expand its
services.

## Solution Proposal

To combat these existng issues, Anish and I provided a demo to DFG founder Mary
Zhu on the promising potential of a modern identity and access management
solution that can be integrated with many services used at DFG. In this demo, we
used Penpot as an example application that can be integrated with Keycloak. The
purpose of the demo was twofold:

- Highlight integration capabilities of Keycloak with other applications using
  the OpenID Connect protocol.

- The advantages of using Kubernetes for managing and scaling application
  infrastructure.

### Keycloak

Keycloak is an open-source identity and access management platform developed by
Red Hat. It provides robust security features that seamlessly integrates
authentication and authorization mechanisms into applications and services. Used
widely by many companies, such as Bosch and Deloitte, some key features of
Keycloak include single sign-on (SSO), user federation, centralized management,
and the admin console. All of these features will be essential for DFG's
infrastructure as it scales.

<div class="gallery">
<img src="https://storage.googleapis.com/jennyencho-website/dichromatic-img/keycloak-logo.png">
<img src="https://storage.googleapis.com/jennyencho-website/dichromatic-img/screen-admin.png">
</div>

### Penpot

Penpot, developed by Kaleidos Open Source, is an open-source design and
prototyping tool, similar to Figma. Unlike other design tools, Penpot is
web-based and platform-independent, and thus can be used on any operating
system. Penpot is an excellent design tool for designers, making it a great
example of an application that can be integrated with Keycloak in the future.

<div class="gallery">
<img src="https://storage.googleapis.com/jennyencho-website/dichromatic-img/penpotui.png">
</div>
## Key Takeaways

### Identity Management

Keycloak manages user identities, roles, and permissions. This would allow for
secure access to applications and restrictions based on users' roles. Permisions
can be placed to restrict access to applications exclusive to DFG's management
members, volunteers, and clients.

### Scalability

The scalability and flexibility of using Kubernetes to deploy and manage
applications makes it possible to horizontally scale and seamlessly adapt to
changing organizational needs.

### Future-Proofing Infrastructure

This setup can be future-proofed, making it easier for DFG to adapt and scale
their infrastructure in response to envolving demands.

## Next Steps

DFG is a nonprofit organization that focuses on building new technology that
allows for novel ways to serve their clients and student volunteers.
Accordingly, it makes the most sense for DFG to provide these services with the
most optimal environment possible.

Following this demo, Anish and I joined Develop For Good as founding software
engineers, focusing on internal tools, notable Pantheon and PantheonAI. DFG has
since evolved into a nonprofit tech startup, being the first nonprofit
organization to be accepted to Stanford's startup accelerator StartX.
