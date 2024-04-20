import { Link } from '@remix-run/react'
import { type RootOutletContext } from '#app/root.tsx'
import Menu from './menu.tsx'

export default function Header({
	scrollContext,
}: {
	scrollContext: RootOutletContext
}) {
	return (
		<header className="relative flex h-[382px] min-h-[20vh] flex-col space-y-12 border-b-2 border-black bg-background p-6 pb-2 md:h-[360px]">
			<div className="font-title relative z-20 flex flex-col pt-24 text-center uppercase  text-gray-900 md:pt-28">
				<Link to="/" className="text-5xl font-thin md:text-6xl">
					<span className="font-bold">V i a</span>&nbsp;&nbsp;N o v a
				</Link>
			</div>
			<Menu scrollContext={scrollContext} />
		</header>
	)
}
