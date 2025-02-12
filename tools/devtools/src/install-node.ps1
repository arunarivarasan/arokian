# Ensure NVM is installed
if (-not (Get-Command nvm -ErrorAction SilentlyContinue)) {
    Write-Output "NVM is not installed. Please install NVM first."
    exit 1
}

# Define the Node.js version to install
$NodeVersion = "18.19.1"  # Change this to the version you want

# Install Node.js using NVM
Write-Output "Installing Node.js version $NodeVersion..."
nvm install $NodeVersion

# Set the installed version as the default
Write-Output "Setting Node.js version $NodeVersion as the default..."
nvm use $NodeVersion

Write-Output "Node.js $NodeVersion installation completed successfully!"