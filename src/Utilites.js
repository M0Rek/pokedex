export function capitalize(word) {
    if (word != null) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  }