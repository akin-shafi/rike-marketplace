"use client";

import { useState, useMemo } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ResearchProduct() {
  const products = [
    {
      id: 1,
      image: "/researcher-image.png",
      title: "Research Paper on AI",
      price: 19.99,
      category: "Publications",
    },
    {
      id: 2,
      image: "/researcher-image.png",
      title: "Data Analysis Software",
      price: 499.99,
      category: "Software",
    },
    {
      id: 3,
      image: "/researcher-image.png",
      title: "Lab Equipment Set",
      price: 299.99,
      category: "Equipment",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") {
      return products;
    } else {
      return products.filter(
        (product) => product.category === selectedCategory
      );
    }
  }, [selectedCategory]);

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
                  <span className="text-black text-sm">Show all products</span>
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Publications" id="publications" />
                <Label htmlFor="publications">
                  <span>Publications</span>
                  <span className="text-black text-sm">
                    Research papers and articles
                  </span>
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Software" id="software" />
                <Label htmlFor="software">
                  <span>Software</span>
                  <span className="text-black text-sm">
                    Tools and applications
                  </span>
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Equipment" id="equipment" />
                <Label htmlFor="equipment">
                  <span>Equipment</span>
                  <span className="text-black text-sm">Lab and field tools</span>
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Events" id="events" />
                <Label htmlFor="events">
                  <span>Events</span>
                  <span className="text-black text-sm">
                    Conferences and seminars
                  </span>
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Books" id="books" />
                <Label htmlFor="books">
                  <span>Books</span>
                  <span className="text-black text-sm">
                    Educational and reference materials
                  </span>
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Courses" id="courses" />
                <Label htmlFor="courses">
                  <span>Courses</span>
                  <span className="text-black text-sm">
                    Online and offline courses
                  </span>
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
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
                  <p className="text-primary">${product.price.toFixed(2)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
        </div>
        <div className="mt-8 flex justify-center">
          <Button size="lg">View More</Button>
        </div>
      </div>
    </section>
  );
}
