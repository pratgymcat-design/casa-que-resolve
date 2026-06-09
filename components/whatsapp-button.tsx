import { MessageCircle } from "lucide-react";

const phoneNumber = "5563981076029";
const message =
  "Ola! Vim pelo Casa Que Resolve e quero ajuda para comprar um produto.";

export function WhatsAppButton() {
  const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enviar mensagem no WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#1f8f5f] text-white shadow-[0_14px_35px_rgba(31,143,95,0.35)] transition hover:-translate-y-0.5 hover:bg-[#19794f] focus:outline-none focus:ring-4 focus:ring-[#9fe4bf] md:bottom-7 md:right-7 md:h-auto md:w-auto md:gap-2 md:px-5 md:py-3"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
      <span className="hidden text-sm font-semibold md:inline">
        Comprar pelo WhatsApp
      </span>
    </a>
  );
}
