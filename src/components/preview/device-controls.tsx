"use client"

import { Monitor, Tablet, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DeviceType } from "./previewModalMockData"

interface DeviceControlsProps {
  selectedDevice: DeviceType
  onDeviceChange: (device: DeviceType) => void
}

export function DeviceControls({ selectedDevice, onDeviceChange }: DeviceControlsProps) {
  const devices = [
    { type: DeviceType.DESKTOP, icon: Monitor, label: "Desktop" },
    { type: DeviceType.TABLET, icon: Tablet, label: "Tablet" },
    { type: DeviceType.MOBILE, icon: Smartphone, label: "Mobile" }
  ]

  return (
    <div className="flex items-center space-x-2 p-2 bg-muted/50 rounded-lg">
      {devices.map(({ type, icon: Icon, label }) => (
        <Button
          key={type}
          variant={selectedDevice === type ? "default" : "ghost"}
          size="sm"
          onClick={() => onDeviceChange(type)}
          className="flex items-center space-x-2"
        >
          <Icon size={16} />
          <span className="hidden sm:inline">{label}</span>
        </Button>
      ))}
    </div>
  )
}