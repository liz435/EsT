
import { Badge } from "@/components/badge"
import { Button } from "@/components/button"
import { Heading, Subheading } from "@/components/heading"
import { Link } from "@/components/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/table"
import { getEvent, getEventOrders,getOrders } from "@/data"
import { ChevronLeftIcon } from "@heroicons/react/16/solid"
import type { Metadata } from "next"
import {ExpertSelector} from "@/components/ExpertSelector"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const event = await getEvent(params.id)

  return {
    title: event?.name,
  }
}

export default async function Event({ params }: { params: { id: string } }) {
  const event = await getEvent(params.id)
  const orders = await getOrders()
  const eventorder = await getEventOrders(params.id)


  if (!event) {
    notFound()
  }

  return (
    <>
      <div className="max-lg:hidden">
        <Link href="/events" className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
          <ChevronLeftIcon className="size-4 fill-zinc-400 dark:fill-zinc-500" />
          评标列表
        </Link>
      </div>
      <div className="mt-12 flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-wrap items-center gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <Heading>{event.name}</Heading>
              <Badge color={event.status === "正在抽取" ? "lime" : "red"}>{event.status}</Badge>
            </div>
            <div className="mt-2 text-sm/6 text-zinc-500">
              {event.date} {event.time} <span aria-hidden="true">·</span> {event.location}
            </div>
          </div>
        </div>
        {/* <div className="flex gap-4">
          <Button outline>Edit</Button>
          <Button>View</Button>
        </div> */}
      </div>

      {event.status !== "正在抽取" ? (
        <></>
      ) : (
        <ExpertSelector orders={orders} />
      )}

      <Subheading className="mt-12">被抽中专家</Subheading>
      <Table className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
        <TableHead>
          <TableRow>
            <TableHeader>记录编号</TableHeader>
            <TableHeader>日期</TableHeader>
            <TableHeader>专家姓名</TableHeader>
            <TableHeader>专业</TableHeader>
            <TableHeader>状态</TableHeader>
          </TableRow>
        </TableHead>
        {event.status == "正在抽取" ? (
        <></>
      ) : (
        <TableBody>
        {eventorder.map((eventorder) => (
          <TableRow key={eventorder.id} href={eventorder.url} title={`Order #${eventorder.id}`}>
            <TableCell>{eventorder.id}</TableCell>
            <TableCell className="text-zinc-500">{eventorder.date}</TableCell>
            <TableCell>{eventorder.customer.name}</TableCell>
            <TableCell>{eventorder.customer.major}</TableCell>
            <TableCell><Badge className="max-sm:hidden" color={eventorder.customer.status === '接受' ? 'lime' : 'zinc'}>
                    {eventorder.customer.status}
                  </Badge></TableCell>
          </TableRow>
        ))}
      </TableBody>
      )}

      </Table>
    </>
  )
}


