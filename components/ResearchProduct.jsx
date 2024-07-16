"use client";

import { useState, useEffect, useMemo } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";

export default function ResearchProduct() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://rike-marketplace-backend.onrender.com/product-categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url =
          selectedCategory === "all"
            ? "https://rike-marketplace-backend.onrender.com/products"
            : `https://rike-marketplace-backend.onrender.com/products/category/${selectedCategory}`;
        const response = await axios.get(url);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  // Memoized filtered products
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") {
      return products;
    } else {
      return products.filter(
        (product) => product.categoryId === selectedCategory
      );
    }
  }, [selectedCategory, products]);

  // Show only a subset of products initially
  const visibleProducts = filteredProducts.slice(0, 6); // Show the first 6 products


  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Categories</h2>
            <RadioGroup
              value={selectedCategory}
              onValueChange={setSelectedCategory}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="all" />
                <Label htmlFor="all">
                  <span>All</span>
                </Label>
              </div>
              {categories.map((category) => (
                <div className="flex items-center space-x-2" key={category.id}>
                  <RadioGroupItem
                    value={category.id}
                    id={`category-${category.id}`}
                  />
                  <Label htmlFor={`category-${category.id}`}>
                    <span>{category.name}</span>
                    <span className="text-black text-sm">
                      {category.description}
                    </span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((product) => (
              <Card key={product.id} className="h-full">
                <img
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="aspect-square w-full rounded-t-lg object-cover"
                />
                <CardContent className="space-y-2 p-4">
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-primary">${product.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Button size="lg">
            {" "}
            <Link href="/research-product">View More</Link>{" "}
          </Button>
        </div>
      </div>
    </section>
  );
}
