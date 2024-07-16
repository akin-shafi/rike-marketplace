"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Retrieve user data from localStorage when the component mounts
    const storedUser = localStorage.getItem("user");
    const storedUserId = localStorage.getItem("userId");

    if (storedUser && storedUserId) {
      setUser(JSON.parse(storedUser));
      setUserId(storedUserId);
    }
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      if (!userId) return;

      try {
        const response = await fetch(`https://rike-marketplace-backend.onrender.com/users/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }

        const fetchedUser = await response.json();
        setUser(fetchedUser);
        localStorage.setItem("user", JSON.stringify(fetchedUser)); // Store user in localStorage
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    fetchUser();
  }, [userId]);

  const login = async (email, password) => {
    try {
      const response = await fetch("https://rike-marketplace-backend.onrender.com/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const users = await response.json();
      const user = users.find((u) => u.email === email && u.password === password);

      if (user) {
        setUserId(user.id);
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user)); // Store user in localStorage
        localStorage.setItem("userId", user.id); // Store userId in localStorage
        toast.success("Login successful");
        router.push("/");
      } else {
        toast.error("Invalid email or password");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Login error:", error);
    }
  };

  const signup = async (email, password) => {
    const data = {
        name,
        email,
        password,
        accountStatus: true,
        role,
      };
    try {
      const response = await fetch("https://rike-marketplace-backend.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Account created successfully");
        router.push("/login");
      } else {
        toast.error("Failed to create account");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Signup error:", error);
    }
  };

  const logout = () => {
    setUser(null);
    setUserId(null);
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, userId, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
