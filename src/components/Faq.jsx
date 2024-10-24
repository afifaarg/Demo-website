import React, { useState } from "react";

const FAQ = () => {
  // État pour gérer la question ouverte dans l'accordéon
  const [openQuestion, setOpenQuestion] = useState(null);

  // Fonction pour basculer l'affichage des réponses
  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  // Liste des questions et réponses FAQ
  const faqData = [
    {
      question: "Quels types de produits de gaming propose Hichem Technology ?",
      answer:
        "Nous offrons une large gamme de produits, y compris des consoles de jeu, des PC gaming, des accessoires, et des jeux vidéo pour toutes les plateformes.",
    },
    {
      question: "Offrez-vous un support technique pour les produits achetés ?",
      answer:
        "Oui, notre équipe de support est disponible pour vous aider avec l'installation et la configuration de tous nos produits de gaming.",
    },
    {
      question: "Quelles sont vos politiques de retour et d'échange ?",
      answer:
        "Nous avons une politique de retour de 30 jours. Si vous n'êtes pas satisfait de votre achat, vous pouvez le retourner dans son état d'origine pour un remboursement complet.",
    },
    {
      question:
        "Proposez-vous des promotions sur les jeux et les accessoires ?",
      answer:
        "Absolument ! Nous mettons régulièrement à jour nos promotions sur divers jeux et accessoires. Assurez-vous de consulter notre site pour les meilleures offres.",
    },
    {
      question: "Comment puis-je suivre ma commande ?",
      answer:
        "Après avoir passé votre commande, vous recevrez un email de confirmation contenant un numéro de suivi pour suivre l'expédition de votre commande en temps réel.",
    },
  ];

  return (
    <section id="faq" className="py-12 px-4">
      <div className="container mx-auto">
        {/* Titre de la section FAQ */}
        <h2 className="text-4xl font-bold text-center text-primary-dark uppercase mb-8">
          Questions Fréquemment Posées
        </h2>

        {/* Élément de l'accordéon FAQ */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden border-2 border-primary"
            >
              {/* En-tête de la question */}
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex justify-between items-center p-4 bg-primary text-secondary-dark font-bold focus:outline-none"
              >
                <span>{item.question}</span>
                <span>{openQuestion === index ? "-" : "+"}</span>
              </button>

              {/* Section de la réponse dans le même conteneur avec bg-primary */}
              {openQuestion === index && (
                <div className="bg-primary">
                  <p className="px-4 py-2 text-white">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
