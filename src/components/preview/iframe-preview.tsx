"use client"

import { useState, useEffect } from "react"
import { Loader2, Monitor, Tablet, Smartphone, Globe } from "lucide-react"
import { DeviceType, deviceViewports } from "./previewModalMockData"

interface IframePreviewProps {
  url: string
  device: DeviceType
}

export function IframePreview({ url, device }: IframePreviewProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    const updateWindowSize = () => {
      if (typeof window !== 'undefined') {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }
    }

    updateWindowSize()
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateWindowSize)
      return () => window.removeEventListener('resize', updateWindowSize)
    }
  }, [])

  const getDeviceIcon = () => {
    switch (device) {
      case DeviceType.DESKTOP:
        return Monitor
      case DeviceType.TABLET:
        return Tablet
      case DeviceType.MOBILE:
        return Smartphone
      default:
        return Globe
    }
  }

  const DeviceIcon = getDeviceIcon()

  if (!isMounted) {
    return (
      <div className="relative w-full h-full flex items-center justify-center bg-muted/20 rounded-lg overflow-hidden">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <DeviceIcon className="h-16 w-16 text-accent/30" />
            <Loader2 className="h-6 w-6 animate-spin text-accent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <span className="body-sm text-muted-foreground">Loading Preview...</span>
        </div>
      </div>
    )
  }

  const viewport = deviceViewports[device]
  const aspectRatio = viewport.width / viewport.height

  const handleLoad = () => {
    setIsLoading(false)
    setHasError(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-muted/20 rounded-lg overflow-hidden">
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/90 backdrop-blur-sm z-10">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <DeviceIcon className="h-20 w-20 text-accent/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-accent" />
              </div>
            </div>
            <div className="text-center space-y-1">
              <span className="body-sm font-medium text-foreground">Loading Preview</span>
              <span className="text-xs text-muted-foreground">
                {device === DeviceType.DESKTOP ? 'Desktop View' : 
                 device === DeviceType.TABLET ? 'Tablet View' : 'Mobile View'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Error State */}
      {hasError && !isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/90 backdrop-blur-sm z-10">
          <div className="flex flex-col items-center space-y-4 text-center p-4">
            <div className="relative">
              <DeviceIcon className="h-20 w-20 text-muted-foreground/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                  <span className="text-destructive text-sm font-bold">!</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <span className="body-sm font-medium text-destructive">Failed to load preview</span>
              <span className="text-xs text-muted-foreground">
                The website might not allow embedding
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Device Preview Indicator */}
      {!isLoading && !hasError && (
        <div className="absolute top-4 left-4 z-20 bg-background/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-border/50">
          <div className="flex items-center space-x-2">
            <DeviceIcon className="h-4 w-4 text-accent" />
            <span className="text-xs font-medium text-foreground">
              {device === DeviceType.DESKTOP ? 'Desktop' : 
               device === DeviceType.TABLET ? 'Tablet' : 'Mobile'} Preview
            </span>
          </div>
        </div>
      )}

      {/* Iframe Container */}
      <div 
        className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300"
        style={{
          width: device === DeviceType.DESKTOP ? '100%' : `${Math.min(viewport.width, windowSize.width - 100)}px`,
          height: device === DeviceType.DESKTOP ? '100%' : `${Math.min(viewport.height, windowSize.height - 150)}px`,
          minHeight: device === DeviceType.DESKTOP ? '100%' : 'auto'
        }}
      >
        <iframe
          src={url}
          className="w-full h-full border-0"
          title="Website Preview"
          onLoad={handleLoad}
          onError={handleError}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        />
      </div>
    </div>
  )
}