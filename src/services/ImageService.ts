// services/ImageService.ts
import carrent1 from "../Assests/carrent1.webp";
import carrent2 from "../Assests/carrent2.webp";
import carrent3 from "../Assests/carent3.webp";
import carrent4 from "../Assests/car4.webp";
import carrent5 from "../Assests/carrent5.webp";
import carrent6 from "../Assests/carrent6.webp";
import carrent7 from "../Assests/carrent7.webp";
import carrent8 from "../Assests/carrent8.webp";
import carrent9 from "../Assests/carrent9.webp";

// Import swiper images
import thumb1 from "../Assests/thumb1.webp";
import detailthumb2 from "../Assests/detailthumb2.webp";
import detailthumb3 from "../Assests/detailthumb3.webp";

export interface CarImageSet {
  main: string;
  thumbnails: string[];
}

// Map car brands/models to images
const carImageMap: Record<string, CarImageSet> = {
  // Koenigsegg
  'koenigsegg': {
    main: carrent1,
    thumbnails: [carrent1, thumb1, detailthumb2]
  },
  'koenigsegg sport': {
    main: carrent1,
    thumbnails: [carrent1, thumb1, detailthumb2]
  },
  // Nissan
  'nissan': {
    main: carrent2,
    thumbnails: [carrent2, detailthumb2, detailthumb3]
  },
  'nissan gtr': {
    main: carrent2,
    thumbnails: [carrent2, detailthumb2, detailthumb3]
  },
  'nissan gt-r': {
    main: carrent2,
    thumbnails: [carrent2, detailthumb2, detailthumb3]
  },
  // Toyota
  'toyota': {
    main: carrent3,
    thumbnails: [carrent3, thumb1, detailthumb2]
  },
  // Honda
  'honda': {
    main: carrent4,
    thumbnails: [carrent4, detailthumb2, detailthumb3]
  },
  // BMW
  'bmw': {
    main: carrent5,
    thumbnails: [carrent5, thumb1, detailthumb2]
  },
  // Mercedes
  'mercedes': {
    main: carrent6,
    thumbnails: [carrent6, detailthumb2, detailthumb3]
  },
  // Audi
  'audi': {
    main: carrent7,
    thumbnails: [carrent7, thumb1, detailthumb2]
  },
  // Ford
  'ford': {
    main: carrent8,
    thumbnails: [carrent8, detailthumb2, detailthumb3]
  },
  // Tesla
  'tesla': {
    main: carrent9,
    thumbnails: [carrent9, thumb1, detailthumb2]
  },
  // MG
  'mg': {
    main: carrent8,
    thumbnails: [carrent8, detailthumb2, detailthumb3]
  },
  // Default for any car
  'default': {
    main: carrent1,
    thumbnails: [carrent1, thumb1, detailthumb2]
  }
};

// Get images for a car
export const getCarImages = (carName: string, carModel: string = ''): CarImageSet => {
  const searchKey = `${carName.toLowerCase()} ${carModel.toLowerCase()}`.trim();
  
  // Try exact match first
  for (const [key, images] of Object.entries(carImageMap)) {
    if (searchKey.includes(key) || key.includes(searchKey)) {
      return images;
    }
  }
  
  // Try car name only
  if (carImageMap[carName.toLowerCase()]) {
    return carImageMap[carName.toLowerCase()];
  }
  
  // Default based on car type
  const carType = getCarType(carName, carModel);
  return getDefaultImagesByType(carType);
};

// Determine car type from name/model
const getCarType = (carName: string, carModel: string): string => {
  const name = carName.toLowerCase();
  const model = carModel.toLowerCase();
  const fullName = `${name} ${model}`;
  
  if (fullName.includes('sport') || fullName.includes('gt') || fullName.includes('racing')) {
    return 'sport';
  } else if (fullName.includes('suv') || fullName.includes('4x4') || fullName.includes('crossover')) {
    return 'suv';
  } else if (fullName.includes('hatch') || fullName.includes('compact')) {
    return 'hatchback';
  } else if (fullName.includes('sedan') || fullName.includes('saloon')) {
    return 'sedan';
  } else if (fullName.includes('mpv') || fullName.includes('minivan')) {
    return 'mpv';
  } else if (fullName.includes('coupe') || fullName.includes('convertible')) {
    return 'coupe';
  } else {
    return 'default';
  }
};

// Get default images based on car type
const getDefaultImagesByType = (type: string): CarImageSet => {
  const typeMap: Record<string, CarImageSet> = {
    'sport': {
      main: carrent1,
      thumbnails: [carrent1, thumb1, detailthumb2]
    },
    'suv': {
      main: carrent4,
      thumbnails: [carrent4, detailthumb2, detailthumb3]
    },
    'hatchback': {
      main: carrent9,
      thumbnails: [carrent9, thumb1, detailthumb2]
    },
    'sedan': {
      main: carrent2,
      thumbnails: [carrent2, detailthumb2, detailthumb3]
    },
    'mpv': {
      main: carrent6,
      thumbnails: [carrent6, detailthumb2, detailthumb3]
    },
    'coupe': {
      main: carrent7,
      thumbnails: [carrent7, thumb1, detailthumb2]
    },
    'default': {
      main: carrent1,
      thumbnails: [carrent1, thumb1, detailthumb2]
    }
  };
  
  return typeMap[type] || typeMap.default;
};

// Get a random image for car lists
export const getRandomCarImage = (carName: string): string => {
  const images = [
    carrent1, carrent2, carrent3, carrent4, carrent5,
    carrent6, carrent7, carrent8, carrent9
  ];
  
  // Use car name to generate consistent "random" image
  const hash = carName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return images[hash % images.length];
};

// Export default images for easy access
export const defaultCarImages = {
  carrent1, carrent2, carrent3, carrent4, carrent5,
  carrent6, carrent7, carrent8, carrent9,
  thumb1, detailthumb2, detailthumb3
};