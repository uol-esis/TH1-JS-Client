UID=$(id -u)
GID=$(id -g)

docker run --rm \
  -u "${UID}":"${GID}" \
  -v "${PWD}":/local openapitools/openapi-generator-cli:v7.13.0 generate \
  -i https://raw.githubusercontent.com/uol-esis/TH1-OpenAPI/b4e4946469438e848c2a0baaa9afd46f34c877ea/openapi.yaml \
  -g javascript \
  -t /local/templates \
  -o /local
