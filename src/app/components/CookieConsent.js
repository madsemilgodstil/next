// components/CookieConsent.js
'use client' // Add this line at the top

import { useState, useEffect } from 'react'
import styles from './CookieConsent.module.css'

export default function CookieConsent () {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if the user has already given consent
    const consentGiven = localStorage.getItem('cookieConsent')
    if (!consentGiven) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className={styles.cookieConsent}>
      <p>
        Vi bruger cookies til at forbedre din oplevelse. Ved at klikke
        "Accepter" giver du samtykke til vores brug af cookies.
      </p>
      <button onClick={handleAccept}>Accepter</button>
    </div>
  )
}
