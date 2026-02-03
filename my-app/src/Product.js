import images from './images';

export const products = [
  {
    id: '1',
    name: 'Игровой компьютер Traxer',
    fname: 'ПК ZET GAMING WARD H281',
    image: images.img1,
    oldPrice: 149999,
    price: 129999,
    discount: '-20%',
    category: 'sale',
    description: 'Мощный игровой компьютер для любых задач. Идеально подходит для современных игр в высоком разрешении.',
    specs: {
      cpu: ' Intel i5-12400F 2.5 ГГц 6 ядер',
      gpu: 'Palit GeForce RTX 3060Ti 8gb',
      ram: 'x2 8GB Kingston HyperX Fury Black RGB 3200MHz',
      storage: '512GB M.2 NVMe A-Data XPG SX8200 Pro',
      cover: 'DEEPCOOL MATREXX 55 MESH ADD-RGB 4F',
      oc: 'Жидкостное охлаждение'
    },
    review: {
      author: 'Игорь_2024',
      date: '15 января',
      likes: 12,
      advantages: 'Отличная производительность в играх! Cyberpunk 2077 на ультра настройках идёт без проблем. Тихая работа благодаря жидкостному охлаждению. Собран качественно, кабель-менеджмент на высоте.',
    }
  },

  {
    id: '2',
    name: 'Palit GeForce RTX 3080 GamingPro',
    fname: 'Видеокарта Palit GeForce RTX 3080 GamingPro (LHR)',
    image: images.img2,
    oldPrice: 129999,
    price: 114999,
    discount: '-10%',
    category: 'sale',
    description: 'Современная видеокарта NVIDIA GeForce RTX 4060 для игр в Full HD и 1440p с трассировкой лучей.',
    specs: {
      memory: ' GDDR6X',
      interface: 'DisplayPort x3, HDMI',
      ports: 'МUltra HD 8K (7680x4320)',
      maks_p: '750 Вт',
      interface_p: 'PCI-E 4.0'
    },
    review: {
      author: 'Пользователь',
      date: '28 января',
      likes: 3,
      advantages: 'Одна из лучших мышек, что я держал в руке. - бескомпромиссная сборка- - отличные материалы, создающие лучшие тактильные ощущения. - великолепная начинка, не ограничивающая пользователя ни в чём (если вы не хотите до главного недостатка) И я бы хотел ахнуть разочароваться, о кстати',
    }
  },
  {
    id: '3',
    name: 'Игровая мышь Pro',
    fname: 'Мышь Razer Basilisk X HyperSpeed игровая оптическая ',
    image: images.img3,
    oldPrice: 3399,
    price: 3099,
    discount: '-9%',
    category: 'sale',
    description: 'Профессиональная игровая мышь с точным сенсором и программируемыми кнопками.',
    specs: {
      sensor: 'Оптический 16000 DPI',
      buttons: '8 программируемых кнопок',
      connection: 'USB / Беспроводная',
      battery: 'До 70 часов работы',
      weight: '89 грамм'
    },
    review: {
      author: 'ProGamer',
      date: '22 января',
      likes: 8,
      advantages: 'Идеальная форма для хвата palm grip. Сенсор точный, никаких пропусков. Батарея держит действительно долго - заряжаю раз в неделю. Макросы настраиваются легко через софт.',
      disadvantages: 'Боковые кнопки расположены слишком близко, иногда случайно нажимаю.'
    }
  },
  {
    id: '4',
    name: 'Наушники Gaming',
    fname: 'Наушники Gaming Sven AP-U1001MV черные',
    image: images.img4,
    oldPrice: 49999,
    price: 29999,
    discount: '-20%',
    category: 'sale',
    description: 'Профессиональные игровые наушники с объемным звуком 7.1 и шумоподавлением.',
    specs: {
      driver: '50mm динамики',
      frequency: '20Hz - 20kHz',
      microphone: 'Съемный с шумоподавлением',
      connection: 'USB / 3.5mm',
      cable: '2 метра, съемный'
    },
    review: {
      author: 'AudioFan',
      date: '10 января',
      likes: 15,
      advantages: 'Звук просто космический! Слышу шаги противников за милю в CS2. Микрофон чистый, товарищи в дискорде хвалят. Амбушюры мягкие, не давят даже после 5 часов игры.',
      disadvantages: 'Тяжеловаты, первое время шея уставала. Кабель длинный, путается под ногами.'
    }
  },
  {
    id: '5',
    name: 'Игровой компьютер Zalman N4',
    fname: 'Игровой компьютер Zalman N4 4060TI ',
    image: images.img5,
    price: 89999,
    category: 'hot',
    description: 'Компактный игровой ПК в стильном корпусе Zalman N4. Отличное соотношение цены и производительности.',
    specs: {
      cpu: 'Intel Core i5-13400F',
      gpu: 'NVIDIA RTX 4060ti 8GB',
      ram: '16GB DDR4 3200MHz',
      storage: '512GB NVMe SSD',
      psu: '600W 80+ Bronze',
      cooling: 'Башенный кулер'
    },
    review: {
      author: 'Максим К.',
      date: '5 января',
      likes: 7,
      advantages: 'За эти деньги - огонь! Все игры на высоких идут плавно. Корпус компактный, поместился под стол. Апгрейд в будущем не проблема - места внутри достаточно.',
      disadvantages: 'SSD маловат, пришлось докупить HDD на 2TB для игр.'
    }
  },
  {
    id: '6',
    name: 'Игровой компьютер MATREXX 70',
    fname: 'Игровой компьютер MATREXX 70 + 1660 Super  ',

    image: images.img6,
    price: 69999,
    category: 'hot',
    description: 'Стильный игровой компьютер в корпусе с RGB подсветкой. Готов к апгрейду.',
    specs: {
      cpu: 'AMD Ryzen 5 5600',
      gpu: 'NVIDIA GTX 1660 Super 6GB',
      ram: '16GB DDR4 3200MHz',
      storage: '512GB SATA SSD',
      psu: '550W 80+ Bronze',
      cooling: 'Воздушное охлаждение'
    },
    review: {
      author: 'Студент',
      date: '18 января',
      likes: 5,
      advantages: 'Первый игровой ПК - очень доволен! RGB подсветка выглядит круто. Valorant, Dota 2, Fortnite - всё летает. Цена адекватная для студента.',
      disadvantages: 'В AAA играх приходится снижать настройки до средних.'
    }
  },
  {
    id: '7',
    name: '16 Гб HyperX Fury RGB',
    fname: '16 Гб HyperX Fury RGB 2400MHz',

    image: images.img7,
    price: 9999,
    category: 'hot',
    description: 'Оперативная память HyperX Fury с RGB подсветкой. Надежность и стиль для вашего ПК.',
    specs: {
      capacity: '16GB (2x8GB)',
      type: 'DDR4',
      frequency: '2400MHz',
      cas: 'CL15',
      voltage: '1.2V',
      rgb: 'Программируемая RGB подсветка'
    },
    review: {
      author: 'Модер',
      date: '12 января',
      likes: 4,
      advantages: 'RGB синхронизируется с материнкой без проблем. Работает стабильно уже полгода. Радиаторы красивые, качество сборки HyperX как всегда на высоте.',
      disadvantages: 'Частота 2400 МГц уже устарела, лучше брать 3200 или 3600.'
    }
  },
  {
    id: '8',
    name: 'Razer Black Widow',
        fname: 'Механическая клавиатура Razer BlackWidow',

    image: images.img8,
    price: 10999,
    category: 'hot',
    description: 'Механическая клавиатура Razer BlackWidow с зелеными переключателями. Тактильный отклик и долговечность.',
    specs: {
      switches: 'Razer Green (механические)',
      backlight: 'RGB Chroma с 16.8 млн цветов',
      anticost: 'N-Key Rollover',
      ports: 'USB pass-through',
      cable: 'Отсоединяемый, плетеный'
    },
    review: {
      author: 'TypingMaster',
      date: '8 января',
      likes: 11,
      advantages: 'Печатать - одно удовольствие! Кликают громко, но это как музыка для ушей. RGB настраивается через Synapse, куча эффектов. Качество на века - Razer не подводит.',
      disadvantages: 'Очень громкие переключатели, соседи по комнате жалуются ночью.'
    }
  },
  {
    id: '9',
    name: 'Монитор 27" BenQ PD2705Q',
    image: images.img9,
    fname:'27-дюймовый монитор BenQ PD2705Q',
    price: 46999,
    category: 'stock',
    description: 'Профессиональный 27-дюймовый монитор с IPS матрицей и разрешением 2K для работы и развлечений.',
    specs: {
      diagonal: '27 дюймов',
      resolution: '2560x1440 (2K QHD)',
      panel: 'IPS',
      refresh: '60Hz',
      response: '5ms',
      ports: 'HDMI, DisplayPort, USB-C'
    },
    review: {
      author: 'Дизайнер',
      date: '20 января',
      likes: 9,
      advantages: 'Цветопередача шикарная! Для фотошопа и иллюстратора - идеал. IPS матрица, углы обзора отличные. Рамки тонкие, дизайн минималистичный. USB-C с зарядкой ноута - очень удобно.',
      disadvantages: 'Для динамичных игр 60Hz маловато, хотелось бы 144Hz.'
    }
  },
  {
    id: '10',
    name: 'Коврик Logitech G440 Hard',
    image: images.img10,
    fname:'Игровой коврик для мыши Logitech G440 Hard',
    price: 3549,
    category: 'stock',
    description: 'Жесткий игровой коврик для мыши с низким трением. Идеально для шутеров.',
    specs: {
      surface: 'Жесткая полимерная',
      size: '340 x 280 x 3 мм',
      base: 'Резиновое основание',
      cleaning: 'Легко чистится',
      compatibility: 'Все типы сенсоров'
    },
    review: {
      author: 'Снайпер',
      date: '3 января',
      likes: 6,
      advantages: 'Скольжение просто идеальное! В CS2 точность выросла заметно. Не скользит по столу вообще. Легко чистится - протёр влажной тряпкой и как новый.',
      disadvantages: 'Размер маловат для низкой чувствительности, лучше брать XL версию.'
    }
  },
  {
    id: '11',
    name: 'Western Digital Original 1TB Blue',
        fname: 'жесткий диск WD Blue на 1TB для хранения данных ',

    image: images.img11,
    price: 3890,
    category: 'stock',
    description: 'Надежный жесткий диск WD Blue на 1TB для хранения данных, игр и мультимедиа.',
    specs: {
      capacity: '1TB',
      interface: 'SATA 6 Gb/s',
      rpm: '7200 RPM',
      cache: '64MB',
      formfactor: '3.5 дюйма',
      warranty: '2 года гарантии'
    },
    review: {
      author: 'Коллекционер',
      date: '14 января',
      likes: 4,
      advantages: 'WD Blue - классика! Работает тихо, не греется. За свои деньги - отличный вариант для хранения игр и фильмов. 7200 оборотов - загрузка быстрая.',
      disadvantages: 'В 2025 году HDD уже архаизм, лучше копить на SSD побольше.'
    }
  },
  {
    id: '12',
    name: 'Блок питания Gamemax RGB-850',
    image: images.img12,
    price: 6999,
    category: 'stock',
    description: 'Блок питания мощностью 850W с RGB подсветкой и сертификатом 80+ Bronze.',
    specs: {
      power: '850W',
      certificate: '80+ Bronze',
      pfc: 'Active PFC',
      cooling: '120mm RGB вентилятор',
      cables: 'Полумодульные',
      protection: 'OVP, UVP, SCP, OPP, OCP'
    },
    review: {
      author: 'Сборщик ПК',
      date: '25 января',
      likes: 10,
      advantages: 'Мощности хватает с запасом даже для RTX 4080. Полумодульные кабели - порядок в корпусе. RGB вентилятор красиво светится. Работает тихо, температуры в норме.',
      disadvantages: 'Bronze сертификат - не самый экономичный, Gold было бы лучше.'
    }
  }
];


export const components = [
  {
    id: 'gpu-1',
    name: 'Palit GeForce RTX 3080 GamingPro',
    fname: 'Видеокарта Palit GeForce RTX 3080 GamingPro (LHR)',
    image: images.img2, 
    oldPrice: 129999,
    price: 114999,
    discount: '-10%',
    category: 'Видеокарты',
    description: 'Современная видеокарта NVIDIA GeForce RTX 3080 для игр в Ultra HD с трассировкой лучей.',
    specs: {
      memory: 'GDDR6X',
      interface: 'DisplayPort x3, HDMI',
      ports: 'Ultra HD 8K (7680x4320)',
      maks: '750 Вт',
      interface_p: 'PCI-E 4.0',
    },
    review: {
      author: 'Геймер2024',
      date: '28 января',
      likes: 15,
      advantages: 'Мощная карта для 4K гейминга. Cyberpunk 2077 на ультра в 4K идёт 60+ FPS. Охлаждение отличное - под нагрузкой не больше 72°C. RGB подсветка красивая.',
    }
  },
  {
    id: 'cpu-1',
    name: 'Intel Core i5-12400F',
    fname: 'Процессор Intel Core i5-12400F 2.5 ГГц 6 ядер',
    image: images.intel_5_12, 
    price: 15999,
    category: 'Процессоры',
    description: 'Производительный 6-ядерный процессор Intel 12-го поколения для игр и работы.',
    specs: {
      cores: 'Количество ядер: 6',
      threads: 'Количество потоков: 12',
      frequency: 'Базовая частота: 2.5 ГГц',
      turbo: 'Турбо частота: 4.4 ГГц',
      socket: 'Сокет: LGA 1700',
      tdp: 'TDP: 65 Вт'
    },
    review: {
      author: 'ПКмастер',
      date: '10 января',
      likes: 23,
      advantages: 'Отличное соотношение цена/производительность! В играх не уступает i7 прошлого поколения. Температуры низкие даже на боксовом кулере. Разгоняется хорошо на Z690.',
    }
  },
  {
    id: 'cooler-1',
    name: 'CPU DEEPCOOL AG400',
    fname: 'Кулер для процессора CPU DEEPCOOL AG400',
    image: images.coler, 
    price: 2499,
    category: 'Охлаждение',
    description: 'Башенный кулер для процессора с 4 тепловыми трубками',
    specs: {
      type: 'Тип: Башенный',
      heatpipes: 'Тепловые трубки: 4 шт',
      fan: 'Вентилятор: 120мм ',
      rpm: 'Обороты: 900-1600 RPM',
      noise: 'Уровень шума: 27 dBA',
      compatibility: 'Совместимость: Intel LGA 1700/1200/1151, AMD AM4/AM5'
    },
    review: {
      author: 'Охладитель',
      date: '5 января',
      likes: 12,
      advantages: 'За свою цену - просто огонь! i5-12400F держит на 60°C под нагрузкой.  Cинхронизируется с материнкой. Тихий, практически не слышно. Установка простая.выглядит аккуратно и не раздражает, отлично......',
    }
  },

  
];



export const builds = [
  {
    id: 'build-1',
    name: 'Игровой ПК Traxer Gaming',
    fname: 'Готовая сборка ПК ZET GAMING WARD H281',
    image: images.img1, 
    oldPrice: 149999,
    price: 129999,
    discount: '-13%',
    category: 'Игровые ПК',
    description: 'Мощный игровой компьютер для любых задач. Идеально подходит для современных игр в высоком разрешении.',
    specs: {
      cpu: 'Intel i5-12400F 2.5 ГГц 6 ядер',
      gpu: 'Palit GeForce RTX 3060Ti 8GB',
      ram: 'x2 8GB Kingston HyperX Fury Black RGB 3200MHz',
      storage: '512GB M.2 NVMe A-Data XPG SX8200 Pro',
      cover: 'DEEPCOOL MATREXX 55 MESH ADD-RGB 4F',
      cooling: 'Жидкостное охлаждение'
    },
    review: {
      author: 'Игорь_2024',
      date: '15 января',
      likes: 12,
      advantages: 'Отличная производительность в играх! Cyberpunk 2077 на ультра настройках идёт без проблем. Тихая работа благодаря жидкостному охлаждению. Собран качественно, кабель-менеджмент на высоте.',
    }
  },
  {
    id: 'build-2',
    name: 'Игровой ПК Zalman N4',
    fname: 'Игровой компьютер Zalman N4 RTX 4060Ti',
    image: images.img5, 
    price: 89999,
    category: 'Игровые ПК',
    description: 'Компактный игровой ПК в стильном корпусе Zalman N4. Отличное соотношение цены и производительности.',
    specs: {
      cpu: 'Intel Core i5-13400F',
      gpu: 'NVIDIA RTX 4060Ti 8GB',
      ram: '16GB DDR4 3200MHz',
      storage: '512GB NVMe SSD',
      psu: '600W 80+ Bronze',
      cooling: 'Башенный кулер'
    },
    review: {
      author: 'Максим К.',
      date: '5 января',
      likes: 7,
      advantages: 'За эти деньги - огонь! Все игры на высоких идут плавно. Корпус компактный, поместился под стол. Апгрейд в будущем не проблема - места внутри достаточно.',
    }
  },
  {
    id: 'build-3',
    name: 'Игровой ПК MATREXX 70',
    fname: 'Игровой компьютер MATREXX 70 + GTX 1660 Super',
    image: images.img6, 
    price: 69999,
    category: 'Игровые ПК',
    description: 'Стильный игровой компьютер в корпусе с RGB подсветкой. Готов к апгрейду.',
    specs: {
      cpu: 'AMD Ryzen 5 5600',
      gpu: 'NVIDIA GTX 1660 Super 6GB',
      ram: '16GB DDR4 3200MHz',
      storage: '512GB SATA SSD',
      psu: '550W 80+ Bronze',
      cooling: 'Воздушное охлаждение'
    },
    review: {
      author: 'Студент',
      date: '18 января',
      likes: 5,
      advantages: 'Первый игровой ПК - очень доволен! RGB подсветка выглядит круто. Valorant, Dota 2, Fortnite - всё летает. Цена адекватная для студента.',
    }
  }
];