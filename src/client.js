class Client {
  constructor(name) {
    this.billing = 0;
    this.name = name;
  }

  read(text) {
    return `${this.name} is reading ${text}`;
  }

  notify(post) {
    if (typeof post.price === 'number') {
      this.billing = Math.round((this.billing + post.price) * 100) / 100
    }
    return this.read(post.summary)
  }
}

export { Client };
export default Client;
