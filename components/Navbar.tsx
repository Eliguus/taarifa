// b b

export default function Navbar() {
  return (
    <div className="border border-b border-slate-300 p-8 shadow-lg">
      <div className="flex justify-between">
        <div>
          <div>Taaruf</div>
        </div>
        <div className="flex justify-between w-7/12">
          <input className="bg-blue-200 rounded-lg" />
          <div>Dashboard</div>
          <div>Add a Course</div>
          <div>Explore</div>
        </div>
      </div>
    </div>
  );
}
