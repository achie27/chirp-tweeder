import { Session } from "next-auth";
import { SessionContextValue, useSession } from "next-auth/react";
import { createContext, Dispatch, FC, ReactNode, SetStateAction, useCallback, useContext, useEffect, useState } from "react"
import { getLocalStorageItem, setLocalStorageItem } from "../lib/utility";

export interface IFilter {
  name: string,
  userNames: Array<string>;
  contextAnnotationIds: Array<string>;
}

interface IFilterContext {
  savedFilters: Array<IFilter>;
  addFilter: (f: IFilter) => void;
  mergedUserCtxAnnotationMap: Record<string, Record<string, boolean>>;
}


const filterContext = createContext<IFilterContext>({
  savedFilters: [],
  addFilter: () => {
    throw new Error("Too soon");
  },
  mergedUserCtxAnnotationMap: {}
});

export const FilterContextProvider: FC<{ children: ReactNode }> = ({ children }) => {

  const [savedFilters, setSavedFilters] = useState<Array<IFilter>>([]);
  const [initialFilterLoadDone, setInitialFilterLoadDone] = useState<boolean>(false);
  const [mergedUserCtxAnnotationMap, setMergedUserCtxAnnotationMap] = useState<IFilterContext["mergedUserCtxAnnotationMap"]>({});

  useEffect(() => {
    if (!initialFilterLoadDone) {
      console.log("loading initial savedFilters")
      setSavedFilters(getLocalStorageItem("tweeder.savedFilters", []))
      setInitialFilterLoadDone(true)
    }
  }, [])

  useEffect(() => {
    if (initialFilterLoadDone) {
      console.log("saving savedFilters as", savedFilters)
      setLocalStorageItem({key: "tweeder.savedFilters", value: savedFilters});
    }
    setMergedUserCtxAnnotationMap(savedFilters.reduce((acc, cur) => {
      cur.userNames.forEach(u => {
        if (!acc[u]) acc[u] = {};
        cur.contextAnnotationIds.forEach(ca => {
          acc[u][ca] = true;
        })
      })
      return acc;
    }, {} as IFilterContext["mergedUserCtxAnnotationMap"])); 
  }, [savedFilters]);

  const addFilter = useCallback((newFilter: IFilter) => {
    setSavedFilters(savedFilters.concat(newFilter));
  }, [savedFilters])

  return (
    <filterContext.Provider 
      value={{
        savedFilters,
        addFilter,
        mergedUserCtxAnnotationMap
      }}
    >
      {children}
    </filterContext.Provider>
  );
}

export const useFilterContext = () => useContext(filterContext);