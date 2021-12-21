import { useContext } from "react";
import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";
import { Card } from "~/components/card";
import { SettingCard } from "~/components/settingCard";
import { map } from "rxjs";
import { SettingService, StoreContext } from "../store/store";

export let loader: LoaderFunction = () => {
  return json({ name: "edsion" });
};

export let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  };
};

function Setting() {
  const {
    selectedStore,
    versionList,
    specList,
    selectedDispatch,
  } = useContext(StoreContext);
  const { version, color, wheel, interior, optional } = selectedStore.current;
  return (
    <div className="setting">
      <SettingCard
        title="version"
        data={versionList}
        selectedId={version}
        onSelected={(value) => {
          selectedDispatch({
            type: 'version',
            data: value
          })
          //select$.next(value)
          selectedStore.current.version = value;
        }}
      />
      <SettingCard
        title="color"
        data={specList?.filter((item) => item.type === 1)}
        selectedId={color}
        onSelected={(value) => {
          selectedDispatch({
            type: 'color',
            data: value
          })
          selectedStore.current.color = value;
        }}
      />
      <SettingCard
        title="wheel"
        data={specList?.filter((item) => item.type === 2)}
        selectedId={wheel}
        onSelected={(value) => {
          selectedDispatch({
            type: 'wheel',
            data: value
          })
          selectedStore.current.wheel = value;
        }}
      />
      <SettingCard
        title="interior"
        data={specList?.filter((item) => item.type === 3)}
        selectedId={interior}
        onSelected={(value) => {
          selectedDispatch({
            type: 'interior',
            data: value
          })
          selectedStore.current.interior = value;
        }}
      />
      <SettingCard
        title="optional"
        data={specList?.filter((item) => item.type === 4)}
        selectedId={optional}
        onSelected={(value) => {
          const index = selectedStore.current.optional.lastIndexOf(value);
          if (index > -1) {
            selectedStore.current.optional.splice(index, 1);
          } else {
            selectedStore.current.optional.push(value);
          }
        }}
      />
    </div>
  );
}

export default function Index() {
  // return (
  //   <StoreContext.Provider value={SettingService()}>
  //     <Setting/>
  //   </StoreContext.Provider>
  // );
  return (
    <p>hello</p>
  )
}
