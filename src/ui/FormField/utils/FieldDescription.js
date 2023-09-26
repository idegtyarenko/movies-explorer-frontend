export default class FieldDescription {
  #id;
  #label;
  #type;
  #attributes;

  constructor(id, label, type, attributes) {
    this.#id = id;
    this.#label = label;
    this.#type = type;
    this.#attributes = attributes;
  }

  get id() {
    return this.#id;
  }

  get label() {
    return this.#label;
  }

  get type() {
    return this.#type;
  }

  get attributes() {
    return this.#attributes;
  }
}
