/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const originalValue = init;
    const increment = function()
    {
        return ++init;
    }
    const decrement = function()
    {
        return --init;
    }
    const reset = function()
    {
        init = originalValue;
        return init;
    }
    return {increment, decrement, reset};
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */