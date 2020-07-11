const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
	title:
		{ 	type: String,
			required: true
		},
	authors:
		[{
			type: String,
		}],
	synopsis:
		{
			type: String
		},
	category:
		{ 
			type: String
		},
	saved:
		{ 
			type: Date,
			default: Date.now
		},
	thumbnail:
		{ 
			type: String },
	link:
		{
			type: String
		}
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
