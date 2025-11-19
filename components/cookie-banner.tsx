'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
  }

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom">
      <Card className="mx-auto max-w-4xl border-2 shadow-lg">
        <CardHeader>
          <CardTitle>Používání cookies</CardTitle>
          <CardDescription>
            Používáme vlastní a cookies třetích stran k zobrazení relevantnějšího obsahu na základě vašeho prohlížení a navigační historie.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Přijměte nebo spravujte nastavení cookies níže. Zde je naše{' '}
            <Link href="/cookie-policy" className="text-primary hover:underline">
              zásady používání cookies
            </Link>
            .
          </p>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button onClick={handleAccept} className="flex-1">
            Přijmout všechny cookies
          </Button>
          <Button onClick={handleReject} variant="outline" className="flex-1">
            Odmítnout
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
