import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "557521370024";
  const message = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre os serviços da Meddiar Logística."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5C] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;
