import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { EventCard } from '@/components/event-card'
import { ContactDialog } from '@/components/contact-dialog'
import { events } from '@/lib/mock-events'
import { AlertCircle, Search, Shield, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function HomePage() {
  // Get featured events (first 6)
  const featuredEvents = events.slice(0, 6)

  return (
    <div className="flex flex-col">
      {/* Important Disclaimer - Above the fold */}
      <section className="border-b border-border bg-muted/50 py-8">
        <div className="container mx-auto px-4">
          <Card className="border-2 border-primary/20 bg-card">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-3">
                  <h2 className="text-xl font-bold text-balance">Důležité informace</h2>
                  <div className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                    <p className="text-foreground">
                      <strong>Jsme agregátor a porovnávač cen vstupenek.</strong> VstupenkyCesky.com neprodává vstupenky přímo. 
                      Porovnáváme ceny od našich partnerů-resellerů a přesměrováváme vás na jejich stránky, kde probíhá samotný nákup.
                    </p>
                    <p>
                      <strong>Důležité upozornění:</strong> Ceny zobrazené na našem webu mohou být vyšší než nominální hodnota vstupenky (face value). 
                      Vždy zobrazujeme jak aktuální cenu, tak nominální hodnotu, abyste mohli učinit informované rozhodnutí.
                    </p>
                    <p>
                      Všechny transakce probíhají přímo s našimi partnery-resellery. Podmínky, vrácení a zákaznický servis poskytují přímo partneři.
                    </p>
                  </div>
                  <Button variant="link" className="p-0 h-auto text-primary" asChild>
                    <Link href="/o-nas">Více o nás →</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 lg:py-2.5">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4" variant="secondary">
              Agregátor vstupenek pro Českou republiku
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance lg:text-6xl">
              Porovnejte ceny vstupenek z více zdrojů
            </h1>
            <p className="mb-8 text-lg text-muted-foreground text-pretty lg:text-xl">
              Najděte nejlepší nabídky na koncerty, sport, divadlo a festivaly od našich ověřených partnerů-resellerů.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="min-w-[200px]">
                <Link href="/udalosti">
                  <Search className="mr-2 h-5 w-5" />
                  Prohlížet události
                </Link>
              </Button>
              <ContactDialog
                trigger={
                  <Button size="lg" variant="outline" className="min-w-[200px]">
                    Kontaktujte nás
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-balance lg:text-4xl">
              Proč používat VstupenkyCesky.com?
            </h2>
            <p className="text-muted-foreground text-pretty">
              Ušetřete čas a peníze porovnáním cen od více resellerů na jednom místě
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                
                <h3 className="mb-2 text-xl font-bold">Porovnání v reálném čase</h3>
                <p className="text-muted-foreground text-pretty">
                  Okamžitě porovnejte ceny od všech našich partnerů a najděte nejlepší nabídku pro vaši událost.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                
                <h3 className="mb-2 text-xl font-bold">Ověření partneři</h3>
                <p className="text-muted-foreground text-pretty">
                  Spolupracujeme pouze s renomovanými a důvěryhodnými resellery vstupenek jako StubHub, Viagogo a dalšími.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                
                <h3 className="mb-2 text-xl font-bold">Transparentní ceny</h3>
                <p className="text-muted-foreground text-pretty">
                  Vždy zobrazujeme jak aktuální cenu, tak nominální hodnotu vstupenky, takže máte úplný přehled.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-balance lg:text-4xl">
                Nadcházející události
              </h2>
              <p className="text-muted-foreground text-pretty">
                Objevte nejžhavější události v České republice
              </p>
            </div>
            <Button variant="outline" asChild className="hidden sm:flex">
              <Link href="/udalosti">Zobrazit vše</Link>
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline" asChild className="w-full">
              <Link href="/udalosti">Zobrazit všechny události</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 lg:py-5">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-balance lg:text-4xl">
              Často kladené otázky
            </h2>
            <p className="text-muted-foreground text-pretty">
              Odpovědi na nejčastější dotazy o našich službách
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  Co je VstupenkyCesky.com?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  VstupenkyCesky.com je agregátor a porovnávač cen vstupenek v České republice. Nejsme prodejci 
                  vstupenek - místo toho shromažďujeme a porovnáváme nabídky od důvěryhodných partnerů-resellerů 
                  jako StubHub, Viagogo, Ticketmaster Resale a dalších. Když najdete nejlepší cenu, přesměrujeme 
                  vás na web partnera, kde můžete vstupenku zakoupit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Prodáváte vstupenky přímo?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Ne, VstupenkyCesky.com neprodává vstupenky přímo. Jsme agregátor, který pouze porovnává ceny 
                  od našich partnerů-resellerů. Když kliknete na "Zobrazit nabídku", budete přesměrováni na web 
                  partnera, kde probíhá samotný nákup. Všechny transakce, platby a dodání vstupenek zajišťují 
                  přímo naši partneři.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Proč jsou ceny vyšší než nominální hodnota?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Naši partneři jsou reseleři vstupenek, ne oficiální prodejci. Ceny na sekundárním trhu mohou 
                  být vyšší než nominální hodnota (face value) z různých důvodů, včetně vysoké poptávky, 
                  vyprodaných událostí nebo dostupnosti premium míst. Pro transparentnost vždy zobrazujeme jak 
                  aktuální cenu resellera, tak nominální hodnotu vstupenky.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Jak funguje porovnání cen?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Pro každou událost shromažďujeme nabídky od našich ověřených partnerů-resellerů. Zobrazujeme 
                  všechny dostupné ceny od nejnižší po nejvyšší, společně s informacemi o nominální hodnotě a 
                  dostupnosti. Můžete snadno porovnat nabídky a vybrat si tu nejlepší pro vás.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  Jsou ceny konečné?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Ceny zobrazené na VstupenkyCesky.com jsou aktuální v době zobrazení, ale mohou se změnit. 
                  Konečná cena včetně všech poplatků je zobrazena na webu partnera během procesu nákupu. 
                  Doporučujeme dokončit nákup rychle, protože ceny a dostupnost se mohou měnit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  Kdo jsou vaši partneři?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Spolupracujeme pouze s renomovanými a důvěryhodnými resellery vstupenek, včetně StubHub, Viagogo, 
                  Ticketmaster Resale, TicketSwap a SeatGeek. Všichni naši partneři mají dlouholetou historii 
                  v oboru a nabízejí zabezpečené platby a ochranu kupujícího. Více informací najdete na naší{' '}
                  <a href="/partneri" className="text-primary hover:underline">stránce partnerů</a>.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">
                  Co když mám problém s nákupem?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Protože všechny nákupy probíhají přímo u našich partnerů, jakékoli problémy s objednávkou, 
                  platbou, vrácením peněz nebo dodáním vstupenek musíte řešit přímo s partnerem, u kterého 
                  jste vstupenku zakoupili. Každý partner má svůj vlastní zákaznický servis a politiky vrácení. 
                  VstupenkyCesky.com nemůže řešit tyto záležitosti, protože nejsme součástí transakce.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left">
                  Je používání VstupenkyCesky.com bezplatné?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Ano, používání VstupenkyCesky.com je zcela bezplatné! Neúčtujeme žádné poplatky za porovnání 
                  cen nebo za přesměrování na weby našich partnerů. Platíte pouze cenu vstupenky (plus případné 
                  poplatky) přímo partnerovi, u kterého nakupujete.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="text-left">
                  Jak zjistím, zda jsou vstupenky autentické?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Všichni naši partneři nabízejí záruky autenticity vstupenek. Většina z nich má programy ochrany 
                  kupujících, které zajišťují, že dostanete platné vstupenky včas nebo vám vrátí peníze. Před 
                  nákupem si přečtěte podmínky konkrétního partnera pro více informací o jejich zárukách.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="text-left">
                  Mohu vrátit vstupenky?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Politiky vrácení se liší podle partnera a typu vstupenky. Obecně vstupenky na sekundárním trhu 
                  nelze vrátit, pokud není událost zrušena. Před nákupem si vždy přečtěte podmínky vrácení 
                  konkrétního partnera. V případě zrušené události kontaktujte přímo partnera, u kterého jste 
                  vstupenku zakoupili.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-12 text-center">
              <Card className="bg-muted/50">
                <CardContent className="p-6">
                  <p className="mb-4 text-muted-foreground">
                    Nenašli jste odpověď na svůj dotaz?
                  </p>
                  <ContactDialog
                    trigger={
                      <Button variant="outline">
                        Kontaktujte nás
                      </Button>
                    }
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-8">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden border-2 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="mb-4 text-3xl font-bold text-balance lg:text-4xl">
                  Nenašli jste, co hledáte?
                </h2>
                <p className="mb-8 text-lg text-muted-foreground text-pretty">
                  Kontaktujte nás a my vám pomůžeme najít vstupenky na vaši událost od našich partnerů.
                </p>
                <ContactDialog
                  trigger={
                    <Button size="lg" className="min-w-[200px]">
                      Kontaktujte nás
                    </Button>
                  }
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
