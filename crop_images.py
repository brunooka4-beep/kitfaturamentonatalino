from PIL import Image
import os
import numpy as np

def crop_black_borders(image_path):
    try:
        img = Image.open(image_path)
        img = img.convert("RGB")
        bg = Image.new(img.mode, img.size, img.getpixel((0,0)))
        diff = Image.fromarray(np.array(img) - np.array(bg)) # This logic is flawed for black borders if (0,0) is not black
        
        # Better approach: Convert to numpy array and find non-black rows/cols
        img_array = np.array(img)
        # Threshold for "black" (allow some noise)
        threshold = 30
        mask = np.all(img_array < threshold, axis=2)
        
        # Invert mask to get non-black pixels
        non_black = ~mask
        
        # Find coordinates of non-black pixels
        coords = np.argwhere(non_black)
        
        if coords.size == 0:
            print(f"Skipping {image_path}: Image seems fully black")
            return

        y0, x0 = coords.min(axis=0)
        y1, x1 = coords.max(axis=0) + 1
        
        # Crop
        cropped_img = img.crop((x0, y0, x1, y1))
        cropped_img.save(image_path)
        print(f"Cropped {image_path}")
        
    except Exception as e:
        print(f"Error processing {image_path}: {e}")

images = [
    "client/public/guirlanda-profiteroles.jpg",
    "client/public/mendiants.jpg",
    "client/public/verrine-morango.jpg",
    "client/public/rabanada.jpg",
    "client/public/pavlova-taca.jpg"
]

for img_path in images:
    if os.path.exists(img_path):
        crop_black_borders(img_path)
    else:
        print(f"File not found: {img_path}")
