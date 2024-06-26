import * as React from 'react'
import { flushSync } from 'react-dom'
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '#app/components/ui/avatar.tsx'
import { Card, CardContent } from '#app/components/ui/card.tsx'
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '#app/components/ui/carousel.tsx'

const board = [
	{
		name: 'Luke Ungarino',
		title: 'Director',
		image: '/img/luke.ungarino.jpg',
		quote:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	},
	{
		name: 'Denise Benton',
		title: 'Treasurer',
		image: '/img/denise.benton.jpg',
		quote:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	},
	{
		name: 'Dr. John Anderson',
		title: 'Employer',
		image: '/img/john.anderson.jpg',
		quote:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	},
	{
		name: 'Jay Toups',
		title: 'Employer',
		image: '/img/jay.toups.jpg',
		quote:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	},
	{
		name: 'Blair Piras',
		title: 'Employer',
		image: '/img/blair.piras.jpg',
		quote:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	},
	{
		name: 'Dr. Damon Cudihy',
		title: 'Employer',
		image: '/img/damon.cudihy.jpg',
		quote:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	},
	{
		name: 'Fr. John Joseph Bourque, CJC',
		title: 'Tutor',
		image: '/img/john.joseph.bourque.jpg',
		quote:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	},
	{
		name: 'Mel Leece',
		title: "Women's House Leader",
		image: '/img/mel.leece.jpg',
		quote:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	},
	{
		name: 'Sam Pitre',
		title: 'Employer',
		image: '/img/sam.pitre.jpg',
		quote:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	},
	{
		name: 'Fr. Josh Guillory',
		title: 'Tutor',
		image: '/img/josh.guillory.jpg',
		quote:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	},
]

const TWEEN_FACTOR = 3.2
const numberWithinRange = (number: number, min: number, max: number): number =>
	Math.min(Math.max(number, min), max)

export default function Footer() {
	const [api, setApi] = React.useState<CarouselApi>()
	const [, setCurrent] = React.useState(0)
	const [, setCount] = React.useState(0)
	const [tweenValues, setTweenValues] = React.useState<number[]>([])

	const onScroll = React.useCallback(() => {
		if (!api) return

		const engine = api.internalEngine()
		const scrollProgress = api.scrollProgress()

		const styles = api.scrollSnapList().map((scrollSnap, index) => {
			let diffToTarget = scrollSnap - scrollProgress

			if (engine.options.loop) {
				engine.slideLooper.loopPoints.forEach((loopItem: any) => {
					const target = loopItem.target()
					if (index === loopItem.index && target !== 0) {
						const sign = Math.sign(target)
						if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)
						if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)
					}
				})
			}
			const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR)
			return numberWithinRange(tweenValue, 0, 1)
		})
		setTweenValues(styles)
	}, [api, setTweenValues])

	React.useEffect(() => {
		if (!api) {
			return
		}

		setCount(api.scrollSnapList().length)
		setCurrent(api.selectedScrollSnap() + 1)

		api.on('select', () => {
			console.log('current')
			setCurrent(api.selectedScrollSnap() + 1)
		})
	}, [api])

	React.useEffect(() => {
		if (!api) {
			return
		}
		onScroll()
		api.on('scroll', () => {
			flushSync(() => onScroll())
		})
		api.on('reInit', onScroll)
	}, [api, onScroll])

	return (
		<footer id="contact" className="flex flex-col">
			<section className="flex flex-col space-y-4 bg-background px-20 pb-20 pt-12 ">
				<Carousel
					setApi={setApi}
					opts={{
						loop: true,
						align: 'center',
					}}
					className="w-full "
				>
					<CarouselContent className="-ml-1 ">
						{board.map(({ image, name, title, quote }, index) => (
							<CarouselItem
								style={{
									...(tweenValues.length && { opacity: tweenValues[index] }),
								}}
								key={image}
								className="  basis-10/12 pl-1 md:basis-5/12 lg:basis-3/12"
							>
								<div className=" p-1">
									<Card className=" h-[370px] bg-slate-700">
										<CardContent className="flex items-center justify-center  p-6 text-white">
											{/* <p className="before:content-['] text-xl font-light leading-8">
												{quote}
											</p> */}
											<div className="flex flex-col place-items-start justify-center gap-4 pb-4 ">
												<div className="flex w-full flex-col place-items-center">
													<Avatar className="h-48 w-48">
														<AvatarImage src={image} />
														<AvatarFallback>tn</AvatarFallback>
													</Avatar>
												</div>
												<div className="flex w-full flex-col text-center">
													<p className="text-center text-2xl">{name}</p>
													<p className="text-center text-base">{title}</p>
												</div>
											</div>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</section>
			<section className="bg-accent-dark flex h-40 flex-col justify-between pb-2 pt-12 text-center text-white">
				<div className="px-4">
					Via Nova is an independent 501(c)(3) organization. All donations are
					tax-deductible by law.
				</div>
			</section>
		</footer>
	)
}
