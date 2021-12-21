import React, { useReducer, useRef } from "react";
import { BehaviorSubject } from "rxjs";
import SettingData from "./data";

interface IVersion {
  id: string;
  title: string;
}
interface ISpec {
  type: number;
  id: string;
  value: string;
}
interface ISelectedStore {
  version: string;
  color: string;
  wheel: string;
  interior: string;
  optional: string[];
}
type ISelectAction = {
  type: string
  data: any
}
interface IStoreContext {
  selectedStore: { current: ISelectedStore };
  select$: BehaviorSubject<any>;
  versionList: IVersion[];
  specList: ISpec[];
  selectedState: ISelectedStore
  selectedDispatch: (action: ISelectAction)=>void
}

export const StoreContext = React.createContext<IStoreContext>(
  {} as IStoreContext
);
export const SettingService = () => {
  const versionList = SettingData.data.versionList as any[];
  const specList = SettingData.data.specList as any[];
  const selectedStore = useRef<ISelectedStore>({
    version: versionList?.[0]?.id,
    color: specList?.filter((item: any) => item.type === 1)?.[0]?.id,
    wheel: specList?.filter((item: any) => item.type === 2)?.[0]?.id,
    interior: specList?.filter((item: any) => item.type === 3)?.[0]?.id,
    optional: [specList?.filter((item: any) => item.type === 4)?.[0]?.id],
  });
  const reducer = (
    state: ISelectedStore,
    action: ISelectAction
  ) => {
    switch (action.type) {
      case "version":
        return { ...state, version: action.data };
      case "color":
        return { ...state, color: action.data };
      case "interior":
        return { ...state, interior: action.data };
      case "wheel":
        return { ...state, wheel: action.data };
      case "optional":
        return {...state, optional: action.data}
      //   case 'reset':
      //     return init(action.payload);
      default:
        throw new Error();
    }
  };
  const [selectedState, selectedDispatch] = useReducer(reducer,selectedStore.current);
  const select$ = new BehaviorSubject(selectedStore.current);

  return {
    select$,
    selectedStore,
    versionList,
    specList,
    selectedState,
    selectedDispatch
  };
};
