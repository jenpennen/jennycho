---
title: Tugo
publishDate: 2023-05-01 00:00:00
image: https://storage.googleapis.com/jennyencho-website/landing-img/tugo-landing.png
img_alt: tugo
label: Mobile App
description: |
  Mobile app remixing social connection through real-time music sharing.
org: UCLA
role: UX Designer
second_role: Frontend Engineer
timeline: "October 2021 - Ongoing"
complete: true
---

# Context

## Background

**Tugo** was inspired by a common user curiosity: _What songs are the people around me listening to?_ Tugo (formerly Retune) is a mobile application designed to answer that curiosity by making music-sharing with others more transparent and social.

## Team

This project began in October 2021 as part of UCLA DevX. Formerly named Retune, I joined a team of 6 engineers as a UI/UX designer and developer. As Retune team came to an end in 2024, I continued working on this project, renaming it Tugo. I formed a new team of two alongside fellow developer and colleague Nastazia Coronado.

## Problem

> How might we reimagine social connections through an enaging music discovery experience?

At UCLA, students eagerly took part in a viral TikTok trend where influencers asked strangers what song they were listening to. Since music naturally brings people together, this trend showed how powerful it can be for making connections. While this trend created a fun way to engage with others at the start of a new academic term, _meeting new people in a large and bustling campus like UCLA can often feel overwhelming._

# Research

## Competitive Analysis

First, I conducted an analysis on four existing music platforms — _Spotify, Apple Music, SoundCloud, and YouTube Music_. This revealed a gap: none of these platforms offered an easy way to share music with people nearby.

![Competitive Analysis](https://storage.googleapis.com/jennyencho-website/tugo-img/competitive-analysis.png)

## Contextual Inquiry

My next priority was to gather some thoughts about our concept from the students around me. _I reached out to the UCLA community first to understand students' music-listening behaviors and frustrations._ Additionally, I reached out to students outside of UCLA, as well as non-students, to hear as many diverse perspectives possible.

## Affinity Mapping

Given the responses of 200+ interviewees, I used an affinity map to identify common themes and tackle actionable insights. This approach revealed several distinct categories of feedback.

![Affinity Mapping](https://storage.googleapis.com/jennyencho-website/tugo-img/affinity-map.png)

## Key Insights

### <i class="fa-solid fa-eye-slash"></i> People worry about public visibility on social platforms.

Although many people were fond of the idea, they were also concerned with how their personal information would be used/shared on Tugo.

### <i class="fa-solid fa-lightbulb"></i> People have an innate curiosity about others around them.

People are curious about what the people around them are doing, including what songs they are listening to.

### <i class="fa-solid fa-music"></i> People want to explore new music genres.

People are open to exploring new music genres regardless of their preferences, but do not know where to look.

## Key Solutions

### <i class="fa-solid fa-eye-slash"></i> Discover new songs privately or publicly.

Users will have public and private viewing options to make the music discovery experience accessible for all users with varying preferences.

### <i class="fa-solid fa-lightbulb"></i> Access songs that other Tugo users nearby are listening to.

Users can see what songs other Tugo users are listening to, as well as their recent music activity if they want to share it.

### <i class="fa-solid fa-music"></i> Allow users to listen to songs for a few seconds.

Users can only listen to up to 30 seconds of a song to maximize the music discovery experience as much as possible for people on the move.

# Design Process

## Low-Fi Wireframes

To kickstart the design process, I created low-fidelity wireframes to provide the engineering team(and myself) with a basic framework while the design team synthesized user insights and refined the visual elements.

![Low-Fi Wireframes](https://storage.googleapis.com/jennyencho-website/tugo-img/retune-low-fi-wireframes.png)

## Style Guide

I developed a UI style guide to ensure that components were styled consistently throughout the app. Inspired by the blue summer skies of Los Angeles, this style guide was intended to reflect that aesthetic.
![Style Guide](https://storage.googleapis.com/jennyencho-website/tugo-img/style-guide.png)

## Usability Testing

Starting with the old Retune designs, I created a working prototype and recruited 20 participants for user feedback. I decided to use Figma's prototype feature due to the cost of our other option, Maze. While Figma had some limitations compared to Maze, I recieved valuable feedback on the existing designs.

![Old Retune Designs](https://storage.googleapis.com/jennyencho-website/tugo-img/old-retune-designs.png)

## Feedback

### <i class="fa-solid fa-eye-slash"></i> Remove the close friends and public viewing maps.

While participants appreciated the public and private viewing options with the close friends and public maps, I identified a significant UX flaw: _these options should apply to the user, not the map_. A striking 60% of the participants chose the close friends map over the public map, and nearly half expressed no preference. _There was essentially no functional difference between the two maps_. Instead of two maps, I introduced a feature in the user's profile settings that allows users to selectively share personal information with the public.

![Remove Close Friends](https://storage.googleapis.com/jennyencho-website/tugo-img/retune-tugo-remove-closefriends.png)

### <i class="fa-solid fa-person-digging"></i> Scrap the followers feature.

Many participants noted that the follow button felt out of place, making the app feel more like a social network than a music discovery platform. Moreover, the profile view of other Tugo users, along with their profile handles, made it difficult to access the play button. This led me to conclude that it is better to _keep all users' information hidden during the song shuffling process_ to preserve the focus on music exploration and discovery.

![Remove Follow Feature](https://storage.googleapis.com/jennyencho-website/tugo-img/retune-tugo-remove-follower.png)

### <i class="fa-solid fa-headphones"></i> Share less on the music tab.

One key feature my Retune team developed was the user music tab, which displays a user’s current song, favorite albums, and artists. However, only 20% of participants fully explored it, and _80% found it too cluttered and hindered their discovery experience_. To address this, I streamlined the music tab to focus on song shuffling and added a profile view for detailed music activity.

![Less Clutter](https://storage.googleapis.com/jennyencho-website/tugo-img/retune-tugo-remove-clutter.png)

## Flow Chart

Given our feedback, I revised Tugo's flow chart and took into consideration new features to replace old and obsolete ones. This process further helped to breakdown the essential features and steps of building Tugo, allowing my team and I to set milestones seamlessly.

![Tugo Flow Chart](https://storage.googleapis.com/jennyencho-website/tugo-img/flow-chart.png)

# Final Work

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

# Impact

## Outcome

From usability testing from the design team to the marketing team that helped bring Tugo widespread to the UCLA campus, _Tugo has helped 200+ students discover and engage with new music from artists they did not know._ As of May 2024, our top priority is to build Tugo with new designs in consideration.

## Reflections

### <i class="fa-solid fa-laptop-code"></i> Don't be afraid to seek out new technologies.

After two years of using the same tools at Retune, I started looking for ways to improve my workflow. I dove into Figma's new features, like their prototyping tools, to make my designs even better. On the tech side, I started exploring new frameworks and libraries to make Tugo's code cleaner and more efficient. _This process of trying new things helped me come up with new ideas for Tugo and gave me a stronger sense of ownership over the project._

### <i class="fa-solid fa-location-arrow"></i> It's okay to steer projects in a different direction.

Leading the design and development of a project for the UCLA community was extremely rewarding, and I'm excited to bring that energy to Tugo. With Tugo, I'm making sure design is a top priority in every step of the process. Plus, _I'm using this as a chance to learn new things and try out new ways of working, both for myself and for my team partner, Azia._
