# Mapping JSON to python
import json

json_string = '{"fruits":["apple","banana","mango"]}'
data = json.loads(json_string)

print(data["fruits"])