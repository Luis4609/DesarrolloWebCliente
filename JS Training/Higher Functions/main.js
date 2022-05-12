const companies = [
  { name: "Company One", category: "Finance", start: 1980, end: 2005 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2000 },
  { name: "Company Three", category: "Auto", start: 1994, end: 2015 },
  { name: "Company Four", category: "Tecnology", start: 1983, end: 2002 },
  { name: "Company Five", category: "Finance", start: 2000, end: 2005 },
  { name: "Company Six", category: "Auto", start: 1980, end: 2005 },
  { name: "Company Seven", category: "Finance", start: 1950, end: 2015 },
  { name: "Company Eight", category: "Tecnology", start: 1943, end: 2005 },
  { name: "Company Nine", category: "Retail", start: 1986, end: 2006 },
];

const ages = [33, 32, 43, 54, 12, 23, 34, 93, 32, 21, 45, 10, 5];

// for(let i = 0; i < companies.length; i++){
//     console.log(companies[i]);
// }

//forEach(item for iterate, index, full array)
companies.forEach(function (company, index, companies) {
  //   console.log(company.name);
});

//filter
//  const canDrink = ages.filter((age) => {
//      if(age >= 21){
//          return true;
//      }
//  })
//21 or more
const canDrink = ages.filter((age) => age >= 21);

//Filter retail companies
const retailsCompanmies = companies.filter(
  (company) => company.category === "Retail"
);

//Gets 80s companies
const eightiesCompanies = companies.filter(
  (company) => company.start >= 1980 && company.start <= 1990
);

//Gets companies that lasted 10 years ir  more
const lastedMoreThat10Years = companies.filter(
  (company) => company.end - company.start >= 10
);

//map
//Create new array of company names
const companyNames = companies.map(
  (company) => `${company.name} [${company.start} - ${company.end}]`
);

//Test map with AGES
const agesSquare = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);

//sort
// const sortedCompanies = companies.sort((c1, c2) => {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

//Sort companies by start year
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

//Sort ages
const sortAges = ages.sort((a, b) => a - b);

//reduce
const ageSum = ages.reduce((total, age) => total + age, 0);

//Total years for companies
const totalYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);

//Combine methods

const combine = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(`%cCombine: ${combine}`, "font-weight: bold; color: red");

// const test = ages.map((age) =>
//   document.body.append((document.createElement("div").innerHTML = age + 1))
// );

// console.log(`%cTest: ${test}`, "font-weight: bold; color: cyan");
