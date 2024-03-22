/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "sb3l9i6w6ivqagr",
    "created": "2024-03-22 09:29:03.700Z",
    "updated": "2024-03-22 09:29:03.700Z",
    "name": "History",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0givaluy",
        "name": "Data",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
        }
      },
      {
        "system": false,
        "id": "3utjdxqv",
        "name": "user",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
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
  const collection = dao.findCollectionByNameOrId("sb3l9i6w6ivqagr");

  return dao.deleteCollection(collection);
})
