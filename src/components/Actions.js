import React from "react";
import Action from "./Action";
import { Title } from "../components";

const steps = [
  {
    id: 0,
    desc: "Que la foi en Dieu donne à la vie son véritable sens",
    ar: "أن الإيمان بالله يعطي للحياة معناها الحقيق",
  },
  {
    id: 1,
    desc: "Que la fraternité humaine transcende la souveraineté des nations",
    ar: "أن التآخي البشري يفوقون سيادة الدول",
  },
  {
    id: 2,
    desc: "Que la liberté des individus et de l’entreprise assure mieux la justice économique",
    ar: "أن الاجتهاد وحرية الأفراد يضمنان العدالة  الاجتماعية و الاقتصادية",
  },
  {
    id: 3,
    desc: "Que l’autorité doit s’appuyer sur la loi et non sur l’arbitraire ",
    ar: "أن قيادة الشعوب تعتمد القانون وترفض التعسف والحيف",
  },
  {
    id: 4,
    desc: "Que la personne humaine est la plus précieuse des richesses ",
    ar: "أن الذات البشرية هي أهم المكاسب وأغناها",
  },
  {
    id: 5,
    desc: "Et que servir l’humanité constitue l’oeuvre la plus noble d’une vie.",
    ar: " .أن خدمة الإنسان هي أنبل عمل في الحياة",
  },
];

const Actions = () => {
  return (
    <div
      className="w-full mt-10  transform -skew-y-2 credo bg-no-repeat bg-cover relative  max-h-2/4 lg:py-18 png px-4 lg:px-8 credo py-20"
      id="credo"
    >
      <Title title="Notre Credo" des1="Nous crayons" ar="نعتقد" isWhite skew />
      <div className="max-w-6xl mx-auto z-0 transform skew-y-2 ">
        {steps.map((step) => (
          <Action key={step.id} {...step} />
        ))}
      </div>
    </div>
  );
};

export default Actions;
