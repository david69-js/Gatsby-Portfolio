import { useState, useEffect } from 'react'
import { client } from './client'

function usePrismicData(documentType) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client.getAllByType(documentType).then((response) => {
      setData(response)
      setLoading(false)
    }).catch(() => {
      setLoading(false)
    })
  }, [documentType])

  return { data, loading }
}

export { usePrismicData }
