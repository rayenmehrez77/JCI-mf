import React from "react";
import { Question } from "../components";
import Fade from "react-reveal/Fade";

const questions = [
  {
    id: 1,
    title: "Quelle est la mission de JCI ?",
    description:
      "Offrir des opportunités de développement qui permettent aux jeunes de créer un changement positif",
  },
  {
    id: 2,
    title: "Qui sont nos membres ?",
    description:
      "Nos membres sont très divers – des entrepreneurs en démarrage aux personnes travaillant dans des entreprises de premier ordre, des organisations à but non lucratif et des œuvres de bienfaisance. Les membres partagent une passion commune pour se challenger et se développer.",
  },
  {
    id: 3,
    title: "Quels sont les principaux domaines de JCI ?",
    description:
      "Nous menons des projets et des événements qui combinent nos quatre domaines principaux : business, formation, communautaire et international. Vous pouvez développer vos compétences de plusieurs manières, de l'aide à l'organisation d'un événement caritatif local à la planification d'une série d'événements professionnels. Et vous pouvez rencontrer des membres JCI internationaux lorsque vous vous rendez à des événements dans d'autres pays.",
  },
  {
    id: 4,
    title: "La JCI est-elle bonne pour ma carrière ?",
    description:
      "En rencontrant de nouvelles personnes, vous élargirez vos perspectives et votre compréhension. L'adhésion à la JCI fera ressortir votre CV, car il montre que vous êtes engagé dans votre propre développement personnel et professionnel. Beaucoup de nos membres ont découvert leur passion et trouvé de nouvelles opportunités grâce à leur implication dans JCI. Cela les conduit souvent à une nouvelle carrière. Les compétences générales que vous apprenez à JCI (parler en public, négociation, gestion de projet, etc.) vous seront très utiles tout au long de votre carrière. Alors oui, JCI est formidable pour votre carrière.",
  },
  {
    id: 5,
    title: "La JCI est-elle bonne pour mon CV ?",
    description:
      "Curriculum Vitae (CV) signifie « le cours de votre vie ». Avec JCI, vous pouvez vous impliquer dans des projets qui élargiront vos compétences et amélioreront vos talents. Les employeurs potentiels vous remarqueront. Alors oui, JCI est formidable à la fois pour vous et pour votre CV.",
  },
  {
    id: 6,
    title: "Comment puis-je contribuer ?",
    description:
      "JCI Menzel Fersi vous donne une chance de redonner à la société en vous impliquant dans des projets communautaires. Vous aimerez peut-être le son d'un événement caritatif, d'un événement de formation dirigé par JCI ou d'un projet . L'adhésion à JCI est ce que vous en faites. Nous encourageons « l'apprentissage par la pratique ». Maintes et maintes fois, nous constatons que plus nos membres investissent dans JCI, plus ils en sortent.",
  },
  {
    id: 7,
    title: "Ma contribution peut-elle créer un changement positif ?",
    description:
      "Oui. Chaque fois que vous vous améliorez, améliorez vos pairs, votre communauté ou JCI, vous créez un changement positif. Le monde a plus que jamais besoin de dirigeants qui le font, votre contribution est donc importante.",
  },
];

const FrequentQuestions = () => {
  return (
    <div className="pt-12 lg:pt-32 bg-white " id="faq">
      <h1 className="lg:text-4xl text-center tracking-wider font-bold text-gray-800	uppercase font-josefin text-2xl">
        QUESTIONS FRÉQUENTES
      </h1>
      <div className="flex flex-col items-center mt-4">
        <div className="w-20 my-1.5 h-0.5 gradient"></div>
        <div className="w-20 h-0.5 ml-16 gradient"></div>
      </div>
      <div>
        <div className="xs:max-w-full lg:max-w-4xl mx-auto mt-8 p-4 lg:p-10 space-y-3 grid grid-rows-7">
          {questions.map((question) => (
            <Question key={question.id} {...question} />
          ))}
        </div>
      </div>
      <div className="max-w-full md:mx-auto md:max-w-5xl text-center mt-8 mx-8">
        <h1 className="text-2xl text-center tracking-widest font-bold text-gray-800 font-josefin">
          Vous avez encore une question ?
        </h1>
        <p className="mx-2 text-sm lg:text-lg my-6 sm:max-w-2xl sm:mx-auto font-semibold text-gray-800 tracking-wider">
          Si vous ne trouvez pas la réponse à votre question dans notre FAQ,
          vous pouvez toujours nous contacter. Nous vous répondrons sous peu.
          Contactez-nous par e-mail à
          <a
            href="mailto:contact@jci-menzel-fersi.tn"
            className="font-bold pt-2 block underline text-gray-800"
          >
            contact@jci-menzel-fersi.tn
          </a>
        </p>
      </div>
    </div>
  );
};

export default FrequentQuestions;
