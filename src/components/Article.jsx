export default function Article({ blok }) {
  return (
    <article>
      <h1>{blok.title}</h1>
      <span>{JSON.stringify(blok)}</span>
    </article>
  );
}
