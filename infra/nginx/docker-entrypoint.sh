#!/bin/sh
set -e

CERT_DIR="/etc/nginx/certs"
CERT_FILE="$CERT_DIR/dev.crt"
KEY_FILE="$CERT_DIR/dev.key"
OPENSSL_CONFIG="/tmp/dev-cert.cnf"

mkdir -p "$CERT_DIR"

if [ ! -f "$CERT_FILE" ] || [ ! -f "$KEY_FILE" ]; then
  cat > "$OPENSSL_CONFIG" <<'EOF'
[req]
default_bits = 2048
prompt = no
default_md = sha256
distinguished_name = dn
x509_extensions = v3_req

[dn]
CN = localhost

[v3_req]
subjectAltName = @alt_names

[alt_names]
DNS.1 = localhost
IP.1 = 127.0.0.1
EOF

  openssl req \
    -x509 \
    -nodes \
    -days 3650 \
    -newkey rsa:2048 \
    -keyout "$KEY_FILE" \
    -out "$CERT_FILE" \
    -config "$OPENSSL_CONFIG"
fi

exec nginx -g "daemon off;"
