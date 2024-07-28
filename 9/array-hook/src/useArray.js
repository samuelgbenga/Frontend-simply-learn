import { useState, useCallback } from "react"

export default function useArray(initialValue){

     // create state to hold the array
  const [array, setArray] = useState(initialValue)


  // push to array
  const push = useCallback(element => {
    setArray(a => [...a, element])
  }, [])

  // push to array
  const pushInFront = useCallback(element => {
    setArray(a => [element, ...a])
  }, [])


  // replace an item
  const replace = useCallback((index, newElement) => {
    setArray(a => {
      return [...a.slice(0, index), newElement, ...a.slice(index + 1)]
    })
  }, [])


  // filter with provided callback function
  const filter = useCallback(callback => {
    setArray(a => {
      return a.filter(callback)
    })
  }, [])


  // remove element at a particular index
  const remove = useCallback(index => {
    setArray(a => {
      return [...a.slice(0, index), ...a.slice(index + 1)]
    })
  }, [])

   // clear the array
   const clear = useCallback(() => {
    setArray([])
  }, [])

   // reset the array to intial value
   const reset = useCallback(() => {
    setArray(initialValue)
  }, [initialValue])

   // return array, setArray with key set
   return { array, set: setArray, push, replace, filter, remove, clear, reset, pushInFront }
}