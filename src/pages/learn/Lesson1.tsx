import { Trans, useTranslation } from "react-i18next";
import Card from "../../components/Card";
import Learn from "../../layouts/Learn";
import { LESSON_URLS } from "../../utils/utils";

export default function Lesson1() {
  const { t } = useTranslation();
  return <Learn nextPage={"learn.typeMatchups"} nextLink={LESSON_URLS.TYPE_MATCHUPS}>
    <h1 className="text-3xl mb-4">{t("learn.lesson1")}</h1>
    <p className="mb-3">
      <Trans i18nKey={"learn.lesson1.p1"} components={{ bold: <b /> }} />
    </p>
    <p className="mb-3">
      <Trans i18nKey={"learn.lesson1.p2"} components={{ bold: <b />, italics: <i /> }} />
    </p>

    <p className="mb-3">
      <Trans i18nKey={"learn.lesson1.p3"} components={{ bold: <b />, italics: <i /> }} />
    </p>

    <p className="mb-3">
      <Trans i18nKey={"learn.lesson1.p4"} components={{ bold: <b /> }} />
    </p>

    <h2 className="text-2xl mt-6 mb-4">{t("learn.lesson1.typesOfRelationships")}</h2>
    <div className="mb-6 flex flex-col gap-4">
      <Card>
        <label className="text-lg">{t("learn.lesson1.attack")}</label>
        <ul className="list-disc pl-10 pr-20">
          <li><Trans i18nKey={"learn.lesson1.attack.li1"} components={{ bold: <b /> }} /></li>
          <li><Trans i18nKey={"learn.lesson1.attack.li2"} components={{ bold: <b /> }} /></li>
          <li><Trans i18nKey={"learn.lesson1.attack.li3"} components={{ bold: <b /> }} /></li>
          <li><Trans i18nKey={"learn.lesson1.attack.li4"} components={{ bold: <b /> }} /></li>
        </ul>
      </Card>

      <Card>
        <label className="text-lg">{t("learn.lesson1.defense")}</label>
        <ul className="list-disc pl-10 pr-20">
          <li><Trans i18nKey={"learn.lesson1.defense.li1"} components={{ bold: <b /> }} /></li>
          <li><Trans i18nKey={"learn.lesson1.defense.li2"} components={{ bold: <b /> }} /></li>
          <li><Trans i18nKey={"learn.lesson1.defense.li3"} components={{ bold: <b /> }} /></li>
          <li><Trans i18nKey={"learn.lesson1.defense.li4"} components={{ bold: <b /> }} /></li>
        </ul>
      </Card>
    </div>

    <p className="mb-3">{t("learn.lesson1.p5")}</p>
    <p className="mb-3">{t("learn.lesson1.p6")}</p>
    <p className="mb-13">
      <Trans i18nKey={"learn.lesson1.nextLesson"} components={{ bold: <b /> }} />
    </p>
  </Learn>
}