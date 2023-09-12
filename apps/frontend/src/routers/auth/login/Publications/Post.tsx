import { useState } from "react";
import { PropsAction, PropsCard } from "../Interface";
import { SkeletonCard } from "./Skeleton";
import ActionsCard from "../CreatePost/ActionsCard";
import CardList from "./CardList";

const Posting = () => {
  const [postCard] = useState<PropsCard[]>([
    {
      posting: <SkeletonCard />,
    },
  ]);

  const [postAction] = useState<PropsAction[]>([
    {
      adding: <ActionsCard />,
    },
  ]);

  return (
    <>
      <CardList postCard={postCard} postAction={postAction} />
    </>
  );
};

export default Posting;
