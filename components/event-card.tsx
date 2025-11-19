import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, ArrowRight, Sparkles } from 'lucide-react'
import type { Event } from '@/lib/mock-events'
import { format } from 'date-fns'
import { cs } from 'date-fns/locale'

export function EventCard({ event }: { event: Event }) {
  const minPrice = Math.min(...event.tickets.map((t) => t.price))
  const minFaceValue = Math.min(...event.tickets.map((t) => t.faceValue))
  const discount = Math.round(((minPrice - minFaceValue) / minFaceValue) * 100)

  return (
    <Link href={`/udalost/${event.id}`}>
      <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-background via-background to-muted/30 transition-all hover:shadow-2xl hover:scale-[1.02]">
        {/* Image with gradient overlay */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={event.image || `/.jpg?height=400&width=600&query=${encodeURIComponent(event.titleCs)}`}
            alt={event.titleCs}
            className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Category badge with glass effect */}
          <Badge className="absolute left-4 top-4 border-0 bg-white/90 backdrop-blur-sm text-foreground font-semibold shadow-lg">
            {event.categoryCs}
          </Badge>
          
          {/* Price badge with accent color */}
          <div className="absolute right-4 top-4 flex flex-col items-end gap-1">
            <div className="rounded-full bg-primary/90 backdrop-blur-sm px-4 py-2 shadow-lg">
              <div className="text-sm font-semibold text-primary-foreground">Od {minPrice} Kč</div>
            </div>
            {discount > 0 && (
              <div className="rounded-full bg-amber-500/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-white">
                +{discount}% nad nominál
              </div>
            )}
          </div>

          {/* Event info overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="mb-3 text-2xl font-bold text-balance line-clamp-2 drop-shadow-lg">
              {event.titleCs}
            </h3>
            
            <div className="flex flex-col gap-2 text-sm font-medium">
              <div className="flex items-center gap-2 drop-shadow">
                <Calendar className="h-4 w-4 flex-shrink-0" />
                <span className="line-clamp-1">
                  {format(new Date(event.date), 'd. MMMM yyyy', { locale: cs })} • {event.time}
                </span>
              </div>
              <div className="flex items-center gap-2 drop-shadow">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="line-clamp-1">
                  {event.venueCs}, {event.city}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer with CTA */}
        <div className="relative p-6 pt-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Nominální hodnota</span>
              <span className="text-sm font-semibold text-muted-foreground line-through">
                {minFaceValue} Kč
              </span>
            </div>
            
            <Button 
              size="lg" 
              className="group/btn shadow-lg hover:shadow-xl transition-all"
            >
              
              Porovnat ceny
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Decorative gradient border effect */}
        <div className="absolute inset-0 rounded-lg opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none">
          <div className="absolute inset-0 rounded-lg ring-2 ring-primary/20" />
        </div>
      </Card>
    </Link>
  )
}
