export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col items-center bg-slate-50 p-8 text-center text-slate-900  ">
      <div className="max-w-2xl">
        <h1 className="flex items-center gap-3 text-3xl font-bold before:flex before:h-8 before:w-0.5 before:bg-sky-500 sm:text-5xl lg:text-6xl">
          Hello World
        </h1>

        <button className="mt-4 rounded-md bg-sky-500 px-4 py-2 font-medium text-white enabled:hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60">
          Sign In
        </button>
      </div>
    </main>
  )
}
