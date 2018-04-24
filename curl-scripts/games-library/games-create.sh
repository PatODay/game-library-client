#!/bin/bash
#sh curl-scripts/games-library/games-create.sh

curl "http://localhost:4741/games" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
      "title": "'"${TITLE}"'"
    }
  }'

echo
