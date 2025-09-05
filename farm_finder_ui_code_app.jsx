import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { MapPin, Search, User, FileText, HelpCircle, Home, ClipboardList, LogIn, CheckCircle, Star } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Farm Finder Mobile-first mockup
 * Corporate FAFSA-style design with DoorDash-like clean flows
 * Palette: Navy #0C2340, Red #C8102E, White #FFFFFF, Accent Green #228622
 */

export default function FarmFinderMobile() {
  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#0C2340]">
      {/* Top bar with logo */}
      <header className="sticky top-0 z-30 flex items-center justify-between px-4 py-3 bg-[#0C2340] text-white">
        <div className="flex items-center gap-2">
          <img src="/farmfinder-logo.png" alt="Farm Finder" className="h-6 w-6" />
          <span className="font-bold">Farm Finder</span>
        </div>
        <Button variant="ghost" size="sm" className="text-white">
          <LogIn className="h-4 w-4 mr-1" /> Login
        </Button>
      </header>

      <Tabs defaultValue="home" className="pb-20">
        {/* HOME */}
        <TabsContent value="home" className="px-4 pt-4 space-y-4">
          {/* Search */}
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-[#0C2340]/60" />
              <Input className="pl-8" placeholder="Search farms, city…" />
            </div>
          </div>

          {/* Map preview */}
          <Card className="border-[#CBD3DE] shadow-sm">
            <CardContent className="p-0">
              <div className="h-48 bg-[#CBD3DE] rounded-t flex items-center justify-center">
                <MapPin className="h-8 w-8 text-[#0C2340]" />
                <span className="ml-2">Interactive Map</span>
              </div>
              <div className="p-3 grid gap-2">
                <div className="text-sm text-[#0C2340]/80">Farms near Charlotte, NC</div>
                <div className="flex gap-2">
                  <Badge className="bg-white text-[#0C2340] border border-[#CBD3DE]">Corn</Badge>
                  <Badge className="bg-white text-[#0C2340] border border-[#CBD3DE]">Seasonal</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Farm list */}
          <div className="grid gap-3">
            {[
              { name: "Smith Farms", rating: 4.5, distance: "12 mi", verified: true },
              { name: "Green Valley", rating: 4.2, distance: "24 mi", verified: true },
            ].map((f, i) => (
              <Card key={i} className="border-[#CBD3DE]">
                <CardContent className="p-3 flex items-center gap-3">
                  <div className="h-12 w-12 bg-[#CBD3DE] rounded flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-[#0C2340]" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold flex items-center gap-2">
                      {f.name} {f.verified && <Badge className="bg-[#228622]">Verified</Badge>}
                    </div>
                    <div className="text-sm text-[#0C2340]/70">⭐ {f.rating} · {f.distance}</div>
                  </div>
                  <Button className="bg-[#228622]">View</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* JOBS */}
        <TabsContent value="jobs" className="px-4 pt-4 space-y-3">
          <Card className="border-[#CBD3DE]">
            <CardContent className="p-3">
              <div className="font-semibold">Job Posts</div>
              <div className="mt-2 grid gap-2">
                <Card className="border-[#CBD3DE]">
                  <CardContent className="p-3">
                    <div className="text-sm">Corn Harvesters – 20 openings</div>
                    <div className="text-xs text-[#0C2340]/70">Status: Open · Posted 3d ago</div>
                  </CardContent>
                </Card>
                <Button variant="outline" className="border-[#CBD3DE] w-full">+ New Job</Button>
              </div>
            </CardContent>
          </Card>

          {/* Compliance Checklist */}
          <Card className="border-[#CBD3DE]">
            <CardContent className="p-3">
              <div className="font-semibold mb-2">Compliance Checklist</div>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#228622]" /> E-Verify Registered</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-gray-400" /> Housing Approved</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-gray-400" /> Job Order Submitted</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        {/* PROFILE */}
        <TabsContent value="profile" className="px-4 pt-4 space-y-3">
          <Card className="border-[#CBD3DE]">
            <CardContent className="p-3 flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-[#CBD3DE] flex items-center justify-center">
                <User className="h-6 w-6 text-[#0C2340]" />
              </div>
              <div className="flex-1">
                <div className="font-semibold">John Doe</div>
                <div className="text-xs text-[#0C2340]/70">ID Verified ✅ · ⭐ 4.7</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#CBD3DE]">
            <CardContent className="p-3">
              <div className="font-semibold mb-2">Documents</div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2 text-sm"><FileText className="h-4 w-4 text-[#0C2340]" /> Visa.pdf</div>
                <div className="flex items-center gap-2 text-sm"><FileText className="h-4 w-4 text-[#0C2340]" /> Passport.jpg</div>
              </div>
              <Button variant="outline" className="mt-3 border-[#CBD3DE] w-full">Upload</Button>
            </CardContent>
          </Card>

          <Card className="border-[#CBD3DE]">
            <CardContent className="p-3">
              <div className="font-semibold mb-2">Rewards & Referrals</div>
              <div className="flex items-center justify-between text-sm">
                <span>Profile Completed</span>
                <Badge className="bg-[#228622]">+50 pts</Badge>
              </div>
              <div className="flex items-center justify-between text-sm mt-1">
                <span>Referred a Worker</span>
                <Badge className="bg-[#228622]">+100 pts</Badge>
              </div>
              <Button variant="outline" className="mt-3 border-[#CBD3DE] w-full">Invite Friends</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* HELP */}
        <TabsContent value="help" className="px-4 pt-4">
          <Card className="border-[#CBD3DE]">
            <CardContent className="p-0">
              <div className="h-56 bg-white flex flex-col">
                <div className="px-3 py-2 bg-[#CBD3DE]">Assistant</div>
                <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
                  <div className="self-start bg-[#F7F8FA] border border-[#CBD3DE] rounded px-2 py-1 w-fit">Hi! How can I help?</div>
                  <div className="self-end bg-[#0C2340] text-white rounded px-2 py-1 w-fit">Need help with compliance</div>
                </div>
                <div className="p-2 flex gap-2">
                  <Input placeholder="Type a message…" />
                  <Button className="bg-[#0C2340] text-white">Send</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Bottom Nav */}
        <TabsList className="fixed bottom-0 left-0 right-0 mx-auto max-w-md flex justify-between rounded-none bg-white border-t border-[#CBD3DE]">
          <TabsTrigger value="home" className="flex-1 py-3">
            <Home className="mx-auto h-5 w-5" />
            <span className="block text-xs">Home</span>
          </TabsTrigger>
          <TabsTrigger value="jobs" className="flex-1 py-3">
            <ClipboardList className="mx-auto h-5 w-5" />
            <span className="block text-xs">Jobs</span>
          </TabsTrigger>
          <TabsTrigger value="profile" className="flex-1 py-3">
            <User className="mx-auto h-5 w-5" />
            <span className="block text-xs">Profile</span>
          </TabsTrigger>
          <TabsTrigger value="help" className="flex-1 py-3">
            <HelpCircle className="mx-auto h-5 w-5" />
            <span className="block text-xs">Help</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Reward Nudge */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="fixed bottom-24 right-4">
        <Card className="shadow-lg border-[#CBD3DE]"><CardContent className="p-3 flex items-center gap-2 text-sm">
          <Badge className="bg-[#228622]">+50 pts</Badge> Complete profile
        </CardContent></Card>
      </motion.div>
    </div>
  );
}
