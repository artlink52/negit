interface CardProps {
  Icon1: React.FC;
  Icon2?: React.FC;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ Icon1, Icon2, title, description }) => {
  return (
    <div className="flex-1 min-w-[300px] bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center justify-between">
      {/* Блок для иконок */}
      <div className="flex items-center justify-center space-x-4 mb-4">
        <div className="h-[60px] w-[60px]">
          <Icon1 />
        </div>
        {Icon2 && (
          <div className="h-[60px] w-[60px]">
            <Icon2 />
          </div>
        )}
      </div>

      {/* Заголовок карточки */}
      <h3 className="h3-font font-bold mt-4 mb-2 text-[#0F172A]">{title}</h3>

      {/* Описание */}
      <h4 className="h4-font text-gray-600">{description}</h4>
    </div>
  );
};

export default Card;
