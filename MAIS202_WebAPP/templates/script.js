document
  .getElementById("feel-today-btn")
  .addEventListener("click", function () {
    document.getElementById("first-page").style.display = "none";
    document.getElementById("second-page").style.display = "block";
  });

document
  .getElementById("symptom-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var symptoms = document.getElementById("symptoms").value;
    fetchPredictions(symptoms);
  });

function fetchPredictions(symptoms) {
  // This function needs to be connected to a backend service
  // Here we simulate the response
  setTimeout(() => {
    const fakeResponse = {
      predicted_atc: "Medication 1, Medication 2, Medication 3, Medication 4",
    };
    showPredictions(fakeResponse.predicted_atc);
  }, 1000);
}

function showPredictions(medications) {
  document.getElementById("second-page").style.display = "none";
  document.getElementById("third-page").style.display = "block";
  const medList = document.getElementById("medication-list");
  medList.innerHTML = medications
    .split(", ")
    .map((med) => <div class="medication">${med}</div>)
    .join("");
}
