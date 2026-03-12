import Markdown from "react-markdown";

export default function Article({ blok }) {
  return (
    <article>
      <h1>{blok.title}</h1>
      <div>
        <Markdown>{blok.content}</Markdown>
      </div>
    </article>
  );
}
