import { Card, CardContent } from '@/components/ui/card'
import { Shield } from 'lucide-react'

export const metadata = {
  title: 'Zásady ochrany osobních údajů - VstupenkyCesky.com',
  description: 'Přečtěte si naše zásady ochrany osobních údajů a zjistěte, jak shromažďujeme, používáme a chráníme vaše údaje.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mx-auto mb-12 max-w-4xl">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-4xl font-bold">Zásady ochrany osobních údajů</h1>
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
              <h2 className="text-2xl font-bold text-foreground">1. Úvod</h2>
              <p className="leading-relaxed text-muted-foreground">
                VstupenkyCesky.com ("my", "nás", "naše") respektuje vaše soukromí a zavazuje se chránit vaše osobní údaje. 
                Tyto zásady ochrany osobních údajů vysvětlují, jak shromažďujeme, používáme a chráníme informace, 
                které získáváme prostřednictvím naší webové stránky.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Důležité:</strong> VstupenkyCesky.com je agregátor a porovnávač cen. 
                Neprodáváme vstupenky přímo. Když použijete odkazy na naše partnery-resellery, podléhají jejich vlastním 
                zásadám ochrany osobních údajů.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">2. Jaké informace shromažďujeme</h2>
              
              <h3 className="text-xl font-bold text-foreground">2.1 Informace, které nám poskytnete</h3>
              <p className="leading-relaxed text-muted-foreground">
                Když nás kontaktujete prostřednictvím našeho kontaktního formuláře, shromažďujeme:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Vaše jméno</li>
                <li>E-mailovou adresu</li>
                <li>Obsah vaší zprávy</li>
              </ul>

              <h3 className="text-xl font-bold text-foreground">2.2 Automaticky shromažďované informace</h3>
              <p className="leading-relaxed text-muted-foreground">
                Při používání našich webových stránek můžeme automaticky shromažďovat:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>IP adresu</li>
                <li>Typ prohlížeče a operační systém</li>
                <li>Navštívené stránky a čas návštěvy</li>
                <li>Odkazující URL</li>
                <li>Cookies a podobné technologie (viz naše <a href="/cookie-policy" className="text-primary hover:underline">Zásady používání cookies</a>)</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">3. Jak používáme vaše informace</h2>
              <p className="leading-relaxed text-muted-foreground">
                Vaše osobní údaje používáme k:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Odpovězení na vaše dotazy a poskytnutí zákaznické podpory</li>
                <li>Zlepšení našich webových stránek a služeb</li>
                <li>Analýze používání webových stránek</li>
                <li>Zajištění bezpečnosti a prevence podvodů</li>
                <li>Splnění právních povinností</li>
              </ul>
              <p className="leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Neprodáváme ani nesdílíme</strong> vaše osobní údaje s třetími stranami 
                pro jejich marketingové účely.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">4. Sdílení informací s partnery</h2>
              <p className="leading-relaxed text-muted-foreground">
                Když kliknete na odkaz k našemu partnerovi-resellerovi (např. StubHub, Viagogo), budete přesměrováni 
                na jejich webové stránky. Od tohoto okamžiku se na vaše údaje vztahují jejich vlastní zásady ochrany 
                osobních údajů.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                VstupenkyCesky.com nesdílí vaše osobní údaje s partnery, pokud jim sami neposkytujete informace na 
                jejich webových stránkách.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">5. Cookies</h2>
              <p className="leading-relaxed text-muted-foreground">
                Používáme cookies ke zlepšení vašeho zážitku na našich webových stránkách. Pro více informací si 
                prosím přečtěte naše <a href="/cookie-policy" className="text-primary hover:underline">Zásady používání cookies</a>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">6. Zabezpečení údajů</h2>
              <p className="leading-relaxed text-muted-foreground">
                Přijímáme přiměřená technická a organizační opatření k ochraně vašich osobních údajů před neoprávněným 
                přístupem, ztrátou nebo zneužitím. Používáme šifrování HTTPS pro bezpečný přenos dat.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">7. Vaše práva (GDPR)</h2>
              <p className="leading-relaxed text-muted-foreground">
                Pokud jste rezidentem Evropské unie, máte následující práva:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li><strong className="text-foreground">Právo na přístup:</strong> Můžete požádat o kopii údajů, které o vás máme</li>
                <li><strong className="text-foreground">Právo na opravu:</strong> Můžete požádat o opravu nepřesných údajů</li>
                <li><strong className="text-foreground">Právo na výmaz:</strong> Můžete požádat o smazání vašich údajů</li>
                <li><strong className="text-foreground">Právo na omezení zpracování:</strong> Můžete požádat o omezení zpracování vašich údajů</li>
                <li><strong className="text-foreground">Právo na přenositelnost údajů:</strong> Můžete požádat o přenos údajů jinému správci</li>
                <li><strong className="text-foreground">Právo vznést námitku:</strong> Můžete vznést námitku proti zpracování vašich údajů</li>
              </ul>
              <p className="leading-relaxed text-muted-foreground">
                Pro uplatnění těchto práv nás prosím kontaktujte prostřednictvím našeho kontaktního formuláře.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">8. Uchování údajů</h2>
              <p className="leading-relaxed text-muted-foreground">
                Vaše osobní údaje uchováváme pouze po dobu nezbytně nutnou pro účely, pro které byly shromážděny, 
                nebo jak to vyžaduje zákon.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">9. Odkazy na třetí strany</h2>
              <p className="leading-relaxed text-muted-foreground">
                Naše webové stránky obsahují odkazy na webové stránky našich partnerů-resellerů. Nejsme odpovědní 
                za zásady ochrany osobních údajů nebo obsah těchto externích stránek. Doporučujeme si přečíst jejich 
                zásady ochrany osobních údajů.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">10. Děti</h2>
              <p className="leading-relaxed text-muted-foreground">
                Naše služby nejsou určeny pro osoby mladší 18 let. Vědomě neshromažďujeme osobní údaje od dětí.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">11. Změny těchto zásad</h2>
              <p className="leading-relaxed text-muted-foreground">
                Můžeme tyto zásady ochrany osobních údajů čas od času aktualizovat. O jakýchkoli změnách vás 
                budeme informovat zveřejněním nových zásad na této stránce s aktualizovaným datem "Poslední aktualizace".
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">12. Kontaktujte nás</h2>
              <p className="leading-relaxed text-muted-foreground">
                Máte-li jakékoli dotazy ohledně těchto zásad ochrany osobních údajů, kontaktujte nás prosím prostřednictvím 
                našeho <a href="/kontakt" className="text-primary hover:underline">kontaktního formuláře</a>.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
