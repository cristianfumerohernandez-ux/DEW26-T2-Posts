import Post from './post.js'

class PaidPost extends Post {
  constructor(name, price) {
    super(name)
    this.price = price
  }

  attach(subscriber) {
    if (typeof subscriber.billing === 'number') {
      super.attach(subscriber)
    }
  }
}

export { PaidPost };
export default PaidPost
