import { useState } from 'react'
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type MonthlyData = {
  price: number
  percentage: number
}

const generateDataPoints = (days: number): MonthlyData[] => {
  return Array.from({ length: days }, () => ({
    price: Math.floor(Math.random() * 100), // Random price between 100 and 1100
    percentage: Math.floor(Math.random() * 1), // Random percentage between 0 and 100
  }))
}

const monthlyData: Record<string, MonthlyData[]> = {
  January: generateDataPoints(30),
  February: generateDataPoints(28),
  March: generateDataPoints(31),
  April: generateDataPoints(30),
  May: generateDataPoints(31),
  June: generateDataPoints(30),
}

const chartConfig: ChartConfig = {
  price: {
    label: 'Price',
    color: 'hsl(var(--chart-1))',
  },
}

export function Component() {
  const [selectedMonth, setSelectedMonth] = useState<string>('January')
  const chartData = monthlyData[selectedMonth]

  return (
    <Card className='relative'>
      <CardHeader>
        <CardTitle>Sales Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='absolute right-8 top-[12px] mb-4'>
          <Select
            value={selectedMonth}
            onValueChange={(value) => setSelectedMonth(value)}
          >
            <SelectTrigger className='w-32'>
              <SelectValue placeholder='Select Month' />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(monthlyData).map((month) => (
                <SelectItem key={month} value={month}>
                  {month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <ChartContainer
          style={{ height: '237px', width: '100%' }}
          config={chartConfig}
        >
          <AreaChart
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='price'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `${value}k`}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              cursor={false}
              content={<ChartTooltipContent indicator='dot' hideLabel />}
            />
            <defs>
              <linearGradient id='fillDesktop' x1='0' y1='0' x2='0' y2='1'>
                <stop
                  offset='5%'
                  stopColor='hsla(221, 83%, 60%, 1)'
                  stopOpacity={0.8}
                />
                <stop
                  offset='95%'
                  stopColor='hsla(221, 83%, 60%, 1)'
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey='price'
              type='linear'
              dot={true}
              fill='url(#fillDesktop)'
              fillOpacity={0.4}
              stroke='var(--color-price)'
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter>
        <div className='flex w-full items-start gap-2 text-sm'>
          <div className='grid gap-2'>
            <div className='flex items-center gap-2 font-medium leading-none'>
              Trending up by 5.2% this month
            </div>
            <div className='flex items-center gap-2 leading-none text-muted-foreground'>
              {selectedMonth} - 2024
            </div>
          </div>
        </div>
      </CardFooter> */}
    </Card>
  )
}
