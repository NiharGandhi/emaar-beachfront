/**
 * v0 by Vercel.
 * @see https://v0.dev/t/vYwpRd5qpCe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { JSX, SVGProps } from "react"
import Image from "next/image"
import Placholder from '../../public/beachfront.jpg'
import Placholder2 from '../../public/property1.jpeg'

export default function Component() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <Link href="#" className="flex items-center justify-center" prefetch={false}>
                    <EclipseIcon className="h-6 w-6" />
                    <span className="sr-only">Emaar Beachfront</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        About
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        Features
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        Testimonials
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        Contact
                    </Link>
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                            <Image
                                src={Placholder}
                                width="1200"
                                height="800"
                                alt="Emaar Beachfront"
                                className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                            />
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        Discover Luxury Living at Emaar Beachfront
                                    </h1>
                                    <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                        Experience the ultimate in beachfront living with Emaar Beachfront, where stunning views,
                                        world-class amenities, and a prime location come together to create your dream home.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Link
                                        href="#"
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                        prefetch={false}
                                    >
                                        Explore Now
                                    </Link>
                                    <Link
                                        href="#"
                                        className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                        prefetch={false}
                                    >
                                        Contact Us
                                    </Link>
                                    <Link
                                        href="#"
                                        className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                        prefetch={false}
                                    >
                                        Download Brochure
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                    Luxury Amenities
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Indulge in Unparalleled Luxury</h2>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Emaar Beachfront offers a wide range of luxury amenities designed to elevate your lifestyle, including
                                    a private beach, infinity pool, fitness center, and more.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                            <Image
                                src={Placholder2}
                                width="550"
                                height="310"
                                alt="Luxury Amenities"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                            />
                            <div className="flex flex-col justify-center space-y-4">
                                <ul className="grid gap-6">
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">Private Beach</h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Enjoy exclusive access to a private stretch of pristine white sand beach.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">Infinity Pool</h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Relax and unwind in the stunning infinity pool overlooking the Arabian Gulf.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">Fitness Center</h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Stay active with the state-of-the-art fitness center and wellness facilities.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Stunning Views, Prime Location</h2>
                            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Emaar Beachfront offers unparalleled views of the Arabian Gulf and is situated in a prime location, just
                                minutes away from Dubai&apos;s top attractions and amenities.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
                            <Link
                                href="#"
                                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                prefetch={false}
                            >
                                Explore Location
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                prefetch={false}
                            >
                                Schedule a Tour
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                prefetch={false}
                            >
                                Download Brochure
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                    Testimonials
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Hear from our satisfied customers about their experience living at Emaar Beachfront.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                            <Card className="bg-white shadow-md dark:bg-gray-950">
                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-4">
                                            <Image
                                                src={Placholder}
                                                width="48"
                                                height="48"
                                                alt="Avatar"
                                                className="h-12 w-12 rounded-full"
                                            />
                                            <div>
                                                <h4 className="text-lg font-semibold">John Doe</h4>
                                                <p className="text-gray-500 dark:text-gray-400">Satisfied Customer</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            &quot;Living at Emaar Beachfront has been a dream come true.\n The stunning views, luxurious amenities,
                                            and prime\n location have exceeded all of my expectations.&quot;
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="bg-white shadow-md dark:bg-gray-950">
                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-4">
                                            <Image
                                                src={Placholder}
                                                width="48"
                                                height="48"
                                                alt="Avatar"
                                                className="h-12 w-12 rounded-full"
                                            />
                                            <div>
                                                <h4 className="text-lg font-semibold">Jane Smith</h4>
                                                <p className="text-gray-500 dark:text-gray-400">Satisfied Customer</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            &quot;I couldn&apos;t be happier with my decision to move to Emaar\n Beachfront. The community is vibrant,
                                            the amenities are\n top-notch, and the location is unbeatable.&quot;
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 border-t">
                    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
                            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Fill out the form below to learn more about Emaar Beachfront and schedule a tour.
                            </p>
                        </div>
                        <div className="mx-auto w-full max-w-sm space-y-2">
                            <form className="flex flex-col space-y-2">
                                <Input type="text" placeholder="Name" className="max-w-lg flex-1" />
                                <Input type="email" placeholder="Email" className="max-w-lg flex-1" />
                                <Textarea placeholder="Message" className="max-w" />
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

function EclipseIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a7 7 0 1 0 10 10" />
        </svg>
    )
}