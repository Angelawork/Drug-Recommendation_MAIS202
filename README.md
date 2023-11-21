# Drug Recommendation_MedAdvisor
<div align="center">
    <img src="https://github.com/Angelawork/Drug-Recommendation_MAIS202/assets/113480613/0e49c9bf-e183-43cc-8571-e54eb9372c17" alt="app" style="width:425px;height:250px;">
</div>

## Project description

The problem we are solving is the inconvenience and expense of doctor appointments for common health concerns. 

Our project aims to offer a reliable medicine search system that recommends appropriate medications, leveraging extensive datasets, including medicine reviews, side effects, and interactions, to provide users with cost-effective and rapid healthcare guidance.

We chose this problem because we aim to address the barriers to accessing timely healthcare, including long waits at the hospital. Additionally, factors such as language and cultural barriers, primary care access issues, and challenges in doctor-patient communication further emphasize the need for a recommendation system to improve healthcare accessibility and quality.


## Launch the Web App

To launch the web app, follow these steps:

1. Install all the required packages by executing the following command in your terminal:

    ```bash
    pip install -r requirements.txt
    ```

2. Change into the MAIS202_WebAPP directory of this repository using `cd`:

    ```bash
    cd path/to/MAIS202_WebAPP
    ```

3. Run the web app using the following command:

    ```bash
    python web_app.py
    ```

4. Open your web browser and navigate to [http://localhost:5000](http://localhost:5000).

Now, you should be able to access and interact with the web app locally.
<div align="center">
  <img src="https://github.com/Angelawork/Drug-Recommendation_MAIS202/assets/113480613/1e5f9523-dd51-484d-b91b-dbf9cef5de70" alt="app" style="width:425px;height:225px;">
</div>

## Methodology

### a. Data Preprocessing

#### Inputs:
The Y_label is derived from the column containing the respective drugs, while the X_features consist of columns containing symptom and patient information.

#### Drug Column:
Drugs are transformed into standardized codes using either the ATC Third Level or AHFS (Pharmacologic-Therapeutic Classification System) coding systems, ensuring uniformity and consistency in drug representation.
<div align="center">
  <img src="https://github.com/Angelawork/Drug-Recommendation_MAIS202/assets/113480613/468b668b-db6b-43be-88da-ab679d6f5c22" alt="common labels" style="width:350px;height:250px;">
</div>

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
![Correct Predictions](https://github.com/Angelawork/Drug-Recommendation_MAIS202/assets/113480613/d17b11d5-6e1e-473b-b5a5-47402421032d)

## Preliminary results
Jaccard Similarity and F1 Score Comparison between models
<div align="center">
  <img src="https://github.com/Angelawork/Drug-Recommendation_MAIS202/assets/113480613/6f778b3f-b96d-4c9f-9fac-09cc7efc2842" alt="metric compare" style="width:395px;height:250px;">
</div>

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
<div align="center">
  <img src="https://github.com/Angelawork/Drug-Recommendation_MAIS202/assets/113480613/12877a3c-9f64-4789-8e46-7365525db704" alt="BayesSearch" style="width:395px;height:250px;">
</div>

### Confusion matrix for prediction performance on Top 5 most common Drugs appeared in dataset, for a total of 44204 datapoints in y_test
![demonstration](https://github.com/Angelawork/Drug-Recommendation_MAIS202/assets/113480613/75dd1106-1798-4051-b7a6-b862774f72fb)

