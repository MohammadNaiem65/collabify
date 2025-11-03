

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <div className=' text-center container-center mx-auto py-24 space-y-12'>
            <div className='space-y-5'>
                <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl'>Collaborate smarter. <br />
                    <span className='text-primary'>Deliver faster </span>
                </h1>
                <p className='max-w-[700px] text-lg text-muted-foreground sm:text-xl mx-auto'>
                    The all-in-one platform for freelancers and small teams to manage projects, collaborate in real-time, and deliver exceptional results.
                </p>
                <div className='flex items-center justify-center gap-4 mt-4 '>
                    <Link href={'/'}>
                        <Button size={'lg'} className='gap-2 '>
                            Get started
                            <ArrowRight className='h-4 w-4' />
                        </Button>
                    </Link>
                    <Link href={'/'}>
                        <Button variant={'outline'} size={'lg'}>
                            View Demo
                        </Button>
                    </Link>
                </div>
            </div>

            <div className='shadow-xl bg-white rounded-md p-4'>
                <img className='border border-gray-100 rounded-md' src="/dashboard.png" alt="" />
            </div>
        </div>
    );
};

export default Hero;