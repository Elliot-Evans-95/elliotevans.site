export class Meta {
  // TODO: turn into a meta object
  #title;
  #description;
  #keywords;
  #head;

  constructor(title, description, keywords) {
    // TODO: pass in a meta object
    this.#title = title;
    this.#description = description;
    this.#keywords = keywords;
    this.#head = document.head;
  }

  // get title() {
  //   return this.#title;
  // }
  //
  // get description() {
  //   return this.#description;
  // }
  //
  // get keywords() {
  //   return this.#keywords;
  // }

  setMeta() {
    // TODO: better way of doing this

    if (this.#title) {
      const title = this.#head.querySelectorAll('title');
      title.innerHTML = this.#title;
    }

    if (this.#description) {
      const description = this.#head.querySelectorAll(
        'meta[name="description"]'
      );
      description[0].attributes[1].value = this.#description;
    }

    if (this.#keywords) {
      const keywords = this.#head.querySelectorAll('meta[name="keywords"]');
      keywords[0].attributes[1].value = this.#keywords;
    }
  }
}
