"use client"

import { useState } from "react"
import { Task } from "@/app/types"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"

export function TodayView() {
  const [todayTasks, setTodayTasks] = useState<Task[]>([])
  const [completedToday, setCompletedToday] = useState(0)
  const [streak, setStreak] = useState(0)

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Hoje</h1>
        <div className="flex gap-4 text-sm">
          <span>Concluídas hoje: {completedToday}</span>
          <span>🔥 {streak} dias</span>
        </div>
      </div>

      <div className="space-y-4">
        {todayTasks.map((task) => (
          <Card key={task.id} className="bg-[#262626] p-4">
            <div className="flex items-start gap-3">
              <Checkbox 
                checked={task.status === "Concluída"}
                onCheckedChange={(checked) => {
                  // Handle task completion and streak update
                }}
                className="mt-1"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">{task.title}</h3>
                  <Badge variant="outline">{task.priority}</Badge>
                </div>
                <p className="text-sm text-gray-400 mt-1">{task.description}</p>
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>{task.estimatedTime}h estimadas</span>
                  <span>Vence hoje</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}