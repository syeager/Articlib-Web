import { useState } from "react";
import { Button } from "react-bootstrap";

type Props = {
  likeCount: number;
  isLiked: boolean;
  onClick: (isLiked: boolean) => Promise<void>;
};

export function LikeButton(props: Props): JSX.Element {
  const { likeCount, isLiked } = { ...props };
  const variant = isLiked ? "outline-info" : "info";

  const [isDisabled, setIsDisabled] = useState(false);

  const onClick = async () => {
    setIsDisabled(true);
    await props.onClick(isLiked);
    setIsDisabled(false);
  };

  return (
    <div>
      <Button disabled={isDisabled} onClick={onClick} variant={variant}>
        {likeCount}
      </Button>
    </div>
  );
}
