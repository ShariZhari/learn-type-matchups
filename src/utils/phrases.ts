interface phraseObject {
    [key: number]: {
        [key: number]: string
    },
}

export const phrases: phraseObject = {
    //normal
    0: {
        7: "normal people cannot hit ghosts. can you do a high five to a ghost? both hands wouldn't connect. they would trespass each other.",
    },
    //fighting
    1: {
        0: "imagine throwing hands with a professional martial artist. who would win? most likely the martial artist, as they know more fighting tecniques, and have more fighting experience than you.",
        5: "martial artists could break a rock if they hit it hard enough.",
        8: "martial artists could break a machine if they hit it hard enough.",
        14: "martial artists could break a block of ice if they hit it hard enough.",
        16: "a martial arts hero requires honorability and a sense of justice, needed to beat dishonesty and dirty tactics from dark types.",
        2: "it's hard to hit something flying mid air. imagine catching a mosquito with your hands. you would have to try lots of times before you succeed.",
        7: "can you punch a ghost? your fist would trespass the ghost, causing no damage to the ghost.",
    },
    //flying
    2: {
        1: "in a fight, aerial attacks have an advantage against grounded opponents.",
        6: "birds eat bugs.",
        11: "birds eat seeds and fruits.",
    },
    //poison
    3: {
        11: "poison can kill plants.",
        17: "mythologically, fairies could get weakened by poison.",
    },
    //ground
    4: {
        3: "ground can absorb and neutralize poisonous chemicals.",
        5: "ground can erode rocks.",
        8: "dust can get inside machines and make them malfunction.",
        9: "you can put out a bonfire if you throw dirt to it.",
        12: "electricity gets neutralized when it gets in contact with ground.",
    },
    //rock
    5: {
        2: "birds can fall when hit by a rock.",
        6: "bugs can be squished with a rock.",
        9: "you can put out a flame with a big rock.",
        14: "rocks can break ice.",
    },
    //bug
    6: {
        11: "bugs eat plants.",
        13: "people can be afraid of bugs.",
        16: "many bugs are nocturnal and can see well in the dark.",
    },
    //ghost
    7: {
        7: "ghosts are able to beat other ghosts.",
        13: "people can be afraid of ghosts.",
    },
    //steel
    8: {
        3: "machines are not living beings, and thus, cannot be poisoned.",
        5: "rocks can be broken with metal tools, or heavy machinery.",
        14: "ice can be broken with metal tools, or heavy machinery.",
        17: "mythologically, fairies got weakened if they got in contact with iron.",

    },
    //fire
    9: {
        6: "fire burns bugs.",
        8: "fire melts steel.",
        11: "fire burns grass.",
        14: "fire melts ice.",
    },
    //water
    10: {
        9: "water extinguishes fire.",
        4: "water erodes the ground.",
        5: "water erodes rocks.",
    },
    //grass
    11: {
        4: "plants grow on soil, and absorb nutirients from it.",
        5: "plants can grow over rocks, and some of them can break rocks with their roots.",
        10: "plants absorb water.",
    },
    //electric
    12: {
        2: "birds are vulnerable to lighting shocks when flying under a thunderstorm.",
        10: "water conducts electricity.",
    },
    //psychic
    13: {
        1: "the mind is stronger than the body.",
        3: "in fantasy, psychic powers can cure illnesses, and willpower can defeat sickness.",
    },
    //ice:
    14: {
        2: "animals can't fly with frozen wings.",
        4: "ice can erode the ground.",
        11: "ice can burn plants.",
        15: "reptiles get weakened by cold temperatures (and mythologically, most dragons in folklore are reptile-like).",
    },
    //dragon
    15: {
        15: "dragons are so powerful, they can only be beaten by another dragon. Just like diamonds can only be scratched by another diamond.",
     },
    //dark
    16: {
        7: "in fantasy, spirits are vulnerable to manipulation, whether by dark magic or evil forces.",
        13: "people can be afraid of darkness. Also, the mind can get corrupted by evil thoughts. (It depends on the definition of dark).",
    },
    //fairy
    17: {
        1: "in fantasy, magic attacks are stronger than kicks or punches.",
        15: "mythologically, dragons could get beaten by magic attacks.",
        16: "light beats darkness."
    },
}