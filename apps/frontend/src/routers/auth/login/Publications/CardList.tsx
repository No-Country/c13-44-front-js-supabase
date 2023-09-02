

import {
    PropsAction,
    PropsCard, PropsTitle
} from "../Interface"




interface Props {
    postCard: PropsCard[],
    postTitle: PropsTitle[],
    postAction: PropsAction[],
}

const CardList = ({ postCard, postTitle, postAction }: Props): JSX.Element => {
    return (
        <>
            <div className="font-bold">
                {postTitle.map((list, listIndex) => (
                    <div key={`list-${listIndex}`} >
                        {list.title}
                    </div>
                ))}
            </div>

            <div className="flex flex-col">
                {postAction.map((action, actionIndex) => (
                    <div key={`actionIndex-${actionIndex}`}>
                        {action.adding}
                    </div>
                ))}
            </div>
            <div className="flex flex-row gap-[2rem]">
                {postCard.map((card, cardIndex) => (
                    <div key={`card-${cardIndex}`}>
                        {card.posting}
                    </div>
                ))}
            </div>



        </>





    )
}

export default CardList
