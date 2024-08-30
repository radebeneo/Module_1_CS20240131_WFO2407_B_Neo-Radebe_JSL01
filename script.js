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

            // Find the position of the first letter (after the numbers)
            let firstLetterIndex = -1;

            for (let i = 0; i < remainingString.length; i++) {

                // Check if the character is not a number
                if (isNaN(remainingString[i])){
                    firstLetterIndex = i;
                    break;
                }
            }

            // Check if we found a letter and there are numbers before it
            if (firstLetterIndex > 0 && firstLetterIndex < remainingString.length){
            result = 'Valid Syntax';
            document.getElementById('result').className = 'valid';
            } 
            else {
                result = 'Invalid Syntax';
                document.getElementById('result').className = 'invalid';
            }
        }

        else {
            result = 'Invalid Syntax';
            document.getElementById('result').className = 'invalid';
        }

    document.getElementById('result').innerText = result;
}


