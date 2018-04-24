#!/bin/bash
#sh curl-scripts/games-library/games-destroy.sh

curl --include --request DELETE "http://localhost:4741/games/${ID}" \
--header "Authorization: Token token=${TOKEN}"
