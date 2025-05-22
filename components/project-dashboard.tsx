"use client"

import { useState } from "react"
import { Project, Priority, ProjectStatus } from "@/app/types"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

interface ProjectDashboardProps {
  setShowDialog: (show: boolean) => void
}

export function ProjectDashboard({ setShowDialog }: ProjectDashboardProps) {
  const [projects, setProjects] = useState<Project[]>([])
  const [view, setView] = useState<"cards" | "list">("cards")
  const [sortBy, setSortBy] = useState<"priority" | "deadline" | "progress">("priority")
  const [filterStatus, setFilterStatus] = useState<ProjectStatus | "all">("all")

  const priorityColors = {
    Alta: "text-red-500",
    Média: "text-yellow-500",
    Baixa: "text-green-500"
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Meus Projetos</h1>
        <div className="flex gap-2">
          {/* Add view toggle, sort, and filter controls here */}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Card key={project.id} className="bg-[#262626] p-4">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-lg font-semibold">{project.name}</h2>
              <Badge className={priorityColors[project.priority]}>
                {project.priority}
              </Badge>
            </div>
            <p className="text-sm text-gray-400 mb-4">{project.description}</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progresso</span>
                <span>{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="h-2" />
              <div className="flex justify-between text-sm text-gray-400">
                <span>{project.status}</span>
                <span>{new Date(project.endDate).toLocaleDateString()}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}