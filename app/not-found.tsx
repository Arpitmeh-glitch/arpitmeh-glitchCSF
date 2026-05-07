import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#020408] text-[#e8f4f8] px-6 py-16">
      <div className="max-w-xl text-center">
        <p className="text-sm text-sky-300 uppercase tracking-[0.4em]">404 · Page Not Found</p>
        <h1 className="mt-6 text-5xl font-semibold">We couldn't find that page.</h1>
        <p className="mt-4 text-base leading-7 text-slate-300">
          The route you tried to visit does not exist. Go back home and continue exploring the portfolio.
        </p>
        <Link
          href="/"
          className="inline-flex mt-8 rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
