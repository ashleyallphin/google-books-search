const color = require('colors-cli/toxic');
const Book = require ('../models/books-model');


exports.getSavedBooks = (req, res) => {
    Book.find((err, books) => {
        if(err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.json(books);
    });
};

exports.saveBook = async (req, res) => {
    console.log(`\n\n----- hitting saveBook method from books-controller`.x211)
    const book = await new Book (req.body)
    await book.save()
        console.log(`\n\n postBook executed successfully`.x211)
        res.json ({
            message: "Book saved successfully."
        });
};

// deleteBook = comment => {
//     const userId = isAuthenticated().user._id;
//     const token = isAuthenticated().token;
//     const postId = this.props.postId;
//     // passing
//     deleteFeedback(userId, token, postId, comment).then(data => {
//         if (data.error) {
//             console.log(data.error);
//         } else {
//             // not getting an error
//             this.props.updateComments(data.comments);
//         }
//     });
// };


// exports.deleteBook = (req, res, next) => {
//     let user = req.profile;
//     user.remove((err, user) => {
//         if(err) {
//             return res.status(400).json({ 
//                 error: err
//             })
//         }
//         user.hashed_password = undefined;
//         user.salt = undefined;
//         res.json({ 
//             message: "User account deleted successfully." });
//     })
// };