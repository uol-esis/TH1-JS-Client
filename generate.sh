UID=$(id -u)
GID=$(id -g)

docker run --rm \
  -u "${UID}":"${GID}" \
  -v "${PWD}":/local openapitools/openapi-generator-cli:v7.11.0 generate \
  -i https://raw.githubusercontent.com/uol-esis/TH1/6fac651d1334aa6bcd3621ff2de17cd1a03995ca/openapi.yaml \
  -g javascript \
  -o /local/.
