import telephoneCheck from "./usTelephoneCheck.ts";

console.log(telephoneCheck("1 555-555-5555")) //should return true.

console.log(telephoneCheck("1 (555) 555-5555")) //should return true.

console.log(telephoneCheck("5555555555")) //should return true.

console.log(telephoneCheck("555-555-5555")) //should return true.

console.log(telephoneCheck("(555)555-5555")) //should return true.

console.log(telephoneCheck("1(555)555-5555")) //should return true.

console.log(telephoneCheck("555-5555")) //should return false.

console.log(telephoneCheck("5555555")) //should return false.

console.log(telephoneCheck("1 555)555-5555")) //should return false.

console.log(telephoneCheck("1 555 555 5555")) //should return true.

console.log(telephoneCheck("1 456 789 4444")) //should return true.

console.log(telephoneCheck("123**&!!asdf#")) //should return false.

console.log(telephoneCheck("55555555")) //should return false.

console.log(telephoneCheck("(6054756961)")) //should return false.

console.log(telephoneCheck("2 (757) 622-7382")) //should return false.

console.log(telephoneCheck("0 (757) 622-7382")) //should return false.

console.log(telephoneCheck("-1 (757) 622-7382")) //should return false.

console.log(telephoneCheck("2 757 622-7382")) //should return false.

console.log(telephoneCheck("10 (757) 622-7382")) //should return false.

console.log(telephoneCheck("27576227382")) //should return false.

console.log(telephoneCheck("(275)76227382")) //should return false.

console.log(telephoneCheck("2(757)6227382")) //should return false.

console.log(telephoneCheck("2(757)622-7382")) //should return false.

console.log(telephoneCheck("555)-555-5555")) //should return false.

console.log(telephoneCheck("(555-555-5555")) //should return false.

console.log(telephoneCheck("(555)5(55?)-5555")) //should return false.

console.log(telephoneCheck("55 55-55-555-5")) //should return false.