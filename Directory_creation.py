import os

# Define the path where you want to create the folders
base_path = "../"

# Create folders for each letter of the alphabet
for letter in 'abcdefghijklmnopqrstuvwxyz':
    folder_path = os.path.join(base_path, letter)
    os.makedirs(folder_path, exist_ok=True)
    print(f"Created folder: {folder_path}")
