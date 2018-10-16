import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let FooterLink = new Schema({
  name: {
    type: String
  },
  links: [{
    name: {
      type: String
    }
  }]
});

export default mongoose.model('FooterLink', FooterLink);
