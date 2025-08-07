---
title: "Launch of DeepCue"
date: 2025-05-02T12:00:00-00:00
categories:
  - Snooker
  - DeepCue
tags:
  - Snooker
  - DeepCue
  - Prediction
  - David Bates
---

🤖 DeepCue: Zhao Xintong will WIN the World Snooker Championship 🏆 

This week, I gave myself a 48-hour challenge:
- Scrape and clean live snooker match data
- Engineer predictive features from performance stats
- Train both an XGBoost and a Neural Network model
- Tune hyperparameters and generate predictions
- Develop an MVP of DeepCue — a snooker match prediction engine
- Do it all while revising for exams 😅

And the first prediction is in!

Both models independently predicted Zhao Xintong to best Mark Williams in the final — but with different confidence levels:
📈 XGBoost: 68% probability
🤖 Neural Network: 52% probability

🎯 Model performance on test data:
XGBoost: 68.13% accuracy, 0.7513 ROC AUC
Neural Net: 67.09% accuracy, 0.7417 ROC AUC

This project tested my end-to-end data science skills under time pressure — from obtaining the data used to training and interpreting the models.

This project tested my full-stack data science skills under time pressure — from raw data scraping to model interpretation.

The models were trained on 41,290 ranking matches (2006–present) using 81 engineered features, primarily frame-level scoring trends over time.

I’ve got lots of ideas for improvement and hope to take this further over the summer, including applying the approach to other sports with more accessible data.

Let’s see if the models were right! 🧠🎯
