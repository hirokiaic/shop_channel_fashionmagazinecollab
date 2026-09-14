'use client'

import { useSearchParams } from 'next/navigation'

export function useUrlParam(key: string) {
  const searchParams = useSearchParams()

  return searchParams.get(key)
}