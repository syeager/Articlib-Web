import { FilterArticlesCommand } from "../../Articles/Commands/FilterArticlesCommand";
import { ArticleView } from "../../Articles/Components/ArticleView";
import { Article } from "../../Articles/Models/Article";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { PagedList } from "../../../Articlib/Components/PagedList";
import { PagedItems } from "../../../common/Pagination/PagedItems";

export function HomePage(): JSX.Element {
  const [articles, setArticles] = useState(
    undefined as undefined | PagedItems<Article>
  );

  useEffect(() => {
    const api = async () => {
      const pagedArticles = await FilterArticlesCommand();
      setArticles(pagedArticles);
    };
    api();
  }, []);

  if (!articles) {
    return <Spinner animation="grow" />;
  }

  const articleViews = articles.items.map((a) => (
    <ArticleView key={a.id} article={a} />
  ));

  return (
    <div>
      <h1>Articles</h1>
      <PagedList
        page={articles.page}
        totalPages={articles.totalPages}
        onClick={(p) => {
          console.log(p);
        }}
      >
        {articleViews}
      </PagedList>
    </div>
  );
}
