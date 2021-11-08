import pymongo
import pprint


client = pymongo.MongoClient("mongodb://user2690:thispassword@req4:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false")

 
db = client['data_table']
 
coll = db['table_coll1']
 
data = list(coll.find())
pprint.pprint(data)
