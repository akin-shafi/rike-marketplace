"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ShoppingCartIcon,
  BellIcon,
  BookOpenIcon,
  TrendingUpIcon,
  BuildingIcon,
  PackageIcon,
  LogOutIcon,
  FlaskConicalIcon,
  DollarSignIcon,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function Page() {
  const { user, logout } = useAuth();

  return (
    <div className="w-full max-w-7xl mx-auto py-12 mt-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center space-y-6">
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-16">
          <div className="flex items-center gap-8">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h2 className="text-2xl font-bold">{user?.name}</h2>
              <p className="text-muted-foreground">
                {user?.email}
              </p>
              <p className="text-sm text-muted-foreground">
                {user?.role}
              </p>
            </div>
          </div>
          <Link href="/edit-profile">
          <Button variant="outline">Edit</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {user?.role === "explorer" && (
            <>
              <Link href="#">
                <Card className="flex flex-col items-center text-center p-6 space-y-3 cursor-pointer">
                  <div className="bg-muted rounded-full p-3">
                    <DollarSignIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium">Payment</h3>
                  <p className="text-sm text-muted-foreground">
                    Manage and view payment transaction.
                  </p>
                </Card>{" "}
              </Link>
              <Link href="#">
                <Card className="flex flex-col items-center text-center p-6 space-y-3 cursor-pointer">
                  <div className="bg-muted rounded-full p-3">
                    <BellIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium">Notifications</h3>
                  <p className="text-sm text-muted-foreground">
                    Manage your notification preferences.
                  </p>
                </Card>{" "}
              </Link>
            </>
          )}
          {user?.role === "researcher" && (
            <>
              <Link href="#">
                <Card className="flex flex-col items-center text-center p-6 space-y-3 cursor-pointer">
                  <div className="bg-muted rounded-full p-3">
                    <ShoppingCartIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium">Research Products</h3>
                  <p className="text-sm text-muted-foreground">
                    Manage and view research products.
                  </p>
                </Card>{" "}
              </Link>
              <Link href="#">
                <Card className="flex flex-col items-center text-center p-6 space-y-3 cursor-pointer">
                  <div className="bg-muted rounded-full p-3">
                    <BookOpenIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium">Research Publication</h3>
                  <p className="text-sm text-muted-foreground">
                    Manage your research publications.
                  </p>
                </Card>{" "}
              </Link>
              <Link href="#">
                <Card className="flex flex-col items-center text-center p-6 space-y-3 cursor-pointer">
                  <div className="bg-muted rounded-full p-3">
                    <FlaskConicalIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium">Equipment</h3>
                  <p className="text-sm text-muted-foreground">
                    View and manage your research equipment.
                  </p>
                </Card>{" "}
              </Link>
              <Link href="#">
                <Card className="flex flex-col items-center text-center p-6 space-y-3 cursor-pointer">
                  <div className="bg-muted rounded-full p-3">
                    <TrendingUpIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium">Research Outcome</h3>
                  <p className="text-sm text-muted-foreground">
                    Track and manage research outcomes.
                  </p>
                </Card>{" "}
              </Link>
              <Link href="#">
                <Card className="flex flex-col items-center text-center p-6 space-y-3 cursor-pointer">
                  <div className="bg-muted rounded-full p-3">
                    <BuildingIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium">Research Unit</h3>
                  <p className="text-sm text-muted-foreground">
                    Manage your research units.
                  </p>
                </Card>{" "}
              </Link>
            </>
          )}
          <Link href="#">
            <Card className="flex flex-col items-center text-center p-6 space-y-3 cursor-pointer">
              <div className="bg-muted rounded-full p-3">
                <PackageIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium">Orders</h3>
              <p className="text-sm text-muted-foreground">
                View and manage your orders.
              </p>
            </Card>{" "}
          </Link>
          <div onClick={logout}>
            <Card className="flex flex-col items-center text-center p-6 space-y-3 cursor-pointer">
              <div className="bg-muted rounded-full p-3">
                <LogOutIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium">Logout</h3>
              <p className="text-sm text-muted-foreground">
                Log out of your account.
              </p>
            </Card>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
