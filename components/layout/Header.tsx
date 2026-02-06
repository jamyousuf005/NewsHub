"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function Header() {
    const [dateStr, setDateStr] = useState<string>("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        setDateStr(new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }));
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            {/* Top Bar */}
            <div className="border-b hidden md:block">
                <div className="container flex h-10 items-center justify-between text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    <span>{dateStr}</span>
                </div>
            </div>

            {/* Main Header */}
            <div className="container flex h-20 items-center justify-between py-4">
                {/* Mobile Menu Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>

                {/* Logo */}
                <Link href="/" className="font-headline text-3xl font-black tracking-tighter">
                    News<span className="text-primary">Hub</span>
                </Link>

                {/* Desktop Navigation */}
                <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList className="gap-6">
                        {["World", "Politics", "Technology", "Business", "Culture", "Sports"].map((item) => (
                            <NavigationMenuItem key={item}>
                                <NavigationMenuLink asChild>
                                    <Link
                                        href={`/?category=${item.toLowerCase()}`}
                                        className={`${navigationMenuTriggerStyle()} bg-transparent text-base font-semibold hover:text-primary transition-colors data-[active]:text-primary`}
                                    >
                                        {item}
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    <ModeToggle />
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-background border-b border-border p-4 shadow-xl lg:hidden flex flex-col gap-4 animate-in slide-in-from-top-2">
                    <nav className="flex flex-col gap-2">
                        {["World", "Politics", "Technology", "Business", "Culture", "Sports"].map((item) => (
                            <Link
                                key={item}
                                href={`/?category=${item.toLowerCase()}`}
                                className="px-4 py-3 text-lg font-semibold hover:bg-muted rounded-lg transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex flex-col gap-3 pt-4 border-t border-border">
                    </div>
                </div>
            )}
        </header>
    )
}
