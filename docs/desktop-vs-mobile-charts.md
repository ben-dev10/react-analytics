# Rendering different charts at different viewport widths

There are 2 ways to render the chart for either mobile or desktop:

- Switch between 2 components at different viewport widths, only showing one and hiding the other, but still sharing the same parent.

```jsx
export function AreaChart1() {
  return (
    // hiding and showing using tailwind classes, "hidden md:block"
    <div className="max-w-[700px] h-[300px] hidden md:block">
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
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

export function AreaChart1Mobile() {
  return (
    <div className="max-w-[700px] md:hidden h-[250px]">
      <ResponsiveContainer width="100%" height="75%">
        <AreaChart
          data={AreaDataMobile}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          className="text-[10px] fill-gray-400"
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

// rendering to DOM
<div className="pt-8">
  <AreaChart1 />
  <AreaChart1Mobile />
</div>;
```

- Or, swap out `data` dynamically (recommended)

```jsx
export function AreaChartDynamic() {
  const [chartData, setChartData] = useState<ChartType[] | undefined>();

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 500) {
        setChartData(AreaDataMobile);
      } else {
        setChartData(AreaData);
      }
    }

    // Initial call
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max-w-[700px] h-[300px]">
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          data={chartData}
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

// rendering to DOM
<div className="pt-8">
    <AreaChartDynamic />
</div>
```
