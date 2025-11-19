import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle, Shield, Search, Users, TrendingUp, CheckCircle } from 'lucide-react'
import { ContactDialog } from '@/components/contact-dialog'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'O nás - VstupenkyCesky.com',
  description: 'Jsme agregátor a porovnávač cen vstupenek v České republice. Pomáháme vám najít nejlepší nabídky od ověřených partnerů-resellerů.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h1 className="mb-6 text-4xl font-bold text-balance lg:text-5xl">
          O VstupenkyCesky.com
        </h1>
        <p className="text-xl text-muted-foreground text-pretty">
          Jsme váš průvodce světem vstupenek v České republice
        </p>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Who We Are */}
        <section>
          <Card className="border-2">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Kdo jsme</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                VstupenkyCesky.com je nezávislý agregátor a porovnávač cen vstupenek v České republice. 
                Naším cílem je usnadnit vám hledání vstupenek na vaše oblíbené události tím, že shromažďujeme 
                a porovnáváme nabídky od renomovaných resellerů vstupenek na jednom místě.
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Důležité:</strong> Nejsme prodejci vstupenek. 
                Neprodáváme vstupenky přímo, ale sloužíme jakomost mezi vámi a důvěryhodnými partnery-resellery, 
                kde můžete vstupenky zakoupit.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* What We Do */}
        <section>
          <h2 className="mb-6 text-3xl font-bold text-balance">Co děláme</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Search className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold">Porovnáváme ceny</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Shromažďujeme a porovnáváme ceny vstupenek z více zdrojů, abyste mohli najít nejlepší nabídku 
                  pro vaši událost.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold">Zobrazujeme transparentní ceny</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Vždy zobrazujeme jak aktuální cenu resellera, tak nominální hodnotu vstupenky (face value), 
                  abyste měli úplný přehled.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold">Pracujeme s ověřenými partnery</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Spolupracujeme pouze s renomovanými a důvěryhodnými resellery jako StubHub, Viagogo, 
                  Ticketmaster Resale a dalšími.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold">Šetříme váš čas</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Místo procházení několika webů najdete všechny nabídky na jednom místě a můžete je snadno porovnat.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Important Notice */}
        <section>
          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 flex-shrink-0 text-primary" />
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-foreground">
                    Důležité informace o našich službách
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="font-bold text-foreground">•</span>
                      <span>
                        <strong className="text-foreground">Nejsme oficiální prodejci:</strong> VstupenkyCesky.com 
                        není oficiálním prodejcem vstupenek ani pořadatelem událostí.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold text-foreground">•</span>
                      <span>
                        <strong className="text-foreground">Agregátor, ne prodejce:</strong> Pouze porovnáváme 
                        nabídky od partnerů-resellerů a přesměrováváme vás na jejich weby.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold text-foreground">•</span>
                      <span>
                        <strong className="text-foreground">Ceny nad nominální hodnotou:</strong> Ceny od resellerů 
                        mohou být vyšší než nominální hodnota vstupenky. Vždy zobrazujeme obě hodnoty.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold text-foreground">•</span>
                      <span>
                        <strong className="text-foreground">Nákup u partnerů:</strong> Všechny transakce probíhají 
                        přímo u našich partnerů. Jejich podmínky a zákaznický servis platí pro váš nákup.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <h3 className="mb-4 text-2xl font-bold text-balance">
                Máte dotazy?
              </h3>
              <p className="mb-6 text-muted-foreground text-pretty">
                Rádi vám odpovíme na jakékoli otázky ohledně našich služeb nebo pomůžeme najít vstupenky.
              </p>
              <ContactDialog
                trigger={
                  <Button size="lg">
                    Kontaktujte nás
                  </Button>
                }
              />
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
