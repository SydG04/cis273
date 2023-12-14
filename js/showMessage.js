//variables
var textArea = document.getElementById("message-input");
var addMessageBtn = document.getElementById("addMessage");

//event listener
addMessageBtn.addEventListener("click", toggleTextArea);

function toggleTextArea() {
  if (textArea.style.display === "block") {
    //hide textArea
    addMessageBtn.textContent = "+ Add Message"
    textArea.style.display = "none";
  } else { 
    //reveal textArea
    addMessageBtn.textContent = "- Remove Message"
    textArea.style.display = "block";
  }
}

// Hiding the textarea initially
textArea.style.display = 'none';