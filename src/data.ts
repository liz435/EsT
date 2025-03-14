export async function getOrder(id: string) {
  return (await getOrders()).find((order) => order.id.toString() === id)!
}

export async function getRecentOrders() {
  return (await getOrders()).slice(0, 10)
}




export async function getOrders() {

  return [
    {
      id: 3000,
      url: '/orders/3000',
      date: 'May 9, 2024',
      customer: {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        address: '123 Main St. Toronto, ON',
        denied: "2",
        accepted: "4",
        idNumber: "1304198509276543",
        major: "计算机科学",
        age: 39,
        organization: "多伦多大学"
      },
      event: await getEvent('1000')
    },
    {
      id: 3001,
      url: '/orders/3001',
      date: 'May 5, 2024',
      customer: {
        name: 'Michael Foster',
        email: 'michael.foster@example.com',
        address: '357 Bridge St. New York, NY',
        denied: "1",
        accepted: "3",
        idNumber: "3205197612087654",
        major: "金融学",
        age: 48,
        organization: "摩根大通银行"
      },
      event: await getEvent('1001')
    },
    {
      id: 3002,
      url: '/orders/3002',
      date: 'Apr 28, 2024',
      customer: {
        name: 'Dries Vincent',
        email: 'dries.vincent@example.com',
        address: '456 Elm St. Vancouver, BC',
        denied: "0",
        accepted: "2",
        idNumber: "5107199003216789",
        major: "市场营销",
        age: 34,
        organization: "温哥华营销协会"
      },
      event: await getEvent('1002')
    },
    {
      id: 3003,
      url: '/orders/3003',
      date: 'Apr 23, 2024',
      customer: {
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        address: '789 Oak St. Montreal, QC',
        denied: "3",
        accepted: "1",
        idNumber: "6504198807231456",
        major: "金融学",
        age: 36,
        organization: "蒙特利尔人力资源部"
      },
      event: await getEvent('1000')
    },
    {
      id: 3004,
      url: '/orders/3004',
      date: 'Apr 18, 2024',
      customer: {
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        address: '321 Pine St. Calgary, AB',
        denied: "4",
        accepted: "2",
        idNumber: "2103199504129876",
        major: "计算机科学",
        age: 29,
        organization: "卡尔加里心理健康中心"
      },
      event: await getEvent('1003')
    },
    {
      id: 3005,
      url: '/orders/3005',
      date: 'Apr 14, 2024',
      customer: {
        name: 'Tom Cook',
        email: 'tom.cook@example.com',
        address: '741 Lake St. Miami, FL',
        denied: "0",
        accepted: "3",
        idNumber: "4508197905234567",
        major: "计算机科学",
        age: 45,
        organization: "迈阿密烹饪学院"
      },
      event: await getEvent('1001')
    },
    {
      id: 3006,
      url: '/orders/3006',
      date: 'Apr 10, 2024',
      customer: {
        name: 'Whitney Francis',
        email: 'whitney.francis@example.com',
        address: '654 Maple St. Ottawa, ON',
        denied: "1",
        accepted: "4",
        idNumber: "7609198201098765",
        major: "金融学",
        age: 42,
        organization: "渥太华新闻社"
      },
      event: await getEvent('1002')
    },
    {
      id: 3007,
      url: '/orders/3007',
      date: 'Apr 6, 2024',
      customer: {
        name: 'Leonard Krasner',
        email: 'leonard.krasner@example.com',
        address: '987 Birch St. Winnipeg, MB',
        denied: "2",
        accepted: "1",
        idNumber: "8201197306127845",
        major: "法律",
        age: 51,
        organization: "温尼伯大学物理系"
      },
      event: await getEvent('1000')
    },
    {
      id: 3008,
      url: '/orders/3008',
      date: 'Apr 3, 2024',
      customer: {
        name: 'Floyd Miles',
        email: 'floyd.miles@example.com',
        address: '147 Cedar St. Quebec City, QC',
        denied: "4",
        accepted: "3",
        idNumber: "3606199208234532",
        major: "法律",
        age: 32,
        organization: "魁北克体育协会"
      },
      event: await getEvent('1000')
    },
    {
      id: 3009,
      url: '/orders/3009',
      date: 'Mar 29, 2024',
      customer: {
        name: 'Emily Selman',
        email: 'emily.selman@example.com',
        address: '258 Willow St. Halifax, NS',
        denied: "1",
        accepted: "0",
        idNumber: "9403198407125678",
        major: "工商管理",
        age: 40,
        organization: "哈利法克斯音乐厅"
      },
      event: await getEvent('1003')
    },
    {
      id: 3010,
      url: '/orders/3010',
      date: 'Mar 25, 2024',
      customer: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        address: '1234 Sample Rd. City, ST',
        denied: "0",
        accepted: "2",
        idNumber: "5702198906238765",
        major: "工商管理",
        age: 35,
        organization: "全球企业顾问公司"
      },
      event: await getEvent('1004')
    },
    {
      id: 3011,
      url: '/orders/3011',
      date: 'Mar 20, 2024',
      customer: {
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        address: '135 Maple Rd. Austin, TX',
        denied: "2",
        accepted: "4",
        idNumber: "6810199109124567",
        major: "法律",
        age: 33,
        organization: "德克萨斯科技公司"
      },
      event: await getEvent('1001')
    },
    {
      id: 3012,
      url: '/orders/3012',
      date: 'Mar 15, 2024',
      customer: {
        name: 'Henry Perez',
        email: 'henry.perez@example.com',
        address: '246 Oak Rd. San Francisco, CA',
        denied: "3",
        accepted: "1",
        idNumber: "2909198504236789",
        major: "电子工程",
        age: 39,
        organization: "旧金山电子科技有限公司"
      },
      event: await getEvent('1002')
    },
    {
      id: 3013,
      url: '/orders/3013',
      date: 'Mar 10, 2024',
      customer: {
        name: 'Olivia Baker',
        email: 'olivia.baker@example.com',
        address: '456 Pine Ave. Boston, MA',
        denied: "0",
        accepted: "2",
        idNumber: "4107199305129876",
        major: "金融学",
        age: 31,
        organization: "波士顿医学研究中心"
      },
      event: await getEvent('1003')
    },
    {
      id: 3014,
      url: '/orders/3014',
      date: 'Mar 5, 2024',
      customer: {
        name: 'Charlotte Lee',
        email: 'charlotte.lee@example.com',
        address: '567 Birch Blvd. Denver, CO',
        denied: "2",
        accepted: "4",
        idNumber: "7306199207236754",
        major: "法律",
        age: 32,
        organization: "丹佛环保局"
      },
      event: await getEvent('1004')
    },
    {
      id: 3015,
      url: '/orders/3015',
      date: 'Feb 29, 2024',
      customer: {
        name: 'Matthew Thomas',
        email: 'matthew.thomas@example.com',
        address: '678 Cedar Ln. Dallas, TX',
        denied: "1",
        accepted: "3",
        idNumber: "8504198603123456",
        major: "法律",
        age: 38,
        organization: "达拉斯律师事务所"
      },
      event: await getEvent('1000')
    },
    {
      id: 3016,
      url: '/orders/3016',
      date: 'Feb 25, 2024',
      customer: {
        name: 'Zoe Mitchell',
        email: 'zoe.mitchell@example.com',
        address: '789 Oak Dr. Portland, OR',
        denied: "3",
        accepted: "4",
        idNumber: "1205199001234567",
        major: "工商管理",
        age: 34,
        organization: "波特兰创意工作室"
      },
      event: await getEvent('1001')
    },
    {
      id: 3017,
      url: '/orders/3017',
      date: 'Feb 20, 2024',
      customer: {
        name: 'Luke Hall',
        email: 'luke.hall@example.com',
        address: '890 Pine Blvd. Chicago, IL',
        denied: "2",
        accepted: "1",
        idNumber: "3404198705126789",
        major: "工商管理",
        age: 37,
        organization: "芝加哥建筑设计院"
      },
      event: await getEvent('1002')
    },
    {
      id: 3018,
      url: '/orders/3018',
      date: 'Feb 15, 2024',
      customer: {
        name: 'Sophia Adams',
        email: 'sophia.adams@example.com',
        address: '123 Elm Ave. Seattle, WA',
        denied: "4",
        accepted: "0",
        idNumber: "9203199406127654",
        major: "工商管理",
        age: 30,
        organization: "西雅图数据分析公司"
      },
      event: await getEvent('1003')
    },
    {
      id: 3019,
      url: '/orders/3019',
      date: 'Feb 10, 2024',
      customer: {
        name: 'Mason Scott',
        email: 'mason.scott@example.com',
        address: '345 Maple Ave. Los Angeles, CA',
        denied: "1",
        accepted: "4",
        idNumber: "5708199102236543",
        major: "工商管理",
        age: 33,
        organization: "洛杉矶电影工作室"
      },
      event: await getEvent('1004')
    },
    {
      id: 3020,
      url: '/orders/3020',
      date: 'Feb 5, 2024',
      customer: {
        name: 'Isabella Clark',
        email: 'isabella.clark@example.com',
        address: '456 Oak Blvd. Miami, FL',
        denied: "3",
        accepted: "2",
        idNumber: "6409198807123456",
        major: "工商管理",
        age: 36,
        organization: "迈阿密海滩度假村"
      },
      event: await getEvent('1000')
    },
    {
      id: 3021,
      url: '/orders/3021',
      date: 'Feb 1, 2024',
      customer: {
        name: 'Alexander Martinez',
        email: 'alexander.martinez@example.com',
        address: '567 Cedar Dr. Houston, TX',
        denied: "4",
        accepted: "1",
        idNumber: "7102199208236789",
        major: "石油工程",
        age: 32,
        organization: "休斯顿能源公司"
      },
      event: await getEvent('1002')
    },
    {
      id: 3022,
      url: '/orders/3022',
      date: 'Jan 28, 2024',
      customer: {
        name: 'Charlotte White',
        email: 'charlotte.white@example.com',
        address: '678 Birch Rd. New Orleans, LA',
        denied: "0",
        accepted: "2",
        idNumber: "8309198605124567",
        major: "石油工程",
        age: 38,
        organization: "新奥尔良爵士乐俱乐部"
      },
      event: await getEvent('1003')
    },
    {
      id: 3023,
      url: '/orders/3023',
      date: 'Jan 25, 2024',
      customer: {
        name: 'William Harris',
        email: 'william.harris@example.com',
        address: '789 Pine Ave. Denver, CO',
        denied: "1",
        accepted: "3",
        idNumber: "2407198304237654",
        major: "石油工程",
        age: 41,
        organization: "丹佛地质研究所"
      },
      event: await getEvent('1001')
    },
    {
      id: 3024,
      url: '/orders/3024',
      date: 'Jan 20, 2024',
      customer: {
        name: 'Ava Lewis',
        email: 'ava.lewis@example.com',
        address: '890 Cedar Blvd. Phoenix, AZ',
        denied: "2",
        accepted: "0",
        idNumber: "4506199709124567",
        major: "石油工程",
        age: 27,
        organization: "凤凰城气象局"
      },
      event: await getEvent('1004')
    },
    {
      id: 3025,
      url: '/orders/3025',
      date: 'Jan 15',
      customer: {
        name: 'Chloe Lewis',
        email: 'ava.lewis@example.com',
        address: '890 Cedar Blvd. Phoenix, AZ',
        denied: "2",
        accepted: "0",
        idNumber: "4506199709124567",
        major: "计算机科学",
        age: 29,
        organization: "凤凰城气象局"
      },
      event: await getEvent('1004')
    },
  ]
}


export async function getEvent(id: string) {
  return (await getEvents()).find((event) => event.id.toString() === id)!
}

export async function getEventOrders(id: string) {
  return (await getOrders()).filter((order) => order.event&&order.event.id.toString() === id)
}

export async function getEvents() {
  return [
    {
      id: 1000,
      name: '投标分析：评估策略',
      url: '/events/1000',
      date: '2024年5月20日',
      time: '上午10点',
      location: '多伦多A会议厅，安大略省',
      totalRevenue: '$102,552',
      totalRevenueChange: '+3.2%',
      ticketsAvailable: 500,
      ticketsSold: 350,
      ticketsSoldChange: '+8.1%',
      pageViews: '24,300',
      pageViewsChange: '-0.75%',
      status: '已关闭',
      imgUrl: '/events/bid-analysis.jpg',
      thumbUrl: '/events/bid-analysis-thumb.jpg',
    },
    {
      id: 1001,
      name: '投标过程优化',
      url: '/events/1001',
      date: '2024年6月2日',
      time: '晚上8点',
      location: '温哥华大礼堂，不列颠哥伦比亚省',
      totalRevenue: '$24,115',
      totalRevenueChange: '+3.2%',
      ticketsAvailable: 150,
      ticketsSold: 72,
      ticketsSoldChange: '+8.1%',
      pageViews: '57,544',
      pageViewsChange: '-2.5%',
      status: '正在抽取',
      imgUrl: '/events/bidding-process.jpg',
      thumbUrl: '/events/bidding-process-thumb.jpg',
    },
    {
      id: 1002,
      name: '评估供应商提案',
      url: '/events/1002',
      date: '2024年8月5日',
      time: '下午4点',
      location: '渥太华展览中心，安大略省',
      totalRevenue: '$40,598',
      totalRevenueChange: '+3.2%',
      ticketsAvailable: 275,
      ticketsSold: 275,
      ticketsSoldChange: '+8.1%',
      pageViews: '122,122',
      pageViewsChange: '-8.0%',
      status: '已关闭',
      imgUrl: '/events/vendor-proposals.jpg',
      thumbUrl: '/events/vendor-proposals-thumb.jpg',
    },
    {
      id: 1003,
      name: '采购投标见解',
      url: '/events/1003',
      date: '2024年12月31日',
      time: '晚上8点',
      location: '卡尔加里市中心会议中心，阿尔伯塔省',
      totalRevenue: '$3,552',
      totalRevenueChange: '+3.2%',
      ticketsAvailable: 40,
      ticketsSold: 6,
      ticketsSoldChange: '+8.1%',
      pageViews: '9,000',
      pageViewsChange: '-0.15%',
      status: '正在抽取',
      imgUrl: '/events/procurement-bidding.jpg',
      thumbUrl: '/events/procurement-bidding-thumb.jpg',
    },
    {
      id: 1004,
      name: '政府招标评估',
      url: '/events/1004',
      date: '2025年2月14日',
      time: '上午11点',
      location: '蒙特利尔市政厅，魁北克省',
      totalRevenue: '$58,223',
      totalRevenueChange: '+5.1%',
      ticketsAvailable: 220,
      ticketsSold: 150,
      ticketsSoldChange: '+12.2%',
      pageViews: '98,000',
      pageViewsChange: '+2.3%',
      status: '正在抽取',
      imgUrl: '/events/government-tender.jpg',
      thumbUrl: '/events/government-tender-thumb.jpg',
    },
    {
      id: 1005,
      name: '有效的投标评估技巧',
      url: '/events/1005',
      date: '2025年3月20日',
      time: '下午2点',
      location: '埃德蒙顿商业博览会，阿尔伯塔省',
      totalRevenue: '$87,561',
      totalRevenueChange: '-0.8%',
      ticketsAvailable: 400,
      ticketsSold: 300,
      ticketsSoldChange: '+5.7%',
      pageViews: '120,000',
      pageViewsChange: '+0.5%',
      status: '正在抽取',
      imgUrl: '/events/bid-techniques.jpg',
      thumbUrl: '/events/bid-techniques-thumb.jpg',
    },
    {
      id: 1006,
      name: '项目投标和提案管理',
      url: '/events/1006',
      date: '2025年4月10日',
      time: '上午9点',
      location: '温尼伯科技会议厅，曼尼托巴省',
      totalRevenue: '$132,000',
      totalRevenueChange: '+4.4%',
      ticketsAvailable: 350,
      ticketsSold: 250,
      ticketsSoldChange: '+6.0%',
      pageViews: '75,000',
      pageViewsChange: '-1.2%',
      status: '正在抽取',
      imgUrl: '/events/proposal-management.jpg',
      thumbUrl: '/events/proposal-management-thumb.jpg',
    },
    {
      id: 1007,
      name: '评估国际合同',
      url: '/events/1007',
      date: '2025年6月5日',
      time: '上午10点',
      location: '国际贸易中心，多伦多，安大略省',
      totalRevenue: '$56,000',
      totalRevenueChange: '+7.5%',
      ticketsAvailable: 180,
      ticketsSold: 120,
      ticketsSoldChange: '+9.4%',
      pageViews: '65,000',
      pageViewsChange: '-0.5%',
      status: '正在抽取',
      imgUrl: '/events/international-contracts.jpg',
      thumbUrl: '/events/international-contracts-thumb.jpg',
    },
    {
      id: 1008,
      name: '合同授予与供应商谈判',
      url: '/events/1008',
      date: '2025年7月18日',
      time: '下午3点',
      location: '卡尔加里大会议室，阿尔伯塔省',
      totalRevenue: '$72,100',
      totalRevenueChange: '-1.2%',
      ticketsAvailable: 220,
      ticketsSold: 175,
      ticketsSoldChange: '+4.6%',
      pageViews: '85,000',
      pageViewsChange: '-2.8%',
      status: '正在抽取',
      imgUrl: '/events/contract-awarding.jpg',
      thumbUrl: '/events/contract-awarding-thumb.jpg',
    },
    {
      id: 1009,
      name: '投标过程中的风险管理',
      url: '/events/1009',
      date: '2025年8月10日',
      time: '晚上7点',
      location: '蒙特利尔风险博览会，魁北克省',
      totalRevenue: '$44,000',
      totalRevenueChange: '+2.5%',
      ticketsAvailable: 300,
      ticketsSold: 230,
      ticketsSoldChange: '+10.4%',
      pageViews: '92,000',
      pageViewsChange: '+1.1%',
      status: '正在抽取',
      imgUrl: '/events/risk-management.jpg',
      thumbUrl: '/events/risk-management-thumb.jpg',
    },
  ];
}




export function getCountries() {
  return [
    {
      name: 'Canada',
      code: 'CA',
      flagUrl: '/flags/ca.svg',
      regions: [
        'Alberta',
        'British Columbia',
        'Manitoba',
        'New Brunswick',
        'Newfoundland and Labrador',
        'Northwest Territories',
        'Nova Scotia',
        'Nunavut',
        'Ontario',
        'Prince Edward Island',
        'Quebec',
        'Saskatchewan',
        'Yukon',
      ],
    },
    {
      name: 'Mexico',
      code: 'MX',
      flagUrl: '/flags/mx.svg',
      regions: [
        'Aguascalientes',
        'Baja California',
        'Baja California Sur',
        'Campeche',
        'Chiapas',
        'Chihuahua',
        'Ciudad de Mexico',
        'Coahuila',
        'Colima',
        'Durango',
        'Guanajuato',
        'Guerrero',
        'Hidalgo',
        'Jalisco',
        'Mexico State',
        'Michoacán',
        'Morelos',
        'Nayarit',
        'Nuevo León',
        'Oaxaca',
        'Puebla',
        'Querétaro',
        'Quintana Roo',
        'San Luis Potosí',
        'Sinaloa',
        'Sonora',
        'Tabasco',
        'Tamaulipas',
        'Tlaxcala',
        'Veracruz',
        'Yucatán',
        'Zacatecas',
      ],
    },
    {
      name: 'United States',
      code: 'US',
      flagUrl: '/flags/us.svg',
      regions: [
        'Alabama',
        'Alaska',
        'American Samoa',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Washington DC',
        'Micronesia',
        'Florida',
        'Georgia',
        'Guam',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Marshall Islands',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Northern Mariana Islands',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Palau',
        'Pennsylvania',
        'Puerto Rico',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'U.S. Virgin Islands',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
        'Armed Forces Americas',
        'Armed Forces Europe',
        'Armed Forces Pacific',
      ],
    },
  ]
}
