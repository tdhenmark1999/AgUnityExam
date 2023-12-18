// Event listener for when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    loadData();
});

// Async function to load data from the JSON file
async function loadData() {
    try {
        const response = await fetch('data.json');
        const jsonData = await response.json();
        displayData(jsonData.data);
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

// Function to display data on the page
function displayData(dataArray) {
    // Define background colors for each category
    const categoryColors = {
        men: ['#D7F5F3', '#38B2AC'],
        women: ['#E5DCFB', '#513992'],
        youth: ['#CCE6FF', '#3182CE']
    };

    // Process each category in the data array
    dataArray.forEach(data => {
        // Get elements for the current category
        const cardElement = document.getElementById(`${data.name}-card`);
        const totalElement = cardElement.querySelector(`#${data.name}-total`);
        const countryList = cardElement.querySelector('.country-list');
        totalElement.textContent = data.total;

        let counter = 0;
        let rowContent = [];

        // Iterate through countries in the current category
        for (const country in data) {
            if (country !== 'name' && country !== 'total') {
                // Set background colors for card and text
                const colors = categoryColors[data.name];
                const cardBgColor = colors[0]; // Background color for card
                const textBgColor = colors[1]; // Background color for text

                // Create country div with styles
                const countryDiv = `<div class='container__country' style='background-color: ${cardBgColor};color:${textBgColor};'><span class='text-count-value' style='background-color: ${textBgColor};'>${data[country]}M</span> ${capitalizeFirstLetter(country)}</div>`;
                rowContent.push(countryDiv);
                counter++;

                // Add a new row every two items
                if (counter % 2 === 0) {
                    countryList.innerHTML += `<div class='country-row'>${rowContent.join('')}</div>`;
                    rowContent = []; // Reset row content for the next row
                }
            }
        }

        // Add any remaining items to the last row
        if (rowContent.length > 0) {
            countryList.innerHTML += `<div class='country-row'>${rowContent.join('')}</div>`;
        }
    });
}

// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
