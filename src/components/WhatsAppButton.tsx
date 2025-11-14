import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "254111679286"; // Format: country code + number without +
  const message = "Hi Panda Tech! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-glow hover:scale-110 transition-transform animate-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="text-white" size={28} />
    </a>
  );
};

export default WhatsAppButton;
