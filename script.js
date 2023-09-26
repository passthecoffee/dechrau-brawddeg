// Sample JSON data
const jsonData = {
    "past": ["Past", "Past 2", "Past 3"],
    "present": ["Present", "Present 2", "Present 3"],
    "perfect": ["Future", "Post 2c", "Post 3c"]
};

const categoryRadioButtons = document.querySelectorAll('input[type="radio"][name="category"]');
const postDropdown = document.getElementById('postDropdown');
const postList = document.getElementById('postList');

// Populate the dropdown based on selected category
function populateDropdown(category) {
    postDropdown.innerHTML = '<option>Select a post</option>';
    jsonData[category].forEach(post => {
        const option = document.createElement('option');
        option.textContent = post;
        postDropdown.appendChild(option);
    });
}

// Event listener for radio buttons
categoryRadioButtons.forEach(radio => {
    radio.addEventListener('change', function () {
        const selectedCategory = this.value;
        populateDropdown(selectedCategory);
    });
});

// Event listener for dropdown selection
postDropdown.addEventListener('change', function () {
    const selectedPost = this.value;
    if (selectedPost !== "Select a post") {
        postList.innerHTML = `<li>${selectedPost}</li>`;
    } else {
        postList.innerHTML = '';
    }
});

