import { FC } from 'react'
import CardPropiedades from '../../../components/card';
import { Filters } from '../../../components/filters';
export interface PropsDestination {

}

const Destination: FC<PropsDestination> = () => {
    const rows = 5;
    const cols = 5;

    return (
        <>
            <div className='flex justify-center'>
                <Filters/>
            </div>
            <span>
                <div className="flex gap-4 justify-center mt-[1rem]">
                    {Array.from({ length: rows }).map((_, rowIndex) => (
                        <div key={rowIndex} className="flex flex-col gap-4">
                            {Array.from({ length: cols }).map((_, colIndex) => (
                                <CardPropiedades key={colIndex} />
                            ))}
                        </div>
                    ))}
                </div>
            </span>
        </>
    )
}

export default Destination