"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
};

const items = [
  { label: "Discover", link: "/discover" },
  { label: "Publish", link: "/publish" },
  { label: "Equipments", link: "/equipments" },
  { label: "Research Outcome", link: "/research-outcome" },
  { label: "Research Unit", link: "/research-unit" },
];

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  return (
    <div className="fixed border-separate bg-background md:hidden w-full shadow-sm top-0 z-50 transition-all duration-300 data-[scrolled=true]:bg-background data-[scrolled=true]:shadow-lg">
      <nav className="container flex items-center justify-between px-8">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px]" side="left">
            <Link href="/">
              <Image
                src="/rikemarketplace.png"
                alt="rikemarketplace Logo"
                className="dark:invert"
                width={110}
                height={28}
                priority
              />
            </Link>
            <div className="flex flex-col gap-1 pt-4">
              {items.map((item) => (
                <NavbarItem
                  key={item.label}
                  link={item.link}
                  label={item.label}
                  onClick={() => setIsOpen((prev) => !prev)}
                />
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <Link
          href="/"
          className="flex h-[80px] min-h-[60px] items-center gap-x-4"
        >
          <Image
            src="/rikemarketplace.png"
            alt="rikemarketplace Logo"
            className="dark:invert"
            width={110}
            height={28}
            priority
          />
        </Link>
        <div className="flex items-center gap-2">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt={user.email}
                  />
                  <AvatarFallback>{user.email[0].toUpperCase()}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/profile" prefetch={false}>
                    Profile
                  </Link>
                </DropdownMenuItem>
                {user.role === "explorer" && (
                  <>
                    <DropdownMenuItem>
                      <Link href="/order" prefetch={false}>
                        Order
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/order" prefetch={false}>
                        Payment
                      </Link>
                    </DropdownMenuItem>
                  </>
                )}
                {user.role === "researcher" && (
                  <>
                    <DropdownMenuItem>
                      <Link href="/order" prefetch={false}>
                        Publish
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/order" prefetch={false}>
                        Research Ideas
                      </Link>
                    </DropdownMenuItem>
                  </>
                )}
                <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="outline">
                <Link href="/login">Login</Link>
              </Button>
              <Button>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

const DesktopNavbar = () => {
  const { user, logout } = useAuth();
  return (
    <div className="hidden border-separate border-b bg-background md:block fixed w-full shadow-sm top-0 z-50 transition-all duration-300 data-[scrolled=true]:bg-background data-[scrolled=true]:shadow-lg">
      <nav className="container flex items-center justify-between px-8">
        <div className="flex h-[70px] min-h-[60px] items-center gap-x-4">
          <Link href="/">
            <Image
              src="/rikemarketplace.png"
              alt="rikemarketplace Logo"
              className="dark:invert"
              width={110}
              height={28}
              priority
            />
          </Link>

          <div className="flex h-full">
            {items.map((item) => (
              <NavbarItem
                key={item.label}
                link={item.link}
                label={item.label}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt={user.email}
                  />
                  <AvatarFallback>{user.email[0].toUpperCase()}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/profile" prefetch={false}>
                    Profile
                  </Link>
                </DropdownMenuItem>
                {user.role === "explorer" && (
                  <>
                    <DropdownMenuItem>
                      <Link href="/order" prefetch={false}>
                        Order
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/order" prefetch={false}>
                        Payment
                      </Link>
                    </DropdownMenuItem>
                  </>
                )}
                {user.role === "researcher" && (
                  <>
                    <DropdownMenuItem>
                      <Link href="/order" prefetch={false}>
                        Publish
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/order" prefetch={false}>
                        Research Ideas
                      </Link>
                    </DropdownMenuItem>
                  </>
                )}
                <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="outline">
                <Link href="/login">Login</Link>
              </Button>
              <Button>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

const NavbarItem = ({ link, label, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <div className="relative flex items-center">
      <Link
        href={link}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "w-full justify-start text-lg text-muted-foreground",
          isActive && "text-foreground"
        )}
        onClick={() => {
          if (onClick) onClick();
        }}
      >
        {label}
      </Link>
      {isActive && (
        <div className="absolute -bottom-[2px] left-1/2 hidden h-[2px] w-[80%] -translate-x-1/2 rounded-xl bg-foreground md:block"></div>
      )}
    </div>
  );
};

export default Header;
