const getTheTitles = function(titles) {
    let list = []
    for (books of titles){
        console.log(books);
        // let reference = JSON.parse(books);
        list.push(books.title);

    }
    console.log(list);
    return list;

};


// Do not edit below this line
module.exports = getTheTitles;
