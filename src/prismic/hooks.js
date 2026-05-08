import { useState, useEffect } from 'react'
import { client } from './client'

const cache = {}

function usePrismicData(documentType) {
  const [data, setData] = useState(cache[documentType] || null)

  useEffect(() => {
    if (cache[documentType]) return
    client.getAllByType(documentType).then((response) => {
      cache[documentType] = response
      setData(response)
    }).catch(() => {})
  }, [documentType])

  return { data }
}

export { usePrismicData }
