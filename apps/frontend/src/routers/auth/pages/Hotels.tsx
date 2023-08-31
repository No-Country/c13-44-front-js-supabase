import { FC } from 'react'
import CardPropiedades from '../../../components/card';
import { Filters } from '../../../components/filters';
import { useLocation } from "wouter";

export interface PropsDestination {

}

const Destination: FC<PropsDestination> = () => {
    const [, setLocation] = useLocation();

    const rows = 4;
    const cols = 4;

    return (
        <>
            <div className='flex justify-center m-[1rem]'>
                <Filters/>
            </div>
            <span>
                <div className="flex gap-8 justify-center ">
                    {Array.from({ length: rows }).map((_, rowIndex) => (
                        <div key={rowIndex} className="flex flex-col gap-8">
                            {Array.from({ length: cols }).map((_, colIndex) => (
                                <CardPropiedades key={colIndex} onClick={() => setLocation("/reservacion")} />
                            ))}
                        </div>
                    ))}
                </div>
            </span>
        </>
    )
}

export default Destination