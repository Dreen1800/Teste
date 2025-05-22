"use client"

import { useState } from "react"
import { Home, Calendar, PlusCircle, FileText, Settings } from "lucide-react"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

export default function MobileApp() {
  const [activeTab, setActiveTab] = useState("home")
  const [showDialog, setShowDialog] = useState(false)

  return (
    <div className="flex flex-col h-screen bg-[#131313] text-white">
      <Tabs defaultValue="home" className="flex flex-col h-full" onValueChange={setActiveTab}>
        <TabsContent value="home" className="flex-1 overflow-auto pb-16">
          <HomeScreen setShowDialog={setShowDialog} />
        </TabsContent>

        <TabsContent value="tasks" className="flex-1 overflow-auto pb-16">
          <TasksScreen setShowDialog={setShowDialog} />
        </TabsContent>

        <TabsContent value="calendar" className="flex-1 overflow-auto pb-16">
          <CalendarScreen />
        </TabsContent>

        <TabsContent value="details" className="flex-1 overflow-auto pb-16">
          <DetailsScreen />
        </TabsContent>

        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent className="bg-[#262626] text-white border-none p-0 max-w-md mx-auto">
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium">Dolorem ipsum quia dolor sit amet</h2>
                <DialogClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                  <span className="text-2xl">×</span>
                  <span className="sr-only">Close</span>
                </DialogClose>
              </div>

              <p className="text-sm text-[#9f9f9f] mb-6">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="#9f9f9f"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <span>Velit</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="#9f9f9f"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <span>Dolore</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="#9f9f9f"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <span>Consect</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Button className="w-full rounded-none h-14 bg-[#aa3dfd] hover:bg-[#9a2eee] text-white">
                Porro Quisquam
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <div className="fixed bottom-0 left-0 right-0 bg-[#262626] border-t border-[#414141]">
          <TabsList className="grid grid-cols-5 bg-transparent h-16">
            <TabsTrigger
              value="home"
              className={cn(
                "data-[state=active]:bg-transparent flex flex-col items-center justify-center gap-1 h-full",
                activeTab === "home" ? "text-[#aa3dfd]" : "text-[#9f9f9f]",
              )}
            >
              <Home size={20} />
            </TabsTrigger>
            <TabsTrigger
              value="calendar"
              className={cn(
                "data-[state=active]:bg-transparent flex flex-col items-center justify-center gap-1 h-full",
                activeTab === "calendar" ? "text-[#aa3dfd]" : "text-[#9f9f9f]",
              )}
            >
              <Calendar size={20} />
            </TabsTrigger>
            <TabsTrigger
              value="add"
              className="data-[state=active]:bg-transparent flex flex-col items-center justify-center gap-1 h-full"
            >
              <div className="bg-[#aa3dfd] rounded-full p-2">
                <PlusCircle size={24} className="text-white" />
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="tasks"
              className={cn(
                "data-[state=active]:bg-transparent flex flex-col items-center justify-center gap-1 h-full",
                activeTab === "tasks" ? "text-[#aa3dfd]" : "text-[#9f9f9f]",
              )}
            >
              <FileText size={20} />
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className={cn(
                "data-[state=active]:bg-transparent flex flex-col items-center justify-center gap-1 h-full",
                activeTab === "settings" ? "text-[#aa3dfd]" : "text-[#9f9f9f]",
              )}
            >
              <Settings size={20} />
            </TabsTrigger>
          </TabsList>
        </div>
      </Tabs>
    </div>
  )
}

function HomeScreen({ setShowDialog }: { setShowDialog: (show: boolean) => void }) {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10 bg-[#4f4f4f]" />
          <span>Lorem ipsum</span>
        </div>
        <Button variant="ghost" size="icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>

      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-[#9f9f9f]">Porro quisquam</span>
        <span className="text-sm text-[#9f9f9f]">QUIA DOLO</span>
      </div>

      <div className="bg-[#262626] rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">Neque porro quisquam</h3>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2H2.01M8 2H8.01M14 2H14.01" stroke="white" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </Button>
        </div>
        <Progress value={90} className="h-2 mb-3 bg-[#414141]" indicatorClassName="bg-[#aa3dfd]" />
        <div className="flex justify-between items-center">
          <span className="text-xs text-[#9f9f9f]">90%</span>
          <Button size="sm" className="bg-[#aa3dfd] hover:bg-[#9a2eee] text-white h-8 rounded-full px-4">
            Sit Amet
          </Button>
        </div>
      </div>

      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-[#9f9f9f]">Est qui dolorem ipsu</span>
        <span className="text-sm text-[#9f9f9f]">CONSECTETUR</span>
      </div>

      <div className="space-y-4">
        <div className="bg-[#262626] rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Neque porro qu</h3>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2H2.01M8 2H8.01M14 2H14.01" stroke="white" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </Button>
          </div>
          <p className="text-sm text-[#9f9f9f] mb-2">Est qui dolorem ipsum quia dolor sit</p>
          <div className="flex items-center gap-2">
            <Checkbox
              id="check1"
              className="border-[#9f9f9f] data-[state=checked]:bg-[#aa3dfd] data-[state=checked]:border-[#aa3dfd]"
            />
            <label htmlFor="check1" className="text-xs text-[#9f9f9f]">
              Consectetur, adipisci
            </label>
          </div>
        </div>

        <div className="bg-[#262626] rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Porro quisquam est</h3>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2H2.01M8 2H8.01M14 2H14.01" stroke="white" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </Button>
          </div>
          <p className="text-sm text-[#9f9f9f] mb-2">Est qui dolorem ipsum quia dolor sit</p>
          <div className="flex items-center gap-2">
            <Checkbox
              id="check2"
              className="border-[#9f9f9f] data-[state=checked]:bg-[#aa3dfd] data-[state=checked]:border-[#aa3dfd]"
            />
            <label htmlFor="check2" className="text-xs text-[#9f9f9f]">
              Consectetur, adipisci
            </label>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="mb-4">Lorem ipsum</h2>
        <div className="bg-[#262626] rounded-lg divide-y divide-[#414141]">
          <div className="flex items-center p-3">
            <div className="w-6 h-6 mr-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#414141" />
              </svg>
            </div>
            <span>Lorem</span>
            <div className="ml-auto">
              <div className="w-6 h-6 bg-[#414141] rounded-full"></div>
            </div>
          </div>

          <div className="flex items-center p-3">
            <div className="w-6 h-6 mr-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#414141" />
              </svg>
            </div>
            <span>Ipsum</span>
            <div className="ml-auto">
              <div className="w-6 h-6 bg-[#414141] rounded-full"></div>
            </div>
          </div>

          <div className="flex items-center p-3">
            <div className="w-6 h-6 mr-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#414141" />
              </svg>
            </div>
            <span>Quia dolor sit amet</span>
            <div className="ml-auto">
              <div className="w-6 h-6 bg-[#414141] rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center p-3">
            <div className="w-6 h-6 mr-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#414141" />
              </svg>
            </div>
            <span>Dolorem ipsum quia</span>
            <div className="ml-auto">
              <div className="w-6 h-6 bg-[#414141] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TasksScreen({ setShowDialog }: { setShowDialog: (show: boolean) => void }) {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10 bg-[#4f4f4f]" />
          <span>Lorem ipsum</span>
        </div>
        <Button variant="ghost" size="icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>

      <h2 className="mb-4">Lorem</h2>

      <div className="space-y-4">
        <div className="bg-[#262626] rounded-lg p-4">
          <div className="flex items-start gap-3 mb-2">
            <div className="w-6 h-6 mt-0.5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#aa3dfd" strokeWidth="2" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-medium mb-1">Neque porro quisquam</h3>
              <Badge className="bg-[#aa3dfd] text-white rounded-full text-xs font-normal">Sit amet</Badge>
            </div>
          </div>
        </div>

        <div className="bg-[#262626] rounded-lg p-4">
          <div className="flex items-start gap-3 mb-2">
            <div className="w-6 h-6 mt-0.5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#aa3dfd" strokeWidth="2" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-medium mb-1">Qui dolorem</h3>
              <Badge className="bg-[#aa3dfd] text-white rounded-full text-xs font-normal">Sit quoque</Badge>
            </div>
          </div>
        </div>

        <div className="bg-[#262626] rounded-lg p-4">
          <div className="flex items-start gap-3 mb-2">
            <div className="w-6 h-6 mt-0.5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#aa3dfd" strokeWidth="2" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-medium mb-1">Ipsum quia dolor sit amet</h3>
              <Badge className="bg-[#aa3dfd] text-white rounded-full text-xs font-normal">Sit quoque</Badge>
            </div>
          </div>
        </div>
      </div>

      <h2 className="my-4">Dolorem</h2>

      <div className="space-y-4">
        <div className="bg-[#262626] rounded-lg p-4" onClick={() => setShowDialog(true)}>
          <div className="flex items-start gap-3 mb-2">
            <div className="w-6 h-6 mt-0.5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#aa3dfd" strokeWidth="2" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-medium mb-1">Dolor sit amet</h3>
              <Badge className="bg-[#aa3dfd] text-white rounded-full text-xs font-normal">Sit quoque</Badge>
            </div>
          </div>
        </div>

        <div className="bg-[#262626] rounded-lg p-4">
          <div className="flex items-start gap-3 mb-2">
            <div className="w-6 h-6 mt-0.5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#aa3dfd" strokeWidth="2" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-medium mb-1">Est qui dolorem ipsum</h3>
              <Badge className="bg-[#aa3dfd] text-white rounded-full text-xs font-normal">Sit quoque</Badge>
            </div>
          </div>
        </div>

        <div className="bg-[#262626] rounded-lg p-4">
          <div className="flex items-start gap-3 mb-2">
            <div className="w-6 h-6 mt-0.5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#aa3dfd" strokeWidth="2" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-medium mb-1">Porro quisquam</h3>
              <Badge className="bg-[#aa3dfd] text-white rounded-full text-xs font-normal">Sit quoque</Badge>
            </div>
          </div>
        </div>
      </div>

      <h2 className="my-4">Dolorem</h2>

      <div className="space-y-4">
        <div className="bg-[#262626] rounded-lg p-4">
          <div className="flex items-start gap-3 mb-2">
            <div className="w-6 h-6 mt-0.5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#aa3dfd" strokeWidth="2" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-medium mb-1">Dolor sit amet</h3>
              <Badge className="bg-[#aa3dfd] text-white rounded-full text-xs font-normal">Sit quoque</Badge>
            </div>
          </div>
        </div>

        <div className="bg-[#262626] rounded-lg p-4">
          <div className="flex items-start gap-3 mb-2">
            <div className="w-6 h-6 mt-0.5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#aa3dfd" strokeWidth="2" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-medium mb-1">Est qui dolorem ipsum</h3>
              <Badge className="bg-[#aa3dfd] text-white rounded-full text-xs font-normal">Sit quoque</Badge>
            </div>
          </div>
        </div>

        <div className="bg-[#262626] rounded-lg p-4">
          <div className="flex items-start gap-3 mb-2">
            <div className="w-6 h-6 mt-0.5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#aa3dfd" strokeWidth="2" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-medium mb-1">Porro quisquam</h3>
              <Badge className="bg-[#aa3dfd] text-white rounded-full text-xs font-normal">Sit quoque</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DetailsScreen() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10 bg-[#4f4f4f]" />
          <span>Lorem ipsum</span>
        </div>
        <Button variant="ghost" size="icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>

      <h2 className="mb-4">Lorem</h2>

      <div className="bg-[#262626] rounded-lg p-4 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Checkbox
            id="task1"
            className="border-[#9f9f9f] data-[state=checked]:bg-[#aa3dfd] data-[state=checked]:border-[#aa3dfd]"
          />
          <label htmlFor="task1" className="font-medium">
            Lorem ipsum
          </label>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span className="text-sm">for</span>
        <div className="flex gap-2">
          <Badge className="bg-[#aa3dfd] text-white rounded-full px-3 py-1">Lorem</Badge>
          <Badge className="bg-white text-[#262626] rounded-full px-3 py-1">Dummy tex</Badge>
          <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full bg-[#414141]">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 1V11M1 6H11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#9f9f9f" strokeWidth="2" />
            </svg>
          </div>
          <span>Dolorem</span>
          <Badge className="ml-auto bg-[#aa3dfd] text-white rounded-full px-3 py-1">adipisci velit</Badge>
          <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full bg-[#414141]">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 1V11M1 6H11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-6 h-6 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#9f9f9f" strokeWidth="2" />
            </svg>
          </div>
          <span>Quisqua</span>
          <Button variant="ghost" size="icon" className="ml-auto h-6 w-6 rounded-full bg-[#414141]">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 1V11M1 6H11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
          <span className="text-xs text-[#9f9f9f]">Adipisci velit</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-6 h-6 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#9f9f9f" strokeWidth="2" />
            </svg>
          </div>
          <span>Porro</span>
          <Button variant="ghost" size="icon" className="ml-auto h-6 w-6 rounded-full bg-[#414141]">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 1V11M1 6H11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
          <span className="text-xs text-[#9f9f9f]">Onsectet</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-6 h-6 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#9f9f9f" strokeWidth="2" />
            </svg>
          </div>
          <span>Lorem</span>
          <Button variant="ghost" size="icon" className="ml-auto h-6 w-6 rounded-full bg-[#414141]">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 1V11M1 6H11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
          <span className="text-xs text-[#9f9f9f]">Ipsum quia</span>
        </div>
      </div>

      <h2 className="my-4">Consectetur</h2>

      <div className="bg-[#262626] rounded-lg p-4 mb-6"></div>

      <Button className="w-full bg-[#aa3dfd] hover:bg-[#9a2eee] text-white h-12 rounded-full">Porro Quisquam</Button>
    </div>
  )
}

function CalendarScreen() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <Button variant="ghost" size="icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Button>
        <h2 className="text-lg font-medium">Lorem</h2>
        <Button variant="ghost" size="icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>

      <div className="grid grid-cols-7 text-center mb-4">
        <div className="text-xs text-[#9f9f9f]">Sun</div>
        <div className="text-xs text-[#9f9f9f]">Mon</div>
        <div className="text-xs text-[#9f9f9f]">Tue</div>
        <div className="text-xs text-[#9f9f9f]">Wed</div>
        <div className="text-xs text-[#9f9f9f]">Thu</div>
        <div className="text-xs text-[#9f9f9f]">Fri</div>
        <div className="text-xs text-[#9f9f9f]">Sat</div>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center mb-6">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center">28</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center">1</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center">2</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center bg-[#aa3dfd] rounded-full">3</div>
          <div className="w-1 h-1 bg-[#aa3dfd] rounded-full mt-1"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center">4</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center">5</div>
          <div className="w-1 h-1 bg-[#aa3dfd] rounded-full mt-1"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center">6</div>
          <div className="w-1 h-1 bg-[#aa3dfd] rounded-full mt-1"></div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-[#262626] rounded-lg p-4">
          <div className="flex justify-between items-center mb-1">
            <h3 className="font-medium">Dolorem ipsum</h3>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2H2.01M8 2H8.01M14 2H14.01" stroke="white" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </Button>
          </div>
          <p className="text-xs text-[#9f9f9f]">Neque quisquam est qui dolorem ipsum quia</p>
          <div className="mt-2">
            <div className="text-xs text-[#9f9f9f]">Quia dolor sit amet</div>
          </div>
        </div>

        <div className="bg-[#262626] rounded-lg p-4">
          <div className="flex justify-between items-center mb-1">
            <h3 className="font-medium">Dolorem ipsum quia</h3>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2H2.01M8 2H8.01M14 2H14.01" stroke="white" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </Button>
          </div>
          <p className="text-xs text-[#9f9f9f]">Neque porro quisquam est qui</p>
          <div className="mt-2">
            <div className="text-xs text-[#9f9f9f]">Quia dolor sit amet</div>
          </div>
        </div>

        <div className="bg-[#262626] rounded-lg p-4">
          <div className="flex justify-between items-center mb-1">
            <h3 className="font-medium">Dolorem ipsum quia dolor</h3>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2H2.01M8 2H8.01M14 2H14.01" stroke="white" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </Button>
          </div>
          <p className="text-xs text-[#9f9f9f]">Neque porro quisquam est qui</p>
          <div className="mt-2">
            <div className="text-xs text-[#9f9f9f]">Quia dolor sit amet</div>
          </div>
        </div>

        <div className="bg-[#262626] rounded-lg p-4">
          <div className="flex justify-between items-center mb-1">
            <h3 className="font-medium">Quisquam est qui</h3>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2H2.01M8 2H8.01M14 2H14.01" stroke="white" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </Button>
          </div>
          <p className="text-xs text-[#9f9f9f]">Ipsum quia dolor sit amet</p>
          <div className="mt-2">
            <div className="text-xs text-[#9f9f9f]">Quia dolor sit amet</div>
          </div>
        </div>
      </div>
    </div>
  )
}
