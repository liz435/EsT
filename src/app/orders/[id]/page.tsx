import { Avatar } from '@/components/avatar'
import { Badge } from '@/components/badge'
import { Button } from '@/components/button'
import { DescriptionDetails, DescriptionList, DescriptionTerm } from '@/components/description-list'
import { Divider } from '@/components/divider'
import { Heading, Subheading } from '@/components/heading'
import { Link } from '@/components/link'
import { getOrder } from '@/data'
import { BanknotesIcon, CalendarIcon, ChevronLeftIcon, CreditCardIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { RefundOrder } from './refund'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  let order = await getOrder(params.id)

  return {
    title: order && `Order #${order.id}`,
  }
}

export default async function Order({ params }: { params: { id: string } }) {
  let order = await getOrder(params.id)

  if (!order) {
    notFound()
  }

  return (
    <>
      <div className="max-lg:hidden">
        <Link href="/orders" className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
          <ChevronLeftIcon className="size-4 fill-zinc-400 dark:fill-zinc-500" />
          抽取记录
        </Link>
      </div>
      <div className="mt-4 lg:mt-8">
        <div className="flex items-center gap-4">
          <Heading>抽取记录 #{order.id} #{order.customer.name}</Heading>

        </div>
        <div className="isolate mt-2.5 flex flex-wrap justify-between gap-x-6 gap-y-4">
          <div className="flex flex-wrap gap-x-10 gap-y-4 py-1.5">
            <span className="flex items-center gap-3 text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white">
            <Badge color='lime'>接受次数 {order.customer.accepted}</Badge>

            </span>
            <span className="flex items-center gap-3 text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white">
            <Badge color='red'>拒绝次数 {order.customer.denied}</Badge>
              <span className="inline-flex gap-3">

                <span>
 
                </span>
              </span>
            </span>
            <span className="flex items-center gap-3 text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white">
              <CalendarIcon className="size-4 shrink-0 fill-zinc-400 dark:fill-zinc-500" />
              <span>{order.date}</span>
            </span>
          </div>
          <div className="flex gap-4">
            <RefundOrder outline amount={"0"}>
              取消本次评标资质
            </RefundOrder>
            {/* <Button>Resend Invoice</Button> */}
          </div>
        </div>
      </div>
      <div className='mt-12'></div>
        <Subheading>本次抽取记录</Subheading>
        <Divider className="mt-" />
        <DescriptionList>
          <DescriptionTerm>            
          <Link href={order.event.url} className="flex items-center gap-2">
              <span>{order.event.name}</span>
          </Link>
          </DescriptionTerm>
          <DescriptionDetails><Badge color="lime">确认接受</Badge></DescriptionDetails>
          </DescriptionList>


      <div className="mt-12">
        <Subheading>专家个人信息</Subheading>
        <Divider className="mt-4" />
        <DescriptionList>
          <DescriptionTerm>姓名</DescriptionTerm>
          <DescriptionDetails>{order.customer.name}</DescriptionDetails>
          <DescriptionTerm>身份证号</DescriptionTerm>
          <DescriptionDetails>{order.customer.idNumber}</DescriptionDetails>
          <DescriptionTerm>年龄</DescriptionTerm>
          <DescriptionDetails>{order.customer.age}</DescriptionDetails>
          <DescriptionTerm>专业</DescriptionTerm>
          <DescriptionDetails>{order.customer.major}</DescriptionDetails>
          <DescriptionTerm>单位</DescriptionTerm>
          <DescriptionDetails>{order.customer.organization}</DescriptionDetails>
   
  
          <DescriptionTerm>邮箱</DescriptionTerm>
          <DescriptionDetails>{order.customer.email}</DescriptionDetails>
          <DescriptionTerm>地址</DescriptionTerm>
          <DescriptionDetails>{order.customer.address}</DescriptionDetails>
        </DescriptionList>

      </div>
      <div className="mt-12">



          <Divider className="mt-12" />
      <Subheading>专家抽签状态</Subheading>
          <DescriptionList>
          <DescriptionTerm>评标抽签状态</DescriptionTerm>
          <DescriptionDetails>
            <Badge color="lime">状态正常</Badge>
          </DescriptionDetails>
          <DescriptionTerm>评标确认参加数量</DescriptionTerm>
          <DescriptionDetails><Badge color='lime'>接受次数 {order.customer.accepted}</Badge></DescriptionDetails>

          <DescriptionTerm>评标确认拒绝数量</DescriptionTerm>
          <DescriptionDetails><Badge color='red'>拒绝次数 {order.customer.denied}</Badge></DescriptionDetails>
          </DescriptionList>
      </div>
    </>
  )
}
