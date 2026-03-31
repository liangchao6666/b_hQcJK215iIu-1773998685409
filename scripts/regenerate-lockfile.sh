#!/bin/bash

cd /vercel/share/v0-project

# Remove the lockfile
rm -f pnpm-lock.yaml

# Regenerate it
pnpm install --frozen-lockfile=false

echo "Lockfile regenerated successfully"
