/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sb3l9i6w6ivqagr")

  collection.listRule = "user.id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sb3l9i6w6ivqagr")

  collection.listRule = ""

  return dao.saveCollection(collection)
})
