// import React from 'react'
// const data = {
//   user: {
//     name: "shadcn",
//     email: "m@example.com",
//     avatar: "/avatars/shadcn.jpg",
//   },
//   teams: [
//     {
//       name: "Acme Inc",
//       logo: GalleryVerticalEnd,
//       plan: "Enterprise",
//     },
//     {
//       name: "Acme Corp.",
//       logo: AudioWaveform,
//       plan: "Startup",
//     },
//     {
//       name: "Evil Corp.",
//       logo: Command,
//       plan: "Free",
//     },
//   ],
//   navMain: [
//     {
//       title: "Playground",
//       url: "#",
//       icon: SquareTerminal,
//       isActive: true,
//       items: [
//         {
//           title: "History",
//           url: "#",
//         },
//         {
//           title: "Starred",
//           url: "#",
//         },
//         {
//           title: "Settings",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Models",
//       url: "#",
//       icon: Bot,
//       items: [
//         {
//           title: "Genesis",
//           url: "#",
//         },
//         {
//           title: "Explorer",
//           url: "#",
//         },
//         {
//           title: "Quantum",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Documentation",
//       url: "#",
//       icon: BookOpen,
//       items: [
//         {
//           title: "Introduction",
//           url: "#",
//         },
//         {
//           title: "Get Started",
//           url: "#",
//         },
//         {
//           title: "Tutorials",
//           url: "#",
//         },
//         {
//           title: "Changelog",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Settings",
//       url: "#",
//       icon: Settings2,
//       items: [
//         {
//           title: "General",
//           url: "#",
//         },
//         {
//           title: "Team",
//           url: "#",
//         },
//         {
//           title: "Billing",
//           url: "#",
//         },
//         {
//           title: "Limits",
//           url: "#",
//         },
//       ],
//     },
//   ],
//   projects: [
//     {
//       name: "Design Engineering",
//       url: "#",
//       icon: Frame,
//     },
//     {
//       name: "Sales & Marketing",
//       url: "#",
//       icon: PieChart,
//     },
//     {
//       name: "Travel",
//       url: "#",
//       icon: Map,
//     },
//   ],
// }
// const FooterPanel = () => {
//   return (
//     <SidebarMenu>
//     <SidebarMenuItem>
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <SidebarMenuButton
//             size="lg"
//             className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
//           >
//             <Avatar className="h-8 w-8 rounded-lg">
//               <AvatarImage
//                 src={data.user.avatar}
//                 alt={data.user.name}
//               />
//               <AvatarFallback className="rounded-lg">CN</AvatarFallback>
//             </Avatar>
//             <div className="grid flex-1 text-left text-sm leading-tight">
//               <span className="truncate font-semibold">
//                 {data.user.name}
//               </span>
//               <span className="truncate text-xs">
//                 {data.user.email}
//               </span>
//             </div>
//             <ChevronsUpDown className="ml-auto size-4" />
//           </SidebarMenuButton>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent
//           className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
//           side="bottom"
//           align="end"
//           sideOffset={4}
//         >
//           <DropdownMenuLabel className="p-0 font-normal">
//             <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
//               <Avatar className="h-8 w-8 rounded-lg">
//                 <AvatarImage
//                   src={data.user.avatar}
//                   alt={data.user.name}
//                 />
//                 <AvatarFallback className="rounded-lg">
//                   CN
//                 </AvatarFallback>
//               </Avatar>
//               <div className="grid flex-1 text-left text-sm leading-tight">
//                 <span className="truncate font-semibold">
//                   {data.user.name}
//                 </span>
//                 <span className="truncate text-xs">
//                   {data.user.email}
//                 </span>
//               </div>
//             </div>
//           </DropdownMenuLabel>
//           <DropdownMenuSeparator />
//           <DropdownMenuGroup>
//             <DropdownMenuItem>
//               <Sparkles />
//               Upgrade to Pro
//             </DropdownMenuItem>
//           </DropdownMenuGroup>
//           <DropdownMenuSeparator />
//           <DropdownMenuGroup>
//             <DropdownMenuItem>
//               <BadgeCheck />
//               Account
//             </DropdownMenuItem>
//             <DropdownMenuItem>
//               <CreditCard />
//               Billing
//             </DropdownMenuItem>
//             <DropdownMenuItem>
//               <Bell />
//               Notifications
//             </DropdownMenuItem>
//           </DropdownMenuGroup>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem>
//             <LogOut />
//             Log out
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </SidebarMenuItem>
//   </SidebarMenu>
//   )
// }

// export default FooterPanel