    // Generate Combinations: Write a function that generates all combinations
    //  of a given string. For example,
    //  "abc" should return ["a", "b", "c", "ab", "ac", "bc", "abc"]

    let str='abc'
    function generateCombinations(str) {
        let results = [];
    
        // Loop over each character in the string
        for (let i = 0; i < str.length; i++) {
            // Get the current results length to know where to stop in the next loop
            let currentLength = results.length;
    
            // Push the single character to the results array
            results.push(str[i]);
    
            // Loop over the existing results and append the current character to each
            for (let j = 0; j < currentLength; j++) {
                results.push(results[j] + str[i]);
            }
        }
    
        return results;
    }
    
    console.log(generateCombinations(str));
    
