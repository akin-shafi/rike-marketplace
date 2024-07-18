"use client";

import { useState, useEffect, useMemo } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { SearchIcon } from "lucide-react";
import PageLoader from "@/components/PageLoader";

export default function ResearchProduct() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

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
        setLoading(true);
        const url =
          selectedCategory === "all"
            ? "https://rike-marketplace-backend.onrender.com/products"
            : `https://rike-marketplace-backend.onrender.com/products/category/${selectedCategory}`;
        const response = await axios.get(url);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  // Memoized filtered products
  const filteredProducts = useMemo(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filteredByCategory =
      selectedCategory === "all"
        ? products
        : products.filter((product) => product.categoryId === selectedCategory);

    if (searchQuery === "") {
      return filteredByCategory;
    } else {
      return filteredByCategory.filter(
        (product) =>
          product.title.toLowerCase().includes(lowercasedQuery) ||
          product.description.toLowerCase().includes(lowercasedQuery)
      );
    }
  }, [selectedCategory, products, searchQuery]);

  return (
    <div className="mt-14">
      <header className="bg-breadcrumb-bg text-primary-foreground object-cover py-8 px-6 md:px-6 h-[300px] flex justify-center items-center">
        <div className="container max-w-5xl flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-7xl">
            Research Product
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-center">
            Browse our wide selection of high-quality products.
          </p>
        </div>
      </header>
      <main className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center mb-8">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search research institutes..."
                className="pl-10 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
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
                  <Label htmlFor="all">All</Label>
                </div>
                {categories.map((category) => (
                  <div
                    className="flex items-center space-x-2"
                    key={category.id}
                  >
                    <RadioGroupItem
                      value={category.id}
                      id={`category-${category.id}`}
                    />
                    <Label htmlFor={`category-${category.id}`}>
                      <span>{category.name}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {loading ? (
                <div className="col-span-full flex justify-center items-center">
                  <PageLoader />
                </div>
              ) : (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-background rounded-lg shadow-lg overflow-hidden"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold">{product.title}</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-primary font-bold">
                          ${product.price}
                        </span>
                        <Button size="sm">Add to Cart</Button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
