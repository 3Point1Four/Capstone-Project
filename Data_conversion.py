import os
import subprocess

# Replace 'new_directory_path' with the path of the directory you want to change to
new_directory_path = 'path_to_input_files'

# Change the current directory to the specified path
subprocess.run(f'cd {new_directory_path}', shell=True)

# Loop through numbers 1 to 25
for i in range(0, 26):
    input_filename = f'input_{i}.png'
    output_filename = f'output_{i}.svg'
    your_command = f'potracer {input_filename} -o {output_filename}'

    # Execute the command for each input and output filename
    subprocess.run(your_command, shell=True)
