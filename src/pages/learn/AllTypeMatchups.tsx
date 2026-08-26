import { Link } from "react-router-dom";
import Button from "../../components/Button";
import TabPanel from "./components/TabPanel";
import Learn from "../../layouts/Learn";
import Card from "../../components/Card";
import { LESSON_URLS } from "../../utils/utils";
import { Trans, useTranslation } from "react-i18next";

export default function AllTypeMatchups() {
  const { t } = useTranslation();
  return <Learn previousPage={"learn.lesson1"} previousLink={LESSON_URLS.LESSON1} nextPage={"learn.lesson2"} nextLink={LESSON_URLS.LESSON2}>
    <h1 className="text-3xl mb-4">{t("learn.typeMatchups")}</h1>
    <label>{t("learn.typeMatchups.info1")}</label>
    <label>{t("learn.typeMatchups.info2")}</label>
    <TabPanel />
    <p className="mb-3">
      <Trans i18nKey={"learn.typeMatchups.p1"} components={{ bold: <b /> }} />
    </p>
    <Card>
      <p>
        <Trans i18nKey={"learn.typeMatchups.quizInfo"} components={{ bold: <b /> }} />
      </p>
      <div className="mt-2">
        <Link to="/quiz">
          <Button title={"common.startQuiz"}></Button>
        </Link>
      </div>
    </Card>
    <p className="mt-3 mb-13">
      <Trans i18nKey={"learn.typeMatchups.p2"} components={{ bold: <b /> }} />
    </p>
  </Learn>
}