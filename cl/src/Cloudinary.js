import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dlywhxskx', 
  api_key: '225854735595346', 
  api_secret: 'VT_AP4sqpZMFJ2ZVMh55rbygIew' 
});

export const { Image } = cloudinary(cloudinary.config);
export const { Video } = cloudinary(cloudinary.config);