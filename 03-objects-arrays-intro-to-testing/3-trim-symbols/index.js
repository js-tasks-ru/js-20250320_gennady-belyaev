/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    if (size === undefined) return string;

    let result = '';
    let currentChar = '';
    let count = 0;
  
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (char === currentChar) {
            count++;
        } else {
            currentChar = char;
            count = 1;
        }
        
        if (count <= size) {
            result += char;
        }
    }
    
    return result;
}
