export default function Card() {
  return (
    <>
      <div className="m-8 border border-b w-1/5 bg-green-100 rounded-tl-3xl max-h-72 rounded-br-3xl border-slate-300 p-8 shadow-xl overflow-y-auto">
        <div className="text-center text-2xl">
          <input className="mr-2 w-4 h-4 rounded-full" type="checkbox" />

          <label>Day ...</label>
        </div>
        <p className="text-xl text-center">fundamentals of react</p>
        <p>
          You can also use variant modifiers to target media queries like
          responsive breakpoints, dark mode, prefers-reduced-motion, and more.
          For example, use md:place-items-center to apply the place-items-center
          utility at only medium screen sizes and above.
        </p>
      </div>
    </>
  );
}
