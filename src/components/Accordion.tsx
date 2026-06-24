import { useEffect, useState } from "react"
import type { AccordionData } from "../utils/interfaces";

interface AccordionProps {
    accordionData: AccordionData[];
    reset?: number;
}

interface AccordionItemProps extends AccordionData {
    isExpanded: boolean,
    onToggle: () => void
}

function AccordionItem({ heading, isExpanded, content, onToggle }: AccordionItemProps) {
    return <div className={`bg-mauve-700 rounded-3xl overflow-hidden transition-all duration-300
    ${isExpanded ? "max-h-auto" : "max-h-10"}`}>

        <div className="flex justify-between items-start px-3 py-1 cursor-pointer" onClick={onToggle} >
            {heading}
        </div>
        <div className={`px-5 pb-5 overflow-hidden transition-all duration-100
            ${isExpanded ? "opacity-100" : "opacity-0"}`}>{content}</div>

    </div>
}

export default function Accordion({ accordionData, reset }: AccordionProps) {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    useEffect(() => {
        setExpandedId(null);
    }, [reset])

    const toggleExpand = (id: number) => {
        setExpandedId(expandedId === id ? null : id)
    }

    return <div className="flex flex-col gap-3  mx-auto">
        {
            accordionData.map((item, i) =>
                <AccordionItem key={i} heading={item.heading} content={item.content} isExpanded={expandedId === i} onToggle={() => toggleExpand(i)} />)
        }
    </div>
}