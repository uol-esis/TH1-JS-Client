UID=$(id -u)
GID=$(id -g)

docker run --rm \
  -u "${UID}":"${GID}" \
  -v "${PWD}":/local openapitools/openapi-generator-cli:v7.12.0 generate \
  -i https://raw.githubusercontent.com/uol-esis/TH1-OpenAPI/v1.9.0/openapi.yaml \
  -g javascript \
  -o /local/.
