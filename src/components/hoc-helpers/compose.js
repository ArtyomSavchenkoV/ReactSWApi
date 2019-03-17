const compose = (...functions) => (comp) => {
    return functions.reduceRight((prevResult, f) => f(prevResult), comp);
};

export default compose;