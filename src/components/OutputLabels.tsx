interface Label {
    name: string;
    probability: string;
}

interface ClassifierResultsProps {
    labels?: Label[];
    text?: string;
}

const OutputLabels = ({ labels, text }: ClassifierResultsProps) => {
    return (
        <div className="my-6">

            <h3 className="text-2xl font-bold my-2">Text</h3>
            <h6>{text}</h6>
            <h3 className="text-2xl font-bold my-2">Labels </h3>
            <ul>
                {labels?.map((label, index) => (
                    <li key={index}>
                        {label.name} - {label.probability}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default OutputLabels