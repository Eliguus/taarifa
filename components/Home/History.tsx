import Progress from "./Progress";

export default function History() {
  return (
    <div className=" bg-blue-100 border border-b rounded-lg p-10 align-center">
      <h1 className="p-2 text-3xl">History</h1>
      <div className="max-h-36 overflow-y-auto">
        <Progress />
        <Progress />
        <Progress />
        <Progress />
        <Progress />
      </div>
    </div>
  );
}
