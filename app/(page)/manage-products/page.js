"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { UploadIcon } from "lucide-react";

export default function Component() {
  const categories = [
    { id: 1, name: "Clothing" },
    { id: 2, name: "Electronics" },
    { id: 3, name: "Home Decor" },
    { id: 4, name: "Toys" },
    { id: 5, name: "Accessories" },
  ];
  const products = [
    {
      id: 1,
      name: "Cozy Sweater",
      description: "A soft and warm sweater perfect for the winter season.",
      price: 49.99,
      image: "/placeholder.svg",
      category: "Clothing",
    },
    {
      id: 2,
      name: "Wireless Headphones",
      description: "High-quality headphones with advanced noise cancellation.",
      price: 99.99,
      image: "/placeholder.svg",
      category: "Electronics",
    },
    {
      id: 3,
      name: "Decorative Vase",
      description: "A beautiful vase to add a touch of elegance to your home.",
      price: 29.99,
      image: "/placeholder.svg",
      category: "Home Decor",
    },
    {
      id: 4,
      name: "Plush Teddy Bear",
      description: "A soft and cuddly toy that's perfect for kids.",
      price: 19.99,
      image: "/placeholder.svg",
      category: "Toys",
    },
    {
      id: 5,
      name: "Leather Wallet",
      description:
        "A stylish and durable wallet made from high-quality leather.",
      price: 39.99,
      image: "/placeholder.svg",
      category: "Accessories",
    },
    {
      id: 6,
      name: "Noise-Cancelling Earbuds",
      description: "Experience immersive sound with these advanced earbuds.",
      price: 79.99,
      image: "/placeholder.svg",
      category: "Electronics",
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState(null);
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 p-4 md:p-20 mt-14">
      <div className="grid gap-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Manage Products</h1>
          <p className="text-muted-foreground">
            Add, edit, and organize your product catalog.
          </p>
        </div>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Add New Product</CardTitle>
              <CardDescription>
                Upload a new product to your online store.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg">
                <UploadIcon className="mr-2 h-5 w-5" />
                Upload Product
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl"
            >
              <img
                src="/placeholder.svg"
                alt={product.name}
                width={400}
                height={300}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-4 bg-background">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-muted-foreground">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:block">
        <Card>
          <CardHeader>
            <CardTitle>Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <nav className="grid gap-2">
              <Button
                variant={selectedCategory === null ? "primary" : "outline"}
                onClick={() => setSelectedCategory(null)}
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.name ? "primary" : "outline"
                  }
                  onClick={() => setSelectedCategory(category.name)}
                >
                  {category.name}
                </Button>
              ))}
            </nav>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
