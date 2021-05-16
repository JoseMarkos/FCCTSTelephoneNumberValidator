const filter = (str: string): string => {
  const match = str.match(/\d/g);
  return match ? match.join('') : str;
}

function telephoneCheck(str: string): boolean {
  const includesNoValidChar = str.match(/[^\-\d\(\)\s]/g);
  
  if (includesNoValidChar)
    return false;  

  const dreamCaseOne = str.match(/^1?\s?\(\d{3}\)\s?\d{3}\-?\d{4}/g);
  const dreamCaseTwo = str.match(/^1?\s?\d{3}\s?\d{3}\-?\d{4}/g);
  const dreamCaseThree = str.match(/^1?\-?\s?\d{3}\-?\s?\d{3}\-?\d{4}/g);
  const dreamCaseFour = str.match(/^1?\s?\d{3}\s?\s?\d{3}\s?\d{4}/g);

  if (dreamCaseOne || dreamCaseTwo || dreamCaseThree || dreamCaseFour) {
    const filtered          = filter(str);
    const includesExtension = filtered.match(/^1/);
    let usTelephoneDigits   = 10;
  
    if (includesExtension) {
      usTelephoneDigits = 11;
    }

    return usTelephoneDigits === filtered.length; 
  }
  
  return false;
}
