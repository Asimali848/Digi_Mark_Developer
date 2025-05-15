"use client";

import * as React from "react";

import { Menu, Search, X } from "lucide-react";

import Logo from "@/assets/img/landing_page/Icon.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const solutions = [
  {
    title: "Job Search",
    href: "/solutions/job-search",
    description: "Find your dream job with our advanced search tools.",
  },
  {
    title: "Resume Builder",
    href: "/solutions/resume-builder",
    description: "Create a professional resume in minutes.",
  },
  {
    title: "Career Advice",
    href: "/solutions/career-advice",
    description: "Expert guidance for your career journey.",
  },
  {
    title: "Employer Solutions",
    href: "/solutions/employer",
    description: "Recruitment tools for businesses of all sizes.",
  },
];

const pages = [
  { title: "Pricing", href: "/pricing" },
  { title: "FAQ", href: "/faq" },
  { title: "Testimonials", href: "/testimonials" },
  { title: "About Us", href: "/about-us" },
];

const Navbar = () => {
  const [showSearchMobile, setShowSearchMobile] = React.useState(false);

  return (
    <div className="sticky top-0 z-50 mx-auto w-full border-b-2 bg-white shadow-lg">
      <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 py-6">
                <img src={Logo} alt="Logo" className="" />
                <div className="flex flex-col gap-4">
                  <a href="/" className="text-lg font-medium">
                    Home
                  </a>
                  <a href="/about" className="text-lg font-medium">
                    About
                  </a>
                  <div className="flex flex-col gap-2">
                    <div className="text-lg font-medium">Solutions</div>
                    <div className="grid gap-2 pl-4">
                      {solutions.map((solution) => (
                        <a
                          key={solution.href}
                          href={solution.href}
                          className="text-sm text-muted-foreground hover:text-foreground"
                        >
                          {solution.title}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-lg font-medium">Pages</div>
                    <div className="grid gap-2 pl-4">
                      {pages.map((page) => (
                        <a
                          key={page.href}
                          href={page.href}
                          className="text-sm text-muted-foreground hover:text-foreground"
                        >
                          {page.title}
                        </a>
                      ))}
                    </div>
                  </div>
                  <a href="/blog" className="text-lg font-medium">
                    Blog
                  </a>
                  <a href="/contact" className="text-lg font-medium">
                    Contact
                  </a>
                </div>
                <div className="flex flex-col gap-2">
                  <Button asChild variant="outline" className="w-full">
                    <a href="/login">Log In</a>
                  </Button>
                  <Button
                    asChild
                    className="w-full bg-[#6bb64a] hover:bg-[#6bb64a]"
                  >
                    <a href="/get-started">Get Started</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <img src={Logo} alt="Logo" className="size-32" />
        </div>

        <NavigationMenu className="mx-auto hidden w-full md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Home</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-3 p-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/" className={navigationMenuTriggerStyle()}>
                        Home
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/dashboard"
                        className={navigationMenuTriggerStyle()}
                      >
                        Dashboard
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="/about" className={navigationMenuTriggerStyle()}>
                About
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {solutions.map((solution) => (
                    <ListItem
                      key={solution.title}
                      title={solution.title}
                      href={solution.href}
                    >
                      {solution.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-3 p-4">
                  {pages.map((page) => (
                    <li key={page.href}>
                      <NavigationMenuLink asChild>
                        <a
                          href={page.href}
                          className={navigationMenuTriggerStyle()}
                        >
                          {page.title}
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-3 p-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/blog" className={navigationMenuTriggerStyle()}>
                        All Posts
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/blog/categories"
                        className={navigationMenuTriggerStyle()}
                      >
                        Categories
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="/contact" className={navigationMenuTriggerStyle()}>
                Contact
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          {showSearchMobile ? (
            <div className="flex items-center md:hidden">
              <Input
                type="search"
                placeholder="Search..."
                className="h-9 w-[120px] sm:w-[200px]"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowSearchMobile(false)}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          ) : (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setShowSearchMobile(true)}
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
              <div className="hidden md:flex md:items-center md:gap-2">
                <Button variant="ghost" size="icon">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
                <Button variant="ghost" className="font-medium">
                  Log In
                </Button>
                <Button className="bg-[#6bb64a] hover:bg-[#6bb64a]">
                  Get Started
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
