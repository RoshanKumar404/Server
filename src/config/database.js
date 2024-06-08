const mongoose = require('mongoose');

main().catch(err => console.log(err));
main().then(console.log("your databse has been connected"));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/trial');
}
