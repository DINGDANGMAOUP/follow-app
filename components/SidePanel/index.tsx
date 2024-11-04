import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const menuData = [
  {
    title: 'Discover',
    items: [
      {
        title: 'Listen Now',
        url: '#',
        icon: 'Home'
      },
      {
        title: 'Browse',
        url: '#',
        icon: 'Inbox'
      },
      {
        title: 'Browse',
        url: '#',
        icon: 'Calendar'
      }
    ]
  },
  {
    title: 'Library',
    items: [
      {
        title: 'Playlists',
        url: '#',
        icon: 'Search'
      },
      {
        title: 'Artists',
        url: '#',
        icon: 'Settings'
      }
    ]
  },
  {
    title: 'Settings',
  }
]
const SidePanel = () => {
  return (
    <Sidebar className="pt-8">
      <SidebarHeader>
        <h1 className="text-2xl font-semibold tracking-tight">App Name</h1>
      </SidebarHeader>
      <SidebarContent>
        {
          menuData.map((group) => (
            <SidebarGroup key={group.title}>
              <SidebarGroupLabel className="mb-2 px-4 text-lg font-semibold tracking-tight">
                <h2>
                  {group.title}
                </h2>
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {
                    group.items?.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <a href={item.url}>
                            {item.icon &&  <Icon name={item.icon} />}
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))
                  }
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))
        }

      </SidebarContent>
      <SidebarFooter>
        <p className="text-sm text-gray-500">© 2021 App Name</p>
      </SidebarFooter>
    </Sidebar>
  )
}

export default SidePanel