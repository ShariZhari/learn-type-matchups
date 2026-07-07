import { useState } from "react"
import { types } from "../utils/types"
import { getTypeName, getWeaknesses } from "../utils/utils"
import Button from "./Button"
import TypeBadge from "./TypeBadge";
import type { PkmnType } from "../utils/interfaces";
import Accordion from "./Accordion";
import TypeList from "./TypeList";
import { phrases } from "../utils/phrases";

const RELATIONSHIP_TYPE = {
    "STRONG": 0,
    "WEAK": 1,
    "RESISTS": 2,
    "NOT_VERY_EFFECTIVE": 3,
    "NO_EFFECT": 4,
    "IMMUNE": 5
}

const populateDescription = (type: number, typeArray: number[], relationship: number) => {
    let relationshipDesc = "";
    switch (relationship) {
        case RELATIONSHIP_TYPE.STRONG:
            relationshipDesc = "is super effective against"
            break;
        
        case RELATIONSHIP_TYPE.WEAK:
            relationshipDesc = "is weak against"
            break;

        case RELATIONSHIP_TYPE.RESISTS:
            relationshipDesc = "resists"
            break;

        case RELATIONSHIP_TYPE.NOT_VERY_EFFECTIVE:
            relationshipDesc = "is not very effective against"
            break;
        
        case RELATIONSHIP_TYPE.NO_EFFECT:
            relationshipDesc = "has no effect against"
            break;
        
        case RELATIONSHIP_TYPE.IMMUNE:
            relationshipDesc = "is immune to"
            break;
    
        default:
            break;
    }

    return typeArray.map((id) => (
        <div className="mb-2" key={id}>
        <TypeBadge title={getTypeName(type)} /> {relationshipDesc} <TypeBadge title={getTypeName(id)} /> because
        {(relationship === RELATIONSHIP_TYPE.STRONG ||
        relationship === RELATIONSHIP_TYPE.NOT_VERY_EFFECTIVE ||
        relationship === RELATIONSHIP_TYPE.NO_EFFECT) && <label> {phrases[type][id]}</label>}
        {(relationship === RELATIONSHIP_TYPE.WEAK ||
        relationship === RELATIONSHIP_TYPE.RESISTS ||
        relationship === RELATIONSHIP_TYPE.IMMUNE) && <label> {phrases[id][type]}</label>}
    </div>
))
}

const populateAccordion = (type: PkmnType) => {
    const description = [];
    if (type.effective.length){
        description.push({
                heading: (<div className={"px-1"}>
                    <strong>{type.name}</strong> is super effective against <TypeList typeArray={type.effective}></TypeList>
                </div>),
                content: (populateDescription(type.id, type.effective, RELATIONSHIP_TYPE.STRONG))
            });
    }
    description.push({
        heading: (<div className={"px-1"}>
                    <strong>{type.name}</strong> is weak against <TypeList typeArray={getWeaknesses(type)}></TypeList>
                </div>),
                content: (populateDescription(type.id, type.weak, RELATIONSHIP_TYPE.WEAK))
    },{
        heading: (<div className={"px-1"}>
                    <strong>{type.name}</strong> resists <TypeList typeArray={type.resists}></TypeList>
                </div>),
                content: (<div>test</div>)
    },{
        heading: (<div className={"px-1"}>
                    <strong>{type.name}</strong> is not very effective against <TypeList typeArray={type.notEffective}></TypeList>
                </div>),
                content: (<div>test</div>)
    })
    if (type.noEffectTo.length){
        description.push({
                heading: (<div className={"px-1"}>
                    <strong>{type.name}</strong> has no effect against <TypeList typeArray={type.noEffectTo}></TypeList>
                </div>),
                content: (populateDescription(type.id, type.noEffectTo, RELATIONSHIP_TYPE.NO_EFFECT))
            });
    }
    if (type.notAffectedBy.length){
        description.push({
                heading: (<div className={"px-1"}>
                    <strong>{type.name}</strong> is immune to <TypeList typeArray={type.notAffectedBy}></TypeList>
                </div>),
                content: (populateDescription(type.id, type.notAffectedBy, RELATIONSHIP_TYPE.IMMUNE))
            });
    }
    return description
}


export default function TabPanel() {
    const [activeTab, setActiveTab] = useState("tab9");
    const [reset, setReset] = useState(0);
    const tabs = types.map((type, i) => ({ id: "tab" + i, name: type.name }))
    const tabContent = types.reduce((acc, type, i) => ({
        ...acc,
        [("tab" + i)]: (<div>
            <TypeBadge title={type.name} isBig={true}></TypeBadge>
            <p className="mb-2"><i>{type.description}</i></p>
            {!type.effective.length && (<div className={"px-1"}>
                    <strong>{type.name}</strong> is not supereffective against anything
                </div>)}
            <Accordion accordionData={populateAccordion(type)} reset={reset}/>
        </div>
        )
    }), {})

    const activateTab = (tab: string) => {
        setActiveTab(tab)
        setReset((prev: number) => prev + 1)
    }

    return <div className="p-2 my-6 rounded bg-mauve-800 3xl space-y-5">
        <div className="flex flex-wrap">
            {tabs.map((tab) => <Button
                key={tab.id} title={tab.name}
                color={tab.name}
                disabled={activeTab !== tab.id}
                onClick={() => activateTab(tab.id)} isType={true}></Button>)}
        </div>
        <div>
            {tabContent[activeTab as keyof typeof tabContent]}
        </div>
    </div>
}