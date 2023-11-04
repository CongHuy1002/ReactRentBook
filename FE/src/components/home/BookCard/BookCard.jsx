import '../../styles/Book.css';

export function BookCard({ book }) {
  const processedImages = book.images.map((imagePath) =>
    imagePath.replace(/\\/g, '/'),
  );
  console.log('../../../../' + processedImages);
  const test = '2023-11-04T12-44-43.845Z-1.8934974155317.jpg';
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
        <p>{book.author.name}</p>
        <p> ${book.price} </p>
      </div>
    </a>
  );
}
