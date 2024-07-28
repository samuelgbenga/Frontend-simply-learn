import { useEffect, useState } from "react"


// in summary this hook sets and get the item
// on a local storage for you
export function useLocalStorage(key, initialValue){


    const [value, setValue] = useState(()=>{

        const item = localStorage.getItem(key);

        // if null  set the initial value
        // as initial value
        if(item == null){
            
            if (typeof initialValue === "function") {
                
                // set to function if function
                return initialValue();

            } else {
                
                // set to normal variable else
                return initialValue;
            }
        }

        else{
            return JSON.parse(item);
        }

    }
    )

    // use effect to mornitor change in value
    useEffect(() => {

        if (value === undefined) {
          // if value does not exist remove the key
          localStorage.removeItem(key)
    
        } else {
          localStorage.setItem(key, JSON.stringify(value))
        }
      }, [value, key])

      // send use state
      return [value, setValue]

}