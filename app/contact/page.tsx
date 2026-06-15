import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const heroBackground =
  "https://www.figma.com/api/mcp/asset/fa88a8fc-9408-4bd2-bb43-7d153f6db2a9";

const contactItems = [
  {
    title: "Head Office",
    text: "Have questions about our services? We're here to help you improve your email deliverability.",
    icon: "M12 2.25A6.75 6.75 0 0 0 5.25 9c0 4.65 6.75 12.75 6.75 12.75S18.75 13.65 18.75 9A6.75 6.75 0 0 0 12 2.25Zm0 9.25A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z",
  },
  {
    title: "Head Office",
    text: "Have questions about our services? We're here to help you improve your email deliverability.",
    icon: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z",
  },
  {
    title: "Head Office",
    text: "Have questions about our services? We're here to help you improve your email deliverability.",
    icon: "M3.75 5h16.5A1.75 1.75 0 0 1 22 6.75v10.5A1.75 1.75 0 0 1 20.25 19H3.75A1.75 1.75 0 0 1 2 17.25V6.75A1.75 1.75 0 0 1 3.75 5Zm.63 2 7.62 5.32L19.62 7H4.38Zm15.62 1.52-7.43 5.18a1 1 0 0 1-1.14 0L4 8.52V17h16V8.52Z",
  },
];

const services = [
  "Logo & Branding",
  "Social Media Posts",
  "UI/UX Designing",
  "Social Media Marketing",
  "Branding & Identity",
  "Meta Ads",
];

const socials = [
  {
    href: "https://www.linkedin.com/in/m-faizan-ali-butt-352600331/?skipRedirect=true",
    label: "Twitter",
    icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.963 6.817H1.684l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z",
  },
  {
    href: "https://wa.me/923176742627",
    label: "WhatsApp",
    icon: "M12.04 2a9.91 9.91 0 0 0-8.48 15.03L2.5 22l5.09-1.02A9.95 9.95 0 1 0 12.04 2Zm0 1.85a8.1 8.1 0 1 1-3.83 15.24l-.32-.17-3.02.61.63-2.94-.2-.34a8.1 8.1 0 0 1 6.74-12.4Zm-3.34 4.3c-.18 0-.47.07-.72.35-.25.28-.95.93-.95 2.27 0 1.34.97 2.63 1.1 2.81.14.18 1.88 3 4.64 4.08 2.3.9 2.77.72 3.27.67.5-.04 1.61-.66 1.84-1.3.23-.64.23-1.18.16-1.3-.07-.11-.25-.18-.53-.32-.28-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.23-1.37-.82-.74-1.38-1.64-1.54-1.92-.16-.27-.02-.42.12-.56.13-.12.28-.32.42-.48.14-.16.18-.28.27-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.47Z",
  },
  {
    href: "https://www.facebook.com/share/1db4pPyMu2/",
    label: "Facebook",
    icon: "M14.25 8.25V6.5c0-.84.41-1.25 1.32-1.25h1.18V2.18A15.8 15.8 0 0 0 14.45 2c-2.28 0-3.84 1.38-3.84 3.9v2.35H8v3.44h2.61V22h3.64V11.69h2.85l.45-3.44h-3.3Z",
  },
  {
    href: "https://www.instagram.com/cant_be_faizzy?igsh=MXA0cjE3eWN6OHAweA==",
    label: "Instagram",
    icon: "M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 7.2A4.8 4.8 0 1 1 12 16.8 4.8 4.8 0 0 1 12 7.2Zm0 2A2.8 2.8 0 1 0 12 14.8 2.8 2.8 0 0 0 12 9.2Zm5-2.35a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z",
  },
  {
    href: "mailto:mfaizanalibutt124@gmail.com",
    label: "Email",
    icon: "M3.75 5h16.5A1.75 1.75 0 0 1 22 6.75v10.5A1.75 1.75 0 0 1 20.25 19H3.75A1.75 1.75 0 0 1 2 17.25V6.75A1.75 1.75 0 0 1 3.75 5Zm.63 2 7.62 5.32L19.62 7H4.38Zm15.62 1.52-7.43 5.18a1 1 0 0 1-1.14 0L4 8.52V17h16V8.52Z",
  },
];

function ContactPill() {
  return (
    <div className="inline-flex rounded-full bg-white/10 p-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.45),inset_0_1px_2px_rgba(255,255,255,0.32),inset_0_-3px_8px_rgba(0,0,0,0.45)] ring-1 ring-white/20 backdrop-blur-[6px]">
      <span className="rounded-full bg-white px-5 py-2.5 text-[16px] font-bold leading-none text-black">
        Contact Us
      </span>
    </div>
  );
}

function ContactPageHero() {
  return (
    <section className="relative h-[310px] overflow-hidden bg-black text-white sm:h-[360px] lg:h-[430px]">
      <img
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-top opacity-90"
        src={heroBackground}
      />
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute left-1/2 top-0 h-[1024px] w-[1440px] origin-top -translate-x-1/2 scale-[0.34] sm:scale-[0.5] md:scale-[0.62] lg:scale-[0.72] xl:scale-[0.82]">
        <Navbar />
      </div>
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] flex-col items-center justify-center px-5 pt-16 text-center sm:px-8 lg:px-[119px]">
        <ContactPill />
        <h1 className="mt-5 text-[34px] font-extrabold leading-tight sm:text-[46px] lg:text-[54px]">
          Let&apos;s Connect Together
        </h1>
        <p className="mt-3 max-w-[680px] text-[14px] leading-[1.45] text-white sm:text-[16px]">
          We&apos;re here to help! Whether you have a question, need support, or want to explore how we can collaborate, don&apos;t hesitate to reach out.
        </p>
      </div>
    </section>
  );
}

function ContactDetails() {
  return (
    <div className="bg-[#323232] px-6 py-8 text-white sm:px-8 lg:px-12 lg:py-14">
      <h2 className="text-[34px] font-extrabold leading-tight sm:text-[40px]">Get in touch</h2>
      <p className="mt-6 max-w-[410px] text-[16px] leading-[1.45] text-white">
        Have questions about our services? We&apos;re here to help you improve your email deliverability.
      </p>

      <div className="mt-9 space-y-7">
        {contactItems.map((item, index) => (
          <div className="flex gap-5" key={`${item.title}-${index}`}>
            <div className="grid size-12 shrink-0 place-items-center rounded-full bg-white text-black shadow-[0_10px_22px_rgba(0,0,0,0.24)]">
              <svg aria-hidden="true" className="size-6" fill="currentColor" viewBox="0 0 24 24">
                <path d={item.icon} />
              </svg>
            </div>
            <div>
              <h3 className="text-[20px] font-extrabold">{item.title}</h3>
              <p className="mt-2 max-w-[420px] text-[14px] leading-[1.45] text-white">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 h-px w-full bg-white/40" />
      <p className="mt-8 text-[18px] font-bold">Follow our social media</p>
      <div className="mt-4 flex flex-wrap gap-4">
        {socials.map((social) => (
          <a
            aria-label={social.label}
            className="grid size-10 place-items-center rounded-full bg-white text-black transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_22px_rgba(255,255,255,0.16)]"
            href={social.href}
            key={social.label}
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg aria-hidden="true" className="size-5" fill="currentColor" viewBox="0 0 24 24">
              <path d={social.icon} />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}

function ContactForm() {
  const inputClass =
    "h-10 rounded-full border border-black/70 bg-white px-5 text-[14px] font-semibold text-black outline-none placeholder:text-black/50";

  return (
    <form
      action="https://formsubmit.co/mfaizanalibutt124@gmail.com"
      className="bg-white px-6 py-8 text-[#111015] sm:px-8 lg:px-12 lg:py-14"
      method="POST"
    >
      <input name="_captcha" type="hidden" value="false" />
      <input name="_subject" type="hidden" value="New project inquiry from portfolio website" />
      <h2 className="text-center text-[34px] font-extrabold leading-tight sm:text-[42px]">
        Send Us a Message
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-[12px] font-bold">
          First Name
          <input className={inputClass} name="first_name" placeholder="Faizan Ali" required />
        </label>
        <label className="flex flex-col gap-1.5 text-[12px] font-bold">
          Last Name
          <input className={inputClass} name="last_name" placeholder="Butt" required />
        </label>
        <label className="flex flex-col gap-1.5 text-[12px] font-bold">
          Email Address
          <input className={inputClass} name="email" placeholder="xyz@gmail.com" required type="email" />
        </label>
        <label className="flex flex-col gap-1.5 text-[12px] font-bold">
          Phone Number
          <input className={inputClass} name="phone" placeholder="+1 87654 321 20" required />
        </label>
      </div>

      <label className="mt-4 flex flex-col gap-1.5 text-[12px] font-bold">
        Subject
        <div className="relative">
          <select
            className={`${inputClass} w-full appearance-none pr-12`}
            defaultValue=""
            name="subject"
            required
          >
            <option disabled value="">
              Select a service
            </option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[16px] text-black">
            ▾
          </span>
        </div>
      </label>

      <label className="mt-4 flex flex-col gap-1.5 text-[12px] font-bold">
        Message
        <textarea
          className="min-h-[136px] resize-none rounded-[14px] border border-black/70 bg-white px-4 py-3 text-[12px] text-black outline-none placeholder:text-black/50"
          name="message"
          placeholder="Tell us more about your needs..."
          required
        />
      </label>

      <button
        className="group mt-7 flex h-[51px] w-full items-center justify-center rounded-full bg-[rgba(18,18,18,0.78)] px-2 py-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.32),inset_0_1px_2px_rgba(255,255,255,0.32),inset_0_-3px_8px_rgba(0,0,0,0.45)] ring-1 ring-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5"
        type="submit"
      >
        <span className="flex h-[39px] w-full items-center justify-center rounded-full bg-white px-5 text-[16px] font-extrabold leading-none text-black shadow-[0_5px_12px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.95)]">
          Submit Now
        </span>
      </button>
    </form>
  );
}

function ContactFormSection() {
  return (
    <section className="bg-black py-10 text-white sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[119px]">
        <div className="mx-auto grid max-w-[1202px] overflow-hidden rounded-[18px] lg:grid-cols-[0.85fr_1fr]">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function MapBand() {
  return (
    <section className="h-[260px] overflow-hidden bg-[#d9d9d9] sm:h-[330px] lg:h-[380px]">
      <iframe
        className="h-full w-full border-0 grayscale-[0.1]"
        loading="lazy"
        src="https://www.openstreetmap.org/export/embed.html?bbox=72.94%2C31.36%2C73.18%2C31.49&layer=mapnik&marker=31.418%2C73.079"
        title="Faisalabad map"
      />
    </section>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black">
      <ContactPageHero />
      <ContactFormSection />
      <MapBand />
      <ContactSection />
      <Footer />
    </main>
  );
}
