const profileImage =
  "http://localhost:3845/assets/557006c42886dc42f61d6f689608f658b497afd3.png";

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

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-black pt-16 text-center text-white lg:pt-[70px]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[119px]">
        <div className="mx-auto flex max-w-[1202px] flex-col items-center">
          <div className="grid size-[64px] place-items-center rounded-full bg-white/10 p-2 shadow-[0_12px_30px_rgba(0,0,0,0.45)]">
            <div className="grid size-[44px] place-items-center rounded-full bg-white">
              <svg
                aria-hidden="true"
                className="size-6 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.5l2.28 6.57L20.5 12l-6.22 2.93L12 21.5l-2.28-6.57L3.5 12l6.22-2.93L12 2.5Z" />
              </svg>
            </div>
          </div>

          <div className="mt-[26px] size-[154px] overflow-hidden rounded-full sm:size-[158px]">
            <img
              alt="M.Faizan Ali Butt"
              className="h-full w-full object-cover object-[center_35%]"
              src={profileImage}
            />
          </div>

          <h2 className="mt-5 text-[34px] font-extrabold leading-none tracking-[-0.72px] sm:text-[40px]">
            M.Faizan Ali Butt
          </h2>

          <p className="mt-4 max-w-[650px] text-[18px] leading-[23px] text-white sm:text-[20px]">
            A creative graphic designer with a love for visual storytelling and bold
            ideas.Always learning, evolving, and creating with purpose.
          </p>

          <a
            className="mt-6 inline-flex rounded-full bg-white/10 p-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.45),inset_0_1px_2px_rgba(255,255,255,0.32),inset_0_-3px_8px_rgba(0,0,0,0.45)] backdrop-blur-[6px]"
            href="mailto:mfaizanalibutt124@gmail.com"
          >
            <span className="rounded-full bg-white px-5 py-2.5 text-[16px] font-bold leading-none text-black">
              Let&apos;s Connect
            </span>
          </a>

          <div className="mt-6 flex items-center justify-center gap-4">
            {socials.map((social) => (
              <a
                aria-label={social.label}
                className="grid size-[42px] place-items-center rounded-full bg-white/10 ring-1 ring-white/50 transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-110 hover:bg-white hover:text-black hover:shadow-[0_12px_28px_rgba(255,255,255,0.16)] active:translate-y-0 active:scale-95"
                href={social.href}
                key={social.label}
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  aria-hidden="true"
                  className="size-[22px]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
