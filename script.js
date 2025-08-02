document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
  
    const score = document.getElementById("score");
    const category = document.getElementById("category");
  
    if (!height || !weight || !age || !gender) {
      alert("Please fill in all fields.");
      return;
    }
  
    const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
    score.textContent = bmi;
  
    let resultText = "";
    let color = "";
  
    if (bmi < 18.5) {
      resultText = "Underweight";
      color = "#f39c12";
    } else if (bmi < 25) {
      resultText = "Normal";
      color = "#27ae60";
    } else if (bmi < 30) {
      resultText = "Overweight";
      color = "#e67e22";
    } else {
      resultText = "Obese";
      color = "#e74c3c";
    }
  
    category.textContent = resultText;
    score.style.color = color;
    category.style.color = color;
  });
  