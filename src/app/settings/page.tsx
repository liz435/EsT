import { Button } from '@/components/button'
import { Checkbox, CheckboxField } from '@/components/checkbox'
import { Divider } from '@/components/divider'
import { Label } from '@/components/fieldset'
import { Heading, Subheading } from '@/components/heading'
import { Input } from '@/components/input'
import { Select } from '@/components/select'
import { Text } from '@/components/text'
import { Textarea } from '@/components/textarea'
import type { Metadata } from 'next'
import { Address } from './address'

export const metadata: Metadata = {
  title: 'Settings',
}

export default function Settings() {
  return (
    <form method="post" className="mx-auto max-w-4xl">
      <Heading>设置</Heading>
      <Divider className="my-10 mt-6" />

      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>公司名称</Subheading>
          <Text>这里显示公开资料</Text>
        </div>
        <div>
          <Input aria-label="Organization Name" name="name" defaultValue="Catalyst" />
        </div>
      </section>

      <Divider className="my-10" soft />

      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>公司介绍</Subheading>
          <Text>这里显示公司介绍。最多240字.</Text>
        </div>
        <div>
          <Textarea aria-label="Organization Bio" name="bio" />
        </div>
      </section>

      <Divider className="my-10" soft />

      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>公司联系方式</Subheading>
          <Text>这里显示公司联系方式.</Text>
        </div>
        <div className="space-y-4">
          <Input type="email" aria-label="Organization Email" name="email" defaultValue="info@example.com" />
          {/* <CheckboxField> */}
            {/* <Checkbox name="email_is_public" defaultChecked />
            <Label>Show email on public profile</Label>
          </CheckboxField> */}
        </div>
      </section>

      <Divider className="my-10" soft />

      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>地址</Subheading>
          <Text>这是公司的注册地址</Text>
        </div>
        <Address />
      </section>



      <Divider className="my-10" soft />

      <div className="flex justify-end gap-4">
        <Button type="reset" plain>
          重制
        </Button>
        <Button type="submit">保存设置</Button>
      </div>
    </form>
  )
}
