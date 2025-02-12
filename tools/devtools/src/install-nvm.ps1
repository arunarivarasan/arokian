# Define variables
$NvmInstallerUrl = "https://github.com/coreybutler/nvm-windows/releases/latest/download/nvm-setup.exe"
$InstallerPath = "$env:TEMP\nvm-setup.exe"

# Download NVM Installer
Write-Output "Downloading NVM for Windows..."
Invoke-WebRequest -Uri $NvmInstallerUrl -OutFile $InstallerPath

# Run the Installer
Write-Output "Running the NVM Installer..."
Start-Process -FilePath $InstallerPath -Wait -NoNewWindow

# Cleanup
Write-Output "Cleaning up..."
Remove-Item -Path $InstallerPath -Force

Write-Output "NVM installation completed. Please restart your terminal."
