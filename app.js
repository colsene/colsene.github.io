const excludeWords = [
  "i",
  "am",
  "you",
  "they",
  "he",
  "she",
  "we",
  "is",
  "a",
  "an",
  "are",
  "this",
  "the",
  "im",
  "i'm",
  "your",
  "youre",
  "you're",
  "theyre",
  "they're",
  "hes",
  "he's",
  "shes",
  "she's",
  "u",
  "r",
  "and",
  "that",
  "also",
  "to",
  "in",
  "with",
  "at",
  "on",
  "of",
  "onto",
  "of",
  "up",
  "as",
  "do",
  "i'd",
  "be",
  "me",
  "so",
];
const regex = /[!$%,-.:;?~)]/g;
const regexTwo = /[a-z]/i;

const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      newSentence: "",
      originalInput: "",
    };
  },
  methods: {
    translatedgevan() {
      this.newSentence = "";
      if (this.userInput.trim() === "") {
        return;
      }
      let sentence = this.userInput.split(" ");
      for (word of sentence) {
        if (
          excludeWords.includes(word.toLowerCase()) ||
          !word.match(regexTwo)
        ) {
          this.newSentence += word + " ";
        } else if (word.match(regex)) {
          let index = word.search(regex);
          if (excludeWords.includes(word.slice(0, index).toLowerCase())) {
            this.newSentence += word + " ";
          } else if (word.slice(0, index).toUpperCase() === "TZUYANG") {
            this.newSentence +=
              word.slice(0, index).toUpperCase() +
              "DGEVAN" +
              word.slice(index) +
              " ";
          } else if (
            word
              .charAt(word.length - 1)
              .toUpperCase()
              .match(regexTwo)
          ) {
            if (word.charAt(word.length - 1).toUpperCase() === "D") {
              this.newSentence += word + "gevan ";
            } else if (word.slice(word.length - 3).toUpperCase() === "DGE") {
              this.newSentence += word + "van ";
            } else {
              this.newSentence += word + "dgevan ";
            }
          } else {
            this.newSentence +=
              word.slice(0, index) + "dgevan" + word.slice(index) + " ";
          }
        } else if (word.toUpperCase() === "TZUYANG") {
          this.newSentence += word.toUpperCase() + "DGEVAN ";
        } else if (word.charAt(word.length - 1).toUpperCase() === "D") {
          this.newSentence += word + "gevan ";
        } else if (word.slice(word.length - 3).toUpperCase() === "DGE") {
          this.newSentence += word + "van ";
        } else {
          this.newSentence += word + "dgevan ";
        }
      }
      this.originalInput = this.userInput;
      this.userInput = "";
    },
  },
});

app.mount("#translator");
