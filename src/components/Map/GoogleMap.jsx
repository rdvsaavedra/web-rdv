import { useEffect, useRef } from 'react'
import './GoogleMap.css'

const GoogleMap = () => {
  const mapRef = useRef(null)

  useEffect(() => {
    const loadLeaflet = () => {
      // CSS
      if (!document.querySelector('link[href*="leaflet"]')) {
        const cssLink = document.createElement('link')
        cssLink.rel = 'stylesheet'
        cssLink.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
        document.head.appendChild(cssLink)
      }

      // JavaScript
      if (!window.L) {
        const script = document.createElement('script')
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
        script.onload = initMap
        document.head.appendChild(script)
      } else {
        initMap()
      }
    }

    const initMap = () => {
      if (mapRef.current && window.L) {
        if (mapRef.current._leaflet_id) {
          mapRef.current._leaflet_id = null
        }
        mapRef.current.innerHTML = ''

        const lat = -34.553982064300946
        const lng = -58.47770290581281

        // --- CAMBIO AQUÍ: Nivel de zoom intermedio ---
        const map = window.L.map(mapRef.current).setView([lat, lng], 16)

        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(map)

        const marker = window.L.marker([lat, lng]).addTo(map)
        marker.bindPopup(`
          <div style="text-align: center;">
            <strong>Iglesia Renuevo de Vida</strong><br>
            Crisólogo Larralde 3471<br>
            Saavedra, CABA 
          </div>
        `).openPopup()

        map.scrollWheelZoom.disable()
        map.on('focus', () => map.scrollWheelZoom.enable())
        map.on('blur', () => map.scrollWheelZoom.disable())
      }
    }

    loadLeaflet()

    return () => {
      if (mapRef.current && mapRef.current._leaflet_id) {
        mapRef.current._leaflet_id = null
      }
    }
  }, [])

  return <div ref={mapRef} className="google-map leaflet-map" />
}

export default GoogleMap