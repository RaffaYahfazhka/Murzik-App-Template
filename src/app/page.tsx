import Navbar from "@/containers/Navbar";
import { Meteors } from "@/components/ui/meteors";
import { TextAnimate } from "@/components/ui/text-animate";
import { SparklesText } from "@/components/ui/sparkles-text";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/scroll-based-velocity";
import { LightRays } from "@/components/ui/light-rays";
import { AuroraText } from "@/components/ui/aurora-text";
import { ChevronDown, Instagram, MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dock, DockIcon } from "@/components/ui/dock";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const galleryImages = [
  "https://i.pinimg.com/736x/a8/45/83/a845830bd0bf56b96197888f608f1740.jpg",
  "https://e0.pxfuel.com/wallpapers/321/80/desktop-wallpaper-live-cars-tumblr-luxury-lifestyle.jpg",
  "https://images.unsplash.com/photo-1534469650761-fce6cc26ac0d?fm=jpg&q=60&w=3000&auto=format&fit=crop",
];

const testimonials = [
  {
    name: "Didi Kempot",
    role: "Musisi & Public Figure",
    quote:
      "Platform ini bikin manajemen konten jadi lebih gampang dan terstruktur.",
    image:
      "https://images.tokopedia.net/blog-tokopedia-com/uploads/2019/08/lagu-didi-kempot.jpg",
  },
  {
    name: "Ahmad Dhani",
    role: "Musisi & Entrepreneur",
    quote:
      "UI modern, performa kencang, dan cocok buat tim profesional.",
    image:
      "https://media.matamata.com/thumbs/2021/12/14/30147-profil-ahmad-dhani-instagramahmaddhaniofficial/745x489-img-30147-profil-ahmad-dhani-instagramahmaddhaniofficial.jpg",
  },
  {
    name: "Deddy Corbuzier",
    role: "Content Creator",
    quote:
      "Workflow jadi rapi, dan dashboard-nya enak banget dipakai.",
    image:
      "https://imgcdn.espos.id/@espos/images/2017/07/Vlog-Dedy-Corbuzier-berjudul-Tolol.jpg?quality=60",
  },
];



export default function Page() {
  return (
    <>
      <Navbar />

      {/* ================= HERO / HOME ================= */}
      <section className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden text-center">
        {/* Background effect */}
        <div className="absolute inset-0 -z-10">
          <LightRays />
        </div>

        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
          Ship <AuroraText>beautiful</AuroraText>
        </h1>

        <TextAnimate
          animation="slideUp"
          by="word"
          className="mt-4 max-w-xl text-lg text-zinc-500"
        >
          a modern CMS to manage your data, users, and workflows
        </TextAnimate>

        <div className="mt-8 flex gap-4">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">
            Contact Us
          </Button>
        </div>
      </section>


      {/* ================= ABOUT US ================= */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <TextAnimate
          animation="slideLeft"
          by="word"
          className="mb-6 text-4xl font-semibold"
        >
          About Us
        </TextAnimate>

        <p className="max-w-3xl text-lg text-zinc-600">
          Your App adalah platform CMS modern yang dirancang untuk membantu
          bisnis dan organisasi mengelola data, user, dan workflow dengan
          cepat, aman, dan scalable.
        </p>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <TextAnimate
          animation="slideUp"
          by="word"
          className="mb-12 text-center text-4xl font-semibold"
        >
          Product Gallery
        </TextAnimate>

        <ScrollVelocityContainer>
          <ScrollVelocityRow baseVelocity={10} direction={1}>
            <div className="flex gap-6">
              {galleryImages.map((src, i) => (
                <div
                  key={i}
                  className="group relative h-64 w-[420px] overflow-hidden rounded-xl ml-7"
                >
                  <img
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 transition group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </ScrollVelocityRow>

          <ScrollVelocityRow baseVelocity={10} direction={-1}>
            <div className="flex gap-6">
              {galleryImages.map((src, i) => (
                <div
                  key={`reverse-${i}`}
                  className="group relative h-64 w-[420px] overflow-hidden rounded-xl ml-7"
                >
                  <img
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 transition group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </section>



      {/* ================= TESTIMONI ================= */}
      <section className="bg-zinc-50 py-24 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl px-6">
          <TextAnimate
            animation="slideUp"
            by="word"
            className="mb-14 text-center text-4xl font-semibold"
          >
            What Our Users Say
          </TextAnimate>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-zinc-950"
              >
                {/* avatar */}
                <div className="mb-4 flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-zinc-200 dark:ring-zinc-700"
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-zinc-500">{item.role}</p>
                  </div>
                </div>

                {/* quote */}
                <p className="text-zinc-600 transition group-hover:text-zinc-800 dark:text-zinc-400 dark:group-hover:text-zinc-200">
                  “{item.quote}”
                </p>

                {/* subtle gradient on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-black/5 dark:to-white/5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= FAQ ================= */}
      <section className="relative py-24">
        {/* background linear putih */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white/90 to-white dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950" />

        <div className="mx-auto max-w-4xl px-6">
          <TextAnimate
            animation="slideUp"
            by="word"
            className="mb-12 text-center text-4xl font-semibold"
          >
            Frequently Asked Questions
          </TextAnimate>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: "Apakah Your App bisa digunakan untuk bisnis kecil?",
                a: "Bisa. Your App dirancang fleksibel untuk UMKM hingga bisnis skala menengah.",
              },
              {
                q: "Apakah data saya aman?",
                a: "Ya. Kami menggunakan sistem keamanan modern dengan role & permission yang jelas.",
              },
              {
                q: "Apakah bisa custom fitur?",
                a: "Bisa. Kami menyediakan paket custom sesuai kebutuhan bisnis Anda.",
              },
              {
                q: "Apakah ada biaya bulanan?",
                a: "Tersedia paket bulanan dan sekali bayar tergantung kebutuhan Anda.",
              },
            ].map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border bg-white px-6 shadow-sm transition hover:shadow-md dark:bg-zinc-950"
              >
                <AccordionTrigger
                  className="flex items-center justify-between py-5 text-left text-lg font-semibold cursor-pointer no-underline hover:no-underline"
                >
                  {item.q}
                </AccordionTrigger>


                <AccordionContent className="pb-5 text-zinc-600 dark:text-zinc-400 cursor-pointer">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <TextAnimate
          animation="slideUp"
          by="word"
          className="mb-4 text-4xl font-semibold"
        >
          Let’s Talk
        </TextAnimate>

        <p className="mx-auto mb-10 max-w-xl text-lg text-zinc-500">
          Punya pertanyaan, butuh demo, atau mau kerja sama?
          Hubungi kami langsung lewat channel favorit kamu.
        </p>

        <Dock>
          {/* WhatsApp */}
          <DockIcon>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white transition hover:scale-110"
              aria-label="WhatsApp"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/662px-WhatsApp_icon.png"
                alt="WhatsApp"
                className="h-7 w-7 object-contain"
              />
            </a>
          </DockIcon>

          {/* Instagram */}
          <DockIcon className="ml-2">
            <a
              href="https://instagram.com/rafzhka"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white transition hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </DockIcon>
        </Dock>

        <p className="mt-6 text-sm text-zinc-400">
          Kami biasanya membalas dalam waktu kurang dari 24 jam.
        </p>
      </section>

      <FloatingWhatsApp />

      {/* ================= COPYRIGHT ================= */}
      <footer className="border-t bg-white py-6 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-zinc-700 dark:text-zinc-300">
              Your App
            </span>
            . All rights reserved.
          </p>
        </div>
      </footer>


    </>
  );
}
