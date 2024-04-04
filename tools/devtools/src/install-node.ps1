$nvmPackageName = "CoreyButler.NVMforWindows"
$nvmPackageListing = winget list | Select-String $nvmPackageName

if ([string]::IsNullOrEmpty($nvmPackageListing)) {
    winget install $nvmPackageName
}

$packageJson = $(Get-Content ../../../package.json) | ConvertFrom-Json
$versionDesired = $packageJson.engines.node
$response = nvm use $versionDesired;

if ($response -match 'is not installed') {
    if ($response -match '64-bit') {
        nvm install $versionDesired x64
    }
    else {
        nvm install $versionDesired x86
    }
    nvm use $versionDesired;
}
