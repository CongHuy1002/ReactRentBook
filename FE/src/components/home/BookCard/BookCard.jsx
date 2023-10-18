import '../../styles/Book.css';

export function BookCard({ book }) {
    return (
    <div className='bookItem'>
      {/* <img src={book.images[0]} alt='imgbook' /> */}
      <h1> {book.name} </h1>
      <p>{book.author.name}</p>
      <p> ${book.price} </p>
    </div>
    )
}