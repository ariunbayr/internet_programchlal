import Link from "next/link";
import { books } from "../data/book";

export default function Home() {
  const featured = books.slice(0, 3);
  return (
    <>
      <section className="hero">
        <h1>Дараагийн номоо эндээс ол.</h1>
        <p>Уран зохиол, түүх, програмчлалын сонгомол номнууд.</p>
        <Link href="/books" className="btn">Номнууд үзэх</Link>
      </section>

      <section>
        <h2>Онцлох номнууд</h2>
        <div className="grid">
          {featured.map((b) => (
            <article key={b.id} className="card">
              <div className="cover" style={{ background: b.color }}>{b.title}</div>
              <h3>{b.title}</h3>
              <p className="muted">{b.author}</p>
              <p className="price">{b.price.toLocaleString()}₮</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}