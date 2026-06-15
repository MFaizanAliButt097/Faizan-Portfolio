export function Footer() {
  return (
    <footer className="bg-black pb-14 pt-12 text-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[119px]">
        <div className="mx-auto max-w-[1202px]">
          <div className="h-px w-full bg-white/70" />

          <div className="mt-[42px] grid grid-cols-1 gap-4 text-center text-[14px] font-medium leading-normal sm:text-[16px] lg:grid-cols-3 lg:text-left">
            <a href="#">Privacy Policy</a>
            <p className="lg:text-center">
              © 2026 M.Faizan Ali Butt. All rights reserved
            </p>
            <a className="lg:text-right" href="#">
              Terms of Services
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
