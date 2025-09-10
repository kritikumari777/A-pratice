const validBrackets = (s) => {
    let map = {
        ")" : "(",
        "}" : "{",
        "]" : "[",
    };

    let stack = [];

    for (let char of s) {
        // If it's an opening bracket, push it
        if (Object.values(map).includes(char)) {
            stack.push(char);
        } 
        // If it's a closing bracket, check if matches the last opening
        else if (map[char]) {
            // if (stack.length === 0 || stack[stack.length - 1] !== map[char]) {
            //     return false;
            // }
            //  stack.pop(); // remove matched opening

            // or
             if (stack.pop() !== map[char]) 
                 return false;
        }
           
    }

    // If stack is empty, all brackets matched
    return stack.length === 0;
};

console.log(validBrackets("(){}[]"));   // true
console.log(validBrackets("([{}])"));   // true
console.log(validBrackets("(]"));       // false
console.log(validBrackets("([)]"));     // false
