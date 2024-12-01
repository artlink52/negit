import {
  AgileIcon,
  CppIcon,
  FastApiIcon,
  GitLabIcon,
  JavaIcon,
  OracleIcon,
  PostgresIcon,
  PythonIcon,
  ReactIcon,
  RedisIcon,
  UbuntuIcon,
  WindowsIcon,
} from "./icons";

export const sections = [
  {
    heading: "Языки программирования",
    cards: [
      {
        Icon1: CppIcon,
        title: "C++",
        description:
          "Для диспетчеризации данных и геометрического анализа 3D моделей",
      },
      {
        Icon1: PythonIcon,
        title: "Python",
        description: " Для алгоритмов детектирования и машинного обучения",
      },
      {
        Icon1: JavaIcon,
        title: "Java",
        description: "Для интеграции с PLM системами",
      },
      {
        Icon1: ReactIcon,
        title: "React JS",
        description: "Для разработки веб-интерфейсов",
      },
    ],
  },
  {
    heading: "Базы данных и ОС",
    cards: [
      {
        Icon1: OracleIcon,
        Icon2: PostgresIcon,
        title: "Oracle, Postgres",
        description: "Для хранения и обработки данных",
      },
      {
        Icon1: UbuntuIcon,
        Icon2: WindowsIcon,
        title: "Ubuntu, Windows",
        description: "Операционные системы для различных задач",
      },
    ],
  },
  {
    heading: "Транспортный слой",
    cards: [
      {
        Icon1: RedisIcon,
        Icon2: FastApiIcon,
        title: "Redis, FastAPI",
        description: "Для быстрой и эффективной передачи данных",
      },
    ],
  },
  {
    heading: "Методологии",
    cards: [
      {
        Icon1: AgileIcon,
        title: "Agile/Scrum",
        description: "Гибкие методологии управления проектами",
      },
    ],
  },
  {
    heading: "Система контроля версий",
    cards: [
      {
        Icon1: GitLabIcon,
        title: "GitLab",
        description: "Для управления кодом и совместной разработки",
      },
    ],
  },
];
