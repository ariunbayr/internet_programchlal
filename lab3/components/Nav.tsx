import Link from "next/link";

export default function Nav() {
  return (
    <header className="nav">
      <Link href="/" className="logo">BookMart</Link>
      <nav>
        <Link href="/">Нүүр</Link>
        <Link href="/books">Номнууд</Link>
        <Link href="/about">Бидний тухай</Link>
      </nav>
    </header>
  );
}