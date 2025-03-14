import { Badge } from '@/components/badge'
import { Button } from '@/components/button'
import { Divider } from '@/components/divider'
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components/dropdown'
import { Heading } from '@/components/heading'
import { Input, InputGroup } from '@/components/input'
import { Link } from '@/components/link'
import { Select } from '@/components/select'
import { getEvents } from '@/data'
import { EllipsisVerticalIcon, MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events',
}

export default async function Events() {
  let events = await getEvents()

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-sm:w-full sm:flex-1">
          <Heading>评标列表</Heading>
          <div className="mt-4 flex max-w-xl gap-4">
            <div className="flex-1">
              <InputGroup>
                <MagnifyingGlassIcon />
                <Input name="search" placeholder="搜索所有的标&hellip;" />
              </InputGroup>
            </div>
            <div>
              <Select name="sort_by">
                <option value="name">活动名字分类</option>
                <option value="date">日期分类</option>
                <option value="status">评标专家抽取状态分类</option>
              </Select>
            </div>
          </div>
        </div>
        <Button>创建评标</Button>
      </div>
      <ul className="mt-10">
        {events.map((event, index) => (
          <>
            <li key={event.id}>
              <Divider soft={index > 0} />
              <div className="flex items-center justify-between">
                <div key={event.id} className="flex gap-6 py-6">
                  {/* <div className="w-32 shrink-0">
                    <Link href={event.url} aria-hidden="true">
                      <img className="aspect-[3/2] rounded-lg shadow" src={event.imgUrl} alt="" />
                    </Link>
                  </div> */}
                  {}
                  <div className="space-y-1.5">
                    <div className="text-base/6 font-semibold">
                      <Link href={event.url}>{event.name}</Link>
                    </div>
                    <div className="text-xs/6 text-zinc-500">
                      {event.date} at {event.time} <span aria-hidden="true">·</span> {event.location}
                    </div>
                    <div className="text-xs/6 text-zinc-600">
                      {event.ticketsSold}/{event.ticketsAvailable} tickets sold
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge className="max-sm:hidden" color={event.status === '正在抽取' ? 'lime' : 'zinc'}>
                    {event.status}
                  </Badge>
                  <Dropdown>
                    <DropdownButton plain aria-label="More options">
                      <EllipsisVerticalIcon />
                    </DropdownButton>
                    <DropdownMenu anchor="bottom end">
                      <DropdownItem href={event.url}>View</DropdownItem>
                      <DropdownItem>Edit</DropdownItem>
                      <DropdownItem>Delete</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            </li>
          </>
        ))}
      </ul>
    </>
  )
}
