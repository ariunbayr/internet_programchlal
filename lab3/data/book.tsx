export type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  category: string;
  color: string;
};

export const books: Book[] = [
  { id: 1, title: "Тунгалаг Тамир", author: "Ч. Улаан", price: 18000, category: "Уран зохиол", color: "#1f6f78" },
  { id: 2, title: "Монголын нууц товчоо", author: "Тодорхойгүй", price: 25000, category: "Түүх", color: "#8c3b2e" },
  { id: 3, title: "Clean Code", author: "Robert C. Martin", price: 65000, category: "Програмчлал", color: "#2d3a8c" },
  { id: 4, title: "Атомын хэвшил", author: "James Clear", price: 32000, category: "Хөгжил", color: "#5a7a2b" },
  { id: 5, title: "Жижиг ханхүү", author: "A. de Saint-Exupéry", price: 15000, category: "Уран зохиол", color: "#c28a1e" },
  { id: 6, title: "Learning React", author: "Alex Banks", price: 58000, category: "Програмчлал", color: "#6b2d8c" },
];