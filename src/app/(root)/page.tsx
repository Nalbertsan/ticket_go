/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */

'use client';

import React from 'react';
import { RiAddCircleFill } from 'react-icons/ri';
import Button from '../components/Button';

export default function PageLayout() {
  return (
    <main className='h-full w-screen'>
        <h1>Page</h1>
        <Button label='Click' className='w-[80%]' icon={RiAddCircleFill} onClick={() => {}}/>
    </main>);
}
