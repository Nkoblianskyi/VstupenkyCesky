import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { partners } from '@/lib/mock-events'
import { ExternalLink, Shield, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Naši partneři - VstupenkyCesky.com',
  description: 'Spolupracujeme s renomovanými resellery vstupenek jako StubHub, Viagogo, Ticketmaster Resale a dalšími.',
}

export default function PartnersPage() {
  const officialPartners = partners.filter(p => 
    ['ticketportal', 'ticketmaster-cz', 'eventim-cz'].includes(p.id)
  )
  
  const resellers = partners.filter(p => 
    !['ticketportal', 'ticketmaster-cz', 'eventim-cz'].includes(p.id)
  )

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <Badge className="mb-4" variant="secondary">
          Důvěryhodní partneři
        </Badge>
        <h1 className="mb-6 text-4xl font-bold text-balance lg:text-5xl">
          Naši partneři
        </h1>
        <p className="text-xl text-muted-foreground text-pretty">
          Spolupracujeme s oficiálními českými operátory i renomovanými resellery vstupenek
        </p>
      </div>

      {/* Partner Benefits */}
      <div className="mx-auto mb-12 max-w-4xl">
        <Card className="border-2 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold">Ověření partneři</h3>
                  <p className="text-sm text-muted-foreground">
                    Všichni naši partneři jsou renomované společnosti s dlouholetou historií
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold">Bezpečné nákupy</h3>
                  <p className="text-sm text-muted-foreground">
                    Partneři nabízejí zabezpečené platby a ochranu kupujícího
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <ExternalLink className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold">Přímý přístup</h3>
                  <p className="text-sm text-muted-foreground">
                    Přesměrováváme vás přímo na web partnera pro nákup
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Official Czech Operators Section */}
      <div className="mx-auto max-w-4xl mb-16">
        <h2 className="mb-8 text-center text-2xl font-bold">
          Oficiální čeští prodejci vstupenek
        </h2>
        <p className="mb-8 text-center text-muted-foreground">
          Přední oficiální operátoři na českém trhu s vstupenkami za nominální cenu
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {officialPartners.map((partner) => (
            <Card key={partner.id} className="group transition-all hover:shadow-lg border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{partner.name}</span>
                  <Badge className="bg-green-500 text-white">Oficiální</Badge>
                </CardTitle>
                <CardDescription>
                  Oficiální prodejce vstupenek v ČR
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Navštívit web
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Resellers Section */}
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-center text-2xl font-bold">
          Mezinárodní reseleři vstupenek
        </h2>
        <p className="mb-8 text-center text-muted-foreground">
          Renomovaní reseleři na sekundárním trhu vstupenek
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {resellers.map((partner) => (
            <Card key={partner.id} className="group transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{partner.name}</span>
                  <Badge variant="secondary">Reseller</Badge>
                </CardTitle>
                <CardDescription>
                  Sekundární trh vstupenek
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Navštívit web
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Disclaimer */}
        <Card className="mt-12 border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Důležité informace
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">VstupenkyCesky.com není prodejcem vstupenek.</strong> Jsme 
              agregátor, který porovnává ceny od partnerů-resellerů uvedených výše.
            </p>
            <p>
              Když kliknete na "Zobrazit nabídku" u jakékoli události, budete přesměrováni na web jedného z našich 
              partnerů, kde můžete vstupenku zakoupit.
            </p>
            <p>
              <strong className="text-foreground">Ceny a dostupnost:</strong> Všechny ceny, dostupnost vstupenek, 
              podmínky prodeje, vrácení peněz a zákaznický servis jsou poskytovány přímo partnery. VstupenkyCesky.com 
              nenese odpovědnost za transakce provedené u partnerů.
            </p>
            <p>
              <strong className="text-foreground">Ceny mohou být vyšší než nominální hodnota:</strong> Naši partneři 
              jsou reseleři, proto jejich ceny mohou překročit nominální hodnotu vstupenky. Pro transparentnost vždy 
              zobrazujeme obě hodnoty.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
