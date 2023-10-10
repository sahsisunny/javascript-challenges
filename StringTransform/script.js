const inputText = document.getElementById("input-text");
const outputContainer = document.getElementById("output-container");

inputText.value = "This is a SAMPLE text to be transformed";
const transformTypes = [
  "Lowercase",
  "Uppercase",
  "Camel Case",
  "Pascal Case",
  "Snake Case",
  "Kebab Case",
  "Trim",
];

function createTransformDiv(type, text) {
  const div = document.createElement("div");
  div.classList.add("output");
  const tagSpan = document.createElement("span");
  tagSpan.classList.add("tag");
  tagSpan.innerText = type;
  const textP = document.createElement("p");
  textP.id = type;
  textP.innerText = text;
  div.appendChild(tagSpan);
  div.appendChild(textP);
  return div;
}

function transformText(text, type) {
  const words = text.split(" ").map(word => word.trim());

  switch (type) {
    case "Lowercase":
      return text.toLowerCase();
    case "Uppercase":
      return text.toUpperCase();
    case "Camel Case":
      return words.map((word, index) => index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1)).join("");
    case "Pascal Case":
      return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("");
    case "Snake Case":
      return words.join("_");
    case "Kebab Case":
      return words.join("-");
    case "Trim":
      return words.join("")
    default:
      return text;
  }
}

function transformAll() {
  text = inputText.value;
  outputContainer.innerHTML = "";
  transformTypes.forEach(type => {
    const div = createTransformDiv(type, transformText(text, type));
    outputContainer.appendChild(div);
  });
}

inputText.addEventListener("input", () => {
  transformAll();
});

transformAll();
