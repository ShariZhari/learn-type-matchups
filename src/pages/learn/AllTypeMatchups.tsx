import TabPanel from "../../components/TabPanel";
import Learn from "../../layouts/Learn";

export default function AllTypeMatchups() {
  return <Learn>
    <h1 className="text-3xl mb-4">List of all type matchups</h1>
    <label>Click on each type to learn more about their strenghts and weaknesses.</label>
    <label>Then, click on each row to show an explanation of the relationships.</label>
    <TabPanel />
    <p className="mb-3">The most important matchups to learn are <b>super effectiveness</b>, <b>weaknesses</b> (and <b>no effects/immunities</b>, if they exist).
      You can prioritize learning those first.</p>
    <p className="mb-13">For now, resistances shouldn't be a priority to learn. However, they become important when you attack <b>pokemon of two types</b>. Learn more on the next page.</p>
  </Learn>
}