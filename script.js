const convertButton = document.getElementById("convert-btn");
const inputNumb = document.getElementById("number");
const output = document.getElementById("output");

const romanNumbers = [
  { value: 1000, symbol: "M" },
  { value: 900, symbol: "CM" },
  { value: 500, symbol: "D" },
  { value: 400, symbol: "CD" },
  { value: 100, symbol: "C" },
  { value: 90, symbol: "XC" },
  { value: 50, symbol: "L" },
  { value: 40, symbol: "XL" },
  { value: 10, symbol: "X" },
  { value: 9, symbol: "IX" },
  { value: 5, symbol: "V" },
  { value: 4, symbol: "IV" },
  { value: 1, symbol: "I" },
];

const convert = () => {
  let result = "";
  let numb = Number(inputNumb.value);
  if (inputNumb.value === "") {
    output.innerText = "Please enter a valid number";
  } else if (numb < 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (numb >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else {
    for (let i = 0; i < romanNumbers.length; i++) {
      while (numb >= romanNumbers[i].value) {
        result += romanNumbers[i].symbol;
        numb -= romanNumbers[i].value;
      }
    }
    output.innerText = result;
  }
};

convertButton.addEventListener("click", convert);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    convert();
  }
});
