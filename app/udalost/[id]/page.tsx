import { notFound } from 'next/navigation'
import { getEventById } from '@/lib/mock-events'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { AlertCircle, Calendar, Clock, ExternalLink, MapPin, TrendingUp } from 'lucide-react'
import { format } from 'date-fns'
import { cs } from 'date-fns/locale'
import Link from 'next/link'

interface EventPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: EventPageProps) {
  const { id } = await params
  const event = getEventById(id)

  if (!event) {
    return {
      title: 'Událost nenalezena',
    }
  }

  return {
    title: `${event.titleCs} - Porovnání cen vstupenek | VstupenkyCesky.com`,
    description: event.descriptionCs,
  }
}

export default async function EventPage({ params }: EventPageProps) {
  const { id } = await params
  const event = getEventById(id)

  if (!event) {
    notFound()
  }

  const minPrice = Math.min(...event.tickets.map((t) => t.price))
  const maxPrice = Math.max(...event.tickets.map((t) => t.price))
  const minFaceValue = Math.min(...event.tickets.map((t) => t.faceValue))

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Domů
        </Link>
        <span>/</span>
        <Link href="/udalosti" className="hover:text-foreground">
          Všechny události
        </Link>
        <span>/</span>
        <span className="text-foreground">{event.titleCs}</span>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="space-y-8 lg:col-span-2">
          {/* Event Header */}
          <div>
            <Badge className="mb-4">{event.categoryCs}</Badge>
            <h1 className="mb-4 text-4xl font-bold text-balance lg:text-5xl">
              {event.titleCs}
            </h1>

            <div className="flex flex-col gap-3 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span className="text-lg">
                  {format(new Date(event.date), 'd. MMMM yyyy', { locale: cs })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span className="text-lg">{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span className="text-lg">
                  {event.venueCs}, {event.city}
                </span>
              </div>
            </div>
          </div>

          {/* Event Image */}
          <div className="aspect-video overflow-hidden rounded-lg bg-muted">
            <img
              src={event.image || `/.jpg?height=600&width=1000&query=${encodeURIComponent(event.titleCs + ' ' + event.venueCs)}`}
              alt={event.titleCs}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle>O události</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed text-muted-foreground">
                {event.descriptionCs}
              </p>
            </CardContent>
          </Card>

          {/* Disclaimer for this event */}
          <Card className="border-2 border-primary/20">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 flex-shrink-0 text-primary" />
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-foreground">
                    Důležité informace o cenách
                  </p>
                  <p className="text-muted-foreground">
                    Ceny zobrazené níže pocházejí od našich partnerů-resellerů a mohou být vyšší než nominální hodnota vstupenky. 
                    Nominální hodnota pro tuto událost začíná na <strong>{minFaceValue} Kč</strong>. 
                    Při kliknutí na "Zobrazit nabídku" budete přesměrováni na web partnera, kde probíhá nákup.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar - Ticket Prices */}
        <div className="space-y-6">
          <Card className="sticky top-20">
            <CardHeader>
              <CardTitle>Porovnání cen</CardTitle>
              <CardDescription>
                Od {event.tickets.length} {event.tickets.length === 1 ? 'partnera' : 'partnerů'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Price Range */}
              <div className="rounded-lg bg-primary/5 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <TrendingUp className="h-4 w-4" />
                  Rozsah cen
                </div>
                <div className="text-3xl font-bold">
                  {minPrice} - {maxPrice} Kč
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Nominální hodnota: od {minFaceValue} Kč
                </div>
              </div>

              <Separator />

              {/* Ticket Offers */}
              <div className="space-y-3">
                {event.tickets
                  .sort((a, b) => a.price - b.price)
                  .map((ticket) => (
                    <Card key={ticket.id} className="overflow-hidden">
                      <CardContent className="p-4">
                        <div className="mb-3 flex items-start justify-between">
                          <div>
                            <div className="font-semibold">{ticket.partnerName}</div>
                            <div className="text-xs text-muted-foreground">
                              Face value: {ticket.faceValue} Kč
                            </div>
                          </div>
                          {ticket.availability === 'low' && (
                            <Badge variant="secondary" className="text-xs">
                              Málo kusů
                            </Badge>
                          )}
                          {ticket.availability === 'sold-out' && (
                            <Badge variant="destructive" className="text-xs">
                              Vyprodáno
                            </Badge>
                          )}
                        </div>

                        <div className="mb-3 flex items-baseline justify-between">
                          <span className="text-2xl font-bold">{ticket.price} Kč</span>
                          {ticket.price > ticket.faceValue && (
                            <span className="text-xs text-muted-foreground">
                              +{ticket.price - ticket.faceValue} Kč
                            </span>
                          )}
                        </div>

                        <Button
                          asChild
                          className="w-full"
                          variant={ticket.availability === 'sold-out' ? 'secondary' : 'default'}
                          disabled={ticket.availability === 'sold-out'}
                        >
                          <a
                            href={ticket.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            Zobrazit nabídku
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>

              <Separator />

              {/* Info */}
              <div className="text-xs text-muted-foreground">
                Ceny jsou aktuální k dnešnímu dni a mohou se změnit. Kliknutím na "Zobrazit nabídku" budete přesměrováni na web partnera.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
