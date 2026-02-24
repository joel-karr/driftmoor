targetScope = 'resourceGroup'

@description('Environment name (dev, prod)')
@allowed(['dev', 'prod'])
param environment string

@description('Location for all resources')
param location string = resourceGroup().location

@description('Base name for the project')
param projectName string = 'driftmoor'

@allowed(['Free', 'Standard'])
@description('SKU for the Static Web App')
param staticWebAppSku string = 'Free'

var tags = {
  project: projectName
  environment: environment
}

var staticWebAppName = '${projectName}-${environment}'

module staticWebApp 'modules/static-web-app.bicep' = {
  name: 'deploy-static-web-app'
  params: {
    name: staticWebAppName
    location: location
    skuName: staticWebAppSku
    tags: tags
  }
}

@description('The default hostname of the Static Web App')
output staticWebAppHostname string = staticWebApp.outputs.defaultHostname

@description('The name of the Static Web App')
output staticWebAppName string = staticWebApp.outputs.name
