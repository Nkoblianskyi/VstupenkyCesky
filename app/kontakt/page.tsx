import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ContactDialog } from '@/components/contact-dialog'
import { Button } from '@/components/ui/button'
import { Mail, MessageSquare, HelpCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Kontakt - VstupenkyCesky.com',
  description: 'Máte dotazy? Kontaktujte nás prostřednictvím našeho formuláře a my se vám brzy ozveme.',
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h1 className="mb-6 text-4xl font-bold text-balance lg:text-5xl">
          Kontaktujte nás
        </h1>
        <p className="text-xl text-muted-foreground text-pretty">
          Máte dotazy ohledně našich služeb nebo potřebujete pomoc? Rádi vám odpovíme.
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-3">
        {/* Main Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Kontaktní formulář
              </CardTitle>
              <CardDescription>
                Vyplňte formulář níže a my se vám co nejdříve ozveme
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactDialog
                trigger={
                  <Button size="lg" className="w-full">
                    Otevřít kontaktní formulář
                  </Button>
                }
              />

              <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">Čas odpovědi:</strong> Obvykle odpovídáme do 24-48 hodin v pracovní dny.
                </p>
                <p>
                  <strong className="text-foreground">Co můžeme:</strong> Odpovídat na dotazy o našich službách, 
                  pomoci najít události nebo vysvětlit, jak náš agregátor funguje.
                </p>
                <p>
                  <strong className="text-foreground">Co nemůžeme:</strong> Řešit problémy s nákupy u partnerů - 
                  pro to prosím kontaktujte přímo partnera, u kterého jste vstupenku zakoupili.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* FAQ Link */}
          

          {/* About Link */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <MessageSquare className="h-5 w-5 text-primary" />
                Více o nás
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                Chcete vědět více o tom, jak fungujeme?
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/o-nas">O nás</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Partners Link */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Naši partneři</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                Prohlédněte si seznam našich ověřených partnerů-resellerů
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/partneri">Zobrazit partnery</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Important Notice */}
      <div className="mx-auto mt-12 max-w-4xl">
        <Card className="border-2 border-muted">
          <CardContent className="p-6">
            <h3 className="mb-3 font-bold text-foreground">
              Problémy s nákupem u partnera?
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Pokud máte problémy s nákupem vstupenky, vrácením peněz nebo dodáním, prosím kontaktujte přímo 
              partnera-resellera, u kterého jste vstupenku zakoupili (např. StubHub, Viagogo, atd.). 
              VstupenkyCesky.com je pouze agregátor a neprovádí prodej vstupenek, proto nemůžeme řešit tyto záležitosti.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
