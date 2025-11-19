'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { CheckCircle } from 'lucide-react'

export function ContactDialog({ trigger }: { trigger?: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setLoading(false)
    setOpen(false)
    setShowSuccess(true)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {trigger || <Button>Kontaktujte nás</Button>}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Kontaktní formulář</DialogTitle>
            <DialogDescription>
              Máte dotazy? Napište nám a my se vám brzy ozveme.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Jméno *</Label>
              <Input id="name" name="name" required placeholder="Vaše jméno" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="vas@email.cz"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Předmět</Label>
              <Input id="subject" name="subject" placeholder="Předmět zprávy" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Zpráva *</Label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Vaše zpráva..."
                rows={5}
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Odesílám...' : 'Odeslat zprávu'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-[400px]">
          <div className="flex flex-col items-center justify-center gap-4 py-6 text-center">
            <div className="rounded-full bg-green-100 p-4">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <DialogHeader>
              <DialogTitle className="text-2xl">Zpráva úspěšně odeslána!</DialogTitle>
              <DialogDescription className="text-base">
                Děkujeme za váš dotaz. Brzy se vám ozveme na váš email.
              </DialogDescription>
            </DialogHeader>
            <Button 
              onClick={() => setShowSuccess(false)} 
              className="mt-2 min-w-[150px]"
            >
              Zavřít
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
