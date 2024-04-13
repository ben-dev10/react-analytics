import { LineChart, XAxis, CartesianGrid, Tooltip, Line } from "recharts";
const data = [
  { month: "Jan", uv: 250, pv: 250 },
  { month: "Feb", uv: 50, pv: 400 },
  { month: "Mar", uv: 400, pv: 30 },
  { month: "Apr", uv: 30, pv: 130 },
  { month: "May", uv: 150, pv: 60 },
  { month: "Jun", uv: 20, pv: 300 },
  { month: "Jul", uv: 60, pv: 180 },
  { month: "Aug", uv: 400, pv: 30 },
  { month: "Sept", uv: 400, pv: 30 },
  { month: "Oct", uv: 400, pv: 60 },
  { month: "Nov", uv: 400, pv: 10 },
  { month: "Dec", uv: 400, pv: 150 },
];

export default function Chart1() {
  return (
    <div className="p-5">
      <LineChart
        width={600}
        height={400}
        data={data}
        margin={{ top: 5, right: 10, left: 60, bottom: 5 }}
      >
        <XAxis dataKey="month" stroke="" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" strokeDasharray="5 5" />
        {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} /> */}
        <Line type="monotone" dataKey="pv" stroke="red" yAxisId={1} />
      </LineChart>
    </div>
  );
}
