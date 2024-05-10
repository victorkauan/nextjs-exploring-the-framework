import Link from "next/link";

function Title({ children, as }) {
  const Tag = as;
  return (
    <>
      <Tag>{children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: red;
          font-family: sans-serif;
        }
      `}</style>
    </>
  );
}

export default function HomePage() {
  return (
    <div>
      <Title as="h1">Alura Cases - Home</Title>
      <Link href="/faq">Go to FAQ</Link>
    </div>
  );
}
