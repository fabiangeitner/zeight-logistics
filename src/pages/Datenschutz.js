import React from "react";
import styled from "styled-components";

const DatenschutzWrapper = styled.div`
  width: 100vw;
  padding: 8vh 25px 8vh 25px;

  @media (min-width: 768px) {
    padding: 8vh 50px;
  }

  @media (min-width: 992px) {
    padding: 8vh 100px;
  }
`;

const Headline = styled.h2`
  font-size: 30px;
  font-weight: 600;
  padding: 50px 25px;
  text-align: center;
  color: ${(props) => props.color};

  @media (min-width: 768px) {
    padding: 50px;
  }

  @media (min-width: 992px) {
    padding: 100px 50px;
  }
`;

const Box = styled.div`
  margin-bottom: 50px;
  width: 100%;
  text-align: center;

  h4 {
    font-size: 18px;
    margin-bottom: 15px;
  }

  p {
    font-size: 14px;
  }
`;

export const Datenschutz = () => {
  return (
    <>
      <DatenschutzWrapper>
        <Headline>Datenschutz</Headline>
        <Box>
          <h4>Allgemeine Hinweise</h4>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können. Ausführliche Informationen
            zum Thema Datenschutz entnehmen Sie unserer unter diesem Text
            aufgeführten Datenschutzerklärung.
          </p>
        </Box>
        <Box>
          <h4>Datenerfassung auf dieser Website</h4>
          <p>
            Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
            „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung
            entnehmen. Wie erfassen wir Ihre Daten? Ihre Daten werden zum einen
            dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich
            z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
            Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
            allem technische Daten (z. B. Internetbrowser, Betriebssystem oder
            Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
            automatisch, sobald Sie diese Website betreten. Wofür nutzen wir
            Ihre Daten? Ein Teil der Daten wird erhoben, um eine fehlerfreie
            Bereitstellung der Website zu gewährleisten. Andere Daten können zur
            Analyse Ihres Nutzerverhaltens verwendet werden. Welche Rechte haben
            Sie bezüglich Ihrer Daten? Sie haben jederzeit das Recht,
            unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
            gespeicherten personenbezogenen Daten zu erhalten. Sie haben
            außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu
            verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt
            haben, können Sie diese Einwilligung jederzeit für die Zukunft
            widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen
            die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
            verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der
            zuständigen Aufsichtsbehörde zu. Hierzu sowie zu weiteren Fragen zum
            Thema Datenschutz können Sie sich jederzeit an uns wenden.
          </p>
        </Box>
        <Box>
          <h4>Externes Hosting</h4>
          <p>
            Diese Website wird bei einem externen Dienstleister gehostet
            (Hoster). Die personenbezogenen Daten, die auf dieser Website
            erfasst werden, werden auf den Servern des Hosters gespeichert.
            Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta-
            und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
            Websitezugriffe und sonstige Daten, die über eine Website generiert
            werden, handeln. Der Einsatz des Hosters erfolgt zum Zwecke der
            Vertragserfüllung gegenüber unseren potenziellen und bestehenden
            Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren,
            schnellen und effizienten Bereitstellung unseres Online-Angebots
            durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
            Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur
            Erfüllung seiner Leistungspflichten erforderlich ist und unsere
            Weisungen in Bezug auf diese Daten befolgen. Wir setzen folgenden
            Hoster ein: OVH GmbH St. Johanner Str. 41-43 66111 Saarbrücken
            Deutschland Telefon : +49 681 906730 Fax : +49 (0) 681 8761827
            E-Mail : kundendienst@ovh.de Auftragsverarbeitung Wir haben einen
            Vertrag über Auftragsverarbeitung (AVV) mit dem oben genannten
            Anbieter geschlossen. Hierbei handelt es sich um einen
            datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet,
            dass dieser die personenbezogenen Daten unserer Websitebesucher nur
            nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
          </p>
        </Box>
        <Box>
          <h4>Datenschutz</h4>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
            vertraulich und entsprechend den gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn Sie
            diese Website benutzen, werden verschiedene personenbezogene Daten
            erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich
            identifiziert werden können. Die vorliegende Datenschutzerklärung
            erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie
            erläutert auch, wie und zu welchem Zweck das geschieht. Wir weisen
            darauf hin, dass die Datenübertragung im Internet (z. B. bei der
            Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
            lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
            möglich.
          </p>
        </Box>
        <Box>
          <h4>Speicherdauer</h4>
          <p>
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere
            Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
            bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie
            ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung
            zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
            wir keine anderen rechtlich zulässigen Gründe für die Speicherung
            Ihrer personenbezogenen Daten haben (z. B. steuer- oder
            handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall
            erfolgt die Löschung nach Fortfall dieser Gründe.
          </p>
        </Box>
      </DatenschutzWrapper>
    </>
  );
};
