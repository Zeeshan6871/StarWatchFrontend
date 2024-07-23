'use client'

import * as React from 'react'
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
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
const chartData = [
  { date: '2024-04-01', Profit: 222, Sales: 150 },
  { date: '2024-04-02', Profit: 97, Sales: 180 },
  { date: '2024-04-03', Profit: 167, Sales: 120 },
  { date: '2024-04-04', Profit: 242, Sales: 260 },
  { date: '2024-04-05', Profit: 373, Sales: 290 },
  { date: '2024-04-06', Profit: 301, Sales: 340 },
  { date: '2024-04-07', Profit: 245, Sales: 180 },
  { date: '2024-04-08', Profit: 409, Sales: 320 },
  { date: '2024-04-09', Profit: 59, Sales: 110 },
  { date: '2024-04-10', Profit: 261, Sales: 190 },
  { date: '2024-04-11', Profit: 327, Sales: 350 },
  { date: '2024-04-12', Profit: 292, Sales: 210 },
  { date: '2024-04-13', Profit: 342, Sales: 380 },
  { date: '2024-04-14', Profit: 137, Sales: 220 },
  { date: '2024-04-15', Profit: 120, Sales: 170 },
  { date: '2024-04-16', Profit: 138, Sales: 190 },
  { date: '2024-04-17', Profit: 446, Sales: 360 },
  { date: '2024-04-18', Profit: 364, Sales: 410 },
  { date: '2024-04-19', Profit: 243, Sales: 180 },
  { date: '2024-04-20', Profit: 89, Sales: 150 },
  { date: '2024-04-21', Profit: 137, Sales: 200 },
  { date: '2024-04-22', Profit: 224, Sales: 170 },
  { date: '2024-04-23', Profit: 138, Sales: 230 },
  { date: '2024-04-24', Profit: 387, Sales: 290 },
  { date: '2024-04-25', Profit: 215, Sales: 250 },
  { date: '2024-04-26', Profit: 75, Sales: 130 },
  { date: '2024-04-27', Profit: 383, Sales: 420 },
  { date: '2024-04-28', Profit: 122, Sales: 180 },
  { date: '2024-04-29', Profit: 315, Sales: 240 },
  { date: '2024-04-30', Profit: 454, Sales: 380 },
  { date: '2024-05-01', Profit: 165, Sales: 220 },
  { date: '2024-05-02', Profit: 293, Sales: 310 },
  { date: '2024-05-03', Profit: 247, Sales: 190 },
  { date: '2024-05-04', Profit: 385, Sales: 420 },
  { date: '2024-05-05', Profit: 481, Sales: 390 },
  { date: '2024-05-06', Profit: 498, Sales: 520 },
  { date: '2024-05-07', Profit: 388, Sales: 300 },
  { date: '2024-05-08', Profit: 149, Sales: 210 },
  { date: '2024-05-09', Profit: 227, Sales: 180 },
  { date: '2024-05-10', Profit: 293, Sales: 330 },
  { date: '2024-05-11', Profit: 335, Sales: 270 },
  { date: '2024-05-12', Profit: 197, Sales: 240 },
  { date: '2024-05-13', Profit: 197, Sales: 160 },
  { date: '2024-05-14', Profit: 448, Sales: 490 },
  { date: '2024-05-15', Profit: 473, Sales: 380 },
  { date: '2024-05-16', Profit: 338, Sales: 400 },
  { date: '2024-05-17', Profit: 499, Sales: 420 },
  { date: '2024-05-18', Profit: 315, Sales: 350 },
  { date: '2024-05-19', Profit: 235, Sales: 180 },
  { date: '2024-05-20', Profit: 177, Sales: 230 },
  { date: '2024-05-21', Profit: 82, Sales: 140 },
  { date: '2024-05-22', Profit: 81, Sales: 120 },
  { date: '2024-05-23', Profit: 252, Sales: 290 },
  { date: '2024-05-24', Profit: 294, Sales: 220 },
  { date: '2024-05-25', Profit: 201, Sales: 250 },
  { date: '2024-05-26', Profit: 213, Sales: 170 },
  { date: '2024-05-27', Profit: 420, Sales: 460 },
  { date: '2024-05-28', Profit: 233, Sales: 190 },
  { date: '2024-05-29', Profit: 78, Sales: 130 },
  { date: '2024-05-30', Profit: 340, Sales: 280 },
  { date: '2024-05-31', Profit: 178, Sales: 230 },
  { date: '2024-06-01', Profit: 178, Sales: 200 },
  { date: '2024-06-02', Profit: 470, Sales: 410 },
  { date: '2024-06-03', Profit: 103, Sales: 160 },
  { date: '2024-06-04', Profit: 439, Sales: 380 },
  { date: '2024-06-05', Profit: 88, Sales: 140 },
  { date: '2024-06-06', Profit: 294, Sales: 250 },
  { date: '2024-06-07', Profit: 323, Sales: 370 },
  { date: '2024-06-08', Profit: 385, Sales: 320 },
  { date: '2024-06-09', Profit: 438, Sales: 480 },
  { date: '2024-06-10', Profit: 155, Sales: 200 },
  { date: '2024-06-11', Profit: 92, Sales: 150 },
  { date: '2024-06-12', Profit: 492, Sales: 420 },
  { date: '2024-06-13', Profit: 81, Sales: 130 },
  { date: '2024-06-14', Profit: 426, Sales: 380 },
  { date: '2024-06-15', Profit: 307, Sales: 350 },
  { date: '2024-06-16', Profit: 371, Sales: 310 },
  { date: '2024-06-17', Profit: 475, Sales: 520 },
  { date: '2024-06-18', Profit: 107, Sales: 170 },
  { date: '2024-06-19', Profit: 341, Sales: 290 },
  { date: '2024-06-20', Profit: 408, Sales: 450 },
  { date: '2024-06-21', Profit: 169, Sales: 210 },
  { date: '2024-06-22', Profit: 317, Sales: 370 },
  { date: '2024-06-23', Profit: 480, Sales: 530 },
  { date: '2024-06-24', Profit: 132, Sales: 180 },
  { date: '2024-06-25', Profit: 141, Sales: 190 },
  { date: '2024-06-26', Profit: 434, Sales: 380 },
  { date: '2024-06-27', Profit: 448, Sales: 490 },
  { date: '2024-06-28', Profit: 149, Sales: 200 },
  { date: '2024-06-29', Profit: 103, Sales: 160 },
  { date: '2024-06-30', Profit: 446, Sales: 400 },
]

const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  Profit: {
    label: 'Profit',
    color: 'hsl(var(--chart-1))',
  },
  Sales: {
    label: 'Sales',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig

export function RevenueChart() {
  const [timeRange, setTimeRange] = React.useState('30d')

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const now = new Date()
    let daysToSubtract = 90
    if (timeRange === '30d') {
      daysToSubtract = 30
    } else if (timeRange === '7d') {
      daysToSubtract = 7
    }
    now.setDate(now.getDate() - daysToSubtract)
    return date >= now
  })

  return (
    <Card>
      <CardHeader className='flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row'>
        <CardTitle>Revenue</CardTitle>

        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className='w-[160px] rounded-lg sm:ml-auto'
            aria-label='Select a value'
          >
            <SelectValue placeholder='Last 3 months' />
          </SelectTrigger>
          <SelectContent className='rounded-xl'>
            <SelectItem value='90d' className='rounded-lg'>
              Last 3 months
            </SelectItem>
            <SelectItem value='30d' className='rounded-lg'>
              Last 30 days
            </SelectItem>
            <SelectItem value='7d' className='rounded-lg'>
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className='px-2 pt-4 sm:px-6 sm:pt-6'>
        <ChartContainer
          config={chartConfig}
          className='aspect-auto h-[250px] w-full'
        >
          <AreaChart data={filteredData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='date'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })
              }}
            />
            <ChartTooltip
              cursor={true}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })
                  }}
                  indicator='dot'
                />
              }
            />
            <Area
              dataKey='Sales'
              type='basis'
              fill='hsl(277, 100%, 86%)'
              stroke='hsl(277, 100%, 86%)'
              stackId='a'
            />
            <Area
              dataKey='Profit'
              type='natural'
              fill='hsl(16, 76%, 74%)'
              stroke='hsl(16, 76%, 74%)'
              stackId='b'
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
