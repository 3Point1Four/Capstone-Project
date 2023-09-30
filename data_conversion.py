import os
import subprocess

# Specify the directory you want to change to
directory_path = "/path/to/your/directory"

# Specify the command you want to run in that directory
command = "ls -l"

# Change the working directory to the specified directory
try:
    os.chdir(directory_path)
    print(f"Changed directory to {directory_path}")
except FileNotFoundError:
    print(f"Directory '{directory_path}' not found")

# Run the command in the current directory
try:
    output = subprocess.check_output(command, shell=True, text=True)
    print("Command Output:")
    print(output)
except subprocess.CalledProcessError as e:
    print(f"Command '{command}' returned non-zero exit status {e.returncode}")
except FileNotFoundError:
    print(f"Command '{command}' not found")

# You can replace "/path/to/your/directory" with the actual directory path
# and "ls -l" with any command you want to run.
