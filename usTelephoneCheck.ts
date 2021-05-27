export default function (str: string): boolean {
  const includesNoValidChar = str.match(/[^\-\d\(\)\s]/g);
  
  if (includesNoValidChar)
    return false;  

  const firstGroupDividedByParentheses  = str.match(/^1?\s?\(\d{3}\)\s?\d{3}\-?\d{4}/g);
  const firstGroupDividedByWhiteSpace   = str.match(/^1?\s?\d{3}\s?\d{3}\-?\d{4}/g);
  const dividedByDash                   = str.match(/^1?\-?\s?\d{3}\-?\s?\d{3}\-?\d{4}/g);
  const dividedByWhiteSpace             = str.match(/^1?\s?\d{3}\s?\d{3}\s?\d{4}/g);
  
  if (firstGroupDividedByParentheses || firstGroupDividedByWhiteSpace || dividedByDash || dividedByWhiteSpace) {
    const digits            = filterDigits(str);
    const includesExtension = digits.match(/^1/);
    let usTelephoneDigits   = includesExtension ? 11 : 10;

    return usTelephoneDigits === digits.length; 
  }
  
  return false;
}

const filterDigits = (str: string): string => {
  const match = str.match(/\d/g);
  return match ? match.join('') : str;
}