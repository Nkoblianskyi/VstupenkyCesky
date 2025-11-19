import { Card, CardContent } from '@/components/ui/card'
import { Cookie } from 'lucide-react'

export const metadata = {
  title: 'Zásady používání cookies - VstupenkyCesky.com',
  description: 'Informace o tom, jak používáme cookies na našich webových stránkách a jak můžete spravovat své předvolby.',
}

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mx-auto mb-12 max-w-4xl">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Cookie className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-4xl font-bold">Zásady používání cookies</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Poslední aktualizace: {new Date().toLocaleDateString('cs-CZ', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl space-y-8">
        <Card>
          <CardContent className="prose prose-sm max-w-none p-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">1. Co jsou cookies</h2>
              <p className="leading-relaxed text-muted-foreground">
                Cookies jsou malé textové soubory, které se ukládají do vašeho prohlížeče při návštěvě webových stránek. 
                Cookies pomáhají webovým stránkám fungovat efektivněji a poskytovat lepší uživatelskou zkušenost.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">2. Jak používáme cookies</h2>
              <p className="leading-relaxed text-muted-foreground">
                VstupenkyCesky.com používá cookies k následujícím účelům:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Zapamatování vašich preferencí cookies</li>
                <li>Analýze návštěvnosti našich webových stránek</li>
                <li>Zlepšení funkčnosti webových stránek</li>
                <li>Zajištění bezpečnosti</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">3. Typy cookies, které používáme</h2>

              <h3 className="text-xl font-bold text-foreground">3.1 Nezbytné cookies</h3>
              <p className="leading-relaxed text-muted-foreground">
                Tyto cookies jsou nezbytné pro fungování našich webových stránek. Bez těchto cookies by některé 
                funkce nebyly dostupné.
              </p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li><strong className="text-foreground">cookie-consent:</strong> Ukládá vaše preference ohledně cookies</li>
              </ul>

              <h3 className="text-xl font-bold text-foreground">3.2 Analytické cookies</h3>
              <p className="leading-relaxed text-muted-foreground">
                Tyto cookies nám pomáhají pochopit, jak návštěvníci používají naše webové stránky. Informace jsou 
                shromažďovány anonymně a používají se ke zlepšení našich služeb.
              </p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li><strong className="text-foreground">Vercel Analytics:</strong> Sledování návštěvnosti a chování uživatelů</li>
              </ul>

              <h3 className="text-xl font-bold text-foreground">3.3 Funkční cookies</h3>
              <p className="leading-relaxed text-muted-foreground">
                Tyto cookies umožňují našim webovým stránkám zapamatovat si vaše volby (jako je jazyk nebo region) 
                a poskytovat vylepšené funkce.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">4. Cookies třetích stran</h2>
              <p className="leading-relaxed text-muted-foreground">
                Když kliknete na odkazy na webové stránky našich partnerů-resellerů, mohou být nastaveny cookies 
                třetích stran. Tyto cookies nejsou pod naší kontrolou a podléhají zásadám cookies příslušných partnerů.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Doporučujeme si přečíst zásady cookies našich partnerů:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>StubHub</li>
                <li>Viagogo</li>
                <li>Ticketmaster</li>
                <li>TicketSwap</li>
                <li>SeatGeek</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">5. Jak spravovat cookies</h2>
              
              <h3 className="text-xl font-bold text-foreground">5.1 Nastavení prohlížeče</h3>
              <p className="leading-relaxed text-muted-foreground">
                Většina webových prohlížečů umožňuje kontrolovat cookies prostřednictvím nastavení. Můžete nastavit 
                prohlížeč tak, aby odmítal všechny nebo některé cookies, nebo aby vás upozorňoval při nastavení cookies.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Odkazy na nastavení cookies v oblíbených prohlížečích:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/cs/kb/povoleni-zakazani-cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/cs-cz/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/cs-cz/microsoft-edge/odstranění-souborů-cookie-v-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
              </ul>

              <h3 className="text-xl font-bold text-foreground">5.2 Náš cookie banner</h3>
              <p className="leading-relaxed text-muted-foreground">
                Při první návštěvě našich webových stránek se zobrazí cookie banner, kde můžete vyjádřit své 
                preference ohledně cookies. Můžete přijmout nebo odmítnout nezbytné cookies.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">6. Dopad zamítnutí cookies</h2>
              <p className="leading-relaxed text-muted-foreground">
                Pokud odmítnete nebo zablokujete cookies, můžete stále používat naše webové stránky, ale některé 
                funkce nemusí fungovat správně nebo nemusí být dostupné.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">7. Změny těchto zásad</h2>
              <p className="leading-relaxed text-muted-foreground">
                Můžeme tyto zásady používání cookies čas od času aktualizovat. O jakýchkoli změnách vás budeme 
                informovat zveřejněním nových zásad na této stránce s aktualizovaným datem "Poslední aktualizace".
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">8. Další informace</h2>
              <p className="leading-relaxed text-muted-foreground">
                Pro více informací o tom, jak chráníme vaše osobní údaje, si prosím přečtěte naše{' '}
                <a href="/privacy-policy" className="text-primary hover:underline">Zásady ochrany osobních údajů</a>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">9. Kontaktujte nás</h2>
              <p className="leading-relaxed text-muted-foreground">
                Máte-li jakékoli dotazy ohledně našeho používání cookies, kontaktujte nás prosím prostřednictvím 
                našeho <a href="/kontakt" className="text-primary hover:underline">kontaktního formuláře</a>.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
