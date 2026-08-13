import { Link } from "react-router-dom";
import Button from "../../components/Button";
import TypeList from "../../components/TypeList";
import Learn from "../../layouts/Learn";
import { types } from "../../utils/types";
import { getWeaknesses } from "../../utils/utils";
import Card from "../../components/Card";

export default function Lesson2() {

  const type1 = types[9];
  const type2 = types[2];
  const weakNoResist = [...type2.weak].filter((type) => type !== 14);
  const weakNoImmune = [...type1.weak].filter((type) => type !== 4);

  return <Learn previousPage={"List of all type matchups"} previousLink={"/learn/type-matchups"}>
    <h1 className="text-3xl mb-4">Lesson 2. Dual Type pokemon</h1>

    <p className="mb-3">There are some pokémon who are represented by <b>two types</b>.
      All of the relationships we've seen so far are just for individual types.
      But what happens when you're battling against a dual type pokémon?
      How do you know which attacks would be super effective against it?</p>

    <p className="mb-3">It's quite easy. Let's take a Charizard, as an example.
      First, Charizard is a Fire / Flying type pokemon. Let's start by writing all the weaknesses both types have.
    </p>

    <Card>
      <div className={"px-1"}>
        <strong>{type1.name}</strong> is weak against <TypeList typeArray={type1.weak}></TypeList>
      </div>
      <div className={"px-1"}>
        <strong>{type2.name}</strong> is weak against <TypeList typeArray={type2.weak}></TypeList>
      </div>
    </Card>

    <p className="my-3"> This gives us a close approximation of the types a Charizard would be weak to.
      However, let's take a look at these weaknesses.
      Flying is weak to ice, right? But we also know fire melts ice... what should we do in these cases?
    </p>

    <h2 className="text-2xl mt-8">The role of resistances in dual type matchups</h2>
    <p className="mb-3">This is where resistances come into play! Let's list all the resistances fire and flying types have:
    </p>

    <Card>
      <div className={"px-1"}>
        <strong>{type1.name}</strong> resists <TypeList typeArray={type1.resists}></TypeList>
      </div>
      <div className={"px-1"}>
        <strong>{type2.name}</strong> resists <TypeList typeArray={type2.resists}></TypeList>
      </div>
    </Card>

    <p className="mb-3">To know which types a dual type pokémon is weak to, you have to list all the weaknesses both types have,
      then <b>"delete"</b> from the list any type that appears in the list of resistances.
    </p>
    <p className="mb-2">In this case, the <b>ice</b> type is one of the many types resisted by fire. Let's delete it from the list.
    </p>
    <div className={"pb-2"}>
      <TypeList typeArray={type1.weak}></TypeList><TypeList typeArray={weakNoResist}></TypeList>
    </div>
    <p className="mb-3">So, if Charizard aren't weak to ice, what happens when you attack them with an ice type move anyway?
      Ice types now will cause <b>effective</b> damage to a Charizard. This is, normal damage, just like any other type not listed in the weaknesses and resistances list.
    </p>
    <p className="mb-3">Okay, so we have water, ground... wait, weren't flying types immune to ground type attacks?
    </p>
    <h2 className="text-2xl mt-8">The role of immunities in dual type matchups</h2>
    <p className="mb-3">Let's move on to the possible immunities type combinations can have. Again, let's list all the immunities fire and flying types have:
    </p>
    <Card>
      <div className={"px-1"}>
        <strong>{type1.name}</strong> has no immunities
      </div>
      <div className={"px-1"}>
        <strong>{type2.name}</strong> is immune to <TypeList typeArray={type2.notAffectedBy}></TypeList>
      </div>
    </Card>

    <p className="mb-3">If any of the pokémon's types have at least one immunity, we have to delete it from the list.</p>

    <p className="mb-2">In this case, the flying type is immune to the <b>ground</b> type. Let's delete it from the list.
    </p>
    <div className={"pb-2"}>
      <TypeList typeArray={weakNoImmune}></TypeList><TypeList typeArray={weakNoResist}></TypeList>
    </div>
    <p className="mb-3">There's an important difference we have to make here: immunities <b>will still make no damage</b> to our pokémon.
      So it doesn't matter if fire is weak to ground by itself; every pokémon with the flying type will be immune to ground type attacks, Charizard included.
    </p>
    <p className="mb-3">Okay... at this point you have to be wondering why rock appears twice on the list, right?
    </p>

    <h2 className="text-2xl mt-8">Extremely effective and Mostly ineffective types</h2>
    <p className="mb-3">There is an <b>extra</b> pair of type relationships when dealing with dual type pokémon:</p>
    <Card>
      <ul className="list-disc pl-10 pr-20">
        <li>A type can be <b>extremely effective</b> against two types, causing 4 times the damage the move would normally do (x4)</li>
        <li>A type can be <b>mostly ineffective</b> against two types, causing a quarter of the damage it would normally do (x0.25)</li>
      </ul>
    </Card>
    <p className="my-3">If both types of a pokémon are weak to the same type, then the type makes <b>extremely effective</b> damage to the pokemon.</p>

    <p className="mb-2">In Charizard's case, <b>both</b> fire and flying types are weak to rock:
    </p>
    <div className={"pb-2"}>
      <TypeList typeArray={getWeaknesses(type1, type2)}></TypeList>
    </div>
    <p className="mb-3"> So, it's recommended that you prioritize rock type moves whenever you can, if you want to defeat a Charizard as soon as possible!
    </p>
    <p className="mb-3">On the same way, if both types of a pokémon resist the same type, then the type becomes <b>mostly ineffective</b> against the pokemon.</p>

    <p className="mb-3">If we take another look at flying and fire's resistances list, grass appears <b>twice</b>. Same with the bug type.
      So, don't even think about using a grass type move or a bug type move against a Charizard! It will barely make any damage.
    </p>
    <p className="mb-3">As you can see, learning the weaknesses of each pokémon can become tricky.
      We would recommend starting learning the weaknesses of your favorite dual type pokémon, or the most popular pokémon used by your rivals.
      And little by little, you'll get an idea of how resistances work!
    </p>
    <div className="mt-2 mb-13">
      <Card>
        <p>
          To reinforce your learning, go to the Quizzes page and select the <b>Dual Type Quiz</b> option to check your knowledge! How many combinations can you guess?
        </p>
        <div className="mt-2">
          <Link to="/quiz">
            <Button title={"Start quiz"}></Button>
          </Link>
        </div>
      </Card>
    </div>
  </Learn>
}