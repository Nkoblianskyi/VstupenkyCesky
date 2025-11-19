import Link from 'next/link'
import { Ticket } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Ticket className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">VstupenkyCesky.com</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Váš průvodce světem vstupenek. Porovnáváme ceny od partnerů-resellerů.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Rychlé odkazy</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/udalosti" className="text-muted-foreground hover:text-foreground">
                  Všechny události
                </Link>
              </li>
              <li>
                <Link href="/partneri" className="text-muted-foreground hover:text-foreground">
                  Naši partneři
                </Link>
              </li>
              <li>
                <Link href="/o-nas" className="text-muted-foreground hover:text-foreground">
                  O nás
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-muted-foreground hover:text-foreground">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold">Právní informace</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground">
                  Zásady ochrany osobních údajů
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-muted-foreground hover:text-foreground">
                  Zásady používání cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Kontakt</h3>
            <p className="text-sm text-muted-foreground">
              Máte dotazy? Kontaktujte nás prostřednictvím našeho{' '}
              <Link href="/kontakt" className="text-primary hover:underline">
                kontaktního formuláře
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} VstupenkyCesky.com. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  )
}
