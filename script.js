function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
        
        // Check if input starts with 'pet_'
        if (input.startsWith('pet_')) {
            // Remove 'pet_' from the beginning
            let remainingString = input.slice(4);

        }

    document.getElementById('result').innerText = result;
}


