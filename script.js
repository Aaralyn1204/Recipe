document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to handle via JS
  
    let name = document.getElementById('name').value;
    let recipe = document.getElementById('recipe').value;
    let feedback = document.getElementById('feedback').value;
  
    if (name && recipe && feedback) {
      alert(`Thank you for your feedback, ${name}!\nYou tried the ${recipe} recipe and shared your thoughts: \n"${feedback}"`);
    } else {
      alert("Please fill out all fields.");
    }
  
    // Reset the form
    document.getElementById('feedbackForm').reset();
  });
  