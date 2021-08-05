// BTW oefening 1 - van exclusief BTW naar inclusief BTW:
/* 
const btw = (exBtw) => {
    return exBtw * 0.21;
};

const inBtw = (exBtw) => {
    const resultBtw = (btw(exBtw))
    return resultBtw + exBtw;
}; 

console.log (inBtw (15));
*/

// BTW oefening 2 - van inclusief BTW naar array van exclusief BTw en BTW:

const exBtw = (inBtw) => {
    return inBtw / 1.21;
};

const btw = (inBtw) => {
    const ruwBtw = exBtw(inBtw);
    const resultBtw = inBtw - ruwBtw;
    return Math.round (resultBtw*100)/100;
};

const verdeling = (inBtw) => {
    const resultBtw = btw(inBtw);
    const resultExBtw = exBtw(inBtw);
    return [resultBtw, resultExBtw];
};

console.log (verdeling(18.15))
