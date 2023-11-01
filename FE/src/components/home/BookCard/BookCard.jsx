import '../../styles/Book.css';

export function BookCard({ book }) {
    return (
    <div className='bookItem mb-4 d-flex'>
      <img src={book.image} alt='imgbook' />
      <div className=''>
        <h1> {book.name} </h1>
      <p>{book.author.name}</p>
      <p> ${book.price} </p>
      </div>
    </div>
    )
}