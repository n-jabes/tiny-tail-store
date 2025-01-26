'use client';

import { LogOut } from 'lucide-react';

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

export function Logout() {
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton>
          <LogOut />
          <span className='ml-2'>Logout</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
