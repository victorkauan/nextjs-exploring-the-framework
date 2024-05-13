import Head from "next/head";
import Link from "next/link";

const FAQ_API_URL =
  "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";

export async function getServerSideProps() {
  const faq = await fetch(FAQ_API_URL)
    .then((response) => response.json())
    .then((data) => data);

  return { props: { anything: "Hello, world", faq } };
}

export default function FAQPage({ anything, faq }) {
  return (
    <div>
      <Head>
        <title>FAQ - Alura Cases Campaign</title>
      </Head>
      <h1>Alura Cases - FAQ</h1>
      <Link href="/">Go to home</Link>

      <ul>
        {faq.map(({ question, answer }) => (
          <li key={question}>
            <article>
              <h2>{question}</h2>
              <p>{answer}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
