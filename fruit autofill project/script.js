// Starter code
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// Function to filter fruits based on user input
function search(str) {
    let results = [];
    const lowerCaseStr = str.toLowerCase();
    for (let fruit of fruits) {
        if (fruit.toLowerCase().includes(lowerCaseStr)) {
            results.push(fruit);
        }
    }
    return results;
}

// Function to handle user input and update suggestions
function searchHandler(e) {
    const inputVal = e.target.value;
    let results = search(inputVal);
    showSuggestions(results, inputVal);
}

// Function to display the results as a dropdown
function showSuggestions(results, inputVal) {
    suggestions.innerHTML = '';
    if (inputVal.length > 0) {
        results.forEach(result => {
            const li = document.createElement('li');
            li.textContent = result;
            suggestions.appendChild(li);
        });
    }
}

// Function to populate the search bar with the clicked suggestion
function useSuggestion(e) {
    if (e.target.tagName === 'LI') {
        input.value = e.target.textContent;
        suggestions.innerHTML = '';
    }
}

// Event listeners for keyup and click events
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
