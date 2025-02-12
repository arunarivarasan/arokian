<#
.SYNOPSIS
Install git and git bash.

.DESCRIPTION
This script will install git and git bash (for Windows).

.PARAMETER None
This script does not accept any parameters.
#>

$packageName = "Git.Git"

$packageListing = winget list $packageName | Select-String $packageName

if (![string]::IsNullOrEmpty($packageListing)) {
    exit 0
}

winget install $packageName
