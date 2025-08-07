---
title: "Launch of DeepCue"
date: 2025-05-02T12:00:00-00:00
categories:
  - Snooker
  - DeepCue
  - Prediction
  - Machine Learning
  - David Bates
tags:
  - DeepCue
  - Snooker
  - Sports Analytics
  - Machine Learning
  - Predictive Modelling
  - XGBoost
  - Neural Networks
  - Model Evaluation
  - Model Launch
  - David Bates
---

<h2>🤖 DeepCue: Zhao Xintong will WIN the World Snooker Championship 🏆</h2>

<small><em>~3 min read</em></small>

---

This week, I gave myself a 48-hour challenge:

- Scrape and clean live snooker match data  
- Engineer predictive features from performance stats  
- Train both an XGBoost and a Neural Network model  
- Tune hyperparameters and generate predictions  
- Develop an MVP of DeepCue — a snooker match prediction engine  
- Do it all while revising for exams 😅

And the first prediction is in!

Both models independently predicted **Zhao Xintong** to beat **Mark Williams** in the final — but with different confidence levels:

- 📈 **XGBoost**: 68% probability  
- 🤖 **Neural Network**: 52% probability  

---

### 🎯 Model Performance (on test data)

- **XGBoost**: 68.13% accuracy, 0.7513 ROC AUC  
- **Neural Net**: 67.09% accuracy, 0.7417 ROC AUC  

---

This project tested my **full-stack data science skills** under time pressure — from scraping raw data to modelling and interpretation.

The models were trained on **41,290 ranking matches (2006–present)** using **81 engineered features**, primarily based on frame-level scoring trends over time.

---

I’ve got lots of ideas for improvement and plan to take this further over the summer — including applying the approach to other sports with more accessible data.

Let’s see if the models were right! 🧠🎯
