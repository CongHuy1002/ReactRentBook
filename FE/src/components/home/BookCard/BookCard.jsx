import '../../styles/Book.css';

export function BookCard({ book }) {
  return (
    <div className='bookItem mb-4 d-flex'>
      <img
        style={{ borderRadius: 30 }}
        className=''
        src={book.image}
        alt='imgbook'
      />
      <div className='p-3'>
        <h3> {book.name} </h3>
        <p>{book.author.name}</p>
        <p> ${book.price} </p>
      </div>
    </div>
  );
}
