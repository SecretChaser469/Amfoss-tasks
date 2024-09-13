import os
import cv2
from PIL import Image, ImageDraw
import numpy as np

# Step 1: Load and sort images based on filenames
def load_images(folder):
    image_files = sorted([f for f in os.listdir(folder) if f.endswith('.png')], key=lambda x: int(x.split('.')[0]))
    images = [cv2.imread(os.path.join(folder, img)) for img in image_files]
    return image_files, images

# Step 2: Detect the dot's position and color
def detect_dot(image):
    # Convert the image to grayscale to simplify the detection
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    _, thresh = cv2.threshold(gray, 240, 255, cv2.THRESH_BINARY_INV)
    
    # Find non-white pixels (the dot)
    non_white = cv2.findNonZero(thresh)
    
    if non_white is not None:
        # Get the coordinates of the dot
        avg_coords = np.mean(non_white, axis=0)[0]
        avg_coords = tuple(map(int, avg_coords))
        # Get the color of the dot (first non-white pixel)
        dot_color = image[avg_coords[1], avg_coords[0]]
        return avg_coords, tuple(dot_color)
    return None, None

# Step 3: Draw lines between dots using Pillow
def draw_line(draw, start_pos, end_pos, color):
    draw.line([start_pos, end_pos], fill=color, width=3)

def is_white_image(image):
    return np.all(image == 255)

# Step 4: Main function to stitch images
def stitch_images(folder):
    image_files, images = load_images(folder)
    
    # Initialize variables for line drawing
    last_position = None
    last_color = None
    
    # Create a blank canvas for the final stitched image
    final_image = Image.new('RGB', (512, 512), (255, 255, 255))
    draw = ImageDraw.Draw(final_image)

    for i, img in enumerate(images):
        position, color = detect_dot(img)
        
        if is_white_image(img):
            # If it's a white image, treat as line break
            last_position = None
            last_color = None
        elif position is not None:
            # If there's a previous dot, draw a line from the last to the current
            if last_position is not None:
                draw_line(draw, last_position, position, last_color)
            # Update the last known position and color
            last_position = position
            last_color = color
    
    # Save the final stitched image
    final_image.save('stitched_image.png')

if __name__ == '__main__':
    folder = 'path_to_your_assets_folder'
    stitch_images(folder)
