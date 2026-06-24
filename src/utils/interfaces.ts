export interface PkmnType {
    id: number,
    name: string,
    description: string,
    effective: number[],
    weak: number[],
    notEffective: number[],
    resists: number[],
    noEffectTo: number[],
    notAffectedBy: number[]
}

export interface AccordionData {
    heading: React.ReactNode
    content: React.ReactNode
}