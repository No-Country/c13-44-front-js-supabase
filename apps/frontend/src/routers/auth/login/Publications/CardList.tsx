import { PropsAction, PropsCard, PropsTitle } from "../Interface";

interface Props {
  postCard: PropsCard[];
  postAction: PropsAction[];
}

const CardList = ({ postCard, postAction }: Props): JSX.Element => {
  return (
    <>
      <div className="flex flex-col">
        {postAction.map((action, actionIndex) => (
          <div key={`actionIndex-${actionIndex}`}>{action.adding}</div>
        ))}
      </div>
      <div className="flex flex-row gap-[2rem]">
        {postCard.map((card, cardIndex) => (
          <div key={`card-${cardIndex}`}>{card.posting}</div>
        ))}
      </div>
    </>
  );
};

export default CardList;
