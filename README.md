# Drug Recommendation_MAIS202

## Methodology

### a. Data Preprocessing

#### Inputs:
The Y_label is derived from the column containing the respective drugs, while the X_features consist of columns containing symptom and patient information.

#### Drug Column:
Drugs are transformed into standardized codes using either the ATC Third Level or AHFS (Pharmacologic-Therapeutic Classification System) coding systems, ensuring uniformity and consistency in drug representation.

#### Symptom Column:
1. **Feature Representation:**
   - Utilizing techniques such as one-hot encoding, Bag-of-Words (BOW), or Term Frequency-Inverse Document Frequency (TF-IDF) based on task-specific requirements.
   
2. **Feature Selection:**
   - Narrowing down symptom features to the top 500 most popular symptoms to manage computational complexity while maintaining informativeness and computational efficiency.

### b. Evaluation Metric

As a classification problem, our model recommends drugs based on symptoms. The primary evaluation metrics include:

* **Confusion Matrix and Related Metrics:**
  - Provides insight into True Positives, True Negatives, False Positives, and False Negatives.
  - Accuracy = (TP+TN) / (TP+TN+FP+FN)
  - Precision = TP / (TP + FP)
  - Recall = TP / (TP + FN)
  - F1-Score = 2 * (Precision * Recall) / (Precision + Recall)

* **Logistic Loss (Log Loss):**
  - Evaluates prediction confidence by penalizing wrong predictions made with high confidence.

* **Jaccard Coefficient and F1 Score:**
  - Set-based metrics measuring similarity between predicted and true sets of drugs.

# Model after BayesSearch Fine-Tuning

The initial evaluation of the Random Forest Classifier, using the MultiOutputClassifier with specific hyperparameters, yielded Jaccard scores of 0.4100 and F1 scores of 0.5607. After fine-tuning through BayesSearchCV, the chosen hyperparameters (as shown below) resulted in improved performance:

```python
MultiOutputClassifier(estimator=RandomForestClassifier(bootstrap=False,
                                                       max_depth=37,
                                                       min_samples_leaf=4,
                                                       min_samples_split=14,
                                                       n_estimators=112,
                                                       random_state=42))
```
The subsequent Jaccard scores increased, indicating better model accuracy (e.g., from 0.4100 to 0.4298), and the F1 scores also showed enhancement (e.g., from 0.5607 to an improved 0.5802). This demonstrates the efficacy of the fine-tuning process and justifies the hyperparameter choices, as the optimized model better captures underlying patterns in the data, leading to superior predictive performance.
![tree](https://github.com/Angelawork/Drug-Recommendation_MAIS202/assets/113480613/17d16929-b0c2-44cc-a0a8-decdbe6a36c6)
![BayesSearch](https://github.com/Angelawork/Drug-Recommendation_MAIS202/assets/113480613/12877a3c-9f64-4789-8e46-7365525db704)


