import { useEffect, useState } from "react"
import type { AccordionData } from "../utils/interfaces";

interface AccordionProps {
    accordionData: AccordionData[];
    reset?: number;
}

interface AccordionItemProps extends AccordionData {
    isExpanded: boolean,
    onToggle: () => void
} //\uFE40 \u276D

function AccordionItem({ heading, isExpanded, content, onToggle }: AccordionItemProps) {
    return <div className={`bg-zinc-700 rounded-lg overflow-hidden transition-all duration-300
    ${isExpanded ? "max-h-auto" : "max-h-min"}`}>

        <div className="flex justify-between items-start px-3 py-1 cursor-pointer" onClick={onToggle} >
            {heading}
            <button className="content-center pr-2 text-xl font-bold">{isExpanded ? "\u02C5" : "\u02C3"}</button>
        </div>
        <div className={`px-5 pb-5 pt-2 overflow-hidden transition-all duration-100
            ${isExpanded ? "block" : "hidden"}`}>{content}</div>

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

    return <div className="flex flex-col gap-3 mx-auto">
        {
            accordionData.map((item, i) =>
                <AccordionItem key={i} heading={item.heading} content={item.content} isExpanded={expandedId === i} onToggle={() => toggleExpand(i)} />)
        }
    </div>
}