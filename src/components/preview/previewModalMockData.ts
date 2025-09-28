// Device types for responsive preview modes
export enum DeviceType {
  DESKTOP = 'desktop',
  TABLET = 'tablet', 
  MOBILE = 'mobile'
}

// Modal states
export enum ModalState {
  CLOSED = 'closed',
  OPENING = 'opening',
  OPEN = 'open',
  CLOSING = 'closing'
}

// Mock data for preview functionality
export const mockRootProps = {
  project: {
    id: 1,
    title: "DTMasters",
    liveUrl: "https://dtmasters.net"
  },
  isOpen: true,
  onClose: () => {}
};

// Device viewport dimensions
export const deviceViewports = {
  desktop: { width: 1400, height: 900 },
  tablet: { width: 768, height: 1024 },
  mobile: { width: 375, height: 667 }
};