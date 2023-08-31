import {
    PropsCard, PropsTitle
} from "../Interface"


interface Props {
    postCard: PropsCard[],
    postTitle: PropsTitle[]
}

const CardList = ({ postCard, postTitle }: Props): JSX.Element => {
    return (
        <>

            {postCard.map(card => (
                <>
                    {postTitle.map(list => (
                        <>
                            <div className="py-[2rem]">
                                {list.title}
                            </div>
                        </>

                    ))}
                    <div className="flex flex-col items-center pb-[14rem]">
                        <div className="flex flex-row gap-[3rem]">
                            {card.posting}
                            {card.posting}
                            {card.posting}
                            {card.posting}
                        </div>
                    </div>
                </>

            ))}


        </>
    )
}

export default CardList
