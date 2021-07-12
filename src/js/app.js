export default class Validator {
    static transformNumbers(userNumber) {
        if (userNumber) {
            const dashBracketsExp = /[ ()-]/g;
            const transformedStr = userNumber.replace(dashBracketsExp, '');

            if (transformedStr.length === 11) {
                return transformedStr.replace(/^8/, '+7');
            }
            return transformedStr;
        }
        throw new Error('empty value');
    }
}
