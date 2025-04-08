const changeTextButton = document.getElementById('changeTextButton');
const dynamicText = document.getElementById('dynamicText');
const addElementButton = document.getElementById('addElementButton');
const newElementsContainer = document.getElementById('newElementsContainer');


changeTextButton.addEventListener('click', () => {
    dynamicText.textContent = "The text and style have been changed!";
    dynamicText.style.fontSize = "20px";
    dynamicText.style.color = "#FF6347"; 
    dynamicText.style.fontWeight = "bold";
    dynamicText.style.textAlign = "center";
});

addElementButton.addEventListener('click', () => {
    
    const newElement = document.createElement('div');
    newElement.classList.add('dynamicElement');
    newElement.textContent = "New Element Added!";

    newElementsContainer.appendChild(newElement);
    
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove This Element";
    removeButton.style.backgroundColor = "#FF6347"; 
    
    removeButton.addEventListener('click', () => {
        newElementsContainer.removeChild(newElement);
    });
    
   
    newElement.appendChild(removeButton);
});

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (!name || !email) {
        alert("Please fill in all fields!");
    } else {
        document.getElementById('confirmation').style.display = 'block'; 
        document.getElementById('myForm').reset(); 
    }
});

document.getElementById('toggleBtn').addEventListener('click', function() {
    const confirmation = document.getElementById('confirmation');
    confirmation.style.display = confirmation.style.display === 'none' ? 'block' : 'none'; 
});