"use client";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6281234567890"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg transition hover:scale-110 hover:shadow-xl"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/662px-WhatsApp_icon.png"
        alt="WhatsApp"
        className="h-8 w-8 object-contain"
      />
    </a>
  );
}
