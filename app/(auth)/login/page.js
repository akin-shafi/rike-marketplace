"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Spinner  from "@/components/ui/spinner";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";


export default function page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
  
      await login(email, password);
      setLoading(false);
    };
  
    return (
      <div className="flex flex-col items-center mt-16 lg:mt-0 justify-center min-h-screen bg-background">
        <div className="mb-8">
          <Link href="#" prefetch={false}>
            <Image src="/rikemarketplace.png" width={120} height={40} alt="rikemarketplace" />
          </Link>
        </div>
        <Card className="w-full max-w-md">
          <form onSubmit={handleSubmit}>
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl">Login</CardTitle>
              <CardDescription>Enter your details to login.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div>Don't have an account? <Link href="/signup">Sign up</Link> </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? <Spinner /> : "Login"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    );
  }
