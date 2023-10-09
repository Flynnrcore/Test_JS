import {encoded, translations} from './data.js'

const decodeFields = (encoded, translations) => {
  const excludedFields = ["groupId", "service", "formatSize", "ca"];

  const decoded = encoded.map((item) => {
    const decodedItem = {};
  
    for (let key in item) {
      if (excludedFields.includes(key)) {
        decodedItem[key] = item[key];
      } else if (translations.hasOwnProperty(item[key])) {
        decodedItem[key] = translations[item[key]];
      } else {
        decodedItem[key] = item[key];
      }
    }
  
    return decodedItem;
  });
  
  const uniqueIds = [...new Set(encoded.flatMap((item) => Object.values(item)).filter((value) => translations.hasOwnProperty(value)))];
  
  return { decoded, uniqueIds };
};

console.log("Let's rock");
console.log(encoded, translations);

const decoded = decodeFields(encoded, translations);
console.log(decoded);
