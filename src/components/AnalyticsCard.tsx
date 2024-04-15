import { AreaChart1, AreaChart1Mobile} from "./Charts";
// import LineChart1 from "./Charts";

export default function AnalyticsCard() {
  return (
    <div className="bg-white border rounded-md max-w-[760px] mx-auto py-5 divide-y">
      <div className="">
        <h3 className="font-extrabold text-gray-800 text-[20px] mx-10 mb-5">
          Google Analytics
        </h3>
      </div>
      {/* <div className="pt-8">
        <LineChart1 />
      </div> */}
      <div className="pt-8">
        <AreaChart1 />
        <AreaChart1Mobile />
      </div>
    </div>
  );
}
