"use client"
import { useState } from "react";;
import { Button } from "@/components/button";


type Order = {
    id: string | number;  
    date: string;
    customer: {
      name: string;
      email: string;
      address: string;
      denied: string;
      accepted: string;
      idNumber: string | undefined;
      major: string;
      age: number;
      organization: string;
    };
    event: any; 
  };
  

  
export function ExpertSelector({ orders }: { orders: Order[] }) {
    const [filters, setFilters] = useState({
      major: "",
      organization: "",
      minAge: "",
      maxAge: "",
    })
  
    const [selectedExperts, setSelectedExperts] = useState<Order[]>([])
    const [count, setCount] = useState(3)
  
    // Get unique majors and organizations for filter options
    const majorsSet = new Set(orders.map(order => order.customer.major));
    const majors = Array.from(majorsSet);
    
    const orgsSet = new Set(orders.map(order => order.customer.organization));
    const organizations = Array.from(orgsSet);
    // Handle filter changes
    const handleFilterChange = (e:any) => {
      const { name, value } = e.target
      setFilters((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  
    // Filter orders based on criteria
    const filterOrders = () => {
      return orders.filter((order) => {
        const customer = order.customer
  
        // Filter by major if selected
        if (filters.major && customer.major !== filters.major) {
          return false
        }
  
        // Filter by organization if selected
        if (filters.organization && customer.organization !== filters.organization) {
          return false
        }
  
        // Filter by age range if provided
        if (filters.minAge && Number.parseInt(filters.minAge) > customer.age) {
          return false
        }
  
        if (filters.maxAge && Number.parseInt(filters.maxAge) < customer.age) {
          return false
        }
  
        return true
      })
    }
  
    // Randomly select experts from filtered list
    const selectRandomExperts = () => {
      const filteredOrders = filterOrders()
  
      // Check if we have enough experts after filtering
      if (filteredOrders.length === 0) {
        alert("没有符合条件的专家")
        return
      }
  
      // Shuffle and select
      const shuffled = [...filteredOrders].sort(() => 0.5 - Math.random())
      const selected = shuffled.slice(0, Math.min(count, shuffled.length))
  
      setSelectedExperts(selected)
    }
  
    return (
      <div className="mt-8 space-y-6">
        <div className="rounded-lg bg-white p-6 shadow dark:bg-zinc-800">
          <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">随机抽取专家</h3>
  
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Major filter */}
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">专业</label>
              <select
                name="major"
                value={filters.major}
                onChange={handleFilterChange}
                className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-900"
              >
                <option value="">全部专业</option>
                {majors.map((major) => (
                  <option key={major} value={major}>
                    {major}
                  </option>
                ))}
              </select>
            </div>
  
            {/* Organization filter */}
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">单位</label>
              <select
                name="organization"
                value={filters.organization}
                onChange={handleFilterChange}
                className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-900"
              >
                <option value="">全部单位</option>
                {organizations.map((org) => (
                  <option key={org} value={org}>
                    {org}
                  </option>
                ))}
              </select>
            </div>
  
            {/* Age range */}
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">最小年龄</label>
              <input
                type="number"
                name="minAge"
                value={filters.minAge}
                onChange={handleFilterChange}
                placeholder="最小年龄"
                className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-900"
              />
            </div>
  
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">最大年龄</label>
              <input
                type="number"
                name="maxAge"
                value={filters.maxAge}
                onChange={handleFilterChange}
                placeholder="最大年龄"
                className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-900"
              />
            </div>
          </div>
  
          <div className="mt-6 flex items-center gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">抽取数量</label>
              <input
                type="number"
                value={count}
                onChange={(e) => setCount(Math.max(0, Number.parseInt(e.target.value) || 1))}
                className="mt-1 block w-24 rounded-md border border-zinc-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-900"
                min="0"
              />
            </div>
  
            <Button onClick={selectRandomExperts} className="mt-auto focus:outline-2 focus:outline-offset-2 focus:outline-stone-500 active:bg-stone-700 duration-150">
              开始抽取
            </Button>
          </div>
        </div>
  
        {selectedExperts.length > 0 && (
          <div className="rounded-lg bg-white p-6 shadow dark:bg-zinc-800">
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">抽取结果</h3>
  
            <div className="mt-4 overflow-x-auto">
              <table className="w-full divide-y divide-zinc-200 dark:divide-zinc-700">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      姓名
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      专业
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      单位
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      年龄
                    </th>
                  </tr>
                </thead>
               
                  {selectedExperts.map((order) => (
                    <tr key={order.customer.idNumber}>
                      <td className="whitespace-nowrap px-6 py-4">{order.id}</td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">{order.customer.name}</td>
                      <td className="whitespace-nowrap px-6 py-4">{order.customer.major}</td>
                      <td className="whitespace-nowrap px-6 py-4">{order.customer.organization}</td>
                      <td className="whitespace-nowrap px-6 py-4">{order.customer.age}</td>
                    </tr>
                  ))}
             
              </table>
            </div>
          </div>
        )}
      </div>
    )
  }
  
  