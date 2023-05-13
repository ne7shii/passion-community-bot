import * as Progress from '@radix-ui/react-progress';
import * as Label from '@radix-ui/react-label';
import * as Tooltip from '@radix-ui/react-tooltip';
import React, { useEffect, useState } from 'react'

type Props = {
    count: number
}
type GoalValue = {
    position: string,
    labelValue: string
}
const goalValues: GoalValue[] = [
    {
        position: '25%',
        labelValue: '300',
    },
    {
        position: '50%',
        labelValue: '600',
    },
    {
        position: '75%',
        labelValue: '900',
    },
    {
        position: '100%',
        labelValue: '1200',
    },
]
const PlayerCount = (props: Props) => {
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);
    const currentPercent: number = props.count / 1200 * 100
    useEffect(() => {
        setIsTooltipOpen(true);
    }, []); // open tooltip on mount
    return (
        <div className={`flex h-[1080px]  w-[1920px] flex-col items-center gap-5 px-7 bg-[url('/bg-w-text.png')] bg-contain bg-repeat-y `}>
            {/* <div className='text-white text-xl mt-3'>EVENT 1.0</div>
            <div className='flex flex-col items-center'>
                <div className='text-lg mt-4 text-white md:text-2xl'>คุณอยากเล่นเกม FiveM แล้วได้รับของรางวัลแบบสุดพิเศษไหม? </div>
                <div className='text-lg text-white md:text-2xl'> ถ้าคุณอยากได้ มาเข้าร่วมกิจกรรมของเรากันเถอะ!</div>
            </div>
            <div className='flex items-center justify-center flex-row flex-wrap gap-5 text-5xl font-bold'>
                <span className='text-white'>
                    PRE-REGISTRATION
                </span>
                <span>
                    ลงทะเบียนล่วงหน้า
                </span>
            </div>
            */}
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
                                <Tooltip.Content className="bg-white p-2 rounded-xl" sideOffset={10} side='bottom' forceMount align='end' alignOffset={-5} avoidCollisions={false}>
                                    <div className=' lg:w-40 lg:h-40 w-20 h-20'></div>
                                    <Tooltip.Arrow className="fill-white w-3 h-3" />
                                </Tooltip.Content>

                            </Tooltip.Portal>
                        </Tooltip.Root>

                    ))}
                </Tooltip.Provider>

            </div>

        </div>
    )
}

export default PlayerCount


