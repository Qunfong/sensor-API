// 'use strict';

// const loopback = require('loopback');
// const promisify = require('util').promisify;
// const fs = require('fs');
// const writeFile = promisify(fs.writeFile);
// const readFile = promisify(fs.readFile);
// const mkdirp = promisify(require('mkdirp'));

// const DATASOURCE_NAME = 'db';
// const dataSourceConfig = require('./../datasources.json');
// const db = new loopback.DataSource(dataSourceConfig[DATASOURCE_NAME]);

// discover().then(
//     success => process.exit(),
//     error => { console.error('UNHANDLED ERROR:\n', error); process.exit(1); },
//   );

//   async function discover() {
//     // It's important to pass the same "options" object to all calls
//     // of dataSource.discoverSchemas(), it allows the method to cache
//     // discovered related models
//     const options = {relations: true};
  
//     // Discover models and relations
//     const inventorySchemas = await db.discoverSchemas('logging_temperature_humidity', options);
  
//     // Create model definition files
//     await mkdirp('common/models');
//     await writeFile(
//       'common/models/logging_temperature_humidity.json',
//       JSON.stringify(inventorySchemas['RelayApp.logging_temperature_humidity'], null, 2)
//     );
   
  
//     // Expose models via REST API
//     const configJson = await readFile('server/model-config.json', 'utf-8');
//     console.log('MODEL CONFIG', configJson);
//     const config = JSON.parse(configJson);
//     config.Inventory = {dataSource: DATASOURCE_NAME, public: true};
//     config.Product = {dataSource: DATASOURCE_NAME, public: true};
//     await writeFile(
//       'server/model-config.json',
//       JSON.stringify(config, null, 2)
//     );
//   }
