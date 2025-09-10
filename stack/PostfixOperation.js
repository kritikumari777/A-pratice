// In postfix, we scan left to right.

// In prefix, we scan right to left.

const PostfixOperation = (s) => {
    const stack = [];

    for (let char of s) {
        if (!isNaN(char)) {
            // Operand → push as number
            stack.push(Number(char));
        } else {
            // Operator → pop two operands
            let b = stack.pop();
            let a = stack.pop();
            let res;

            switch (char) {
                case "+": res = a + b; break;
                case "-": res = a - b; break;
                case "*": res = a * b; break;
                case "/": res = a / b; break;
                default: return "INVALID";
            }

            stack.push(res);
        }
    }

    return stack.pop();
};

console.log(PostfixOperation("23+4*")); // (2+3)*4 = 20
console.log(PostfixOperation("234*+")); // 2+(3*4) = 14
console.log(PostfixOperation("52-"));   // 5-2 = 3
