// Balanced Brackets:Write a function that checks if a string containing brackets ({},[],()) is balanced. 
// For example, "({[]})" should return true.

function balancedBrackets(str) {
    let stack = [];
    let brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of str) {
        if (brackets[char]) {
            // If the character is an opening bracket, push it onto the stack
            console.log(brackets[char],"ppp");
            stack.push(char);
        } else {
            // If the character is a closing bracket, check if it matches the top of the stack
            let top = stack.pop();
            if (brackets[top] !== char) {
                return false;
            }
        }
    }

    // If the stack is empty, all brackets are balanced
    return stack.length === 0;
}



let str = "([{}])]";
console.log(balancedBrackets(str)); // Output: false




