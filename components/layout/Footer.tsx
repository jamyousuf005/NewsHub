import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-[#111111] text-white py-20 pb-8">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-12 mb-16">
                    <div className="max-w-sm">
                        <div className="font-headline text-4xl font-black mb-4">
                            News<span className="text-primary">Hub</span>
                        </div>
                        <p className="text-white/60 leading-relaxed mb-6">
                            Your trusted source for breaking news, in-depth analysis, and stories that matter. Delivering quality journalism since 2020.
                        </p>
                        <div className="flex gap-3">
                            {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                                <Link key={i} href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-primary hover:-translate-y-1 transition-all duration-300">
                                    <Icon className="w-4 h-4 text-white" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-headline text-lg font-bold mb-5">Sections</h4>
                            <ul className="space-y-3">
                                {["World News", "Politics", "Technology", "Business", "Culture", "Sports"].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-white/60 hover:text-primary hover:pl-2 transition-all duration-300 text-sm">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-headline text-lg font-bold mb-5">Company</h4>
                            <ul className="space-y-3">
                                {["About Us", "Careers", "Press Room", "Contact", "Advertise"].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-white/60 hover:text-primary hover:pl-2 transition-all duration-300 text-sm">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-headline text-lg font-bold mb-5">Resources</h4>
                            <ul className="space-y-3">
                                {["Newsletter", "Podcasts", "RSS Feeds", "Archive", "Help Center"].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-white/60 hover:text-primary hover:pl-2 transition-all duration-300 text-sm">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                    <p className="text-white/50 text-sm">© 2026 NewsHub. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center gap-6">
                        {["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"].map((item) => (
                            <Link key={item} href="#" className="text-white/50 hover:text-primary transition-colors text-xs">
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
