import { FilterArticlesCommand } from "../../Articles/Commands/FilterArticlesCommand";
import { ArticleView } from "../../Articles/Components/ArticleView";
import { Article } from "../../Articles/Models/Article";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

export function HomePage(): JSX.Element {
  const [articles, setArticles] = useState(undefined as undefined | Article[]);

  useEffect(() => {
    const api = async () => {
      const articles = await FilterArticlesCommand();
      setArticles(articles);
    };
    api();
  }, []);

  if (!articles) {
    return <Spinner animation="grow" />;
  }

  const articleViews = articles.map((a) => (
    <ArticleView key={a.id} article={a} />
  ));
  return (
    <div>
      <h1>Articles</h1>
      {articleViews}
    </div>
  );
}
