function myFun(str) {
  const newStr = "";

  console.log(str.charAt(1));

  for (let i = 0; i < str.length; i++) {
    newStr[i] = str[i]++;
  }

  console.log(newStr);
  console.log(str[0] + 1);
}

myFun("abcdef");
