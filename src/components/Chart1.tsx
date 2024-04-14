import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Line,
} from "recharts";
const data = [
  { month: "Jan", count: 250 },
  { month: "Feb", count: 400 },
  { month: "Mar", count: 30 },
  { month: "Apr", count: 130 },
  { month: "May", count: 60 },
  { month: "Jun", count: 300 },
  { month: "Jul", count: 180 },
  { month: "Aug", count: 30 },
  { month: "Sept", count: 30 },
  { month: "Oct", count: 60 },
  { month: "Nov", count: 10 },
  { month: "Dec", count: 150 },
];

export default function Chart1() {
  return (
    <div className="">
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 10, left: 60, bottom: 5 }}
        className="m-0 fill-gray-500 text-[12px]"
      >
        <Line type="monotone" dataKey="count" stroke="#0076ff" yAxisId={1} />
        <CartesianGrid stroke="#f5f5f5" strokeDasharray="5 5" />
        <Tooltip />
        <XAxis dataKey="month" stroke="" tickMargin={20} />
        <YAxis yAxisId={1} stroke="" tickMargin={25} />
      </LineChart>
    </div>
  );
}
