import { books } from "../../data/book";

export const metadata = { title: "Номнууд | BookMart" };

export default function BooksPage() {
  return (
    <section>
      <h1>Бүх номнууд</h1>
      <div className="grid">
        {books.map((b) => (
          <article key={b.id} className="card">
            <div className="cover" style={{ background: b.color }}>{b.title}</div>
            <h3>{b.title}</h3>
            <p className="muted">{b.author} · {b.category}</p>
            <p className="price">{b.price.toLocaleString()}₮</p>
          </article>
        ))}
      </div>
    </section>
  );
}