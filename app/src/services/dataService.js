
const categories = ['Fruit', 'Meat', 'Beverages'];

const data = [
    {
        "title": "Apple",
        "price": 12.33,
        "catagory": "fruit",
        "image": "apple.jpg",
        "_id": "1"
    },
    {
        "title": "Orange",
        "price": 8.99,
        "catagory": "fruit",
        "image": "orange.jpg",
        "_id": "2"
    },
    {
        "title": "Strawberry",
        "price": 6.999,
        "catagory": "fruit",
        "image": "strawberry.jpg",
        "_id": "3"
    },
    {
        "title": "Kiwi",
        "price": 2.99,
        "catagory": "fruit",
        "image": "kiwi.jpg",
        "_id": "4"
    },
    {
        "title": "Watermelon",
        "price": 22.99,
        "catagory": "fruit",
        "image": "watermellon.jpg",
        "_id": "5"
    },
    {
        "title": "Pineapple",
        "price": 9.99,
        "catagory": "fruit",
        "image": "pineapple.jpg",
        "_id": "6"
    }
];

class DataService{

    getProducts(){
        return data;

        // todo;  call the server and get the products

    }

    getCategories(){
        return categories;

        // todo; call the server and get the categories

    }
}

export default new DataService();