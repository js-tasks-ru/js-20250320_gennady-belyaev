/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
    const new_obj = {}
    for (const key of fields){
        if (key in obj){
            new_obj[key] = obj[key]
        }
    }
    return new_obj
};