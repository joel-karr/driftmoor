targetScope = 'subscription'

@description('Environment name (dev, prod)')
@allowed(['dev', 'prod'])
param environment string

@description('Location for all resources')
param location string

@description('Base name for the project')
param projectName string = 'driftmoor'

@allowed(['Free', 'Standard'])
@description('SKU for the Static Web App')
param staticWebAppSku string = 'Free'

var resourceGroupName = 'rg-${projectName}-${environment}'

var tags = {
  project: projectName
  environment: environment
}

resource rg 'Microsoft.Resources/resourceGroups@2024-03-01' = {
  name: resourceGroupName
  location: location
  tags: tags
}

module staticWebApp 'modules/static-web-app.bicep' = {
  name: 'deploy-static-web-app'
  scope: rg
  params: {
    name: '${projectName}-${environment}'
    location: location
    skuName: staticWebAppSku
    tags: tags
  }
}

@description('The resource group name')
output resourceGroupName string = rg.name

@description('The default hostname of the Static Web App')
output staticWebAppHostname string = staticWebApp.outputs.defaultHostname

@description('The name of the Static Web App')
output staticWebAppName string = staticWebApp.outputs.name
