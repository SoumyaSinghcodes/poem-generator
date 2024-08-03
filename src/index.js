function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instruction");

  let apiKey = "1cad20tb75afd483of055fc5b84c9599";
  let prompt = `User instructions: Generate an English poem about ${instructionInput.value}`;
  let context =
    "You are a romantic Poem expert and love to write write short poems. Your mission is to generate a 4 line poem in basic HTML. Make aure to follow the user instructions.Do not include atitle to the poem. Sign the poem by 'Soumya Singh's AI poem Generator' inside a <strong> element at the end of the poem";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
