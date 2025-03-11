UID=$(id -u)
GID=$(id -g)

docker run --rm \
  -u "${UID}":"${GID}" \
  -v "${PWD}":/local openapitools/openapi-generator-cli:v7.11.0 generate \
  -i https://raw.githubusercontent.com/uol-esis/TH1-OpenAPI/v1.0.1/openapi.yaml \
  -g javascript \
  -o /local/.
