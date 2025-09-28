"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { Button } from "./button"
import { Card } from "./card"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
}

export function Modal({ isOpen, onClose, children, className = "" }: ModalProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    if (isOpen && typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden'
    } else if (typeof document !== 'undefined') {
      document.body.style.overflow = 'unset'
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'unset'
      }
    }
  }, [isOpen, isMounted])

  useEffect(() => {
    if (!isMounted) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen && typeof document !== 'undefined') {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.removeEventListener('keydown', handleEscape)
      }
    }
  }, [isOpen, onClose, isMounted])

  if (!isMounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-screen w-screen">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <Card className={`relative z-10 w-full h-full max-w-none max-h-none m-0 rounded-none ${className}`}>
        {children}
      </Card>
    </div>
  )
}

interface ModalHeaderProps {
  children: React.ReactNode
  onClose?: () => void
}

export function ModalHeader({ children, onClose }: ModalHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 md:p-6 pb-4 border-b">
      {children}
    </div>
  )
}

interface ModalContentProps {
  children: React.ReactNode
  className?: string
}

export function ModalContent({ children, className = "" }: ModalContentProps) {
  return (
    <div className={`p-4 md:p-6 pt-4 flex-1 ${className}`}>
      {children}
    </div>
  )
}