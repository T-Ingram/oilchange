function displayCurrentDate() {
    const currentDateElement = document.getElementById("currentDate");
    const currentDate = new Date();
    currentDateElement.textContent = `Today's Date: ${currentDate.toDateString()}`;
}
displayCurrentDate();

function displayGreeting() {
    const userName = document.getElementById("userName").value;
    const greetingMessage = document.getElementById("greetingMessage");
    greetingMessage.textContent = `Hello, ${userName}! Welcome to your oil change guide!`;
}

function displayImages() {
    const instructionMessage = document.getElementById("instructionMessage");
    const imageSection = document.querySelector(".image-section");
    imageSection.innerHTML = "";
    // Ask the user for the number of times to display the image
    const numImagesInput = prompt("How many times would you like to see the image?");

    if (isValidNumber(numImagesInput)) {
        const numImages = parseInt(numImagesInput);
        // Display the image 'numImages' times for manual transmission     
        displayImages(numImages);
        instructionMessage.textContent = ""
    } else if (isValidNumber(numImagesInput)) {
        const numImages = parseInt(numImagesInput);
        // Display the image 'numImages' times
        displayImages(numImages);
        instructionMessage.textContent = "";
    } else {
        instructionMessage.textContent = "Please enter a valid number greater than 0.";
    }
}

function displayInstructions() {
    const transmissionSelect = document.getElementById("transmission");
    const selectedTransmission = transmissionSelect.value;



    if (selectedTransmission === "") {
        // No transmission type selected, show an error message
        instructionMessage.textContent = "Please select a valid transmission type.";
    } else if (selectedTransmission === "automatic") {
        instructionMessage.textContent = "For automatic transmission vehicles, follow these instructions...";
        // Create and display the automatic transmission image
        displayImage("https://cdn.create.vista.com/api/media/medium/382089630/stock-photo-automatic-transmission-gearbox-cross-section-automobile-transmission-gearbox-white-background?token=", "Automatic Transmission");
        // Ask the user for the number of times to display the image
    } else if (selectedTransmission === "manual") {
        instructionMessage.textContent = "For manual transmission vehicles, follow these instructions...";
        displayImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_fMLxEJdqr9H_PT5OuDAmpUM3kAK4dIleRdhhsFDqPEo5wIb0tJNLZa5ETs0WA3QREMc&usqp=CAU", "Manual Transmission");
        // Ask the user for the number of times to display the image
    } else {
        // Invalid selection, show an error message
        instructionMessage.textContent = "Please select a valid transmission type.";
        transmissionSelect.value = ""; // Clear the selection
    }





}

function displayImage(imageUrl, altText) {
    const imageSection = document.querySelector(".image-section");
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = altText;
    img.width = 200;
    imageSection.appendChild(img);
}
