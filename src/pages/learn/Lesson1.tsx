import Card from "../../components/Card";
import Learn from "../../layouts/Learn";

export default function Lesson1 () {
    return <Learn nextPage={"List of all type matchups"} nextLink={"/learn/type-matchups"}>
    <h1 className="text-3xl mb-4">Lesson 1. Introduction to type matchups</h1>

      <p className="mb-3">All pokémon are represented by at least one <b>type</b>.
        We could define a type as an "element" of nature; say, fire, for example.
        Types define the moves a pokemon is specialized in, along with their weaknesses in battle.</p>

      <p className="mb-3">This is done thanks to the power relationships between types, also known as <b>type matchups</b>.
        Think of them as in a "rock, paper, scissors" game. If your opponent chooses paper, what would you use to win?
        Certainly, you should pick scissors, because <i>scissors cut paper.</i> If you choose rock, however, you would lose the game, as <i>paper beats rock</i>.</p>

      <p className="mb-3">Now, let's recreate this example with a fire. If you want to put out the fire, What should you throw against the flames?
        You could throw water to it, because you know <i>water extinguishes fire</i>.
        On the other hand, if you throw grass blades to it, would it help? Not really, because <i>fire burns grass</i>.
        Thus, we could say <b>water is supereffective against fire</b>, and <b>grass is not very effective against fire</b>.
        So, to beat a fire type pokémon in battle, you should shower it with water type moves.</p>

      <p className="mb-3">This is the principle pokémon battles follow. However, with a current total of <b>18 types</b>, the relationships become a bit more complex.
        Here are the rules type relationships can follow:</p>

      <h2 className="text-2xl mt-6 mb-4">Types of relationships between types</h2>
      <div className="mb-6 flex flex-col gap-4">
      <Card>
        <label className="text-lg">When attacking: (using a move against a pokémon)</label>
      <ul className="list-disc pl-10 pr-20">
        <li>A type can be <b>super effective</b> against another type, causing 2 times the damage the move would normally do (x2)</li>
        <li>A type can be <b>not very effective</b> against another type, causing half the damage it would normally do (x0.5)</li>
        <li>In certain cases, a type can have <b>no effect</b> against another type, causing no damage to the pokémon! (x0)</li>
        <li>If neither of these conditions are met, the move would do normal damage to the pokemon. Also known as <b>effective</b> (x1)</li>
      </ul>
      </Card>

      <Card>
      <label className="text-lg">When defending: (a pokémon recieving the move of another)</label>
      <ul className="list-disc pl-10 pr-20">
        <li>A type can be <b>weak</b> against another type, recieving twice the damage the move would normally do (x2)</li>
        <li>A type can <b>resist</b> another type, recieving half the damage the move would normally do (x0.5)</li>
        <li>In certain cases, a move's type can have <b>no effect</b> against our pokémon's type, which means we won't recieve any damage (x0)</li>
        <li>And in the same way, if neither of these conditions are met, the move would cause <b>effective</b> (normal) damage to our pokémon (x1)</li>
      </ul>
      </Card>
      </div>

      <p className="mb-3">Sounds daunting, isn't it? Well, these rules become easier to learn when you find some logic to them.
        We could "cheat" by associating a phrase to a rule. Remember the phrases we used in the fire example?
        "Water is super effective against fire, because water extinguishes fire". We could create one of these phrases for each relationship:
        "Grass is not very effective against fire, because grass gets burnt if it enters contact with fire" or "fire is supereffective against ice, because fire melts ice".
      </p>
      <p className="mb-3">
        See? Just think about what would happen if two of these "elements" interacted in real life, and you'll have a closer idea on which move to choose to defeat a pokémon.
        (Okay... they're not 100% akin to reality and some of them might not make any sense, but you gotta pretend sometimes. These are fictional battles either way.)
      </p>
      <p className="mb-13">
        Go to the <b>next lesson</b> to learn more!
      </p>
      </Learn>
}