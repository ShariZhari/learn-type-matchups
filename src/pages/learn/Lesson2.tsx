import { Link } from "react-router-dom";
import Button from "../../components/Button";
import TypeList from "../../components/TypeList";
import Learn from "../../layouts/Learn";
import { types } from "../../utils/types";
import { getWeaknesses, LESSON_URLS } from "../../utils/utils";
import Card from "../../components/Card";
import { Trans, useTranslation } from "react-i18next";

export default function Lesson2() {
  const { t } = useTranslation();
  const type1 = types[9];
  const type2 = types[2];
  const weakNoResist = [...type2.weak].filter((type) => type !== 14);
  const weakNoImmune = [...type1.weak].filter((type) => type !== 4);

  return <Learn previousPage={"learn.typeMatchups"} previousLink={LESSON_URLS.TYPE_MATCHUPS}>
    <h1 className="text-3xl mb-4">{t("learn.lesson2")}</h1>

    <p className="mb-3">
      <Trans i18nKey={"learn.lesson2.p1"} components={{ bold: <b /> }} />
    </p>

    <p className="mb-3">{t("learn.lesson2.p2")}</p>

    <Card>
      <div className={"px-1"}>
        <strong>{t(type1.name)}</strong> {t("types.weak")} <TypeList typeArray={type1.weak}></TypeList>
      </div>
      <div className={"px-1"}>
        <strong>{t(type2.name)}</strong> {t("types.weak")} <TypeList typeArray={type2.weak}></TypeList>
      </div>
    </Card>

    <p className="my-3">{t("learn.lesson2.p3")}</p>

    <h2 className="text-2xl mt-8">{t("learn.lesson2.resistances")}</h2>
    <p className="mb-3">{t("learn.lesson2.p4")}</p>

    <Card>
      <div className={"px-1"}>
        <strong>{t(type1.name)}</strong> {t("types.resists")} <TypeList typeArray={type1.resists}></TypeList>
      </div>
      <div className={"px-1"}>
        <strong>{t(type2.name)}</strong> {t("types.resists")} <TypeList typeArray={type2.resists}></TypeList>
      </div>
    </Card>

    <p className="mb-3">
      <Trans i18nKey={"learn.lesson2.p5"} components={{ bold: <b /> }} />
    </p>
    <p className="mb-2">
      <p className="mb-3">
        <Trans i18nKey={"learn.lesson2.p6"} components={{ bold: <b /> }} />
      </p>
    </p>
    <div className={"pb-2"}>
      <TypeList typeArray={type1.weak}></TypeList><TypeList typeArray={weakNoResist}></TypeList>
    </div>
    <p className="mb-3">
      <p className="mb-3">
        <Trans i18nKey={"learn.lesson2.p7"} components={{ bold: <b /> }} />
      </p>
    </p>
    <p className="mb-3">{t("learn.lesson2.p8")}</p>
    <h2 className="text-2xl mt-8">{t("learn.lesson2.immunities")}</h2>
    <p className="mb-3">{t("learn.lesson2.p9")}</p>
    <Card>
      <div className={"px-1"}>
        <strong>{t(type1.name)}</strong> {t("types.immuneException")}
      </div>
      <div className={"px-1"}>
        <strong>{t(type2.name)}</strong> {t("types.immune")} <TypeList typeArray={type2.notAffectedBy}></TypeList>
      </div>
    </Card>

    <p className="mb-3">{t("learn.lesson2.p10")}</p>

    <p className="mb-2">
      <Trans i18nKey={"learn.lesson2.p11"} components={{ bold: <b /> }} />
    </p>
    <div className={"pb-2"}>
      <TypeList typeArray={weakNoImmune}></TypeList><TypeList typeArray={weakNoResist}></TypeList>
    </div>
    <p className="mb-3">
      <Trans i18nKey={"learn.lesson2.p12"} components={{ bold: <b /> }} />
    </p>
    <p className="mb-3">{t("learn.lesson2.p13")}</p>

    <h2 className="text-2xl mt-8">{t("learn.lesson2.x4Types")}</h2>
    <p className="mb-3">
      <Trans i18nKey={"learn.lesson2.p14"} components={{ bold: <b /> }} />
    </p>
    <Card>
      <ul className="list-disc pl-10 pr-20">
        <li><Trans i18nKey={"learn.lesson2.x4Types.li1"} components={{ bold: <b /> }} /></li>
        <li><Trans i18nKey={"learn.lesson2.x4Types.li2"} components={{ bold: <b /> }} /></li>
      </ul>
    </Card>
    <p className="my-3">
      <Trans i18nKey={"learn.lesson2.p15"} components={{ bold: <b /> }} />
    </p>

    <p className="mb-2">
      <Trans i18nKey={"learn.lesson2.p16"} components={{ bold: <b /> }} />
    </p>
    <div className={"pb-2"}>
      <TypeList typeArray={getWeaknesses(type1, type2)}></TypeList>
    </div>
    <p className="mb-3">{t("learn.lesson2.p17")}</p>
    <p className="mb-3">
      <Trans i18nKey={"learn.lesson2.p18"} components={{ bold: <b /> }} />
    </p>

    <p className="mb-3">
      <Trans i18nKey={"learn.lesson2.p19"} components={{ bold: <b /> }} />
    </p>
    <p className="mb-3">{t("learn.lesson2.p20")}</p>
    <div className="mt-2 mb-13">
      <Card>
        <p>
          <Trans i18nKey={"learn.lesson2.quizInfo"} components={{ bold: <b /> }} />
        </p>
        <div className="mt-2">
          <Link to="/quiz">
            <Button title={"common.startQuiz"}></Button>
          </Link>
        </div>
      </Card>
    </div>
  </Learn>
}