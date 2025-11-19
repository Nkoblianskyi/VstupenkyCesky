import { EventCard } from '@/components/event-card'
import { events } from '@/lib/mock-events'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const metadata = {
  title: 'Všechny události - VstupenkyCesky.com',
  description: 'Prohlédněte si všechny nadcházející koncerty, sportovní události, divadelní představení a festivaly v České republice.',
}

export default function EventsPage() {
  const categories = [
    { value: 'all', label: 'Vše', count: events.length },
    { value: 'koncert', label: 'Koncerty', count: events.filter(e => e.category === 'koncert').length },
    { value: 'sport', label: 'Sport', count: events.filter(e => e.category === 'sport').length },
    { value: 'divadlo', label: 'Divadlo', count: events.filter(e => e.category === 'divadlo').length },
    { value: 'festival', label: 'Festivaly', count: events.filter(e => e.category === 'festival').length },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-balance lg:text-5xl">
          Všechny události
        </h1>
        <p className="text-lg text-muted-foreground text-pretty">
          Prohlédněte si všechny nadcházející události v České republice a porovnejte ceny vstupenek
        </p>
      </div>

      {/* Category Tabs */}
      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="mb-8 grid w-full grid-cols-3 lg:flex lg:w-auto">
          {categories.map((category) => (
            <TabsTrigger key={category.value} value={category.value} className="gap-2">
              {category.label}
              <span className="rounded-full bg-muted px-2 py-0.5 text-xs">
                {category.count}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </TabsContent>

        {categories.slice(1).map((category) => (
          <TabsContent key={category.value} value={category.value} className="space-y-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {events
                .filter((event) => event.category === category.value)
                .map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
            </div>
            {events.filter((event) => event.category === category.value).length === 0 && (
              <div className="py-12 text-center">
                <p className="text-muted-foreground">
                  V této kategorii momentálně nejsou žádné události.
                </p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
