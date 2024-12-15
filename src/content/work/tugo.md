---
title: Tugo
publishDate: 2023-05-01 00:00:00
image: https://storage.googleapis.com/jennyencho-website/landing-img/tugo-landing.png
img_alt: tugo
label: Mobile App
description: |
  Connecting you to the beats that surround you.
org: UCLA
role: UX Designer
second_role: Frontend Engineer
timeline: "October 2021 - Ongoing"
---

# CONTEXT

## Background

**Tugo** was inspired by a common user curiosity: **_What songs are the people around me listening to?_** Tugo (formerly Retune) is a mobile application designed to answer that curiosity by making music-sharing with others more transparent and social.

## Team

This project began in October 2021 as part of UCLA DevX's 2021 Fall Project Cycle. Formerly named Retune, I joined the team as a founding UI/UX designer and developer. I collaborated with 1 fellow designer Emily, 3 frontend developers (Angelina, Leslie, Liah), 2 backend developers (Nathan, Sanya), and product manager (Jake).

Ultimately, as Retune came to an end, I decided to continue working on this project, renaming it Tugo. I formed a new team of two alongside fellow developer and colleague Nastazia Coronado.

## Observation

### <i class="fa-solid fa-users"></i> Connecting with people in a large space is hard.

Students want to socialize with other students before honing in for the academic year. However, connecting with new people in a large space, like UCLA, can be quite intimidating.

### <i class="fa-solid fa-comments"></i> People like to be in-the-know.

Inspired by a popular tiktok trend, where influencers ask nearby strollers in an area what song they were listening to, I wondered if people around me were also naturally curious about other peoples' whereabouts.

## Opportunity

My team and I saw these obersvations as an opportunity to transform the music discovery experience for the UCLA community, where students can easily view the songs other students are currently listening to. However, the team wanted to go beyond a simple music feed.

# RESEARCH

## Competitive Analysis

First, I conducted an analysis on four existing music platforms — _Spotify, Apple Music, SoundCloud, and YouTube Music_. This revealed a gap: **_none of these platforms offered an easy way to share music with people nearby_**.

![Competitive Analysis](https://storage.googleapis.com/jennyencho-website/tugo-img/competitive-analysis.png)

## Contextual Inquiry

My next priority was to gather some thoughts about our concept from the students around me. I reached out to the UCLA community first to understand students' music-listening behaviors and frustrations. Additionally, I reached out to students outside of UCLA, as well as non-students, to hear as many diverse perspectives possible.

## Affinity Mapping

Given the responses of 200+ interviewees, I used an affinity map to identify common themes and tackle actionable insights. This approach revealed several distinct categories of feedback.

![Affinity Mapping](https://storage.googleapis.com/jennyencho-website/tugo-img/tugo-affinity-map.png)

## Key Insights

### <i class="fa-solid fa-lock"></i> People worry about sharing personal information on social platforms.

Although many people were fond of the idea, they were also concerned with how their personal information would be used/shared on Tugo.

### <i class="fa-solid fa-magnifying-glass"></i> People have an innate curiosity about others around them.

People are curious about what the people around them are doing, including what songs they are listening to.

### <i class="fa-solid fa-music"></i> People want to explore new music genres.

People are open to exploring new music genres regardless of their preferences, but do not know where to look.

## Key Solutions

### <i class="fa-solid fa-lightbulb"></i> Discover new songs privately or publicly.

Users will have public and private viewing options to make the music discovery experience accessible for all users with varying preferences.

### <i class="fa-solid fa-lightbulb"></i> Access songs that other Tugo users nearby are listening to.

Users can see what songs other Tugo users are listening to, as well as their recent music activity if they want to share it.

### <i class="fa-solid fa-lightbulb"></i> Allow users to listen to songs for a few seconds.

Users can only listen to up to 30 seconds of a song to maximize the music discovery experience as much as possible for people on the move.

# DESIGN PROCESS

## Low-Fi Wireframes

To jumpstart the design process, I created low-fidelity wireframes to provide the engineering team(and myself) with a basic framework while the design team synthesized user insights and refined the visual elements.

![Low-Fi Wireframes](https://storage.googleapis.com/jennyencho-website/tugo-img/retune-low-fi-wireframes.png)

## Style Guide

Creating a style guide was a challenging but essential step before diving into high-fidelity designs. I identified many inconsistencies in key design components from Retune. **I developed a UI style guide to ensure that components were styled consistently throughout the app**. Inspired by the blue summer skies of Los Angeles, this style guide was intended to reflect that aesthetic.
![Style Guide](https://storage.googleapis.com/jennyencho-website/tugo-img/tugo-style-guide.png)

## Usability Testing

Starting with the old Retune designs, I created a working prototype and recruited 20 participants to test it. I decided to use Figma's prototype feature due to the cost of our other option, Maze. While Figma had some limitations compared to Maze, I recieved valuable feedback on our current designs.

![Old Retune Designs](https://storage.googleapis.com/jennyencho-website/tugo-img/old-retune-designs.png)

## Feedback

### <i class="fa-solid fa-trash"></i> Remove the close friends and public viewing maps.

While participants appreciated the public and private viewing options with the close friends and public maps, I identified a significant UX flaw: **_these options should apply to the user, not the map_**. A striking 60% of the participants chose the close friends map over the public map, and nearly half expressed no preference. **_There was essentially no functional difference between the two maps_**. Instead of two maps, I introduced a feature in the user's profile settings that allows users to selectively share personal information with the public.

![Remove Close Friends](https://storage.googleapis.com/jennyencho-website/tugo-img/retune-tugo-remove-closefriends.png)

### <i class="fa-solid fa-user-minus"></i> Scrap the followers feature.

Many participants noted that the follow button felt out of place, making the app feel more like a social network than a music discovery platform. Moreover, the profile view of other Tugo users, along with their profile handles, made it difficult to access the play button. This led me to conclude that it is better to **_keep all users' information hidden during the song shuffling process_** to preserve the focus on music exploration and discovery.

![Remove Follow Feature](https://storage.googleapis.com/jennyencho-website/tugo-img/retune-tugo-remove-follower.png)

### <i class="fa-solid fa-brush"></i> Share less on the music tab.

One key feature my Retune team developed was the user music tab, which displays a user’s current song, favorite albums, and artists. However, only 20% of participants fully explored it, and _80% found it too cluttered and hindered their discovery experience_. To address this, I streamlined the music tab to focus on song shuffling and added a profile view for detailed music activity.

![Less Clutter](https://storage.googleapis.com/jennyencho-website/tugo-img/retune-tugo-remove-clutter.png)

## Flow Chart

Given our feedback, I revised Tugo's flow chart and took into consideration new features to replace old and obsolete ones. This process further helped to breakdown the essential features and steps of building Tugo, allowing my team and I to set milestones seamlessly.

![Tugo Flow Chart](https://storage.googleapis.com/jennyencho-website/tugo-img/tugo-flow-chart.png)

# FINAL WORK

## Onboarding

Users are initially greeted with a log in/sign up portal where they can customize their profile from start to finish. Users must enable location permissions, unless Tugo cannot work.
![Tugo Onboarding](https://storage.googleapis.com/jennyencho-website/tugo-img/tugo-onboarding.png)

## Song Shuffle

When a user clicks on a vinyl icon on the map, another user's current song appears on the song tab, which can be expanded to show other recently played songs from the user. Users can also shuffle through nearby songs via the shuffle icon, enabling music discovery while maintaining privacy.
![Tugo Song Shuffle](https://storage.googleapis.com/jennyencho-website/tugo-img/tugo-song-shuffle.png)

## Playlist Creation

If users like what they find, they can add the song to a playlist! Simply press the plus icon on the music tab and follow the playlist creation process.
![Playlist Creation](https://storage.googleapis.com/jennyencho-website/tugo-img/tugo-playlist-creation.png)

## Profile Visibility

The close friends and public maps are a thing of the past! Now, all users are placed on a public map, but they can choose what to share with other Tugo users – profile photo, name, playlists, and song history. In return, everyone must share their currently playing song with the public.
![Remove Close Friends](https://storage.googleapis.com/jennyencho-website/tugo-img/tugo-visibility.png)

# IMPACT

## Outcome

From usability testing from the design team to the marketing team that helped bring Tugo widespread to the UCLA campus, Tugo has helped 200+ students discover and engage with new music from artists they did not know.

As of May 2024, our top priority is to build Tugo with new designs in consideration.

## Reflections

### <i class="fa-solid fa-newspaper"></i> Stay proactive with the latest technology.

This project stressed the importance of staying current in design and tech. Redesigning features was challenging, but my background in software development and design helped me quickly adapt. On the design side, I incorporated Figma’s new prototyping and dev tools into my design workflow. On the tech side, I discovered frameworks and libraries that can enhance Tugo’s codebase.

### <i class="fa-solid fa-compass"></i> It's okay to steer projects in a different direction.

My time at Retune was invaluable. Working on the UI/UX design and frontend development of a project that directly benefited the UCLA community was incredibly fulfilling, and I'm eager to carry this momentum forward with Tugo, a project I've initiated and am developing alongside a team I've built. In this new venture, I'm ensuring design considerations are integrated into every engineering decision and ultimately, foster a learning environment for new technologies and workflows for myself and my Tugo partner Azia.
