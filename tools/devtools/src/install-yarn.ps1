$minimumYarnVersion = [System.Version]"4.1.1"
$currentYarnVersion = $(yarn --version)
if ($currentYarnVersion -lt $minimumYarnVersion) {
    Write-Host ("Installing Yarn at $minimumYarnVersion")
    corepack enable
    yarn set version berry
    yarn set version 4.1.1
}

    # Enable yarn auth to registry.
    npm install -g vsts-npm-auth --registry https://registry.npmjs.com --always-auth false
    npx vsts-npm-auth -Config ../../../.npmrc
