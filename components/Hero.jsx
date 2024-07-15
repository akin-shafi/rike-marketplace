import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full">
      <img
        src="/hero-bg.png"
        alt="Hero Background"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="relative z-10 container flex flex-col items-center justify-center gap-6 py-24 md:py-32 lg:py-40">
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="text-4xl font-bold text-primary-foreground text-center sm:text-5xl md:text-6xl lg:text-7xl">
            Explore R.I.K.E MarketPlace's Ecosystem
          </h1>
          <p className="max-w-[700px] text-lg text-center text-primary-foreground md:text-xl">
            Explore our curated collection of high-quality products that will
            elevate your lifestyle.
          </p>
        </div>
        <div className="w-full max-w-md">
          <form className="flex rounded-md bg-background shadow-sm p-2">
            <Input
              type="search"
              placeholder="Search for products..."
              className="flex-1 rounded-l-md border-0 bg-transparent py-2 pl-4 text-primary-foreground focus:ring-0"
            />
            <Button type="submit">Search</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
