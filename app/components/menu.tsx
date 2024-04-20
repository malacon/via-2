import { Link, useLocation, useNavigate } from '@remix-run/react'
import { MenuIcon } from 'lucide-react'
import * as React from 'react'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '#app/components/ui/sheet.tsx'
import { type RootOutletContext } from '#app/root.tsx'
import { cn } from '../utils/misc.tsx'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from './ui/navigation-menu.tsx'

const navigation: {
	title: string
	to?: string
	position?: number
	sub?: { title: string; to: string; position?: number; description: string }[]
}[] = [
	{
		title: 'About',
		to: '/#mission',
		position: 582,
		// sub: [
		// 	{
		// 		title: 'Our Mission',
		// 		to: '/#mission',
		// 		position: 582,
		// 		description: 'We are helping the next generation.',
		// 	},
		// 	{
		// 		title: 'Our Vision',
		// 		to: '/#story',
		// 		position: 1000,
		// 		description: 'Learn why we do what we do.',
		// 	},
		// ],
	},
	{
		title: 'Contact',
		to: '/#apply',
		position: 1200,
	},
	// {
	// 	title: 'Who We Are',
	// 	sub: [
	// 		{
	// 			title: 'Our Fellows',
	// 			to: '/fellows',
	// 			description: 'Meet the members of our current cohort.',
	// 		},
	// 		{
	// 			title: 'Our Partners',
	// 			to: '/partners',
	// 			description: 'Meet our friends.',
	// 		},
	// 	],
	// },
	{
		title: 'FAQ',
		to: '/faq',
	},
	// {
	// 	title: 'Contact',
	// 	to: 'contact',
	// },
]

export default function NavMenu({
	scrollContext,
}: {
	scrollContext: RootOutletContext
}) {
	const context = scrollContext
	const location = useLocation()
	const navigate = useNavigate()

	function handleScrollTo(to: String) {
		const section = to.replace('/#', '')
		if (location.pathname !== '/') {
			navigate('/', {
				state: { scroll: section },
			})
		}
		switch (section) {
			case 'mission': {
				// context.applyScroll.showApplication = false
				context?.missionScroll?.scrollIntoView()
				break
			}
			case 'apply': {
				context.applyScroll.showApplication = true
				context?.applyScroll?.scrollIntoView()
				break
			}
			default: {
				// context.applyScroll.showApplication = false
				break
			}
		}
	}

	const [sheetOpen, setSheetOpen] = React.useState(false)

	return (
		<>
			<div className="hidden md:flex md:justify-center">
				<nav className="font-header right-0 top-12 z-40 mx-auto hidden max-w-7xl space-x-1 px-2 text-sm font-extralight uppercase tracking-widest text-gray-900 sm:px-6 md:flex lg:px-20">
					<NavigationMenu orientation="vertical">
						<NavigationMenuList>
							{navigation.map(({ title, sub, to }) => (
								<NavigationMenuItem key={title} className="navitem">
									{sub?.length ? (
										<>
											<NavigationMenuTrigger className="!items-start bg-transparent text-xl font-extralight uppercase tracking-widest text-gray-900 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
												{title}
											</NavigationMenuTrigger>
											<NavigationMenuContent className="z-40">
												<ul className="relative z-40 grid gap-3 p-6 opacity-80 md:w-[200px]">
													{sub?.map(({ description, title, to, position }) => (
														<li key={title}>
															<NavigationMenuLink asChild>
																{to.includes('#') ? (
																	<div
																		onClick={() => handleScrollTo(to)}
																		className={cn(
																			'relative z-40 block select-none space-y-1 rounded-md p-3 text-left leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-gray-200 focus:bg-accent focus:text-accent-foreground',
																		)}
																	>
																		<div className="text-sm font-medium normal-case leading-none">
																			{title}
																		</div>
																		{/* <p className="line-clamp-2 text-sm normal-case leading-snug text-muted-foreground">
																			{description}
																		</p> */}
																	</div>
																) : (
																	<Link
																		to={to}
																		className={cn(
																			'relative z-40 block select-none space-y-1 rounded-md p-3 text-left leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-gray-200 focus:bg-accent focus:text-accent-foreground',
																		)}
																	>
																		<div className="text-sm font-medium normal-case leading-none">
																			{title}
																		</div>
																		{/* <p className="line-clamp-2 text-sm normal-case leading-snug text-muted-foreground">
																			{description}
																		</p> */}
																	</Link>
																)}
															</NavigationMenuLink>
														</li>
													))}
												</ul>
											</NavigationMenuContent>
										</>
									) : to ? (
										to.includes('#') ? (
											<NavigationMenuLink
												onClick={() => handleScrollTo(to)}
												className={
													navigationMenuTriggerStyle() +
													' bg-transparent text-xl font-extralight uppercase tracking-widest text-gray-900'
												}
												asChild
											>
												<Link to={to}>{title}</Link>
												{/* <p className="line-clamp-2 text-sm normal-case leading-snug text-muted-foreground">
												{description}
											</p> */}
											</NavigationMenuLink>
										) : (
											<NavigationMenuLink
												className={
													navigationMenuTriggerStyle() +
													' bg-transparent text-xl font-extralight uppercase tracking-widest text-gray-900'
												}
												asChild
											>
												<Link to={to}>{title}</Link>
											</NavigationMenuLink>
										)
									) : null}
								</NavigationMenuItem>
							))}
						</NavigationMenuList>
					</NavigationMenu>
					{/* <Button
						asChild
						className="items-start border border-gray-900 bg-transparent text-xl font-extralight uppercase tracking-widest text-gray-900 hover:bg-accent hover:text-gray-200 focus:bg-accent focus:text-accent-foreground"
					>
						<a
							target="_blank"
							href="https://vianova.stellarwebsystems.com/donations/pool/79bdb7d4-264e-11ee-9cac-16118fddfe69"
							rel="noreferrer"
						>
							Give
						</a>
					</Button> */}
				</nav>
			</div>
			<div className="absolute left-20 top-2 bg-transparent md:hidden">
				<Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
					<SheetTrigger className="absolute right-4 top-4 z-40">
						<MenuIcon className="h-8 w-8" color="black" />
					</SheetTrigger>
					<SheetContent>
						<SheetHeader>
							<SheetTitle className="font-title text-3xl font-thin uppercase text-gray-900  md:text-6xl">
								<span className="font-bold">V i a</span>&nbsp;&nbsp;N o v a
							</SheetTitle>
							<SheetDescription asChild>
								<ul className="flex flex-col space-y-3 px-2 pb-3 pt-2 text-2xl text-gray-900">
									{navigation.map(({ title, sub, to }) => (
										<li key={title}>
											{to ? (
												to.includes('#') ? (
													<div
														onClick={() => {
															setSheetOpen(false)
															handleScrollTo(to)
														}}
														className=" text-2xl"
													>
														{title}
													</div>
												) : (
													<Link
														onClick={() => setSheetOpen(false)}
														className=" text-2xl"
														to={to}
													>
														{title}
													</Link>
												)
											) : (
												<span className="text-2xl font-bold  underline">
													{title}
												</span>
											)}
											{sub?.length ? (
												<ul className="flex flex-col space-y-3 px-2 pb-3 pt-2 text-2xl">
													{sub.map(({ title, to }) => (
														<li key={title}>
															<Link
																onClick={() => setSheetOpen(false)}
																reloadDocument={to.includes('#')}
																to={to}
															>
																{title}
															</Link>
														</li>
													))}
												</ul>
											) : null}
										</li>
									))}
									{/* <li>
										<Button
											asChild
											className="items-start border border-gray-900 bg-transparent text-xl font-extralight uppercase tracking-widest text-gray-900 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
										>
											<a
												onClick={() => setSheetOpen(false)}
												target="_blank"
												href="https://vianova.stellarwebsystems.com/donations/pool/79bdb7d4-264e-11ee-9cac-16118fddfe69"
												rel="noreferrer"
											>
												Give
											</a>
										</Button>
									</li> */}
								</ul>
							</SheetDescription>
						</SheetHeader>
					</SheetContent>
				</Sheet>
			</div>
		</>
	)
}
