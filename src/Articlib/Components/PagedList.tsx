import { ReactNode } from "react";
import { Container, Pagination } from "react-bootstrap";

type Props = {
  page: number;
  totalPages: number;
  onClick: (page: number) => void;
  children: ReactNode;
};

function ListPages(props: Props): JSX.Element {
  const items = [];

  for (let i = 0; i < props.totalPages; i++) {
    items.push(
      <Pagination.Item
        key={i}
        active={i == props.page}
        onClick={() => props.onClick(i)}
      >
        {i + 1}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );
}

export function PagedList(props: Props): JSX.Element {
  return (
    <Container>
      <Container>{props.children}</Container>
      {ListPages(props)}
    </Container>
  );
}
