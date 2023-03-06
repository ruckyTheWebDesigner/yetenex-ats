"use client";

import { Card, Title, Text, ColGrid } from "@tremor/react";

import { Metric, Icon, Flex, Color, Block } from "@tremor/react";

export default function Content() {
  return (
    <main>
      {/* Main section */}
      <Card marginTop='mt-6'>
        <Title>Dashboard</Title>
      </Card>

      {/* KPI section */}
      <ColGrid numColsMd={2} gapX='gap-x-6' gapY='gap-y-6' marginTop='mt-6'>
        <Card>
          {/* Placeholder to set height */}
          hello world
          <div className='h-28' />
        </Card>
        <Card>
          hello world 2{/* Placeholder to set height */}
          <div className='h-28' />
        </Card>
      </ColGrid>
    </main>
  );
}

const categories: {
  title: string;
  metric: string;
  // icon: any,
  color: Color;
}[] = [
  {
    title: "Sales",
    metric: "$ 23,456,456",
    // icon: Ticket,
    color: "indigo",
  },
  {
    title: "Profit",
    metric: "$ 13,123",
    // icon: CashIcon,
    color: "fuchsia",
  },
  {
    title: "Customers",
    metric: "456",
    // icon: UserGroupIcon,
    color: "amber",
  },
];

function Example() {
  return (
    <ColGrid numColsSm={2} numColsLg={3} gapX='gap-x-6' gapY='gap-y-6'>
      {categories.map((item) => (
        <Card key={item.title} decoration='top' decorationColor={item.color}>
          <Flex justifyContent='justify-start' spaceX='space-x-4'>
            {/* <Icon
                            icon={ item.icon }
                            variant="light"
                            size="xl"
                            color={ item.color }
                        /> */}
            <Block truncate={true}>
              <Text>{item.title}</Text>
              <Metric truncate={true}>{item.metric}</Metric>
            </Block>
          </Flex>
        </Card>
      ))}
    </ColGrid>
  );
}
