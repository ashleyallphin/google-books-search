const color = require('colors-cli/toxic');

export const saveBook = (title, authors, synopsis, saved, thumbnail, link) => {
    return fetch(`/api/save/books`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(title, authors, synopsis, saved, thumbnail, link)
    })
        .then(response => {
            console.log(response);
            return response.json();
        })
        .catch (err => console.log(err));
};

export const getSavedBooks = (title, authors, synopsis, saved, thumbnail, link) => {
    return fetch('/api/get/books', {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, authors, synopsis, saved, thumbnail, link })

    }).then(response => {
        console.log(response);
        return response.json();
    })
    .catch (err => console.log(err));
};

export const deleteBook = (title, authors, synopsis, saved, thumbnail, link) => {
    return fetch(`/api/delete/books`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, authors, synopsis, saved, thumbnail, link })
    })
        .then(response => {
            console.log(response);
            return response.json();
        })
        .catch (err => console.log(err));
};