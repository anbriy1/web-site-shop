import images from './images';

export const products = [
  {
    id: '1',
    name: 'Traxer Gaming PC',
    fname: 'ZET GAMING WARD H281 PC',
    image: images.img1,
    oldPrice: 149999,
    price: 129999,
    discount: '-20%',
    category: 'sale',
    description: 'Powerful gaming computer for any task. Perfect for modern games at high resolution.',
    specs: {
      cpu: 'Intel i5-12400F 2.5 GHz 6 cores',
      gpu: 'Palit GeForce RTX 3060Ti 8gb',
      ram: 'x2 8GB Kingston HyperX Fury Black RGB 3200MHz',
      storage: '512GB M.2 NVMe A-Data XPG SX8200 Pro',
      cover: 'DEEPCOOL MATREXX 55 MESH ADD-RGB 4F',
      oc: 'Liquid cooling'
    },
    review: {
      author: 'Igor_2024',
      date: 'Jan 15',
      likes: 12,
      advantages: 'Great gaming performance! Cyberpunk 2077 runs flawlessly on ultra settings. Quiet operation thanks to liquid cooling. Quality build, excellent cable management.',
    }
  },
  {
    id: '2',
    name: 'Palit GeForce RTX 3080 GamingPro',
    fname: 'Palit GeForce RTX 3080 GamingPro (LHR) Graphics Card',
    image: images.img2,
    oldPrice: 129999,
    price: 114999,
    discount: '-10%',
    category: 'sale',
    description: 'Modern NVIDIA GeForce RTX 4060 graphics card for Full HD and 1440p gaming with ray tracing.',
    specs: {
      memory: 'GDDR6X',
      interface: 'DisplayPort x3, HDMI',
      ports: 'Ultra HD 8K (7680x4320)',
      maks_p: '750 W',
      interface_p: 'PCI-E 4.0'
    },
    review: {
      author: 'User',
      date: 'Jan 28',
      likes: 3,
      advantages: 'One of the best mice I\'ve ever held. Uncompromising build, excellent materials, great internals. Solid choice overall.',
    }
  },
  {
    id: '3',
    name: 'Pro Gaming Mouse',
    fname: 'Razer Basilisk X HyperSpeed Gaming Optical Mouse',
    image: images.img3,
    oldPrice: 3399,
    price: 3099,
    discount: '-9%',
    category: 'sale',
    description: 'Professional gaming mouse with precise sensor and programmable buttons.',
    specs: {
      sensor: 'Optical 16000 DPI',
      buttons: '8 programmable buttons',
      connection: 'USB / Wireless',
      battery: 'Up to 70 hours',
      weight: '89g'
    },
    review: {
      author: 'ProGamer',
      date: 'Jan 22',
      likes: 8,
      advantages: 'Perfect shape for palm grip. Accurate sensor, no skipping. Battery lasts long - charge once a week. Macros easy to configure via software.',
      disadvantages: 'Side buttons are too close, accidentally press them sometimes.'
    }
  },
  {
    id: '4',
    name: 'Gaming Headphones',
    fname: 'Gaming Sven AP-U1001MV Black Headphones',
    image: images.img4,
    oldPrice: 49999,
    price: 29999,
    discount: '-20%',
    category: 'sale',
    description: 'Professional gaming headphones with 7.1 surround sound and noise cancellation.',
    specs: {
      driver: '50mm drivers',
      frequency: '20Hz - 20kHz',
      microphone: 'Detachable with noise cancellation',
      connection: 'USB / 3.5mm',
      cable: '2m, detachable'
    },
    review: {
      author: 'AudioFan',
      date: 'Jan 10',
      likes: 15,
      advantages: 'Sound is out of this world! Hear enemy footsteps from a mile away in CS2. Clean mic, teammates praise it in Discord. Ear cushions are soft, comfortable even after 5 hours.',
      disadvantages: 'A bit heavy, neck got tired at first. Long cable tangles under the desk.'
    }
  },
  {
    id: '5',
    name: 'Zalman N4 Gaming PC',
    fname: 'Zalman N4 4060TI Gaming PC',
    image: images.img5,
    price: 89999,
    category: 'hot',
    description: 'Compact gaming PC in stylish Zalman N4 case. Great value for money.',
    specs: {
      cpu: 'Intel Core i5-13400F',
      gpu: 'NVIDIA RTX 4060ti 8GB',
      ram: '16GB DDR4 3200MHz',
      storage: '512GB NVMe SSD',
      psu: '600W 80+ Bronze',
      cooling: 'Tower cooler'
    },
    review: {
      author: 'Max K.',
      date: 'Jan 5',
      likes: 7,
      advantages: 'Great value! All games run smoothly on high. Compact case, fits under the desk. Easy to upgrade later - plenty of room inside.',
      disadvantages: 'SSD a bit small, had to add 2TB HDD for games.'
    }
  },
  {
    id: '6',
    name: 'MATREXX 70 Gaming PC',
    fname: 'MATREXX 70 + 1660 Super Gaming PC',
    image: images.img6,
    price: 69999,
    category: 'hot',
    description: 'Stylish gaming PC in RGB case. Ready for upgrades.',
    specs: {
      cpu: 'AMD Ryzen 5 5600',
      gpu: 'NVIDIA GTX 1660 Super 6GB',
      ram: '16GB DDR4 3200MHz',
      storage: '512GB SATA SSD',
      psu: '550W 80+ Bronze',
      cooling: 'Air cooling'
    },
    review: {
      author: 'Student',
      date: 'Jan 18',
      likes: 5,
      advantages: 'First gaming PC - very happy! RGB looks cool. Valorant, Dota 2, Fortnite - all run great. Affordable for a student.',
      disadvantages: 'Have to lower settings to medium in AAA games.'
    }
  },
  {
    id: '7',
    name: '16GB HyperX Fury RGB',
    fname: '16GB HyperX Fury RGB 2400MHz',
    image: images.img7,
    price: 9999,
    category: 'hot',
    description: 'HyperX Fury RAM with RGB lighting. Reliability and style for your PC.',
    specs: {
      capacity: '16GB (2x8GB)',
      type: 'DDR4',
      frequency: '2400MHz',
      cas: 'CL15',
      voltage: '1.2V',
      rgb: 'Programmable RGB lighting'
    },
    review: {
      author: 'Modder',
      date: 'Jan 12',
      likes: 4,
      advantages: 'RGB syncs with motherboard perfectly. Stable for six months. Nice heat spreaders, HyperX quality as always.',
      disadvantages: '2400 MHz is outdated, better get 3200 or 3600.'
    }
  },
  {
    id: '8',
    name: 'Razer Black Widow',
    fname: 'Razer BlackWidow Mechanical Keyboard',
    image: images.img8,
    price: 10999,
    category: 'hot',
    description: 'Razer BlackWidow mechanical keyboard with green switches. Tactile feedback and durability.',
    specs: {
      switches: 'Razer Green (mechanical)',
      backlight: 'RGB Chroma 16.8M colors',
      anticost: 'N-Key Rollover',
      ports: 'USB pass-through',
      cable: 'Detachable, braided'
    },
    review: {
      author: 'TypingMaster',
      date: 'Jan 8',
      likes: 11,
      advantages: 'Typing is a pleasure! Clicks are loud but music to the ears. RGB customizable via Synapse, tons of effects. Built to last - Razer never disappoints.',
      disadvantages: 'Very loud switches, roommates complain at night.'
    }
  },
  {
    id: '9',
    name: '27" BenQ PD2705Q Monitor',
    image: images.img9,
    fname: '27-inch BenQ PD2705Q Monitor',
    price: 46999,
    category: 'stock',
    description: 'Professional 27-inch IPS monitor with 2K resolution for work and entertainment.',
    specs: {
      diagonal: '27 inch',
      resolution: '2560x1440 (2K QHD)',
      panel: 'IPS',
      refresh: '60Hz',
      response: '5ms',
      ports: 'HDMI, DisplayPort, USB-C'
    },
    review: {
      author: 'Designer',
      date: 'Jan 20',
      likes: 9,
      advantages: 'Amazing color accuracy! Perfect for Photoshop and Illustrator. IPS panel, great viewing angles. Thin bezels, minimal design. USB-C with laptop charging - very convenient.',
      disadvantages: '60Hz is low for fast-paced games, would prefer 144Hz.'
    }
  },
  {
    id: '10',
    name: 'Logitech G440 Hard Pad',
    image: images.img10,
    fname: 'Logitech G440 Hard Gaming Mouse Pad',
    price: 3549,
    category: 'stock',
    description: 'Hard gaming mouse pad with low friction. Ideal for shooters.',
    specs: {
      surface: 'Hard polymer',
      size: '340 x 280 x 3 mm',
      base: 'Rubber base',
      cleaning: 'Easy to clean',
      compatibility: 'All sensor types'
    },
    review: {
      author: 'Sniper',
      date: 'Jan 3',
      likes: 6,
      advantages: 'Glide is perfect! Accuracy improved noticeably in CS2. Doesn\'t slide on desk. Easy to clean - wipe with cloth and good as new.',
      disadvantages: 'Size too small for low sensitivity, better get XL version.'
    }
  },
  {
    id: '11',
    name: 'Western Digital 1TB Blue',
    fname: 'WD Blue 1TB HDD for Data Storage',
    image: images.img11,
    price: 3890,
    category: 'stock',
    description: 'Reliable WD Blue 1TB HDD for data, games and media storage.',
    specs: {
      capacity: '1TB',
      interface: 'SATA 6 Gb/s',
      rpm: '7200 RPM',
      cache: '64MB',
      formfactor: '3.5 inch',
      warranty: '2 year warranty'
    },
    review: {
      author: 'Collector',
      date: 'Jan 14',
      likes: 4,
      advantages: 'WD Blue - a classic! Runs quiet, doesn\'t overheat. Great value for storing games and movies. 7200 RPM - fast loading.',
      disadvantages: 'In 2025 HDD is outdated, better save for a larger SSD.'
    }
  },
  {
    id: '12',
    name: 'Gamemax RGB-850 PSU',
    image: images.img12,
    price: 6999,
    category: 'stock',
    description: '850W power supply with RGB lighting and 80+ Bronze certificate.',
    specs: {
      power: '850W',
      certificate: '80+ Bronze',
      pfc: 'Active PFC',
      cooling: '120mm RGB fan',
      cables: 'Semi-modular',
      protection: 'OVP, UVP, SCP, OPP, OCP'
    },
    review: {
      author: 'PC Builder',
      date: 'Jan 25',
      likes: 10,
      advantages: 'Enough power with headroom even for RTX 4080. Semi-modular cables - clean build. RGB fan looks great. Runs quiet, temps are fine.',
      disadvantages: 'Bronze certificate not the most efficient, Gold would be better.'
    }
  }
];

export const components = [
  {
    id: 'gpu-1',
    name: 'Palit GeForce RTX 3080 GamingPro',
    fname: 'Palit GeForce RTX 3080 GamingPro (LHR) Graphics Card',
    image: images.img2,
    oldPrice: 129999,
    price: 114999,
    discount: '-10%',
    category: 'Graphics Cards',
    description: 'Modern NVIDIA GeForce RTX 3080 graphics card for Ultra HD gaming with ray tracing.',
    specs: {
      memory: 'GDDR6X',
      interface: 'DisplayPort x3, HDMI',
      ports: 'Ultra HD 8K (7680x4320)',
      maks: '750 W',
      interface_p: 'PCI-E 4.0',
    },
    review: {
      author: 'Gamer2024',
      date: 'Jan 28',
      likes: 15,
      advantages: 'Powerful card for 4K gaming. Cyberpunk 2077 runs 60+ FPS on ultra in 4K. Great cooling - under load max 72°C. Nice RGB lighting.',
    }
  },
  {
    id: 'cpu-1',
    name: 'Intel Core i5-12400F',
    fname: 'Intel Core i5-12400F 2.5 GHz 6-Core Processor',
    image: images.intel_5_12,
    price: 15999,
    category: 'Processors',
    description: 'Performance 6-core Intel 12th gen processor for gaming and work.',
    specs: {
      cores: '6 cores',
      threads: '12 threads',
      frequency: 'Base: 2.5 GHz',
      turbo: 'Turbo: 4.4 GHz',
      socket: 'LGA 1700',
      tdp: 'TDP: 65 W'
    },
    review: {
      author: 'PCMaster',
      date: 'Jan 10',
      likes: 23,
      advantages: 'Great price/performance! Matches last gen i7 in games. Low temps even with stock cooler. Overclocks well on Z690.',
    }
  },
  {
    id: 'cooler-1',
    name: 'DEEPCOOL AG400 CPU Cooler',
    fname: 'DEEPCOOL AG400 CPU Cooler',
    image: images.coler,
    price: 2499,
    category: 'Cooling',
    description: 'Tower CPU cooler with 4 heat pipes',
    specs: {
      type: 'Tower',
      heatpipes: '4 heat pipes',
      fan: '120mm fan',
      rpm: '900-1600 RPM',
      noise: '27 dBA',
      compatibility: 'Intel LGA 1700/1200/1151, AMD AM4/AM5'
    },
    review: {
      author: 'CoolerFan',
      date: 'Jan 5',
      likes: 12,
      advantages: 'Great value! Keeps i5-12400F at 60°C under load. Syncs with motherboard RGB. Quiet, barely audible. Easy installation, looks clean.',
    }
  },
];

export const builds = [
  {
    id: 'build-1',
    name: 'Traxer Gaming PC',
    fname: 'ZET GAMING WARD H281 Ready Build',
    image: images.img1,
    oldPrice: 149999,
    price: 129999,
    discount: '-13%',
    category: 'Gaming PCs',
    description: 'Powerful gaming computer for any task. Perfect for modern games at high resolution.',
    specs: {
      cpu: 'Intel i5-12400F 2.5 GHz 6 cores',
      gpu: 'Palit GeForce RTX 3060Ti 8GB',
      ram: 'x2 8GB Kingston HyperX Fury Black RGB 3200MHz',
      storage: '512GB M.2 NVMe A-Data XPG SX8200 Pro',
      cover: 'DEEPCOOL MATREXX 55 MESH ADD-RGB 4F',
      cooling: 'Liquid cooling'
    },
    review: {
      author: 'Igor_2024',
      date: 'Jan 15',
      likes: 12,
      advantages: 'Great gaming performance! Cyberpunk 2077 runs flawlessly on ultra. Quiet thanks to liquid cooling. Quality build, excellent cable management.',
    }
  },
  {
    id: 'build-2',
    name: 'Zalman N4 Gaming PC',
    fname: 'Zalman N4 RTX 4060Ti Gaming PC',
    image: images.img5,
    price: 89999,
    category: 'Gaming PCs',
    description: 'Compact gaming PC in stylish Zalman N4 case. Great value for money.',
    specs: {
      cpu: 'Intel Core i5-13400F',
      gpu: 'NVIDIA RTX 4060Ti 8GB',
      ram: '16GB DDR4 3200MHz',
      storage: '512GB NVMe SSD',
      psu: '600W 80+ Bronze',
      cooling: 'Tower cooler'
    },
    review: {
      author: 'Max K.',
      date: 'Jan 5',
      likes: 7,
      advantages: 'Great value! All games run smoothly on high. Compact case, fits under desk. Easy to upgrade - plenty of room inside.',
    }
  },
  {
    id: 'build-3',
    name: 'MATREXX 70 Gaming PC',
    fname: 'MATREXX 70 + GTX 1660 Super Gaming PC',
    image: images.img6,
    price: 69999,
    category: 'Gaming PCs',
    description: 'Stylish gaming PC in RGB case. Ready for upgrades.',
    specs: {
      cpu: 'AMD Ryzen 5 5600',
      gpu: 'NVIDIA GTX 1660 Super 6GB',
      ram: '16GB DDR4 3200MHz',
      storage: '512GB SATA SSD',
      psu: '550W 80+ Bronze',
      cooling: 'Air cooling'
    },
    review: {
      author: 'Student',
      date: 'Jan 18',
      likes: 5,
      advantages: 'First gaming PC - very happy! RGB looks cool. Valorant, Dota 2, Fortnite - all run great. Affordable for a student.',
    }
  }
];
