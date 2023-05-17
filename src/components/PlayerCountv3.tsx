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

        <div className='w-screen'>
            <div className='w-full relative'>
                <Image
                    src={'/bg-w-text.png'}
                    className='absolute w-full h-full'
                    width={1920}
                    height={1080}
                    alt="Picture of the author"
                />
                <div className={`flex h-[56vw] w-full relative flex-col items-center gap-[5vw] px-[7vw] `} >

                    <div className={`text-[10vw] font-bold text-white mt-[20vw]  ${!props.count && 'invisible'}`}>
                        {props.count || '0'}
                    </div>
                    <div className='relative max-w-[70vw] w-full m-0 p-0 -translate-y-[4vw]'>
                        <Progress.Root className="w-full absolute bg-gray-500 h-[0.5vw] rounded-full overflow-hidden mb-[20vw]" value={props.count}>
                            <Progress.Indicator
                                className="bg-red-500 rounded-full w-full h-full"
                                style={{ transform: `translateX(-${100 - currentPercent}%)` }}
                            />
                        </Progress.Root>
                        <Tooltip.Provider>
                            {goalValues.map(goal => (
                                <Tooltip.Root key={goal.labelValue} open={isTooltipOpen} >
                                    <Tooltip.Trigger asChild>
                                        <div className={`absolute rounded-full bg-black h-[3vw] w-[3vw] -top-[1.25vw] left-[${goal.position}] `} style={{ transform: `translateX(-${50}%)` }} />
                                    </Tooltip.Trigger>
                                    <Tooltip.Portal>
                                        <Tooltip.Content className="bg-white px-[0.5vw] rounded-full text-[1vw]" sideOffset={4} >
                                            {goal.labelValue}
                                            {/* <Tooltip.Arrow className="fill-white" /> */}
                                        </Tooltip.Content>

                                    </Tooltip.Portal>
                                    <Tooltip.Portal>
                                        <Tooltip.Content className=" " sideOffset={0} side='bottom' forceMount align='center' alignOffset={0} avoidCollisions={false}>
                                            <Image
                                                className='w-[28vw]'
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
            </div>
            <div className=' w-full '>
                <Image
                    src={'/bg-w-text.png'}
                    className='absolute w-full'
                    width={1920}
                    height={1080}
                    alt="Picture of the author"
                />
                <div className={` w-full flex justify-center h-[56vw] relative`}>
                    <Image
                        src='/p2.png'
                        width={1600}
                        height={900}
                        alt="reward"
                        quality={50}
                        className='object-contain'

                    />
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


