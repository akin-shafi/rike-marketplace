"use client";
import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { UploadIcon, Loader } from "lucide-react";
import ProtectedRoute from "@/utils/ProtectedRoute";
import axios from "axios";
import toast from "react-hot-toast";
import Spinner from "@/components/ui/spinner";
import Link from "next/link";

function UploadProductPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [category, setCategory] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://rike-marketplace-backend.onrender.com/product-categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleProductUpload = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("image", image);
      formData.append("categoryId", category);

      await axios.post(
        "https://rike-marketplace-backend.onrender.com/products",
        formData
      );
      toast.success("Product uploaded successfully");
    } catch (error) {
      console.error("Error uploading product:", error);
      toast.error("Failed to upload product");
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryAddition = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://rike-marketplace-backend.onrender.com/product-categories",
        {
          name: newCategory,
        }
      );
      setCategories([...categories, response.data]);
      setNewCategory("");
      toast.success("Category added successfully");
    } catch (error) {
      console.error("Error adding category:", error);
      toast.error("Failed to add category");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid gap-8 max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 mt-20">
      <div className="grid gap-4">
        <h1 className="text-3xl font-bold">Upload a New Product</h1>
        <p className="text-muted-foreground">
          Fill out the form below to add a new product to your store.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Product Image</CardTitle>
            <CardDescription>
              Drag and drop your image or click to browse files.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex flex-col items-center justify-center h-48 border-2 border-dashed border-muted rounded-lg">
                <UploadIcon className="w-8 h-8 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Drag and drop your image here, or click to browse.
                </p>
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>
              {imagePreview && (
                <div className="mt-4">
                  <img
                    src={imagePreview}
                    alt="Image Preview"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              )}
              <div className="grid gap-2 mt-4">
                <Label htmlFor="image">Or select a file</Label>
                <Input id="image" type="file" onChange={handleImageChange} />
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    type="text"
                    placeholder="Enter product title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter product description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="price">Price</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="Enter product price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Product Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    id="category"
                    onValueChange={(value) => setCategory(value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="new-category">New Category</Label>
                  <Input
                    id="new-category"
                    type="text"
                    placeholder="Enter new category"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                  />
                  <Button
                    size="sm"
                    onClick={handleCategoryAddition}
                    disabled={loading}
                  >
                    {loading ? (
                      <Spinner />
                    ) : (
                      "Add Category"
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <Link href="/manage-products">
          <Button variant="outline">Cancel</Button>
        </Link>
        <Button onClick={handleProductUpload} disabled={loading}>
          {loading ? <Spinner /> : "Upload Product"}
        </Button>
      </div>
    </div>
  );
}

export default ProtectedRoute(UploadProductPage);
