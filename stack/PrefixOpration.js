// In postfix, we scan left to right.
// we pop() b then a  (a + b)

// In prefix, we scan right to left.
// we pop() a, b (a+b)

const PrefixOperation = (s) => {
    const stack = [];

    for (let i = s.length - 1; i >= 0; i--) {
        const ch = s[i];

        if (!isNaN(ch)) {
            // Convert operand to number
            stack.push(Number(ch));
        } else {
            // Operator → pop two operands
            let a = stack.pop();
            let b = stack.pop();
            let res;

            switch (ch) {
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

// ✅ Test
console.log(PrefixOperation("*+234")); // (2+3)*4 = 20
console.log(PrefixOperation("-+723")); // (7+2)-3 = 6
console.log(PrefixOperation("23+4*"))