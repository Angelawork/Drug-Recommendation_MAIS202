# Drug-Recommendation_MAIS202
## Methodology
### a. Data Preprocessing
Inputs: 
The column containing the respective drugs will serve
as our Y_label, while the remaining columns containing
symptom and patient information will be considered as
X_features.

Drug column: 
The drugs are transformed into standardized
codes using either the ATC Third Level or AHFS
(Pharmacologic-Therapeutic Classification System) coding
systems. This standardization ensures uniformity and consistency
in drug representation.

Symptom column:
1. Feature Representation: For symptom representation, we
consider multiple techniques such as one-hot encoding,
Bag-of-Words (BOW), or Term Frequency-Inverse
Document Frequency (TF-IDF) based on the specific
requirements of the task.
2. Feature Selection: To manage computational complexity
and focus on the most relevant information, we narrow
down our symptom features to the top 500 most popular
symptoms. This selection ensures a balance between
informativeness and computational efficiency.

### b.Evaluation Metric
Our project is a classification problem, where based on certain
symptoms, our model will classify or recommend a set of drugs.
Therefore, the primary evaluation metric that would be relevant here is
the confusion matrix, accuracy, precision-recall, and logistic loss for the
classification problem.
* Confusion Matrix and Related Metrics: The confusion matrix will give a clear picture of the True
Positives, True Negatives, False Positives, and False Negatives.
○ Accuracy = (TP+TN) / (TP+TN+FP+FN)
○ Precision = TP / (TP + FP)
○ Recall = TP / (TP + FN)
○ F1-Score = 2 * (Precision * Recall) / (Precision + Recall)
* Logistic Loss (Log Loss): Since our model outputs probabilities,
log loss will give an idea about the confidence of the predictions.
It penalizes wrong predictions that are made with high
confidence.
* Jaccard Coefficient and F1 score: these are set-based metrics
which measure the similarity between the predicted set of drugs
and the true set of drugs.
