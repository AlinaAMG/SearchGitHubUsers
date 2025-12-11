import type { Repository } from "@/types"
import { calculateMostForkedRepos } from "@/utils";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,

} from "@/components/ui/chart";

const ForkedRepos = ({ repositories }: { repositories: Repository[] }) => {
  const mostForkedRepos = calculateMostForkedRepos(repositories);
  
  const chartConfig = {
    repo: {
      label: "Repository",
      color: "#facd12",
    }
  } satisfies ChartConfig;
  
  return (
   <div>
      <h2 className="mb-4 text-2xl text-center front-semibold">
        Forked Repos
        <ChartContainer config={chartConfig} className="w-full h-100">
          <BarChart accessibilityLayer data={mostForkedRepos}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="repo"
              tickLine={true}
              tickMargin={10}
              axisLine ={false}
              tickFormatter={(value) => value.slice(0, 10)}
            />
            <YAxis dataKey="count" />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="count" fill="var(--color-repo)" radius={4} />
          </BarChart>
        </ChartContainer>
      </h2>
    </div>
  )
}

export default ForkedRepos
