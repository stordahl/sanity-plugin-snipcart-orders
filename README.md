# sanity-plugin-snipcart-orders

A dashboard widget for displaying recent orders from Snipcart

This plugin is a part of the Steel headless commerce sudo framework.

## Installation

Be sure to have dashboard installed in your studio by running...

```shell
sanity install @sanity/dashboard
```

Then install the widget...

```shell
sanity install snipcart-orders
```

## Configuration

The plugin can be configured by creating a file called `dashboardConfig.js` in the root of your studio. You'll then need to add the following object to the `parts` array in your projects `sanity.json`...

```json
{ 
  "implements": "part:@sanity/dashboard/config", 
  "path": "./dashboardConfig.js" 
}
```

You'll then need to add some boilerplate to `dashboardConfig.js` along with options for the plugin...

```javascript
export default {
  widgets: [
    {
      name: 'snipcart-orders',
      options: 
      {
        apiKey: string, // SNIPCART SECRET API KEY
        limit: number, //DEFAULTS TO FIVE
      }
    }
  ]
}
```

### Options

| Option | Type   | Description |
|--------|--------|-------------|
| apiKey | string | a secret api key from Snipcart. Check the [docs](https://docs.snipcart.com/v3/api-reference/authentication). |
| limit  | number | the number of orders to be returned |

## License

MIT © Jacob Størdahl
See LICENSE
