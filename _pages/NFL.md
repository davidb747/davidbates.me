---
permalink: /nfl/
title: "NFL"
subtitle: "NFL Elo rating, data analysis, and machine learning model."
layout: single
---

I have a lot of plans with the NFL, including Elo ranking systems, machine learning models, and in-depth statistical analysis as I go.

---

### NFL QB Ratings Example

Here's an example of how my analysis ranks NFL quarterbacks by converting **EPA per attempt** during a match into an Elo-style rating.

Only quarterbacks with **more than 10 snaps** in a match are included in the update.

Key players are highlighted:
- Tom Brady (<span style="color:orange;">orange</span>)
- Aaron Rodgers (<span style="color:red;">red</span>)
- Patrick Mahomes (<span style="color:blue;">blue</span>)
- Brock Purdy (<span style="color:pink;">pink</span>)

<p align="center">
  <img src="/assets/images/qb_elo_fig.png" alt="Quarterback Elo Ratings since 1999" width="90%">
</p>

**Warning:** All initial ratings start at 0. There is a **learning period** before ratings become reliable — both for new QBs entering the league and during the early seasons shown in the plot.
{: .notice--warning}
