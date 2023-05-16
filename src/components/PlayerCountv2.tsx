import * as Progress from '@radix-ui/react-progress';
import * as Label from '@radix-ui/react-label';
import * as Tooltip from '@radix-ui/react-tooltip';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

type Props = {
    count: number
}
type GoalValue = {
    position: string,
    labelValue: string,
    imgUrl: string,
}
const goalValues: GoalValue[] = [
    {
        position: '25%',
        labelValue: '300',
        imgUrl: '/reward2.png'
    },
    {
        position: '50%',
        labelValue: '600',
        imgUrl: '/reward2.png'
    },
    {
        position: '75%',
        labelValue: '900',
        imgUrl: '/reward3.png'
    },
    {
        position: '100%',
        labelValue: '1200',
        imgUrl: '/reward4.png'
    },
]
const PlayerCount = (props: Props) => {
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);
    const currentPercent: number = props.count / 1200 * 100
    useEffect(() => {
        setIsTooltipOpen(true);
    }, []); // open tooltip on mount
    return (

        <div className='w-fit relative'>
            <Image
                src={'/bg-w-text.png'}
                className='absolute w-full'
                width={1920}
                height={1080}
                alt="Picture of the author"
            />
            <div className={`flex  w-full relative flex-col items-center gap-5 px-7 `} >

                <div className={`text-[10rem] font-bold text-white mt-96  ${!props.count && 'invisible'}`}>
                    {props.count || '0'}
                </div>
                <div className='relative max-w-6xl w-full'>
                    <Progress.Root className="w-full absolute bg-gray-500 h-4 rounded-full overflow-hidden mb-56" value={props.count}>
                        <Progress.Indicator
                            className="bg-red-500 rounded-full w-full h-full"
                            style={{ transform: `translateX(-${100 - currentPercent}%)` }}
                        />
                    </Progress.Root>
                    <Tooltip.Provider>
                        {goalValues.map(goal => (
                            <Tooltip.Root key={goal.labelValue} open={isTooltipOpen} >
                                <Tooltip.Trigger asChild>
                                    <div className={`absolute rounded-full bg-black h-8 w-8 -top-2 left-[${goal.position}] `} style={{ transform: `translateX(-${50}%)` }} />
                                </Tooltip.Trigger>
                                <Tooltip.Portal>
                                    <Tooltip.Content className="bg-white p-2 rounded-full" sideOffset={5} >
                                        {goal.labelValue}
                                        <Tooltip.Arrow className="fill-white" />
                                    </Tooltip.Content>

                                </Tooltip.Portal>
                                <Tooltip.Portal>
                                    <Tooltip.Content className="p-2 rounded-xl" sideOffset={10} side='bottom' forceMount align='center' alignOffset={-5} avoidCollisions={false}>
                                        {/* <div className=' lg:w-40 lg:h-40 w-20 h-20'></div> */}
                                        {/* <Tooltip.Arrow className="fill-white w-3 h-3" /> */}
                                        <Image
                                            src={goal.imgUrl}
                                            width={500}
                                            height={400}
                                            alt="Picture of the author"
                                        />
                                    </Tooltip.Content>

                                </Tooltip.Portal>
                            </Tooltip.Root>

                        ))}
                    </Tooltip.Provider>

                </div>

            </div>
            {/* <div className={`flex h-full w-full flex-col items-center gap-5 px-7 bg-[url('/bg-w-text.png')] bg-contain bg-no-repeat `} >
                <div className={` mt-40 w-full flex justify-center `}>
                    <Image
                        src='/p2.png'
                        width={1600}
                        height={900}
                        alt="Picture of the author"

                    />
                </div>


            </div> */}

        </div>
    )
}

export default PlayerCount


