import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Moon } from 'lucide-react';
import React from 'react';

const Header = () => {
    return (
        <header className='w-screen backdrop-blur-sm bg-background/30 border-b border-gray-200'>
            <div className='flex items-center justify-between container-center py-4'>
                <div className='flex items-center gap-4 '>
                    <img className='h-8' src="https://www.collabifyspace.com/favicon.png" alt="" />
                    <h2 className='text-2xl font-bold '> Collabify </h2>
                </div>
                <div className='flex items-center gap-2'>
                    {/*todo: i will separte this later as a standalone components */}
                    
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                           <Button variant={'ghost'} size={'icon'}>
                                <Moon className=''></Moon>
                           </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align='end'>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button variant={'ghost'}>Log in </Button>
                    <Button>Get started</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;