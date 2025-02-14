import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
    try {
        const book = await Book.find()
        console.log(book.id)
        res.status(200).json(book);
    } catch (error) {
        console.log("Erorr:", error)
        res.status(500).json(error)
    }

}