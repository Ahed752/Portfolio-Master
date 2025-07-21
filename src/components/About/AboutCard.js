import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation } from "react-i18next";

function AboutCard() {
  const { t } = useTranslation(); 
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" style={{ textAlign: "justify" }}>
          <p
            dangerouslySetInnerHTML={{
              __html:
                t("aboutCard.intro1") +
                "<br /><br />" +
                t("aboutCard.intro2") +
                "<br /><br />" +
                t("aboutCard.intro3")
            }}
          />

          <ul>
            <li>{t("aboutCard.list1")}</li>
            <li>{t("aboutCard.list2")}</li>
            <li>{t("aboutCard.list3")}</li>
            <li>{t("aboutCard.list4")}</li>
          </ul>

          <p>{t("aboutCard.goal")}</p>

          <hr style={{ borderTop: "1px dashed #c770f0" }} />

          <p>Outside the codebase, I recharge by:</p>
          <ul>
            <li className="about-activity"><ImPointRight /> {t("aboutCard.activity1")}</li>
            <li className="about-activity"><ImPointRight /> {t("aboutCard.activity2")}</li>
            <li className="about-activity"><ImPointRight /> {t("aboutCard.activity3")}</li>
            <li className="about-activity"><ImPointRight /> {t("aboutCard.activity4")}</li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
