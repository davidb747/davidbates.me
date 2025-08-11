---
permalink: /deepcue/
title: "DeepCue"
subtitle: "Snooker Machine Learning Model"
---

## DeepCue — Snooker Prediction Model

**Goal:**  
Predict professional snooker match outcomes using historical performance data and engineered performance metrics.

**Approach:**  
Collected and cleaned data from over 41,000 matches from public sources. Engineered rolling averages for break size, pot success rate, and safety success rate per player. Trained both XGBoost and PyTorch neural network models, tuning hyperparameters via grid search and cross-validation.

**Technologies:**  
Python, Pandas, NumPy, XGBoost, PyTorch, Matplotlib

**Key Achievements:**
- Achieved ROC AUC > 0.74 on unseen test data.
- Developed a full end-to-end pipeline from ingestion to visualisation.
- Produced feature importance analysis to interpret predictions.

**Problems Faced:**
- Missing frame-by-frame data for older matches required adjustments.
- Class imbalance for players with fewer matches.
- Limited or inconsistent data for non-major tournaments made it difficult to extract key metrics (e.g., safety success rate).

**Where Next?:**
- Integrate live betting odds for in-play calibration.
- Implement Monte Carlo simulations to predict tournament outcomes using game-by-game predictions.
  
---

_Updates will follow after the start of the NFL season, as my NFL models are currently taking priority._

**Read more:** [DeepCue Articles](https://davidbates.me/snooker/archives/)

