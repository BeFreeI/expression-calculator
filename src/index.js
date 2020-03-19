function eval() {
    // Do not use eval!!!
    return;
}

function check(str, bracketsConfig) {
    const brackets = bracketsConfig.map((el) => el.join(""));
    for(let i = 0; i < brackets.length; i++) {
      if(str.includes(brackets[i])) {
        str = str.replace(brackets[i], "");
        i = -1;
      }
    }
    return (str.length)? false : true;
}

function expressionCalculator(expr) {
    if(!check(expr.replace(/[^()]/g, ""), [["(", ")"]]))
        throw new TypeError('ExpressionError: Brackets must be paired');
    return (new Function(`
        let res = ${expr};
        if (res === Infinity)
        throw new TypeError('TypeError: Division by zero.');
        else
          return res;
    `))();
}

module.exports = {
    expressionCalculator
}