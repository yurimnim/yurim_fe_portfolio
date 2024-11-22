
type TechStackChipProps ={
    size: string;
    color: string;
    text: string;
}

const TechStackChip = ({ size, color, text } :TechStackChipProps) => {
    return (
        <div className={`text-${size} bg-${color} py-1 px-3 rounded-full inline-block`}>
            {text}
        </div>
    )
}

export default TechStackChip