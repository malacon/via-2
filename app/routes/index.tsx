import { Tabs } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { type MetaFunction, type LinksFunction } from '@remix-run/node'
import {
	isRouteErrorResponse,
	useLocation,
	useOutletContext,
	useRouteError,
} from '@remix-run/react'
import { motion, useAnimation } from 'framer-motion'
import { AppWindowIcon, InfoIcon, ShieldIcon } from 'lucide-react'
import * as React from 'react'
// import { ScrollingCarousel } from '@trendyol-js/react-carousel'
// import { MoveLeftIcon, MoveRightIcon } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import PrayIcon from '#app/components/icon/pray.tsx'
import StudyIcon from '#app/components/icon/study.tsx'
import WorkIcon from '#app/components/icon/work.tsx'
import ImageOverlay from '#app/components/image-overlay.tsx'
import { type RootOutletContext } from '#app/root.tsx'
// import ApplyForm from './resources+/apply-form.tsx'
// import InquiryForm from './resources+/inquiry-form.tsx'
// import SupportForm from './resources+/support-form.tsx'
// import { Separator } from '#app/components/ui/separator.tsx'

export const meta: MetaFunction = () => [{ title: 'VIA NOVA' }]
export const links: LinksFunction = () => {
	return []
}

const fadeInAnimationsVariant = {
	initial: {
		opacity: 0,
	},
	animate: (index: number) => ({
		opacity: 1,
		transition: {
			duration: 0.5,
			delay: index * 0.2,
		},
	}),
}

export default function Index() {
	const context = useOutletContext<RootOutletContext>()
	const location = useLocation()
	const [isDesktop, setIsDesktop] = React.useState(false)
	const desktop = useMediaQuery('(min-width: 768px)')
	React.useEffect(() => {
		setIsDesktop(Boolean(desktop))
	}, [desktop])

	React.useEffect(() => {
		if (location.state?.scroll) {
			switch (location.state?.scroll) {
				case 'mission': {
					context.missionScroll.scrollIntoView()
					return () => context.missionScroll.cancel()
				}
				case 'apply': {
					context.applyScroll.scrollIntoView()
					context.applyScroll.showApplication = true
					return () => context.applyScroll.cancel()
				}
				default: {
					break
				}
			}
		}
	}, [context.applyScroll, context.missionScroll, location.state?.scroll])

	const workAnimationControl = useAnimation()
	const studyAnimationControl = useAnimation()
	const prayAnimationControl = useAnimation()
	const textAnimationControl = useAnimation()
	const { inView: isWorkInView, ref: workRef } = useInView({
		threshold: 0.5,
	})
	const { inView: isStudyInView, ref: studyRef } = useInView({
		threshold: 0.5,
	})
	const { inView: isPrayInView, ref: prayRef } = useInView({
		threshold: 0.5,
	})

	React.useEffect(() => {
		if (!isDesktop) {
			workAnimationControl.start({
				opacity: 1,
				transition: { duration: 0.0 },
			})
			studyAnimationControl.start({
				opacity: 1,
				transition: { duration: 0.0 },
			})
			prayAnimationControl.start({
				opacity: 1,
				transition: { duration: 0.0 },
			})
			textAnimationControl.start({
				opacity: 1,
				transition: { duration: 0.0 },
			})
		} else {
			if (isWorkInView) {
				workAnimationControl.start({
					opacity: 1,
					transition: { duration: 1.0 },
				})
			} else {
				workAnimationControl.start({
					opacity: 0,
					transition: { duration: 1.0 },
				})
			}
			if (isStudyInView) {
				studyAnimationControl.start({
					opacity: 1,
					transition: { duration: 1.0 },
				})
			} else {
				studyAnimationControl.start({
					opacity: 0,
					transition: { duration: 1.0 },
				})
			}
			if (isPrayInView) {
				prayAnimationControl.start({
					opacity: 1,
					transition: { duration: 1.0 },
				})
				// delay 0.4 seconds
				textAnimationControl.start({
					opacity: 1,
					transition: { duration: 0.8, delay: 0.2 },
				})
			} else {
				prayAnimationControl.start({
					opacity: 0,
					transition: { duration: 1.0 },
				})
				textAnimationControl.start({
					opacity: 0,
					transition: { duration: 1.0 },
				})
			}
		}
	}, [
		isDesktop,
		isPrayInView,
		isStudyInView,
		isWorkInView,
		prayAnimationControl,
		studyAnimationControl,
		textAnimationControl,
		workAnimationControl,
	])

	return (
		<>
			<section
				id="mission"
				ref={context.missionScroll.targetRef}
				className="relative flex h-[500px] min-h-[33vh] overflow-hidden border-b-2 border-black md:h-[788px] md:min-h-[44vh] md:items-center md:justify-center lg:h-[788px]"
			>
				<ImageOverlay src="/img/via2.jpg" opacity="0.60" position="100% 0%" />
				<div className="z-20 flex w-full flex-row p-6 text-gray-200 md:absolute md:right-12 md:top-8 md:p-0">
					{/* <h2 className="font-title text-2xl font-normal leading-6 md:text-5xl">
						The pillars of study, work, and prayer.
					</h2> */}
					<div className="hidden md:block md:w-1/2"></div>
					<div className="flex flex-col space-y-4 bg-gray-400 bg-opacity-70 p-6  text-base font-light text-gray-200 sm:text-lg md:space-y-16 md:text-3xl md:leading-[2.7rem]  lg:w-[600px] lg:bg-transparent ">
						<p>
							Via Nova offers a 10-month, live-in experience of intensive
							intellectual, professional, and spiritual formation for Catholics
							ages 18-21. Formation at Via Nova is centered in the ancient
							formula of <b>study</b>, <b>work</b>, & <b>prayer</b>.
						</p>
						<p>
							Through seminars, apprenticeships, spiritual regimens, and more,
							Via Nova offers participants a via nova, that is, a "new way" of
							forming life-changing habits, acquiring practical knowledge, and
							ultimately enjoying a life of freedom and mission.
						</p>
					</div>
				</div>
			</section>
			<section
				id="story"
				// ref={context.storyScroll.targetRef}
				className="border-b-2 border-black bg-background p-6 md:pt-20 lg:p-36"
			>
				<div className="flex flex-col gap-4 ">
					{/* <h2 className="mb-10 font-title  text-5xl   text-accent-dark text-gray-900 md:text-4xl md:leading-10 ">
						Life at Via
					</h2> */}
					<div className="flex flex-col gap-4 md:flex-row md:gap-16">
						<h3 className="text-accent-dark mb-4 text-center text-xl leading-7 md:min-w-[400px] md:text-left md:text-6xl md:leading-[5.25rem]">
							Via Fellows <br className="hidden md:block" />
							live a life <br className="hidden md:block" />
							of <br className="md:hidden" />
							<motion.span
								ref={studyRef}
								initial={{ opacity: 0 }}
								animate={studyAnimationControl}
							>
								<span className="font-bold md:text-6xl">study</span>,
							</motion.span>{' '}
							<br className="hidden md:block" />
							<motion.span
								ref={workRef}
								initial={{ opacity: 0 }}
								animate={workAnimationControl}
							>
								<span className="font-bold md:text-6xl">work</span>, &amp;
							</motion.span>{' '}
							<br className="hidden md:block" />
							<motion.span
								ref={prayRef}
								initial={{ opacity: 0 }}
								animate={prayAnimationControl}
							>
								<span className="font-bold md:text-6xl">prayer</span>.
							</motion.span>
						</h3>
						<ol
							// initial={{ opacity: 0 }}
							// animate={textAnimationControl}
							className="text-accent-dark mx-auto grid  grid-cols-1 items-start justify-start gap-8 align-top text-lg leading-7 md:grid-cols-1 md:gap-24	 md:text-2xl md:leading-10"
						>
							<motion.li
								variants={fadeInAnimationsVariant}
								initial="initial"
								whileInView="animate"
								viewport={{
									once: true,
								}}
								custom={0}
								className="flex flex-col items-center justify-center gap-4 text-center md:flex-row md:gap-10 md:text-left"
							>
								<div className="flex flex-col items-start justify-start gap-2">
									<div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-slate-600">
										<StudyIcon className="h-12 w-12 text-gray-800" />
									</div>
									{/* <h3 className="font-title text-2xl tracking-wide">Study</h3> */}
								</div>
								<div className="">
									Seminars exploring the literary and philosophical foundations
									of Western society, beginning with Ancient Israel, Greece, and
									Rome.
								</div>
							</motion.li>
							<motion.li
								variants={fadeInAnimationsVariant}
								viewport={{
									once: true,
								}}
								initial="initial"
								whileInView="animate"
								custom={1}
								className="flex flex-col items-center justify-center gap-10 text-center md:flex-row md:text-left"
							>
								<div className="flex flex-col items-start justify-start gap-2">
									<div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-slate-600">
										<WorkIcon className="h-12 w-12 text-gray-800" />
									</div>
									{/* <h3 className="font-title text-2xl tracking-wide">Work</h3> */}
								</div>
								<div className="">
									Apprenticeships with Catholic professionals who are dedicated
									to preparing Fellows for success in their respective career
									path of interest.
								</div>
							</motion.li>
							<motion.li
								variants={fadeInAnimationsVariant}
								initial="initial"
								whileInView="animate"
								viewport={{
									once: true,
								}}
								custom={2}
								className="flex flex-col items-center justify-center gap-10 text-center md:flex-row md:text-left"
							>
								<div className="flex flex-col items-start justify-start gap-2">
									<div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-slate-600">
										<PrayIcon className="h-12 w-12 text-gray-800" />
									</div>
									{/* <h3 className="font-title text-2xl tracking-wide">Prayer</h3> */}
								</div>
								<div className="">
									Frequent time in silent prayer, spiritual reading, and the
									sacraments with the guidance of spiritual directors.
								</div>
							</motion.li>
						</ol>
					</div>
				</div>
			</section>
			<section className="border-b-2 border-black bg-background p-6 md:pt-20 lg:p-36">
				{/* <Separator className="my-16 bg-gray-800" /> */}
				<div className="mx-auto w-full ">
					<p className="text-accent-dark mb-8 text-lg leading-7 md:text-2xl md:leading-10">
						The pillars of study, work, and prayer aim to provide participants
						with a simple but full life. However, the real richness of life at
						Via comes from people with various backgrounds coming together with
						a shared desire for largely the same things, namely:
					</p>
					<ul className="text-accent-dark mb-10 ml-8 grid  grid-cols-1 gap-4 text-lg leading-7 md:text-2xl md:leading-10 xl:grid-cols-2">
						<li className="before:pr-2  before:content-['◦']">
							knowledge of oneself, the world, and God
						</li>
						<li className="before:pr-2 before:content-['◦']">
							a deep capacity for prayer and meditation
						</li>
						<li className="before:pr-2 before:content-['◦']">
							habits of order and self-mastery
						</li>
						<li className="before:pr-2 before:content-['◦']">
							freedom from vice and attachment
						</li>
						<li className="before:pr-2 before:content-['◦']">
							meaningful work in a potential career
						</li>
						<li className="before:pr-2 before:content-['◦']">
							an ability to share the faith with confidence
						</li>
						<li className="before:pr-2 before:content-['◦']">
							an abiding love of God and neighbor
						</li>
						<li className="before:pr-2 before:content-['◦']">
							a clear understanding of one’s calling
						</li>
					</ul>
					{/* <Separator className="my-4 bg-gray-800" /> */}
				</div>
			</section>
			<section
				id="apply"
				ref={context.applyScroll.targetRef}
				className="bg-section mx-auto w-full space-y-6 p-6 py-8 md:pt-20 lg:p-36"
			>
				{/* <h2 className="font-title text-3xl tracking-wider">
					If you are interested in...
				</h2> */}
				{/* <Interest apply={context.applyScroll.showApplication} /> */}
			</section>
			<section
				id="socrates"
				className="relative flex h-[300px] min-h-[300px] items-center justify-center overflow-hidden border-b-2 border-black md:h-[420px] md:min-h-[66vh]"
			>
				<ImageOverlay src="/img/via3.jpg" position="46% 78%" opacity="0.55" />
				<div className="z-20 flex flex-col space-y-10 p-6 text-white md:p-0">
					{/* <h3 className="font-title text-2xl md:text-4xl"> */}
					<h3 className=" text-4xl font-light leading-[2.7rem] text-gray-200 ">
						“Let him that would move the world, first move himself.”
					</h3>
					<p className="px-4 text-lg md:pr-12 md:text-right md:text-2xl">
						- Socrates
					</p>
				</div>
			</section>
		</>
	)
}

export function ErrorBoundary() {
	const error = useRouteError()
	if (isRouteErrorResponse(error)) {
		return <div />
	}
	return <div />
}

export function Interest({ apply }: { apply: boolean }) {
	const [activeTab, setActiveTab] = React.useState<string>(
		apply ? 'apply' : 'default',
	)

	return (
		<div className="w-full sm:mx-auto ">
			<Tabs className="" value={activeTab} unstyled>
				<Tabs.List
					className="text-accent-dark mx-auto grid  grid-cols-1 items-start justify-start gap-16 align-top text-lg leading-7 md:grid-cols-3 md:text-2xl md:leading-10"
					// className="mx-auto flex flex-col items-center justify-center gap-4 md:flex-row md:items-start md:justify-start md:gap-20 lg:gap-28"
				>
					<Tabs.Tab
						onClick={() => setActiveTab('applying')}
						value="applying"
						className={`group flex w-full min-w-[225px] flex-col items-center gap-8 md:gap-4 `}
					>
						<div className="flex flex-col items-center gap-4 pb-4">
							<div className="tab-text font-sans text-4xl font-semibold tracking-wide group-hover:font-medium">
								Apply to Via
							</div>
							<div className="tab-icon flex h-20 w-20 items-center justify-center rounded-full border-4 border-gray-800 group-hover:border-slate-600 group-hover:bg-slate-500">
								<AppWindowIcon className="h-12 w-12 text-gray-800" />
							</div>
						</div>
						<p>
							Begin the application process to be a part of Via's 2024-2025
							cohort.
						</p>
					</Tabs.Tab>
					<Tabs.Tab
						onClick={() => setActiveTab('supporting')}
						value="supporting"
						className="group flex w-full min-w-[225px] flex-col items-center gap-8 md:gap-4"
					>
						<div className="flex flex-col items-center gap-4 pb-4">
							<div className="tab-text font-sans text-4xl font-semibold tracking-wide group-hover:font-medium">
								Support Us
							</div>
							<div className="tab-icon flex h-20 w-20 items-center justify-center rounded-full border-4 border-gray-800 group-hover:border-slate-600 group-hover:bg-slate-500">
								<ShieldIcon className="1ext-gray-800 h-12 w-32" />
							</div>
						</div>
						<p>Support Via through prayer, a donation, or both.</p>
					</Tabs.Tab>
					<Tabs.Tab
						onClick={() => setActiveTab('learning')}
						value="learning"
						className="group flex w-full min-w-[225px] flex-col items-center gap-8 md:gap-4"
					>
						<div className="flex flex-col items-center gap-4 pb-4">
							<div className="tab-text font-sans text-4xl font-semibold tracking-wide group-hover:font-medium">
								Learn More
							</div>
							<div className="tab-icon flex h-20 w-20 items-center justify-center rounded-full border-4 border-gray-800 group-hover:border-slate-600 group-hover:bg-slate-500">
								<InfoIcon className="1ext-gray-800 h-12 w-32" />
							</div>
						</div>
						<p>Request more information about Via.</p>
					</Tabs.Tab>
				</Tabs.List>
				<div className="mx-auto flex w-full justify-center px-4 pt-8 md:px-0">
					<Tabs.Panel value="default" hidden={activeTab !== 'default'}>
						&nbsp;
					</Tabs.Panel>
					<Tabs.Panel
						value="applying"
						hidden={activeTab !== 'applying'}
						className="w-full px-4 md:w-[420px] md:px-0"
					>
						<h2 className="font-title text-3xl tracking-wider">Get started.</h2>
						{/* <ApplyForm /> */}
					</Tabs.Panel>
					<Tabs.Panel
						value="supporting"
						hidden={activeTab !== 'supporting'}
						className="w-full px-4 md:w-[420px] md:px-0"
					>
						<h2 className="font-title text-3xl tracking-wider">
							Support Via through prayer, a donation, or both.
						</h2>
						{/* <SupportForm /> */}
					</Tabs.Panel>
					<Tabs.Panel
						value="learning"
						hidden={activeTab !== 'learning'}
						className="w-full px-4 md:w-[420px] md:px-0"
					>
						<h2 className="font-title text-3xl tracking-wider">
							Let us know your questions.
						</h2>
						{/* <InquiryForm /> */}
					</Tabs.Panel>
				</div>
			</Tabs>
		</div>
	)
}
