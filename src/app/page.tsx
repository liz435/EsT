import { Avatar } from '@/components/avatar'
import { Badge } from '@/components/badge'
import { Divider } from '@/components/divider'
import { Heading, Subheading } from '@/components/heading'
import { Select } from '@/components/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { getRecentOrders,getRecentEvents } from '@/data'
import {Stat, StatB} from '@/components/Stat'



export default async function Home() {
  let orders = await getRecentOrders()
  let events = await getRecentEvents()

  return (
    <>
      <Heading>早上好，Erica</Heading>
      <div className="mt-8 flex items-end justify-between">
        <Subheading>数据总览</Subheading>
        <div>
          <Select name="period">
            <option value="last_week">过去一周</option>
            <option value="last_two">过去两周</option>
            <option value="last_month">过去一月</option>
            <option value="last_quarter">过去一季度</option>
          </Select>
        </div>
      </div>
      <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        <Stat title="评标数量" value="178" change="+4.5%" />
        <Stat title="注册专家数量" value="2955" change="+0.5%" />
        <Stat title="专家评标人次" value="888" change="+4.5%" />
        <StatB title="拒绝数量" value="67" change="+21.2%" />
      </div>

      {/* <Subheading className="mt-14">正在抽取</Subheading>
                    <Divider soft={index > 0} />
                    <div className="flex items-center justify-between">
                      <div key={event.id} className="flex gap-6 py-6">
                        <div className="w-32 shrink-0">
                          <Link href={event.url} aria-hidden="true">
                            <img className="aspect-[3/2] rounded-lg shadow" src={event.imgUrl} alt="" />
                          </Link>
                        </div>
                        {}
                        <div className="space-y-1.5">
                          <div className="text-base/6 font-semibold">
                            <Link href={events}>{events}</Link>
                          </div>
                          <div className="text-xs/6 text-zinc-500">
                            {events.date} at {events.time} <span aria-hidden="true">·</span> {event.location}
                          </div>
                          <div className="text-xs/6 text-zinc-600">
                            {Math.floor(event.ticketsSold/12)}/{Math.floor(event.ticketsAvailable/12)} 位置
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge className="max-sm:hidden" color={event.status === '正在抽取' ? 'lime' : 'zinc'}>
                          {event.status}
                        </Badge>
                      </div>
                    </div> */}

      <Subheading className="mt-14">最近抽取</Subheading>
      <Table className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
        <TableHead>
          <TableRow>
            <TableHeader>编号</TableHeader>
            <TableHeader>日期</TableHeader>
            <TableHeader>姓名</TableHeader>
            <TableHeader>活动</TableHeader>
            <TableHeader >历史接受/拒绝</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id} href={order.url} title={`Order #${order.id}`}>
              <TableCell>{order.id}</TableCell>
              <TableCell className="text-zinc-500">{order.date}</TableCell>
              <TableCell>{order.customer.name}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  {/* <Avatar src={order.event.thumbUrl} className="size-6" /> */}
                  <span>{order.event.name}</span>
                </div>
              </TableCell>
              <TableCell><Badge color='lime'> {order.customer.accepted} </Badge>/<Badge color='red'> {order.customer.denied} </Badge></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
