"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PageLoader from "../components/PageLoader";

const ProtectedRoute = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const storedUser = localStorage.getItem("user");

      if (storedUser) {
        setIsAuthenticated(true);
        setLoading(false);
      } else {
        router.push("/login");
      }
    }, [router]);

    if (loading) {
      return <PageLoader />;
    }

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };
};

export default ProtectedRoute;
