// Selecting elements
const changeTextButton = document.getElementById('changeTextButton');
const dynamicText = document.getElementById('dynamicText');
const addElementButton = document.getElementById('addElementButton');
const newElementsContainer = document.getElementById('newElementsContainer');

// Function to change the text and style dynamically
changeTextButton.addEventListener('click', () => {
    dynamicText.textContent = "The text and style have been changed!";
    dynamicText.style.fontSize = "20px";
    dynamicText.style.color = "#FF6347"; // Tomato red color
    dynamicText.style.fontWeight = "bold";
    dynamicText.style.textAlign = "center";
});

// Function to add a new element to the page
addElementButton.addEventListener('click', () => {
    // Create a new div element
    const newElement = document.createElement('div');
    newElement.classList.add('dynamicElement');
    newElement.textContent = "New Element Added!";
    
    // Append the new element to the container
    newElementsContainer.appendChild(newElement);
    
    // Create a button inside the new element to remove it
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove This Element";
    removeButton.style.backgroundColor = "#FF6347"; // Red color for remove button
    
    // Adding remove functionality
    removeButton.addEventListener('click', () => {
        newElementsContainer.removeChild(newElement);
    });
    
    // Append the remove button to the new element
    newElement.appendChild(removeButton);
});
