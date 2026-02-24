@description('Name of the Static Web App')
param name string

@description('Location for the Static Web App')
param location string

@allowed(['Free', 'Standard'])
@description('SKU for the Static Web App')
param skuName string = 'Free'

@description('Tags to apply to the resource')
param tags object = {}

resource staticWebApp 'Microsoft.Web/staticSites@2023-12-01' = {
  name: name
  location: location
  tags: tags
  sku: {
    name: skuName
    tier: skuName
  }
  properties: {
    stagingEnvironmentPolicy: 'Enabled'
    allowConfigFileUpdates: true
    buildProperties: {
      appLocation: '/'
      outputLocation: 'dist'
    }
  }
}

@description('The default hostname of the Static Web App')
output defaultHostname string = staticWebApp.properties.defaultHostname

@description('The resource ID of the Static Web App')
output id string = staticWebApp.id

@description('The name of the Static Web App')
output name string = staticWebApp.name
