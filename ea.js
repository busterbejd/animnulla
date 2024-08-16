const types = {
    "type1": {},
    "type2": {},
    // other types...
};

function checkType(t) {
    if (t && !types.hasOwnProperty(t)) {
        throw new Error("unknown type: " + t);
    }
    // Further processing if the type exists
    console.log("Type exists: " + t);
}

try {
    checkType("type3"); // This will throw an error because "type3" is not in `types`
} catch (e) {
    console.error(e.message); // Output: unknown type: type3
}

checkType("type1"); // This will log: Type exists: type1
