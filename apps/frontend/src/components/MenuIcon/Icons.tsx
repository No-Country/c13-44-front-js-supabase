import { IconDeviceMobile, IconMail, IconMapPin } from "@tabler/icons-react"


const Icons: React.FC = () => {
    return (
        <>
            <div className="flex justify-end pb-9 ">
                <div className="">
                    <ul className="flex flex-row mt-12 gap-x-28 font-mono">
                        <li className="grid justify-items-center">
                            <IconMapPin className="text-primary" />
                            <h1 className="">Colombia, Santa Marta, Mamatoco </h1>
                        </li>
                        <li className="grid justify-items-center">
                            <IconDeviceMobile className="text-primary" />
                            <h1>(+57) 3117652898</h1>

                        </li>
                        <li className="grid justify-items-center">
                            <IconMail className="text-primary" />
                            <h1>leonardoiglesias@teletubie.com</h1>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Icons