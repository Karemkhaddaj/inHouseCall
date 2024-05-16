import React from 'react'

function Prob4() {

    function isValidBrackets(input) {
        const stack = [];
        const brackets = {
            '(': ')',
            '[': ']',
            '{': '}'
        };

        for (let char of input) {
            if (brackets[char]) {
                stack.push(brackets[char]);
            } else if ([')', ']', '}'].includes(char)) {
                if (stack.pop() !== char) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
    const results = [
        isValidBrackets("()[]{}"),
        isValidBrackets("({[]})"),
        isValidBrackets("("),
        isValidBrackets("([)]"),
        isValidBrackets("{[]}")
    ];

    return (
        <div>
            <h1>Checking cases: </h1>
            <p>{"()[]{}: " + results[0]}</p>
            <p>{"({[]}): " + results[1]}</p>
            <p>{"(: " + results[2]}</p>
            <p>{"([)]: " + results[3]}</p>
            <p>{"{[]}: " + results[4]}</p>
        </div>
    )
}
export default Prob4