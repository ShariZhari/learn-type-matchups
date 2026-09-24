import Card from "../../components/Card";
import Learn from "../../layouts/Learn";
import { LESSON_URLS } from "../../utils/utils";
import { Trans, useTranslation } from "react-i18next";

export default function ExtraLesson() {
  const { t } = useTranslation();


  return <Learn previousPage={"learn.lesson2"} previousLink={LESSON_URLS.LESSON2}>
    <h1 className="text-3xl mb-4">{t("learn.extraLesson")}</h1>

    <p className="mb-3">{t("learn.extraLesson.p1")}</p>

    <h2 className="text-2xl mt-8">{t("learn.extraLesson.abilities")}</h2>
    <p className="mb-3">{t("learn.extraLesson.p2")}</p>
    <p className="mb-3">{t("learn.extraLesson.p3")}</p>
    <p className="mb-2">{t("learn.extraLesson.p4")}</p>
    <Card>
      <ul className="list-disc pl-10 pr-20">
        <li><Trans i18nKey={"learn.extraLesson.abilities.li1"} components={{ bold: <b /> }} /></li>
        <li><Trans i18nKey={"learn.extraLesson.abilities.li2"} components={{ bold: <b /> }} /></li>
        <li><Trans i18nKey={"learn.extraLesson.abilities.li3"} components={{ bold: <b /> }} /></li>
        <li><Trans i18nKey={"learn.extraLesson.abilities.li4"} components={{ bold: <b /> }} /></li>
        <li><Trans i18nKey={"learn.extraLesson.abilities.li5"} components={{ bold: <b /> }} /></li>
        <li><Trans i18nKey={"learn.extraLesson.abilities.li6"} components={{ bold: <b /> }} /></li>
      </ul>
    </Card>
    <p className="mt-2 mb-3">{t("learn.extraLesson.p5")}</p>
    <p className="mb-3">{t("learn.extraLesson.p6")}</p>

    <h2 className="text-2xl mt-8">{t("learn.extraLesson.formChanges")}</h2>
    <p className="mb-3">{t("learn.extraLesson.p7")}</p>
    <p className="mb-3">{t("learn.extraLesson.p8")}</p>

    <h2 className="text-2xl mt-8">{t("learn.extraLesson.terastal")}</h2>
    <p className="mb-3">{t("learn.extraLesson.p9")}</p>
    <p className="mb-3">{t("learn.extraLesson.p10")}</p>
    <p className="mb-3">{t("learn.extraLesson.p11")}</p>
    <p className="mb-3">{t("learn.extraLesson.p12")}</p>

    <h2 className="text-2xl mt-8">{t("learn.extraLesson.oldGames")}</h2>
    <p className="mb-3">{t("learn.extraLesson.p13")}</p>
    <p className="mb-2">{t("learn.extraLesson.p14")}</p>
    <Card>
      <ul className="list-disc pl-10 pr-20">
        <li>{t("learn.extraLesson.oldGames.li1")}</li>
        <li>{t("learn.extraLesson.oldGames.li2")}</li>
        <li>{t("learn.extraLesson.oldGames.li3")}</li>
        <li>{t("learn.extraLesson.oldGames.li4")}</li>
        <li>{t("learn.extraLesson.oldGames.li5")}</li>
        <li>{t("learn.extraLesson.oldGames.li6")}</li>
      </ul>
    </Card>

    <p className="mt-2 mb-3">{t("learn.extraLesson.p15")}</p>

    <h2 className="text-2xl mt-8">{t("learn.extraLesson.oneThing")}</h2>
    <p className="mb-13">{t("learn.extraLesson.p16")}</p>

  </Learn>
}