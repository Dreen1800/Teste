"use client"

import { useState } from "react"
import { Home, Calendar, PlusCircle, FileText, Settings } from "lucide-react"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { ProjectDashboard } from "@/components/project-dashboard"
import { TaskList } from "@/components/task-list"
import { ProjectTimeline } from "@/components/project-timeline"
import { TodayView } from "@/components/today-view"

export default function ProjectApp() {
  const [activeTab, setActiveTab] = useState("home")
  const [showDialog, setShowDialog] = useState(false)

  return (
    <div className="flex flex-col h-screen bg-[#131313] text-white">
      <Tabs defaultValue="home" className="flex flex-col h-full" onValueChange={setActiveTab}>
        <TabsContent value="home" className="flex-1 overflow-auto pb-16">
          <ProjectDashboard setShowDialog={setShowDialog} />
        </TabsContent>

        <TabsContent value="tasks" className="flex-1 overflow-auto pb-16">
          <TaskList setShowDialog={setShowDialog} />
        </TabsContent>

        <TabsContent value="calendar" className="flex-1 overflow-auto pb-16">
          <ProjectTimeline />
        </TabsContent>

        <TabsContent value="today" className="flex-1 overflow-auto pb-16">
          <TodayView />
        </TabsContent>

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
              <span className="text-xs">Projetos</span>
            </TabsTrigger>
            <TabsTrigger
              value="tasks"
              className={cn(
                "data-[state=active]:bg-transparent flex flex-col items-center justify-center gap-1 h-full",
                activeTab === "tasks" ? "text-[#aa3dfd]" : "text-[#9f9f9f]",
              )}
            >
              <FileText size={20} />
              <span className="text-xs">Tasks</span>
            </TabsTrigger>
            <TabsTrigger
              value="add"
              className="data-[state=active]:bg-transparent flex flex-col items-center justify-center gap-1 h-full"
              onClick={() => setShowDialog(true)}
            >
              <div className="bg-[#aa3dfd] rounded-full p-2">
                <PlusCircle size={24} className="text-white" />
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="calendar"
              className={cn(
                "data-[state=active]:bg-transparent flex flex-col items-center justify-center gap-1 h-full",
                activeTab === "calendar" ? "text-[#aa3dfd]" : "text-[#9f9f9f]",
              )}
            >
              <Calendar size={20} />
              <span className="text-xs">Timeline</span>
            </TabsTrigger>
            <TabsTrigger
              value="today"
              className={cn(
                "data-[state=active]:bg-transparent flex flex-col items-center justify-center gap-1 h-full",
                activeTab === "today" ? "text-[#aa3dfd]" : "text-[#9f9f9f]",
              )}
            >
              <Settings size={20} />
              <span className="text-xs">Hoje</span>
            </TabsTrigger>
          </TabsList>
        </div>
      </Tabs>
    </div>
  )
}