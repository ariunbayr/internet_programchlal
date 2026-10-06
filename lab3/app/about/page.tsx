export const metadata = { title: "Бидний тухай | BookMart" };

export default function AboutPage() {
  return (
    <section className="about">
      <h1>Бидний тухай</h1>
      <p>
        BookMart бол Улаанбаатар хотод байрлах номын дэлгүүр. Бид уншигч бүрт
        тохирох номыг хүртээмжтэй үнээр санал болгодог.
      </p>
      <h2>Холбоо барих</h2>
      <ul>
        <li>Хаяг: Сүхбаатар дүүрэг, Улаанбаатар</li>
        <li>Утас: 7777-0000</li>
        <li>И-мэйл: info@bookmart.mn</li>
      </ul>
      <p className="muted">Ажлын цаг: Даваа–Бямба, 10:00–20:00</p>
    </section>
  );
}