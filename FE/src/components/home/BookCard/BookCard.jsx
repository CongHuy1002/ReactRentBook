import '../../styles/Book.css';
import './BookCard.css';
export function BookCard({ book }) {
  const formatPriceVND = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };
  return (
    <a href={`/details/${book.slug}`} className='bookItem mb-4 d-flex'>
      <img
        style={{ borderRadius: 30 }}
        className=''
        src={'http://localhost:5000/src/public/images/' + book.images}
        alt='imgbook'
      />
      <div className='p-3'>
        <h3> {book.name} </h3>
        <p className='author-name'>{book.author.name}</p>
        <p className='price'>
          {book && book.price ? formatPriceVND(book.price) : ''}{' '}
        </p>
      </div>
    </a>
  );
}
