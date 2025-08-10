---
title: "Modelling NFL Quarterbacks: Choosing the Right Stats"
description: "Part 1 of my NFL quarterback modelling series. Discover which stats matter most, why box-score numbers can mislead, and how I build data-driven QB comparisons."
tags:
  - NFL
  - Quarterbacks
  - Data Science
  - Sports Analytics
  - QB Stats
  - NFL Stats
  - Quarterback Ranking
categories:
  - American Football
  - Quarterbacks
  - NFL
  - Ratings
date: 2025-08-09 12:00:00 +0000
permalink: /nfl-qb-modelling-part1/
series: "Modelling NFL Quarterbacks"
cover: /assets/images/qb_modelling_part1_cover.png
image: /assets/images/qb_modelling_part1_cover.png
author: david
show_author: true
---

![Modelling NFL Quarterbacks cover image](/assets/images/qb_modelling_part1_cover.png)

_This is the first post in my “Modelling NFL Quarterbacks” series, where I break down the process from picking stats to building ratings._

<!--more-->

### How I Model NFL Quarterbacks
When you watch an NFL game, it’s easy to get caught up in the big throws, the touchdowns, and the highlight-reel yardage. But these surface-level stats only give us hints toward the question I’m trying to answer:

**How good is this quarterback?** Or, perhaps more importantly: **Which quarterback is better?**

That’s harder to answer than it might seem. This is a league where each team faces fewer than half of the others in a season, where injuries can decimate a defence, where one week’s game might be played in a snowstorm, another in sweltering Florida heat, and another a mile above sea level. And, crucially, the quarterback — while hugely influential — is still just one piece of the puzzle.

So how do you cut through all that noise and compare them?

For me, the answer starts with data — every pass, scramble, sack, and interception logged in play-by-play form. By digging into these details, we can go beyond box-score stats and start measuring how a quarterback really performs in context. How efficient are they on each dropback? How consistent are they drive-to-drive? Do they excel under pressure, or only when the pocket is clean? And, perhaps most importantly, how does their performance stack up when you account for the quality of the defence they’re facing?

---

### Where Does the Data Come From?
My quarterback model starts with one of the richest resources in American football analytics: **play-by-play data**. Every snap is recorded — the down, distance, players on the field, result of the play, and more. This means I’m not relying on biased game summaries or my interpretation of highlight clips; I’m looking at the **quantitative building blocks** of the performance we see on our screens.

Before the fun part begins, there’s a lot of cleaning to do — and a lot of sifting through what’s irrelevant. (No, the exact time to the second that the play occurred isn’t going to help my models — but whether the game was in primetime might.) Plays like kneels, spikes, and meaningless garbage-time snaps are stripped out so they don’t distort the picture. I also set a minimum snap count — because while the Philly Special was a Super Bowl-winning play, Trey Burton probably doesn’t need to be in my QB rankings.

Once that’s done, I can build a dataset that’s no longer just raw numbers (yards, completions, touchdowns), but layered with the **situational details** that give them meaning. Everything you notice when you play or watch closely: How strong was the defence? How deep were the passes? How often was the QB pressured? This is the context that turns stats into real insights.

---

### The Stats That Matter
Once the data is cleaned, the next step is deciding which numbers actually tell us something useful. Not every stat is created equal — some look good in a game summary but collapse under scrutiny. My goal is to choose metrics that not only describe performance, but do so in a way that allows for fair comparison — whether that’s adjusting for the strength of the defence or directly measuring one quarterback against another.

Here are the core stats I use:

**QB EPA per Dropback** – Expected Points Added measures how much a quarterback’s actions on a given play change the expected points of the drive. Crucially, it’s calculated relative to what an average quarterback would be expected to produce in the same down, distance, and field position.

**Success Rate** – Consistency matters. This shows how often the quarterback gains enough yardage to keep the drive going (a “successful” play), even if it isn’t a highlight throw.

**Air Yards** – How far the ball travels in the air before it’s caught, showing whether a QB is attacking deep or relying on shorter, safer passes like screens and check-downs.

**Performance Under Pressure** – Many QBs look great with a clean pocket; far fewer keep their composure when the blitz is coming.

**Turnover Rate** – Big throws are important, but they’re meaningless if the ball is given away. A low interception or fumble rate can be the difference between winning and losing.

Each of these metrics captures a different part of a quarterback’s game. Taken together, they help form a complete picture — one that extends far beyond touchdowns and passing yards.

---

### What's Next?

These stats form the foundation of my quarterback model — but raw metrics alone don’t tell the full story. In my next article, I’ll show how I combine them into a rating system that lets us compare QBs across games, opponents, and even seasons.
