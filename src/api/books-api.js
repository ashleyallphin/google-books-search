const color = require('colors-cli/toxic');

export const saveBook = (book) => {
    return fetch(`/book`, {
        method: "POST",
        body: book
    })
        .then(response => {
            return response.json();
        })
        .catch (err => console.log(err))
};