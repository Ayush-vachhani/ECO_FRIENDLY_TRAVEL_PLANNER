/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ghqapcwduwgld0t",
    "created": "2024-04-03 03:05:14.938Z",
    "updated": "2024-04-03 03:05:14.938Z",
    "name": "Tourist_Places",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hmhbcmje",
        "name": "City",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "jswfw23q",
        "name": "Tourist_spot",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ghqapcwduwgld0t");

  return dao.deleteCollection(collection);
})
