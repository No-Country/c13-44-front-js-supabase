import { FC } from 'react'
import CardDestinos from '../../../components/card.destinos';
import { Filters } from '../../../components/filters';
import { useLocation } from 'wouter';
export interface PropsDestination {
    
}

const Destination: FC<PropsDestination> = () => {
    const rows = 4;
    const cols = 4;
    const [, setLocation] = useLocation()

    return (
        <>
            <div className='flex justify-center m-[1rem]'>
                <Filters />
            </div>
            <span>
                <div className="flex gap-7 justify-center">
                    {Array.from({ length: rows }).map((_, rowIndex) => (
                        <div key={rowIndex} className="flex flex-col gap-7">
                            {Array.from({ length: cols }).map((_, colIndex) => (
                                <CardDestinos key={colIndex} onClick={() => { setLocation('/hotels') }} />
                            ))}
                        </div>
                    ))}
                </div>
            </span>
        </>
    )
}

export default Destination