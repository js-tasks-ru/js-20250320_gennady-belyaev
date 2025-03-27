/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    var new_arr = [...arr]
    return param === 'asc'
            ? new_arr.sort((a,b) => a.localeCompare(b, ['ru', 'en'], { caseFirst: "upper" }))
            : new_arr.sort((a,b) => b.localeCompare(a, ['ru', 'en'], { caseFirst: "upper" }))
}
