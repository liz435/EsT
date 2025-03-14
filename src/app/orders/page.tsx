import { Avatar } from '@/components/avatar'
import { Button } from '@/components/button'
import { Heading } from '@/components/heading'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { getOrders } from '@/data'
import { Badge } from '@/components/badge'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Orders',
}

export default async function Orders() {
  let orders = await getOrders()

  return (
    <>
      <div className="flex items-end justify-between gap-4">
        <Heading>抽取记录</Heading>
        {/* <Button className="-my-0.5">Create order</Button> */}
      </div>
      <Table className="mt-8 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
        <TableHead>
          <TableRow>
            <TableHeader>编号</TableHeader>
            <TableHeader>日期</TableHeader>
            <TableHeader>姓名</TableHeader>
            <TableHeader>活动</TableHeader>
            <TableHeader className="text-right">接受/拒绝</TableHeader>
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
              <TableCell className="text-right"><Badge color='lime'> {order.customer.accepted} </Badge>/<Badge color='red'> {order.customer.denied} </Badge></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
