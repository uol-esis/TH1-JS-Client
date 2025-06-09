UID=$(id -u)
GID=$(id -g)

docker run --rm \
  -u "${UID}":"${GID}" \
  -v "${PWD}":/local openapitools/openapi-generator-cli:v7.13.0 generate \
  -i https://raw.githubusercontent.com/uol-esis/TH1-OpenAPI/b3011704d59081af285bb6212edcf14d9206b2ce/openapi.yaml \
  -g javascript \
  -t /local/templates \
  -o /local
