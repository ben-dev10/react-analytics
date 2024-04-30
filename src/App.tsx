import AnalyticsCard from "./components/AnalyticsCard";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="p-5">
      <AnalyticsCard />
      <Analytics />
    </div>
  );
}

export default App;
