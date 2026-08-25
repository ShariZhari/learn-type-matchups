interface phraseObject {
    [key: number]: {
        [key: number]: string
    },
}

export const phrases: phraseObject = {
    //normal
    0: {
        7: "phrases.normal.ghost",
        5: "phrases.normal.rock",
        8: "phrases.normal.steel",
    },
    //fighting
    1: {
        0: "phrases.fighting.normal",
        5: "phrases.fighting.rock",
        8: "phrases.fighting.steel",
        14: "phrases.fighting.ice",
        16: "phrases.fighting.dark",
        2: "phrases.fighting.flying",
        6: "phrases.fighting.bug",
        7: "phrases.fighting.ghost",
    },
    //flying
    2: {
        1: "phrases.flying.fighting",
        6: "phrases.flying.bug",
        11: "phrases.flying.grass",
        4: "phrases.flying.ground"
    },
    //poison
    3: {
        11: "phrases.poison.grass",
        17: "phrases.poison.fairy",
        1: "phrases.poison.fighting",
        6: "phrases.poison.bug",
        3: "phrases.poison.poison",
    },
    //ground
    4: {
        3: "phrases.ground.poison",
        5: "phrases.ground.rock",
        8: "phrases.ground.steel",
        9: "phrases.ground.fire",
        12: "phrases.ground.electric",
    },
    //rock
    5: {
        2: "phrases.rock.flying",
        6: "phrases.rock.bug",
        9: "phrases.rock.fire",
        14: "phrases.rock.ice",
        3: "phrases.rock.poison",
    },
    //bug
    6: {
        11: "phrases.bug.grass",
        13: "phrases.bug.psychic",
        16: "phrases.bug.dark",
        1: "phrases.bug.fighting",
        4: "phrases.bug.ground"
    },
    //ghost
    7: {
        7: "phrases.ghost.ghost",
        13: "phrases.ghost.psychic",
        3: "phrases.ghost.poison",
        6: "phrases.ghost.bug"
    },
    //steel
    8: {
        3: "phrases.steel.poison",
        5: "phrases.steel.rock",
        14: "phrases.steel.ice",
        17: "phrases.steel.fairy",
        6: "phrases.steel.bug",
        2: "phrases.steel.flying",
        11: "phrases.steel.grass",
        13: "phrases.steel.psychic",
        15: "phrases.steel.dragon",
        8: "phrases.steel.steel",

    },
    //fire
    9: {
        6: "phrases.fire.bug",
        8: "phrases.fire.steel",
        11: "phrases.fire.grass",
        14: "phrases.fire.ice",
        17: "phrases.fire.fairy",
        9: "phrases.fire.fire",
    },
    //water
    10: {
        9: "phrases.water.fire",
        4: "phrases.water.ground",
        5: "phrases.water.rock",
        10: "phrases.water.water",
        14: "phrases.water.ice",
        8: "phrases.water.steel",
    },
    //grass
    11: {
        4: "phrases.grass.ground",
        5: "phrases.grass.rock",
        10: "phrases.grass.water",
        11: "phrases.grass.grass",
        12: "phrases.grass.electric",
    },
    //electric
    12: {
        2: "phrases.electric.flying",
        10: "phrases.electric.water",
        8: "phrases.electric.steel",
        12: "phrases.electric.electric",
    },
    //psychic
    13: {
        1: "phrases.psychic.fighting",
        3: "phrases.psychic.poison",
        13: "phrases.psychic.psychic"
    },
    //ice:
    14: {
        2: "phrases.ice.flying",
        4: "phrases.ice.ground",
        11: "phrases.ice.grass",
        15: "phrases.ice.dragon",
        14: "phrases.ice.ice",
    },
    //dragon
    15: {
        15: "phrases.dragon.dragon",
        9: "phrases.dragon.fire",
        10: "phrases.dragon.water",
        11: "phrases.dragon.grass",
        12: "phrases.dragon.electric",
     },
    //dark
    16: {
        7: "phrases.dark.ghost",
        13: "phrases.dark.psychic",
        16: "phrases.dark.dark",
    },
    //fairy
    17: {
        1: "phrases.fairy.fighting",
        15: "phrases.fairy.dragon",
        16: "phrases.fairy.dark",
        6: "phrases.fairy.bug"
    },
}