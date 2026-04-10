import { useRef, useEffect, useCallback } from 'react'

/**
 * Lightweight scroll-reveal hook using IntersectionObserver.
 * Returns a ref callback — attach it to any element to reveal on scroll.
 *
 * @param {Object} options
 * @param {number} options.threshold - Visibility ratio to trigger (default 0.15)
 * @param {string} options.rootMargin - Observer margin (default '0px 0px -40px 0px')
 */
export function useScrollReveal({ threshold = 0.15, rootMargin = '0px 0px -40px 0px' } = {}) {
  const elementsRef = useRef(new Set())
  const observerRef = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observerRef.current?.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )

    // Observe any elements already registered
    elementsRef.current.forEach((el) => {
      observerRef.current?.observe(el)
    })

    return () => {
      observerRef.current?.disconnect()
    }
  }, [threshold, rootMargin])

  const ref = useCallback((node) => {
    if (!node) return
    elementsRef.current.add(node)
    node.classList.add('scroll-reveal')
    observerRef.current?.observe(node)
  }, [])

  return ref
}
