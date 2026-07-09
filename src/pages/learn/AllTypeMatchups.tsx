import { Link } from "react-router-dom";
import Button from "../../components/Button";
import TabPanel from "../../components/TabPanel";
import Learn from "../../layouts/Learn";

export default function AllTypeMatchups() {
  return <Learn previousPage={"Lesson 1. Introduction to type matchups"} previousLink={"/learn/lesson-1"} nextPage={"Lesson 2. Dual Type pokemon"} nextLink={"/learn/lesson-2"}>
    <h1 className="text-3xl mb-4">List of all type matchups</h1>
    <label>Click on each type to learn more about their strenghts and weaknesses.</label>
    <label>Then, click on each row to show an explanation of the relationships.</label>
    <TabPanel />
    <p className="mb-3">The most important matchups to learn are <b>super effectiveness</b>, <b>weaknesses</b> (and <b>no effects/immunities</b>, if they exist).
      You can prioritize learning those first.</p>
    <p>
      To reinforce your learning, go to the Quizzes page and select the <b>Single Type Quiz</b> option to check your knowledge! Can you guess the weaknesses of all 18 types?
    </p>
    <div className="mt-2 mb-3">
    <Link to="/quiz">
      <Button color="secondary" title={"Start quiz"}></Button>
    </Link>
    </div>
    <p className="mb-13">For now, resistances shouldn't be a priority to learn. However, they become important when you attack <b>pokemon of two types</b>. Learn more on the next page.</p>
  </Learn>
}