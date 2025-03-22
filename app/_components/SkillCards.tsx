import React from 'react'
import SegmentedProgressBar from './SegmentedProgressBar'

type Props = {
    level: number;
    name : string;
    filledColor?: string;
    descreption : string;
    experience : string;
}   

const SkillCards = (props: Props) => {
    return (
        <div className="bg-[#1B1B1B] p-6 rounded-lg shadow-lg space-y-10">
            <h3 className="text-white text-xl font-bold">{props.name}</h3>
            <div className="w-fit bg-gray-700 rounded-full mt-2">
                <SegmentedProgressBar totalSegments={5} level={props.level} filledColor={props.filledColor} />
            </div>
            <p className="text-gray-400 mt-2 text-wrap w-[250px]">{props.descreption}</p>
            <p className='text-gray-400 mt-2'>Experience : {props.experience}</p>
        </div>
    )
}

export default SkillCards