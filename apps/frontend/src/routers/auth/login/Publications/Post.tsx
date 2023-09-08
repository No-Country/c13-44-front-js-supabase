import { useState } from "react";
import { PropsAction, PropsCard, PropsTitle } from "../Interface";
import { SkeletonCard } from "./Skeleton";

import CardList from "./CardList";
import TitlePost from "./TitlePost";

import ActionsCard from "../CreatePost/ActionsCard";

const Posting = () => {
  const [postCard] = useState<PropsCard[]>([
    {
      posting: <SkeletonCard />,
    },
  ]);

  const [postTitle] = useState<PropsTitle[]>([
    {
      title: <TitlePost />,
    },
  ]);

  const [postAction] = useState<PropsAction[]>([
    {
      adding: <ActionsCard />,
    },
  ]);

  return (
    <>
      <CardList
        postCard={postCard}
        postTitle={postTitle}
        postAction={postAction}
      />
    </>
  );
};

export default Posting;
