import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div>
      <h1>Alura Cases - 404</h1>
      <p>Page not found</p>
      <Link href="/">Go to home</Link>
    </div>
  );
}
