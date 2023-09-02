import Card from "./Card";
import ProgressBar from "./Progressbar";

export default function LearningPage() {
  return (
    <>
      <div className="w-1/2 m-8">
        <ProgressBar value={50} />
      </div>
      <p className="text-4xl text-left m-8">Course Detail</p>
      <div className="flex flex-wrap">
        <Card />
        <Card />

        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
