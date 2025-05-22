"use client"

import { useState } from "react"
import { Project, Task } from "@/app/types"
import { Card } from "@/components/ui/card"

export function ProjectTimeline() {
  const [projects, setProjects] = useState<Project[]>([])

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Timeline</h1>
      </div>

      <div className="space-y-8">
        {projects.map((project) => (
          <Card key={project.id} className="bg-[#262626] p-4">
            <h2 className="text-lg font-semibold mb-4">{project.name}</h2>
            <div className="relative">
              {/* Timeline visualization will be implemented here */}
              <div className="h-8 bg-[#414141] rounded-full relative">
                <div 
                  className="absolute h-full bg-[#aa3dfd] rounded-full"
                  style={{ 
                    width: `${project.progress}%`,
                    transition: "width 0.3s ease-in-out"
                  }}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}