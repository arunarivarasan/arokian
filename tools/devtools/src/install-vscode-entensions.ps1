<#
.SYNOPSIS
Install vscode and recommended extensions.

.DESCRIPTION
This script will install vscode and recommended extensions referenced by the documentation of this repo.

.PARAMETER None
This script does not accept any parameters.
#>

$packageName = "Microsoft.VisualStudioCode"

$packageListing = winget list $packageName | Select-String $packageName

if ([string]::IsNullOrEmpty($packageListing)) {
    winget install $packageName
}

$extensionsJson = $(Get-Content ../../../.vscode/extensions.json) -replace '(?m)\s*//.*?$' -replace '(?ms)/\*.*?\*/' | ConvertFrom-Json
$extensionsJson.recommendations | ForEach-Object {
    code --install-extension $_
}
