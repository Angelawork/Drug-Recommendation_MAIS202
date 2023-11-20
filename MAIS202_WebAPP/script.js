document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("symptom-form");
  const resultDiv = document.getElementById("result");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const symptomsInput = document.getElementById("symptoms").value;
    const symptoms = symptomsInput.split(",").map((symptom) => symptom.trim());

    fetch("/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        symptoms: symptoms,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          const mappedDrugNames = data.mapped_drug_names.join(", ");
          resultDiv.innerHTML = `<strong>Predicted Drug Names:</strong> ${mappedDrugNames}`;
        } else {
          resultDiv.innerHTML = `<strong>Error:</strong> ${data.error}`;
        }
      })
      .catch((error) => {
        resultDiv.innerHTML = `<strong>Error:</strong> ${error.message}`;
      });
  });
});
