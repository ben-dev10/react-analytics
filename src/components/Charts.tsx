import {
  LineChart,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Line,
  Area,
  ResponsiveContainer,
} from "recharts";
import { LineData, AreaData } from "../utils/data";

export default function LineChart1() {
  return (
    <div className="overflow-y-auto">
      <LineChart
        width={600}
        height={300}
        data={LineData}
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

export function AreaChart1() {
  return (
    <div className="max-w-[700px] h-[300px]">
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          // width={730}
          // height={270}
          data={AreaData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          className="text-[12px] fill-gray-400"
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" stroke="" tickMargin={10} />
          <YAxis stroke="" tickMargin={10} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
