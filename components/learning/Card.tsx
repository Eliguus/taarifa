interface CardProps {
  date: string;
  task: string;
}
export default function Card({ date, task }: CardProps) {
  return (
    <>
      <div className="m-8 border border-b w-1/5 bg-green-100 rounded-tl-3xl max-h-72 rounded-br-3xl border-slate-300 p-8 shadow-xl overflow-y-auto">
        <div className="text-center text-2xl">
          <input className="mr-2 w-4 h-4 rounded-full" type="checkbox" />

          <label>{date}</label>
        </div>

        <p>{task}</p>
      </div>
    </>
  );
}
