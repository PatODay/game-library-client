#!/bin/bash
#sh curl-scripts/games-library/games-index.sh

curl --include --request GET 'http://localhost:4741/games' \
--include \
  --request GET \
  --header "Authorization: Token token=$TOKEN"
