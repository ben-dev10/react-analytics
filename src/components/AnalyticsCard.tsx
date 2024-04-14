import Chart1 from "./Chart1";

export default function AnalyticsCard() {
  return (
    <div className="bg-white rounded-sm max-w-[680px] mx-auto py-10 divide-y">
      <div className="">
        <h3 className="font-bold text-[20px] mx-10 mb-5">Google Analytics</h3>
      </div>
      <div className="pt-8">
        <Chart1 />
      </div>
    </div>
  );
}
