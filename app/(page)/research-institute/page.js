import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"

export default function page() {
  return (
    <div className="flex flex-col min-h-dvh mt-14">
      <header className="bg-breadcrumb-bg text-primary-foreground object-cover py-8 px-6 md:px-6 h-[300px] flex justify-center items-center">
        <div className="container max-w-5xl flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">Research Institutes</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-center">
            Explore a comprehensive list of leading research institutes around the world, with detailed information
            about their locations and areas of focus.
          </p>
        </div>
      </header>
      <main className="flex-1">
        <div className="container max-w-5xl px-4 md:px-6 py-12 md:py-16">
          <div className="flex items-center mb-8">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input type="search" placeholder="Search research institutes..." className="pl-10 w-full" />
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-background border rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold">Massachusetts Institute of Technology (MIT)</h3>
                <p className="text-muted-foreground mt-2">Cambridge, Massachusetts, USA</p>
                <p className="text-sm mt-4">
                  MIT is a world-renowned research university known for its excellence in science, engineering, and
                  technology.
                </p>
              </div>
            </div>
            <div className="bg-background border rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold">University of Cambridge</h3>
                <p className="text-muted-foreground mt-2">Cambridge, United Kingdom</p>
                <p className="text-sm mt-4">
                  The University of Cambridge is a prestigious research university with a long history of academic
                  excellence.
                </p>
              </div>
            </div>
            <div className="bg-background border rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold">California Institute of Technology (Caltech)</h3>
                <p className="text-muted-foreground mt-2">Pasadena, California, USA</p>
                <p className="text-sm mt-4">
                  Caltech is a world-leading research institution known for its excellence in science and engineering.
                </p>
              </div>
            </div>
            <div className="bg-background border rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold">University of Oxford</h3>
                <p className="text-muted-foreground mt-2">Oxford, United Kingdom</p>
                <p className="text-sm mt-4">
                  The University of Oxford is a prestigious research university with a long and storied history.
                </p>
              </div>
            </div>
            <div className="bg-background border rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold">ETH Zurich</h3>
                <p className="text-muted-foreground mt-2">Zurich, Switzerland</p>
                <p className="text-sm mt-4">
                  ETH Zurich is a leading science and technology university known for its cutting-edge research.
                </p>
              </div>
            </div>
            <div className="bg-background border rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold">National University of Singapore (NUS)</h3>
                <p className="text-muted-foreground mt-2">Singapore</p>
                <p className="text-sm mt-4">
                  NUS is a comprehensive research university and a leading global institution for higher education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}