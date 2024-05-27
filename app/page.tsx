'use client'

import { Button } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-red-500">Hello world</h1>
      <Button 
        className='mt-4 ml-6'
        variant="gradient"
        gradient={{ from: 'rgba(18, 18, 18, 1)', to: 'rgba(58, 33, 184, 1)', deg: 90 }}
        onClick={() => console.log('Button clicked')}
      >
        Gradient button
    </Button>

    <DateTimePicker
      className='w-72 h-4'
      clearable
      defaultValue={new Date()}
      size='md'
      label="Pick date and time"
      placeholder="Pick date and time"
      onChange={(value) => console.log(value)}
    />
    </div>
  );
}