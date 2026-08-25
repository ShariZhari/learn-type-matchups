import { useState } from "react"
import { types } from "../utils/types"
import { getTypeName, getWeaknesses } from "../utils/utils"
import Button from "./Button"
import TypeBadge from "./TypeBadge";
import type { PkmnType } from "../utils/interfaces";
import Accordion from "./Accordion";
import TypeList from "./TypeList";
import { phrases } from "../utils/phrases";
import { t } from 'i18next';

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
            relationshipDesc = "types.strong"
            break;

        case RELATIONSHIP_TYPE.WEAK:
            relationshipDesc = "types.weak"
            break;

        case RELATIONSHIP_TYPE.RESISTS:
            relationshipDesc = "types.resists"
            break;

        case RELATIONSHIP_TYPE.NOT_VERY_EFFECTIVE:
            relationshipDesc = "types.notVeryEffective"
            break;

        case RELATIONSHIP_TYPE.NO_EFFECT:
            relationshipDesc = "types.noEffect"
            break;

        case RELATIONSHIP_TYPE.IMMUNE:
            relationshipDesc = "types.immune"
            break;

        default:
            break;
    }

    return typeArray.map((id) => (
        <div className="mb-2" key={id}>
            <TypeBadge title={getTypeName(type)} /> {t(relationshipDesc)} <TypeBadge title={getTypeName(id)} /> {t("learn.typeMatchups.because")}
            {(relationship === RELATIONSHIP_TYPE.STRONG ||
                relationship === RELATIONSHIP_TYPE.NOT_VERY_EFFECTIVE ||
                relationship === RELATIONSHIP_TYPE.NO_EFFECT) && <label> {t(phrases[type][id]) || t(phrases[id][type])}</label>}
            {(relationship === RELATIONSHIP_TYPE.WEAK ||
                relationship === RELATIONSHIP_TYPE.RESISTS ||
                relationship === RELATIONSHIP_TYPE.IMMUNE) && <label> {t(phrases[id][type]) || t(phrases[type][id]) }</label>}
        </div>
    ))
}

const populateAccordion = (type: PkmnType) => {
    const description = [];
    if (type.effective.length) {
        description.push({
            heading: (<div className={"px-1"}>
                <strong>{t(type.name)}</strong> {t("types.strong")} <TypeList typeArray={type.effective}></TypeList>
            </div>),
            content: (populateDescription(type.id, type.effective, RELATIONSHIP_TYPE.STRONG))
        });
    }
    description.push({
        heading: (<div className={"px-1"}>
            <strong>{t(type.name)}</strong> {t("types.weak")} <TypeList typeArray={getWeaknesses(type)}></TypeList>
        </div>),
        content: (populateDescription(type.id, type.weak, RELATIONSHIP_TYPE.WEAK))
    }, {
        heading: (<div className={"px-1"}>
            <strong>{t(type.name)}</strong> {t("types.resists")} <TypeList typeArray={type.resists}></TypeList>
        </div>),
        content: (populateDescription(type.id, type.resists, RELATIONSHIP_TYPE.RESISTS))
    }, {
        heading: (<div className={"px-1"}>
            <strong>{t(type.name)}</strong> {t("types.notVeryEffective")} <TypeList typeArray={type.notEffective}></TypeList>
        </div>),
        content: (populateDescription(type.id, type.notEffective, RELATIONSHIP_TYPE.NOT_VERY_EFFECTIVE))
    })
    if (type.noEffectTo.length) {
        description.push({
            heading: (<div className={"px-1"}>
                <strong>{t(type.name)}</strong> {t("types.noEffect")} <TypeList typeArray={type.noEffectTo}></TypeList>
            </div>),
            content: (populateDescription(type.id, type.noEffectTo, RELATIONSHIP_TYPE.NO_EFFECT))
        });
    }
    if (type.notAffectedBy.length) {
        description.push({
            heading: (<div className={"px-1"}>
                <strong>{t(type.name)}</strong> {t("types.immune")} <TypeList typeArray={type.notAffectedBy}></TypeList>
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
            <p className="mb-4"><i>{t(type.description)}</i></p>
            {!type.effective.length && (<div className={"px-4 py-2 mb-3 bg-zinc-700 rounded-lg"}>
                <strong>{t(type.name)}</strong> {t("types.strongException")}
            </div>)}
            <Accordion accordionData={populateAccordion(type)} reset={reset} />
        </div>
        )
    }), {})

    const activateTab = (tab: string) => {
        setActiveTab(tab)
        setReset((prev: number) => prev + 1)
    }

    return <><div className="flex flex-wrap my-6">
        {tabs.map((tab) => <Button
            key={tab.id} title={tab.name}
            color={tab.name}
            disabled={activeTab !== tab.id}
            onClick={() => activateTab(tab.id)} isType={true}></Button>)}
    </div>
        <div className="py-4 px-6 mb-6 rounded-xl bg-zinc-900 3xl space-y-5">
            <div>
                {tabContent[activeTab as keyof typeof tabContent]}
            </div>
        </div>
    </>
}