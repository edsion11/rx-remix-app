import { Card } from "../card";

interface ISettingCard {
  title: string;
  data: any[];
  selectedId: string | string[];
  onSelected: (param: any) => void;
}

export const SettingCard: React.FC<ISettingCard> = ({
  title,
  data,
  selectedId,
  onSelected,
}) => {
  return (
    <div className="setting-card">
      <h4>{title}</h4>
      {data?.map((item: any) => (
        <Card
          key={item.id.toString()}
          id={item.id}
          onClick={onSelected}
          text={item?.value || item?.title}
          selected={
            selectedId instanceof Array
              ? selectedId.includes(item.id)
              : selectedId === item.id
          }
        />
      ))}
    </div>
  );
};
