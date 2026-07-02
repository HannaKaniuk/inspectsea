export interface GalleryImage {
  src: string
  captionKey: 'containerShip' | 'portCranes' | 'bulkCarrier' | 'terminal'
}

export const gallery: GalleryImage[] = [
  { src: '/images/port-cranes.jpg', captionKey: 'portCranes' },
  { src: '/images/bulk-carrier.jpg', captionKey: 'bulkCarrier' },
  { src: '/images/container-ship.jpg', captionKey: 'containerShip' },
  { src: '/images/container-terminal.jpg', captionKey: 'terminal' },
]
