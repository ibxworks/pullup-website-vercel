import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
      {/* Hero Section */}
      <main className="container mx-auto px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left Side - Text Content */}
          <div className="text-white space-y-8 text-center lg:text-left flex-1 max-w-2xl">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Social media for showing up, not showing off.
            </h1>

            {/* Description Text */}
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              The best college memories are made with friends, classmates, and teammates. Pull Up makes it easy to share
              invitations with friends in seconds, so showing up and thus making memories is effortless.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 text-lg font-medium rounded-full">
                <a href="https://cornellracing.org/" target="_blank" rel="noopener noreferrer">Get App</a>
              </Button>
              <Button asChild variant="outline" className="border-white text-black hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-medium rounded-full">
                <a href="#features">View Features</a>
              </Button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center flex-1">
            <Image
              src="/bezel_main.svg"
              alt="Pull Up app interface"
              width={320}
              height={600}
              className="w-full h-auto object-contain max-w-sm rounded-xl"
            />
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Features</h2>
          </div>

          <div className="space-y-20 max-w-7xl mx-auto">
            {/* Feature 1: PULLUP Invitations - Icon Left, Image Right */}
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              {/* Left Side - Icon and Text */}
              <div>
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center max-w-md">
                  <div className="flex justify-center mb-6">
                    <Image
                      src="/features_pullupinv.svg?height=48&width=48&text=📱"
                      alt="PULLUP Invitations icon"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">PULLUP Invitations</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Every meetup starts with "You down?" Whether you're gauging interest or locking in RSVPs, Pull Up lets you invite any number of friends instantly—all at once. Start the hangout convo faster than texting, and the rest is easy.
                  </p>
                </div>
              </div>

              {/* Right Side - iPhone Image */}
              <div className="flex justify-center">
                <div>
                  <Image
                    src="/placeholder.svg?height=500&width=256&text=PULLUP+Invitations+Feature"
                    alt="PULLUP Invitations feature"
                    width={256}
                    height={500}
                    className="w-full h-auto object-contain max-w-sm rounded-3xl"
                  />
                </div>
              </div>
            </div>

            {/* Feature 2: PULLUP RN - Image Left, Icon Right */}
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              {/* Left Side - iPhone Image */}
              <div className="flex justify-center lg:order-1">
                <div>
                  <Image
                    src="/features_pulluprn.svg?height=500&width=256&text=PULLUP+RN+Feature"
                    alt="PULLUP RN feature"
                    width={256}
                    height={500}
                    className="w-full h-auto object-contain max-w-sm rounded-3xl"
                  />
                </div>
              </div>

              {/* Right Side - Icon and Text */}
              <div className="lg:order-2">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center max-w-md">
                  <div className="flex justify-center mb-6">
                    <Image
                      src="/placeholder.svg?height=48&width=48&text=⚡"
                      alt="PULLUP RN icon"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">PULLUP RN</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Want company on demand? Send a spontaneous, story-style invite to select friends for whatever you're doing-grabbing food, hitting the gym, studying, or chilling. Built for fast, unplanned meetups.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3: Explore Places & Events - Icon Left, Image Right */}
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              {/* Left Side - Icon and Text */}
              <div>
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center max-w-md">
                  <div className="flex justify-center mb-6">
                    <Image
                      src="/features_explore.svg?height=48&width=48&text=🗺️"
                      alt="Explore Places & Events icon"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Explore Places & Events</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Find restaurants, campus events, and more! Discover what's happening around you and easily invite friends to join you for new experiences and adventures.
                  </p>
                </div>
              </div>

              {/* Right Side - iPhone Image */}
              <div className="flex justify-center">
                <div>
                  <Image
                    src="/placeholder.svg?height=500&width=256&text=Explore+Feature"
                    alt="Explore Places & Events feature"
                    width={256}
                    height={500}
                    className="w-full h-auto object-contain max-w-sm rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Download Pull Up? Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Download Pull Up?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            {/* Section 1: Meet up with friends and groups easier */}
            <div className="space-y-4">
              <div className="flex justify-center mb-4">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Friends icon"
                  width={64}
                  height={64}
                  className="rounded-full p-3"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Meet up with friends and groups easier</h3>
              <p className="text-gray-600 leading-relaxed">
                Effortlessly coordinate plans with your entire friend group or specific circles. Say goodbye to endless
                group chats and hello to spontaneous gatherings.
              </p>
            </div>

            {/* Section 2: Discover what's around you */}
            <div className="space-y-4">
              <div className="flex justify-center mb-4">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Compass icon"
                  width={64}
                  height={64}
                  className="rounded-full p-3"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Discover what's around you</h3>
              <p className="text-gray-600 leading-relaxed">
                See what activities your friends are "Pulling Up" to in real-time. Find out about impromptu study
                sessions, coffee runs, or campus events happening nearby.
              </p>
            </div>

            {/* Section 3: Get notifications that matter */}
            <div className="space-y-4">
              <div className="flex justify-center mb-4">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Notification icon"
                  width={64}
                  height={64}
                  className="rounded-full p-3"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Get notifications that matter</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive timely alerts for invitations and spontaneous meet-ups from your closest connections, ensuring
                you never miss out on a moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Cornellians use Pull Up for Section */}
      <section id="cornell-section" className="bg-white py-20 overflow-hidden">
        <div className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full max-w-7xl mx-auto">
          {/* Top row of vertical images (phone photo dimensions) */}
          <div className="absolute w-full h-1/2 top-0 left-0">
            <div className="absolute" style={{ left: "5%", top: "20px" }}>
              <Image
                src="/placeholder.svg?height=144&width=96"
                alt="Cornell Student 1"
                width={96}
                height={144}
                className="w-24 h-36 object-cover rounded-xl"
              />
            </div>
            <div className="absolute" style={{ left: "18%", top: "60px" }}>
              <Image
                src="/placeholder.svg?height=144&width=96"
                alt="Cornell Student 2"
                width={96}
                height={144}
                className="w-24 h-36 object-cover rounded-xl"
              />
            </div>
            <div className="absolute" style={{ left: "35%", top: "10px" }}>
              <Image
                src="/placeholder.svg?height=144&width=96"
                alt="Cornell Student 3"
                width={96}
                height={144}
                className="w-24 h-36 object-cover rounded-xl"
              />
            </div>
            <div className="absolute" style={{ left: "50%", top: "70px" }}>
              <Image
                src="/placeholder.svg?height=144&width=96"
                alt="Cornell Student 4"
                width={96}
                height={144}
                className="w-24 h-36 object-cover rounded-xl"
              />
            </div>
            <div className="absolute" style={{ left: "65%", top: "30px" }}>
              <Image
                src="/placeholder.svg?height=144&width=96"
                alt="Cornell Student 5"
                width={96}
                height={144}
                className="w-24 h-36 object-cover rounded-xl"
              />
            </div>
            <div className="absolute" style={{ left: "80%", top: "80px" }}>
              <Image
                src="/placeholder.svg?height=144&width=96"
                alt="Cornell Student 6"
                width={96}
                height={144}
                className="w-24 h-36 object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Text in between the waves */}
          <div className="absolute inset-0 flex flex-col justify-center items-center z-10 px-4 text-center py-0 opacity-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Cornellians use Pull Up for</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Discover how students at Cornell University are using Pull Up to connect, organize, and make the most of
              their college experience.
            </p>
          </div>

          {/* Bottom row of horizontal images (phone photo dimensions) */}
          <div className="absolute w-full h-1/2 bottom-0 left-0">
            <div className="absolute" style={{ left: "8%", bottom: "20px" }}>
              <Image
                src="/placeholder.svg?height=96&width=144"
                alt="Cornell Event 1"
                width={144}
                height={96}
                className="w-36 h-24 object-cover rounded-xl"
              />
            </div>
            <div className="absolute" style={{ left: "22%", bottom: "60px" }}>
              <Image
                src="/placeholder.svg?height=96&width=144"
                alt="Cornell Event 2"
                width={144}
                height={96}
                className="w-36 h-24 object-cover rounded-xl"
              />
            </div>
            <div className="absolute" style={{ left: "40%", bottom: "10px" }}>
              <Image
                src="/placeholder.svg?height=96&width=144"
                alt="Cornell Event 3"
                width={144}
                height={96}
                className="w-36 h-24 object-cover rounded-xl"
              />
            </div>
            <div className="absolute" style={{ left: "55%", bottom: "70px" }}>
              <Image
                src="/placeholder.svg?height=96&width=144"
                alt="Cornell Event 4"
                width={144}
                height={96}
                className="w-36 h-24 object-cover rounded-xl"
              />
            </div>
            <div className="absolute" style={{ left: "70%", bottom: "30px" }}>
              <Image
                src="/placeholder.svg?height=96&width=144"
                alt="Cornell Event 5"
                width={144}
                height={96}
                className="w-36 h-24 object-cover rounded-xl"
              />
            </div>
            <div className="absolute" style={{ left: "85%", bottom: "85px" }}>
              <Image
                src="/placeholder.svg?height=96&width=144"
                alt="Cornell Event 6"
                width={144}
                height={96}
                className="w-36 h-24 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Updates Section */}
      <section id="updates" className="bg-gray-50 py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Updates</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're constantly improving Pull Up with new features and enhancements. Here's what's coming next:
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-6xl">
              {/* Timeline Image - Very wide but shallow */}
              <div className="relative w-full h-[120px] md:h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=1200&text=Pull+Up+Development+Timeline"
                  alt="Pull Up development timeline"
                  width={1200}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
