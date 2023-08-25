import { FC } from 'react'
import CardPropiedades from "../../../components/card";

export interface PropsDestination {

}

const Destination: FC<PropsDestination> = () => {
    return (
        <>
            <span>
            <div className="flex flex-row col-5">
            {[1, 2, 3, 4, 5].map(() => (
              <CardPropiedades/>
            ))}
          </div>
            </span>
        </>
    )
}

export default Destination