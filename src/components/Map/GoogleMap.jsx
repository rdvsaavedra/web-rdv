import { useEffect, useRef } from 'react'
import './GoogleMap.css'

const GoogleMap = () => {
  const mapRef = useRef(null)

  useEffect(() => {
    // Cargar Leaflet CSS y JS
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
        // Limpiar mapa anterior si existe
        if (mapRef.current._leaflet_id) {
          mapRef.current._leaflet_id = null
        }
        mapRef.current.innerHTML = ''

        // Coordenadas de Crisólogo Larralde 3471, CABA
        const lat = -34.5886
        const lng = -58.5094

        // Crear el mapa
        const map = window.L.map(mapRef.current).setView([lat, lng], 15)

        // Agregar tiles (el mapa base)
        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(map)

        // Agregar marcador
        const marker = window.L.marker([lat, lng]).addTo(map)
        marker.bindPopup(`
          <div style="text-align: center;">
            <strong>Iglesia Renuevo de Vida</strong><br>
            Crisólogo Larralde 3471<br>
            CABA, Devoto
          </div>
        `).openPopup()

        // Configuraciones adicionales
        map.scrollWheelZoom.disable()
        map.on('focus', () => map.scrollWheelZoom.enable())
        map.on('blur', () => map.scrollWheelZoom.disable())
      }
    }

    loadLeaflet()

    // Cleanup
    return () => {
      if (mapRef.current && mapRef.current._leaflet_id) {
        mapRef.current._leaflet_id = null
      }
    }
  }, [])

  return <div ref={mapRef} className="google-map leaflet-map" />
}

export default GoogleMap