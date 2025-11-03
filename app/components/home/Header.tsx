import { Button } from '@/components/ui/button';

import React from 'react';
import ThemeToggle from '../themeToggler';

const Header = () => {
    return (
        <header className='w-screen backdrop-blur-sm bg-background/30 border-b border-gray-200 dark:bg-gray-900 dark:text-white'>
            <div className='flex items-center justify-between container-center py-4'>
                <div className='flex items-center gap-4 '>
                    <img className='h-8' src="https://www.collabifyspace.com/favicon.png" alt="" />
                    <h2 className='text-2xl font-bold '> Collabify </h2>
                </div>
                <div className='flex items-center gap-2'>
                    {/*todo: i will separte this later as a standalone components */}

                    <ThemeToggle />

                    <Button variant={'ghost'}>Log in </Button>
                    <Button>Get started</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;