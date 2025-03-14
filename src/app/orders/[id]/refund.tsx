'use client'

import { Button } from '@/components/button'
import { Checkbox, CheckboxField } from '@/components/checkbox'
import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '@/components/dialog'
import { Description, Field, FieldGroup, Label } from '@/components/fieldset'
import { Input } from '@/components/input'
import { Select } from '@/components/select'
import { useState } from 'react'

export function RefundOrder({ amount, ...props }: { amount: string } & React.ComponentPropsWithoutRef<typeof Button>) {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button type="button" className='bg-red-700 duration-300 ' onClick={() => setIsOpen(true)} {...props} />
      <Dialog open={isOpen} onClose={setIsOpen}>
        <DialogTitle>取消本次专家评标资质</DialogTitle>
        <DialogDescription>
          The refund will be reflected in the customer’s bank account 2 to 3 business days after processing.
        </DialogDescription>
        <DialogBody>
          <FieldGroup>
            {/* <Field>
              <Label>Amount</Label>
              <Input name="amount" defaultValue={amount} placeholder="$0.00" autoFocus />
            </Field> */}
            <Field>
              <Label>取消原因</Label>
              <Select name="reason" defaultValue="">
                <option value="" disabled>
                  选择取消原因&hellip;
                </option>
                <option value="duplicate">专家时间冲突</option>
                <option value="fraudulent">评标机构取消</option>
                <option value="other">其他</option>
              </Select>
            </Field>
            <CheckboxField>
              <Checkbox name="notify" />
              <Label>通知专家</Label>
              <Description>专家会收到电话确认取消</Description>
            </CheckboxField>
          </FieldGroup>
        </DialogBody>
        <DialogActions>
          <Button plain onClick={() => setIsOpen(false)}>
            取消
          </Button>
          <Button onClick={() => setIsOpen(false)} className='bg-red-700' >确认取消</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
